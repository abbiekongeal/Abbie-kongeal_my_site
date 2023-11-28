let slideIndex = 1;
showSlid(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let i;
  const slides = documwnr.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slidIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
