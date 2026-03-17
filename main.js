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