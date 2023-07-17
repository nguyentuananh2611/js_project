function timeClock() {
    document.getElementById("time__clock").innerHTML = "";
    const t = new Date();
    const a = t.getHours();
    const h = thms(a);
    const b = t.getMinutes();
    const m = thms(b);
    const c = t.getSeconds();
    const s = thms(c);
  
    document.getElementById("time__clock").innerHTML = `⌚ ${h}:${m}:${s} `;
    setTimeout(timeClock, 1000);
  }
  
  function thms(x) {
    if (x < 10) {
      return "0" + x;
    } else {
      return x;
    }
  }