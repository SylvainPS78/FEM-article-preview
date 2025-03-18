const linkBtn = document.getElementById("link-btn");
const linkBtn2 = document.getElementById("link-btn2");
const authorInfo = document.getElementById("author-info");
const shareLinks = document.getElementById("share-links");
let shareMenuStatus = false;

function applyResponsiveRules() {
    if (window.innerWidth < 1000) {
        linkBtn.addEventListener("click", showShareLinksMobile);
        linkBtn2.addEventListener("click", hideShareLinksMobile);
        linkBtn.removeEventListener("click", toggleShareLinksDesktop);
    } else {
        linkBtn.addEventListener("click", toggleShareLinksDesktop);
        linkBtn.removeEventListener("click", showShareLinksMobile);
        linkBtn2.removeEventListener("click", hideShareLinksMobile);
    }
}

function showShareLinksMobile() {
    authorInfo.style.display = "none";
    shareLinks.style.display = "flex";
}

function hideShareLinksMobile() {
    authorInfo.style.display = "grid";
    shareLinks.style.display = "none";
}

function toggleShareLinksDesktop() {
    if (!shareMenuStatus) {
        shareLinks.style.display = "flex";
        shareMenuStatus = true;
    } else {
        shareLinks.style.display = "none";
        shareMenuStatus = false;
    }
}


applyResponsiveRules();


window.addEventListener("resize", applyResponsiveRules);
