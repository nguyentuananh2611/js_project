import { LUNAR_CALENDAR_POST_DETAILS } from "../javascript/baner_ad_post_obj.js";
let lengDetail = LUNAR_CALENDAR_POST_DETAILS.length;
let url = new URL(window.location.href);
let id_url = url.searchParams.get("id");

const post = document.querySelector(".post");
let htmls = "";
let arr = [];
for (let i = 0; i < lengDetail; i++) {
  arr.push(LUNAR_CALENDAR_POST_DETAILS[i].id);
}
if (arr.includes(parseInt(id_url))) {
  htmls += `${LUNAR_CALENDAR_POST_DETAILS[id_url - 1].description}`;
  post.innerHTML = htmls;
} else {
  post.innerHTML = `<h3 class="title_404">Trang không tồn tại vui lòng quay trở lại <a href="../html">Trang chủ</a></h3>
    <div class="thumb_404">
    <img src="https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-404-error-interface-art-word-design-404-error-page404-png-image_638897.jpg" alt="Image-404" class="image_404">
    </div>`;
  document.querySelector(".news").classList.add("hidden");
  document.getElementById("sidebar").classList.add("hidden");
  post.style.height = "300px";
}
