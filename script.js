function contactCaptcha(token) {
    if (token) {
        setTimeout(() => {
            document.querySelector(".contact .verify").hidden = true;
            document.querySelector(".contact .txt").hidden = false;
        }, 750);
    }
}

function siteCaptcha(token) {
    if (token) {
        setTimeout(() => {
            document.querySelector(".siteVerify").hidden = true;
        }, 750);
    }
}

setInterval(() => {
    if (window.scrollY != 0) {
      document.querySelector(".arrow").style.opacity = "0";
    } else {
      document.querySelector(".arrow").style.opacity = "1";
    }
  }, 100);