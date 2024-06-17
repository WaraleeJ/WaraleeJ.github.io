
function showSlides(slideClass) {
    let slideIndex = 0;
    function show(){
        let i;
        let slides = document.getElementsByClassName(slideClass);
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(show, 2000); // Change image every 2 seconds
    }
    show();
}

showSlides("safetist-project-image");
showSlides('fibolio-project-image');

export default showSlides;