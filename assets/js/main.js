//set footer date automatically 
const footer = document.querySelector('footer');
let today = new Date ();
let year = today.getUTCFullYear();
footer.innerHTML =`<p>&copy; ${year} HI-PRAISE Table Water | All Rights Reserved | Built by <a href="tel:+2347033548895" >THRIVE TECH </a></p>`;
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
