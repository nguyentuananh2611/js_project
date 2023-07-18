//Ren bảng date
let date = new Date(); // Lấy ngày giờ hiện tại
let year = date.getFullYear(); // Lấy năm hiện tại
let month = date.getMonth(); // Lấy tháng hiện tại (0 - 11)

const day = document.querySelector(".calendar-dates");
console.log(day);
const currdate = document.querySelector(".vncal-header-title h4");
const titleLichAm = document.querySelector(".vncal-days .titleAm");
const monthAmBox = document.querySelectorAll(".chitiet p b");
const prenexIcons = document.querySelectorAll(".vncal-header span");

const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
];

const manipulate = (month) => {
    // Lấy ngày đầu tiên của tháng
    let dayone = new Date(year, month, 1).getDay();

    // Lấy ngày cuối cùng của tháng
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Lấy ngày của ngày cuối cùng của tháng
    let dayend = new Date(year, month, lastdate).getDay();

    // Lấy ngày cuối cùng của tháng trước
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = ""; // Biến lưu trữ HTML
    let trCount = 0; // Số lượng thẻ tr đã được tạo

    // Vòng lặp để thêm ngày cuối cùng của tháng trước
    for (let i = dayone; i > 0; i--) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        lit += `
      <td class="skip"></td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Vòng lặp để thêm các ngày của tháng hiện tại
    for (let i = 1; i <= lastdate; i++) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        // Kiểm tra nếu ngày hiện tại là hôm nay
        let isToday =
            i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
                ? "active"
                : "";

        // Chuyển đổi ngày dương thành ngày âm
        // let lunarDate = convertToLunarDate(i, month + 1, year);
        convertSolar_Lunar_Today(i, month + 1, year, timeZone);
        getLunarMonth11(year, timeZone);
        var contentBoxAm = convertSolar_Lunar(i, month + 1, year, timeZone);
        var ngayCanChi = DayCan(INT(i),INT(month + 1),INT(year))+' '+DayChi(INT(i),INT(month + 1),INT(year))

        lit += `
      <td class="${isToday ? "current" : ""}">
        <a href="#" title="Xem lịch âm ngày ${i} tháng ${month + 1} năm ${year}">
          <div class="dao ${isToday ? "tot" : ""}">●</div>
          <div class="duong ${isToday ? "current" : ""}">${i}</div>
          <div class="am">${contentBoxAm[0] === 1 ? `${contentBoxAm[0]}/${contentBoxAm[1]}` : contentBoxAm[0]} ${ngayCanChi}</div>
        </a>
      </td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Vòng lặp để thêm các ngày đầu tiên của tháng sau
    for (let i = dayend; i < 6; i++) {
        if (trCount === 0) {
            lit += "<tr>"; // Bắt đầu thẻ tr mới
        }

        lit += `
      <td class="skip"></td>
    `;

        trCount++;

        if (trCount === 7) {
            lit += "</tr>"; // Kết thúc thẻ tr
            trCount = 0;
        }
    }

    // Kết thúc thẻ tr nếu cần thiết
    if (trCount > 0) {
        lit += "</tr>";
    }

    // Cập nhật văn bản của phần tử ngày hiện tại với tháng và năm hiện tại đã được định dạng
    currdate.innerText = `Lịch âm ${months[month]} năm ${year}`;

    //Tile lịch âm
    titleLichAm.innerHTML = `Tháng ${contentBoxAm[1]} Năm ${contentBoxAm[2]} (Quý Mão)`

    //Tháng can chi Âm
    monthAmBox[1].innerHTML = contentBoxAm[3]

    // Cập nhật HTML của phần tử ngày với lịch đã tạo
    day.innerHTML = lit;

};

// Hàm chuyển đổi ngày dương thành ngày âm
const convertToLunarDate = (day, month, year) => {
    console.log(day, month, year)
};

//CHUYỂN ĐỔI
let timeZone = 7.0;
const PI = 3.14159265;
INT=(x)=>{
    return parseInt(x);
}

// Đổi ngày dd/mm/yyyy ra số ngày Julius jd
const getJudius = (dd,mm,yy)=>{
    let a, y, m, jd;
    a = INT((14 - mm) / 12);
    y = yy+4800-a;
    m = mm+12*a-3;
    jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - INT(y/100) + INT(y/400) - 32045;
    if (jd < 2299161) {
        jd = dd + INT((153*m+2)/5) + 365*y + INT(y/4) - 32083;
    }
    return jd;
}

// Tính ngày sóc
const getNewMoonDay=(k, timeZone)=>{
    var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
    T = k/1236.85; // Time in Julian centuries from 1900 January 0.5
    T2 = T * T;
    T3 = T2 * T;
    dr = PI/180;
    Jd1 = 2415020.75933 + 29.53058868*k + 0.0001178*T2 - 0.000000155*T3;
    Jd1 = Jd1 + 0.00033*Math.sin((166.56 + 132.87*T - 0.009173*T2)*dr); // Mean new moon
    M = 359.2242 + 29.10535608*k - 0.0000333*T2 - 0.00000347*T3; // Sun's mean anomaly
    Mpr = 306.0253 + 385.81691806*k + 0.0107306*T2 + 0.00001236*T3; // Moon's mean anomaly
    F = 21.2964 + 390.67050646*k - 0.0016528*T2 - 0.00000239*T3; // Moon's argument of latitude
    C1=(0.1734 - 0.000393*T)*Math.sin(M*dr) + 0.0021*Math.sin(2*dr*M);
    C1 = C1 - 0.4068*Math.sin(Mpr*dr) + 0.0161*Math.sin(dr*2*Mpr);
    C1 = C1 - 0.0004*Math.sin(dr*3*Mpr);
    C1 = C1 + 0.0104*Math.sin(dr*2*F) - 0.0051*Math.sin(dr*(M+Mpr));
    C1 = C1 - 0.0074*Math.sin(dr*(M-Mpr)) + 0.0004*Math.sin(dr*(2*F+M));
    C1 = C1 - 0.0004*Math.sin(dr*(2*F-M)) - 0.0006*Math.sin(dr*(2*F+Mpr));
    C1 = C1 + 0.0010*Math.sin(dr*(2*F-Mpr)) + 0.0005*Math.sin(dr*(2*Mpr+M));
    if (T < -11) {
        deltat= 0.001 + 0.000839*T + 0.0002261*T2 - 0.00000845*T3 - 0.000000081*T*T3;
    } else {
        deltat= -0.000278 + 0.000265*T + 0.000262*T2;
    };
    JdNew = Jd1 + C1 - deltat;
    return INT(JdNew + 0.5 + timeZone/24)
}

// Tính tọa độ mặt trời
const getSunLongitude=(jdn, timeZone)=>{
    let T, T2, dr, M, L0, DL, L;
    T = (jdn - 2451545.5 - timeZone/24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
    T2 = T*T;
    dr = PI/180; // degree to radian
    M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
    L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
    DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
    DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
    L = L0 + DL; // true longitude, degree
    L = L*dr;
    L = L - PI*2*(INT(L/(PI*2))); // Normalize to (0, 2*PI)
    return INT(L / PI * 6)
}

// Tìm ngày bắt đầu tháng 11 âm lịch
getLunarMonth11=(yy, timeZone)=>{
    let k, off, nm, sunLong;
    off = getJudius(31, 12, yy) - 2415021;
    k = INT(off / 29.530588853);
    nm = getNewMoonDay(k, timeZone);
    sunLong = getSunLongitude(nm, timeZone); // sun longitude at local midnight
    if (sunLong >= 9) {
        nm = getNewMoonDay(k-1, timeZone);
    }
    return nm;
}

// Xác định tháng nhuận
getLeapMonthOffset=(a11, timeZone)=>{
    let k, last, arc, i;
    k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    last = 0;
    i = 1; // We start with the month following lunar month 11
    arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
    do {
        last = arc;
        i++;
        arc = getSunLongitude(getNewMoonDay(k+i, timeZone), timeZone);
    } while (arc != last && i < 14);
    return i-1;
}

// Đổi ngày dương ra ngày âm
let Lunar_today, Lunar_current_month, Lunar_current_year;


// Lịch âm hôm nay
convertSolar_Lunar_Today=(dd, mm, yy, timeZone)=>{
    let k, dayNumber, monthStart, lunarDay, lunarMonth, lunarYear, a11, b11, lunarLeap;
    dayNumber = getJudius(dd, mm, yy);
    k = INT((dayNumber - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k+1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    a11 = getLunarMonth11(yy, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = getLunarMonth11(yy-1, timeZone);
    } else {
        lunarYear = yy+1;
        b11 = getLunarMonth11(yy+1, timeZone);
    }
    lunarDay = dayNumber-monthStart+1;
    diff = INT((monthStart - a11)/29);
    lunarLeap = 0;
    lunarMonth = diff+11;
    if (b11 - a11 > 365) {
        leapMonthDiff = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }
    Lunar_today = lunarDay;
    Lunar_current_month = lunarMonth;
    Lunar_current_year = lunarYear;
}
convertSolar_Lunar_Today(timeZone);

convertSolar_Lunar=(dd, mm, yy, timeZone)=>{

    let k, dayNumber, monthStart, lunarDay, lunarMonth, lunarYear, a11, b11, lunarLeap;
    dayNumber = getJudius(dd, mm, yy);
    k = INT((dayNumber - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k+1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = getNewMoonDay(k, timeZone);
    }
    a11 = getLunarMonth11(yy, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = getLunarMonth11(yy-1, timeZone);
    } else {
        lunarYear = yy+1;
        b11 = getLunarMonth11(yy+1, timeZone);
    }
    lunarDay = dayNumber-monthStart+1;
    diff = INT((monthStart - a11)/29);
    lunarLeap = 0;
    lunarMonth = diff+11;
    if (b11 - a11 > 365) {
        leapMonthDiff = getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }

    let monthCanChi = MonthCan(lunarMonth,lunarYear)+' '+MonthChi(lunarMonth);

    return [lunarDay, lunarMonth, lunarYear, monthCanChi]
}

// Tính ngày thứ và Can-Chi cho ngày và tháng âm lịch
YearCan=(yy)=>{
    let can = '';
    switch(yy%10){
        case 0:
            can = "Canh";
            break;
        case 1:
            can = "Tân";
            break;
        case 2:
            can = "Nhâm";
            break;
        case 3:
            can = "Quý";
            break;
        case 4:
            can = "Giáp";
            break;
        case 5:
            can = "Ất";
            break;
        case 6:
            can = "Bính";
            break;
        case 7:
            can = "Đinh";
            break;
        case 8:
            can = "Mậu";
            break;
        case 9:
            can = "Kỷ";
            break;
    }
    return can;
}

YearChi=(yy)=>{
    let chi = '';
    switch(yy%12){
        case 0:
            chi="Thân";
            break;
        case 1:
            chi="Dậu";
            break;
        case 2:
            chi="Tuất";
            break;
        case 3:
            chi="Hợi";
            break;
        case 4:
            chi="Tý";
            break;
        case 5:
            chi="Sửu";
            break;
        case 6:
            chi="Dần";
            break;
        case 7:
            chi="Mão";
            break;
        case 8:
            chi="Thìn";
            break;
        case 9:
            chi="Tỵ";
            break;
        case 10:
            chi="Ngọ";
            break;
        case 11:
            chi="Mùi";
            break;
    }
    return chi;
}

MonthCan=(mm, yy)=>{
    let can = '';
    switch((yy*12+mm+3)%10){
        case 0:
            can = "Gíáp";
            break;
        case 1:
            can = "Ất";
            break;
        case 2:
            can = "Bính";
            break;
        case 3:
            can = "Đinh";
            break;
        case 4:
            can = "Mậu";
            break;
        case 5:
            can = "Kỷ";
            break;
        case 6:
            can = "Canh";
            break;
        case 7:
            can = "Tân";
            break;
        case 8:
            can = "Nhâm";
            break;
        case 9:
            can = "Quý";
            break;
    }
    return can;
}

MonthChi=(mm)=>{
    let chi = '';
    switch(mm){
        case 1:
            chi="Dần";
            break;
        case 2:
            chi="Mão";
            break;
        case 3:
            chi="Thìn";
            break;
        case 4:
            chi="Tỵ";
            break;
        case 5:
            chi="Ngọ";
            break;
        case 6:
            chi="Mùi";
            break;
        case 7:
            chi="Thân";
            break;
        case 8:
            chi="Dậu";
            break;
        case 9:
            chi="Tuất";
            break;
        case 10:
            chi="Hợi";
            break;
        case 11:
            chi="Tý";
            break;
        case 12:
            chi="Sửu";
            break;
    }
    return chi;
}

// đầu vào là ngày tháng năm dương lịch
DayCan=(dd,mm,yy)=>{
    let N= getJudius(dd,mm,yy);
    let can='';
    switch((N+9)%10){
        case 0:
            can = "Giáp";
            break;
        case 1:
            can = "Ất";
            break;
        case 2:
            can = "Bính";
            break;
        case 3:
            can = "Đinh";
            break;
        case 4:
            can = "Mậu";
            break;
        case 5:
            can = "Kỷ";
            break;
        case 6:
            can = "Canh";
            break;
        case 7:
            can = "Tân";
            break;
        case 8:
            can = "Nhâm";
            break;
        case 9:
            can = "Quý";
            break;
    }
    return can;
}

DayChi=(dd,mm,yy)=>{
    let N= getJudius(dd,mm,yy);
    let chi='';
    switch((N+1)%12){
        case 0:
            chi='Tý';
        case 1:
            chi="Sửu";
            break;
        case 2:
            chi="Dần";
            break;
        case 3:
            chi="Mão";
            break;
        case 4:
            chi="Thìn";
            break;
        case 5:
            chi="Tỵ";
            break;
        case 6:
            chi="Ngọ";
            break;
        case 7:
            chi="Mùi";
            break;
        case 8:
            chi="Thân";
            break;
        case 9:
            chi="Dậu";
            break;
        case 10:
            chi="Tuất";
            break;
        case 11:
            chi="Hợi";
            break;
    }
    return chi;
}

manipulate(month);

// gán sự kiện nút next, prev
prenexIcons.forEach(icon=> {

    // click icon
    icon.addEventListener("click", ()=> {
        // Kiểm trâ là "calendar-prev" hay "calendar-next"
        month=icon.id==="calendar-prev" ? month - 1 : month + 1;

        // Kiểm tra xem tháng có nằm ngoài phạm vi không
        if (month < 0 || month > 11) {
            // Đặt ngày là ngày đầu tiên của tháng với năm mới
            date=new Date(year, month, new Date().getDate());
            // Đặt năm thành năm mới
            year=date.getFullYear();
            // Đặt tháng thành tháng mới
            month=date.getMonth();
        }

        else {
            // Đặt date bằng ngày hiện tại
            date=new Date();
        }

        manipulate(month);

        // Gắn lại sự kiện click vào các phần tử <td>
        addClickEventToTDs();
    });
});


// Lấy tất cả các thẻ td trong bảng
let tdList = document.querySelectorAll('.vncal td');

// Lặp qua từng thẻ td và thêm sự kiện click
tdList.forEach(function(td) {
    td.addEventListener('click', function() {
        // Lấy dữ liệu từ các phần tử con bên trong thẻ td
        let duong = this.querySelector('.duong').textContent;
        let amFull = this.querySelector('.am').textContent;
        let am = amFull.split(' ')[0].trim();
        let chiTiet = amFull.substr(am.length).trim();
        let titleFull = this.querySelector('td a').title;
        let titleMonth = titleFull.split(' ')[6].trim();
        let titleYear = titleFull.split(' ')[8].trim();

        // Tạo đối tượng chứa dữ liệu
        let data = {
            ngayDuong: duong,
            ngayAm: am,
            ngayChiTiet: chiTiet,
            titleMonth: titleMonth,
            titleYear: titleYear
        };

        // In ra đối tượng chứa dữ liệu
        console.log(data);
        dateDetail(data);
    });
});

// Lấy phần tử td có class là "current" khi trang được tải
let currentTd = document.querySelector('.vncal td.current');

// Kiểm tra xem có phần tử td "current" hay không
if (currentTd) {
    // Lấy dữ liệu từ phần tử td "current" ban đầu
    let duong = currentTd.querySelector('.duong').textContent;
    let amFull = currentTd.querySelector('.am').textContent;
    let am = amFull.split(' ')[0].trim();
    let chiTiet = amFull.substr(am.length).trim();
    let titleFull = currentTd.querySelector('td a').title;
    let titleMonth = titleFull.split(' ')[6].trim();
    let titleYear = titleFull.split(' ')[8].trim();

    // Tạo đối tượng chứa dữ liệu
    let data = {
        ngayDuong: duong,
        ngayAm: am,
        ngayChiTiet: chiTiet,
        titleMonth: titleMonth,
        titleYear: titleYear
    };

    // In ra đối tượng chứa dữ liệu
    console.log(data);
    dateDetail(data);
} else {
    // Nếu không có phần tử td "current", mặc định lấy dữ liệu ngày đầu tiên
    let firstTd = document.querySelector('.vncal td');
    if (firstTd) {
        let duong = firstTd.querySelector('.duong').textContent;
        let amFull = firstTd.querySelector('.am').textContent;
        let am = amFull.split(' ')[0].trim();
        let chiTiet = amFull.substr(am.length).trim();
        let titleFull = firstTd.querySelector('td a').title;
        let titleMonth = titleFull.split(' ')[6].trim();
        let titleYear = titleFull.split(' ')[8].trim();

        let data = {
            ngayDuong: duong,
            ngayAm: am,
            ngayChiTiet: chiTiet,
            titleMonth: titleMonth,
            titleYear: titleYear
        };

        console.log(data);
        dateDetail(data);
    }
}

function dateDetail(date){
    let dateHeader = document.querySelector(".vncal-header-titles h2")
    dateHeader.innerHTML = `ÂM LỊCH NGÀY ${date.ngayDuong} THÁNG ${date.titleMonth} ${date.titleYear}`

    let titleDuong = document.querySelector(".titleDuong")
    titleDuong.innerHTML = `Tháng ${date.titleMonth} Năm ${date.titleYear}`

    let ngayDuong = document.querySelector(".vncal-days .duong")
    ngayDuong.innerHTML = date.ngayDuong

    let ngayAm = document.querySelector(".vncal-days .am")
    ngayAm.innerHTML = date.ngayAm

    let ngayChiTiet = document.querySelectorAll(".chitiet p")
    let dateDetail = ngayChiTiet[0].querySelector("b")
    dateDetail.innerHTML = date.ngayChiTiet

    let ngayDuongLich = document.querySelector("#solar_today")
    ngayDuongLich.innerHTML = `${date.ngayDuong} - ${date.titleMonth} - ${date.titleYear}`

    let ngayAmLichFull = document.querySelector(".vncal-days .titleAm").textContent
    let thangAmLich = ngayAmLichFull.split(' ')[1].trim()
    let namAmLich = ngayAmLichFull.split(' ')[3].trim()
    let ngayAmLich = document.querySelector("#lunar_today")
    ngayAmLich.innerHTML = `${date.ngayAm} / ${thangAmLich} / ${namAmLich}`


    let ngayThangAmCanChi = document.querySelectorAll(".chitiet p b")
    let ngayAmCanChi = document.querySelector("#zodiac_day")
    ngayAmCanChi.innerHTML = ngayThangAmCanChi[0].textContent

    let thangAmCanChi = document.querySelector("#zodiac_month")
    thangAmCanChi.innerHTML = ngayThangAmCanChi[1].textContent
}

//Hàm gán lại click cho td sau khi click thay đổi lịch
function addClickEventToTDs() {
    // Lấy tất cả các thẻ td trong bảng
    let tdList = document.querySelectorAll('.vncal td');

// Lặp qua từng thẻ td và thêm sự kiện click
    tdList.forEach(function(td) {
        td.addEventListener('click', function() {
            // Lấy dữ liệu từ các phần tử con bên trong thẻ td
            let duong = this.querySelector('.duong').textContent;
            let amFull = this.querySelector('.am').textContent;
            let am = amFull.split(' ')[0].trim();
            let chiTiet = amFull.substr(am.length).trim();
            let titleFull = this.querySelector('td a').title;
            let titleMonth = titleFull.split(' ')[6].trim();
            let titleYear = titleFull.split(' ')[8].trim();

            // Tạo đối tượng chứa dữ liệu
            let data = {
                ngayDuong: duong,
                ngayAm: am,
                ngayChiTiet: chiTiet,
                titleMonth: titleMonth,
                titleYear: titleYear
            };

            // In ra đối tượng chứa dữ liệu
            console.log(data);
            dateDetail(data);
        });
    });
}

function renderTable(e) {
   month = e.id - 1;
   manipulate(month);
}


