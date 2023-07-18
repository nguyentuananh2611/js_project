import {
  LUNAR_CALENDAR_POST,
  LUNAR_CALENDAR_POST_DETAILS,
  AD_CONTENT,
} from "../javascript/baner_ad_post_obj.js";

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
  console.log(iconDelete);
  let lengCloseIcon = iconDelete.length;
  for (let i = 0; i < lengCloseIcon; i++) {
    iconDelete[i].addEventListener("click", (e) => {
      const slide = document.getElementById("slide");
      slide.classList.add("hidden");
    });
  }
};
