const LUNAR_CALENDAR_POST = [
  {
    id: 1,
    title:
      "Ngày tam nương là ngày ngày gì ? Những ngày cần biết về ngày tam nương",
    image: "../image/ngay-tam-nuong.png",
  },
  {
    id: 2,
    title: "Thất tịch là ngày gì? Nguồn gốc và ý nghĩa của ngày lễ Thất Tịch",
    image: "../image/le-that-tich.png",
  },
  {
    id: 3,
    title: "Tháng cô hồn là ngày nào? Nên làm gì và kiêng gì vào tháng cô hồn",
    image: "../image/thang-co-hon.png",
  },
  {
    id: 4,
    title: "Top 3 tuổi tốt nhất trong tháng 7 dương lịch năm 2023",
    image: "../image/top-3-tuoi-tot-nhat-thang-7-duong-lich.png",
  },
];
const AD_CONTENT = [
  {
    id: 1,
    image: "../image/KhaiTruongEdtech.jpg",
    title: "Trung tâm Công nghệ và Giải pháp Chuyển đổi số trong Giáo dục",
  },
  {
    id: 2,
    image: "../image/pc_tiktok_gif.gif",
    title:
      "Sự chú ý trên TikTok có chuyển hóa thành tác động kinh doanh không?",
  },
  {
    id: 3,
    image: "../image/con-so-may-man-12-thang-7",
    title: "Con số may mắn của 12 con giáp ngày 12 tháng 7 năm 2023?",
  },
  {
    id: 4,
    image: "../image/giai-ma-giac-mo-thay-ran-1.png",
    title: "Giải mã giấc mơ thấy rắn - Mơ thấy rắn là tốt hay xấu?",
  },
  {
    id: 5,
    image: "../image/tu-vi-12-con-giap-ngay-15-thang-7.png",
    title: "Tử vi 12 con giáp ngày 15 tháng 7 năm 2023",
  },
];

window.onload = () => {
  fn_loadSidebar();
  fn_clickCloseBanner();
};

const fn_loadSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  let lengthAd = LUNAR_CALENDAR_POST.length;
  let lengthAdContent = AD_CONTENT.length;
  let sidebarHtml = ` <div class="sidebar_contents pt-3">
<h4 class="sidebar_title mt-3">Nhiều người đọc</h4>`;
  for (let i = 0; i < lengthAd; i++) {
    sidebarHtml += `
    <div class="card sidebar_content">
    <div class="row">
        <div class="col-md-6 d-flex align-items-center">
            <a href="../html/post_detail.html?id=${LUNAR_CALENDAR_POST[i].id}" target="_blank" class="sidebar_thumbnail">
                <img src="${LUNAR_CALENDAR_POST[i].image}" alt="Image" class="card-img sidebar_thumbnail_img">
            </a>
        </div>
        <div class="col-md-6 sidebar_description">
            <a href="../html/post_detail.html?id=${LUNAR_CALENDAR_POST[i].id}">
                <h5 class="card-text sidebar_description_infor">
                   ${LUNAR_CALENDAR_POST[i].title}
                </h5>
            </a>
        </div>
    </div>
</div>
    `;
  }
  sidebarHtml += `</div>`;
  for (let i = 0; i < lengthAdContent; i++) {
    sidebarHtml += `
    <div class="sidebar_content_intro mt-5 pb-3" style="width: 100%;">
    <div class="card">
        <a href="#">
            <div class="sidebar_content_intro_thumbnail">
                <img src="${AD_CONTENT[i].image}" class="card-img-top sidebar_content_intro_img" alt="Hình ảnh">
            </div>
        </a>
        <div class="card-body">
            <a href="#">
                <h5 class="card-title">${AD_CONTENT[i].title}</h5>
            </a>
        </div>
    </div>`;
    if (i == 0) {
      sidebarHtml += ` <div class="sidebar_content_intro_new">
        <img src="../image/new_gif.gif" alt="">
    </div>`;
    }

    sidebarHtml += `</div>`;
  }
  sidebar.innerHTML = sidebarHtml;
};

const fn_clickCloseBanner = () => {
  const iconDelete = document.getElementsByClassName("banner_ad_close");
  let lengCloseIcon = iconDelete.length;
  for (let i = 0; i < lengCloseIcon; i++) {
    iconDelete[i].addEventListener("click", (e) => {
      const slide = document.getElementsByClassName("slide");
      let lengthSlide = slide.length;
      for (let j = 0; j < lengthSlide; j++) {
        e.target.closest(".slide").classList.add("hidden");
      }
    });
  }
};


