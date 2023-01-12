const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImage = document.querySelectorAll(".wrapper img")[0];

let firstImgWidth = firstImage.clientWidth

const showHideIcon = () => {
    if(carousel.scrollLeft == 0){
        arrowIcons[0].style.display = "none";
    }else{
        arrowIcons[0].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        if(icon.id == "leftArrow"){
            carousel.scrollLeft -= firstImgWidth;
            showHideIcon();
        }else{
            carousel.scrollLeft += firstImgWidth;
            showHideIcon();
        }
    });
})