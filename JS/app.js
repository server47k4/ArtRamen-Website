const searchButton = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search-box");

// searchButton.addEventListener("click", function () {
//   if (searchBox.style.width === "0px" || searchBox.style.width === "") {
//     searchBox.style.display = "block";
//     setTimeout(() => {
//       searchBox.style.width = '200px';
//     }, .3)
  
    
//   } else {
//     searchBox.style.width = '0';
//     setTimeout(() => {
//       searchBox.style.display = 'none';
//     }, .3)
//   }
// });

searchButton.addEventListener("click", function () {
  console.log(searchBox.classList)
  searchBox.classList.toggle("search-box-active")
});

const barIcon = document.querySelector(".bar-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");

barIcon.addEventListener("click",()=>{
  mobileNav.style.display ="flex";
  // mobileNav.style.height ="350px";
  
});

closeIcon.addEventListener("click",()=>{
  mobileNav.style.display="none";
  // mobileNav.style.height ="0px";
})