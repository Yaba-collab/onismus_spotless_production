/* ================= MOBILE MENU ================= */
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});
/* ================= FORM VALIDATION ================= */
function validateForm(){
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  if(name === "" || phone === ""){
    alert("Please fill all required fields");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

// Portfolio scroll animation
const portfolioItems = document.querySelectorAll('.portfolio-item');

function scrollAnimate() {
  const triggerBottom = window.innerHeight * 0.85;

  portfolioItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < triggerBottom) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', scrollAnimate);
window.addEventListener('load', scrollAnimate); // trigger on page load too
