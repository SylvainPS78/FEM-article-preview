const linkBtn = document.getElementById("link-btn");
const linkBtn2 = document.getElementById("link-btn2");
const authorInfo = document.getElementById("author-info");
const shareLinks = document.getElementById("share-links");
let shareMenuStatus = false;

if (window.innerWidth < 1000) {
    linkBtn.addEventListener("click",()=>{
        authorInfo.style.display = "none";
        shareLinks.style.display = "flex";
    })

    linkBtn2.addEventListener("click",()=>{
        authorInfo.style.display = "grid";
        shareLinks.style.display = "none";
    })
}
else {
    linkBtn.addEventListener("click", ()=> {
        if (!shareMenuStatus) {
            shareLinks.style.display = "flex";
            shareMenuStatus = true;
        }
        else {shareLinks.style.display = "none";
            shareMenuStatus = false;
        }
    })
}