//////////////////// Ngày dương lịch
class date_ngay extends Date {
    constructor(){
        super()
    }
    getDayVN = () => {
        let ngay = '';
        ngay = super.getDate();    
        return ngay;    
    }
}

class date_thang extends Date {
    constructor(){
        super()
        this.thang = super.getMonth()
    }
    getMonthVN = () => {
        const listThang=[1,2,3,4,5,6,7,8,9,10,11,12];
        let thang = this.getMonth();
        let m = listThang[thang];
        return m;
    }
}

class date_nam extends Date {
    constructor(){
        super()
    }
    getYearVN = () => {
        let nam = '';
        nam = super.getFullYear();
        return nam;    
        
    }
}
const Solar_Day = new date_ngay;
const Solar_Month = new date_thang;
const Solar_Year = new date_nam;

// Tính ngày thứ và Can-Chi cho ngày và tháng âm lịch
YearCan=(yy)=>{
    let can = '';
    switch(yy%10){
        case 0:
            can = "CANH";
            break;
        case 1:
            can = "TÂN";
            break;
        case 2:
            can = "NHÂM";
            break;
        case 3:
            can = "QUÝ";
            break;
        case 4:
            can = "GIÁP";
            break;
        case 5:
            can = "ẤT";
            break;
        case 6:
            can = "BÍNH";
            break;
        case 7:
            can = "ĐINH";
            break;
        case 8:
            can = "MẬU";
            break;
        case 9:
            can = "KỶ";
            break;        
    }
    return can;
}

YearChi=(yy)=>{
    let chi = '';
    switch(yy%12){
        case 0:
            chi="THÂN";
            break;
        case 1:
            chi="DẬU";
            break;
        case 2:
            chi="TUẤT";
            break;
        case 3:
            chi="HỢI";
            break;
        case 4:
            chi="TÝ";
            break;
        case 5:
            chi="SỬU";
            break;
        case 6:
            chi="DẦN";
            break;
        case 7:
            chi="MÃO";
            break;
        case 8:
            chi="THÌN";
            break;
        case 9:
            chi="TỴ";
            break;
        case 10:
            chi="NGỌ";
            break;
        case 11:
            chi="MÙI";
            break;
    }
    return chi;
}

MonthCan=(mm, yy)=>{
    let can = '';
    switch((yy*12+mm+3)%10){
        case 0:
            can = "GIÁP";
            break;
        case 1:
            can = "ẤT";
            break;
        case 2:
            can = "BÍNH";
            break;
        case 3:
            can = "ĐINH";
            break;
        case 4:
            can = "MẬU";
            break;
        case 5:
            can = "KỶ";
            break;
        case 6:
            can = "CANH";
            break;
        case 7:
            can = "TÂN";
            break;
        case 8:
            can = "NHÂM";
            break;
        case 9:
            can = "QUÝ";
            break;   
    }
    return can;
}

MonthChi=(mm)=>{
    let chi = '';
    switch(mm){
        case 1:
            chi="DẦN";
            break;
        case 2:
            chi="MÃO";
            break;
        case 3:
            chi="THÌN";
            break;
        case 4:
            chi="TỴ";
            break;
        case 5:
            chi="NGỌ";
            break;
        case 6:
            chi="MÙI";
            break;  
        case 7:
            chi="THÂN";
            break;
        case 8:
            chi="DẬU";
            break;
        case 9:
            chi="TUẤT";
            break;
        case 10:
            chi="HỢI";
            break;
        case 11:
            chi="TÝ";
            break;
        case 12:
            chi="SỬU";
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
            can = "GIÁP";
            break;
        case 1:
            can = "ẤT";
            break;
        case 2:
            can = "BÍNH";
            break;
        case 3:
            can = "ĐINH";
            break;
        case 4:
            can = "MẬU";
            break;
        case 5:
            can = "KỶ";
            break;
        case 6:
            can = "CANH";
            break;
        case 7:
            can = "TÂN";
            break;
        case 8:
            can = "NHÂM";
            break;
        case 9:
            can = "QUÝ";
            break;
    }
    return can;
}

DayChi=(dd,mm,yy)=>{
    let N= getJudius(dd,mm,yy);
    let chi='';
    switch((N+1)%12){
        case 0:
            chi='TÝ';
        case 1:
            chi="SỬU";
            break;
        case 2:
            chi="DẦN";
            break;
        case 3:
            chi="MÃO";
            break;
        case 4:
            chi="THÌN";
            break;
        case 5:
            chi="TỴ";
            break;
        case 6:
            chi="NGỌ";
            break;  
        case 7:
            chi="MÙI";
            break;
        case 8:
            chi="THÂN";
            break;
        case 9:
            chi="DẬU";
            break;
        case 10:
            chi="TUẤT";
            break;
        case 11:
            chi="HỢI";
            break;
    }
    return chi;
}

/////////////////////////////////////////////////////////////////////////////////////////// Ngày âm lịch
let timeZone = 7.0;
const PI = 3.14159265;
INT=(x)=>{
    return parseInt(x);
};

// Đổi ngày dd/mm/yyyy ra số ngày Julius jd
getJudius=(dd,mm,yy)=>{
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
getNewMoonDay=(k, timeZone)=>{
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
getSunLongitude=(jdn, timeZone)=>{
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


// // Lịch âm hôm nay
convertSolar_Lunar_Today=(timeZone)=>{
    let k, dayNumber, monthStart, lunarDay, lunarMonth, lunarYear, a11, b11, lunarLeap;
    let dd = Solar_Day.getDayVN();
    let mm = Solar_Month.getMonthVN();
    let yy = Solar_Year.getYearVN();
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


document.getElementById('solar_switch').innerHTML=Solar_Day.getDayVN()+'-'+Solar_Month.getMonthVN()+'-'+Solar_Year.getYearVN();
document.getElementById('lunar_switch').innerHTML=Lunar_today+'-'+Lunar_current_month+'-'+Lunar_current_year;
document.getElementById('switch_table_first_row').innerHTML='ÂM LỊCH & DƯƠNG LỊCH NGÀY '+Solar_Day.getDayVN();
document.getElementById('switch_table_third_left_row').innerHTML='Tháng '+Solar_Month.getMonthVN()+' năm '+Solar_Year.getYearVN();
document.getElementById('switch_table_fourth_left_row').innerHTML=Solar_Day.getDayVN();
document.getElementById('switch_table_third_right_row').innerHTML='Tháng '+Lunar_current_month+' năm '+Lunar_current_year+' ('+YearCan(Solar_Year.getYearVN())+' '+YearChi(Solar_Year.getYearVN())+')';
document.getElementById('switch_table_fourth_right_row').innerHTML=Lunar_today;
document.getElementById('switch_canchi_month').innerHTML=' '+MonthCan(Lunar_current_month, Lunar_current_year)+' '+MonthChi(Lunar_current_month);
document.getElementById('switch_canchi_day').innerHTML=' '+DayCan(Solar_Day.getDayVN(), Solar_Month.getMonthVN(), Solar_Year.getYearVN())+' '+DayChi(Solar_Day.getDayVN(), Solar_Month.getMonthVN(), Solar_Year.getYearVN());



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
    
    document.getElementById('lunar_switch').innerHTML=lunarDay+'-'+lunarMonth+'-'+lunarYear;
    document.getElementById('switch_table_third_right_row').innerHTML='Tháng '+lunarMonth+' Năm '+lunarYear+' ('+YearCan(lunarYear)+' '+YearChi(lunarYear)+')';
    document.getElementById('switch_table_fourth_right_row').innerHTML=lunarDay;
    document.getElementById('switch_canchi_month').innerHTML=MonthCan(lunarMonth,lunarYear)+' '+MonthChi(lunarMonth);
}

// Thuật toán đổi lịch âm tương ứng với lịch dương nhập vào
// yyyy-mm-dd
let inp_day, inp_month, inp_year; 
dateSwitch=()=>{
    let d = document.querySelector('.switch_lunar_solar_display');
    //console.log(d);
    
    if(d.value<1){
        inp_year=Solar_Year.getYearVN();
        inp_month=Solar_Month.getMonthVN();
        inp_day=Solar_Day.getDayVN();
        d=inp_year+'-'+inp_month+'-'+inp_day;
    }
    else{
        let txt = d.value.split('-');
        inp_year = txt[0];
        inp_month = txt[1];
        inp_day = txt[2];
    }
    
    convertSolar_Lunar(INT(inp_day), INT(inp_month), INT(inp_year), timeZone);
    document.getElementById('solar_switch').innerHTML=inp_day+'-'+inp_month+'-'+inp_year;
    // Ngày âm tương ứng
    document.getElementById('switch_table_first_row').innerHTML='ÂM LỊCH & DƯƠNG LỊCH NGÀY '+inp_day;
    document.getElementById('switch_table_third_left_row').innerHTML='Tháng '+inp_month+' Năm '+inp_year;
    document.getElementById('switch_table_fourth_left_row').innerHTML=inp_day;
    document.getElementById('switch_canchi_day').innerHTML=DayCan(INT(inp_day),INT(inp_month),INT(inp_year))+' '+DayChi(INT(inp_day),INT(inp_month),INT(inp_year));
}





