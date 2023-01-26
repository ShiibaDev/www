// wait until the elements load
document.addEventListener('DOMContentLoaded',function() {
   const themeButton = document.querySelector("#Change-Theme");
   const body = document.querySelector("#wrapper");
   const header = document.querySelector("header");

   // Check if there's a theme saved in local storage and apply it
   if (localStorage.getItem("theme")) {
      body.classList.add(localStorage.getItem("theme"));
   }

   themeButton.addEventListener("click", function() {
      themeButton.classList.toggle("light-theme");
      themeButton.classList.toggle("dark-theme");
      body.classList.toggle("light-theme-wrapper");
      body.classList.toggle("dark-theme-wrapper");
      header.classList.toggle("light-theme");
      header.classList.toggle("dark-theme");
      // Save theme in local storage
      localStorage.setItem("theme", body.classList.contains("dark-theme-wrapper") ? "dark-theme-wrapper" : "light-theme-wrapper");
      localStorage.setItem("theme", header.classList.contains("dark-theme") ? "dark-theme" : "light-theme");
   });

   // Update the theme in local storage
   if (body.classList.contains("dark-theme-wrapper")) {
      localStorage.setItem("theme", "dark-theme-wrapper");
   } else {
      localStorage.setItem("theme", "light-theme-wrapper");
   }
   
   if (header.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light-theme");
   } else {
      localStorage.setItem("theme", "dark-theme");
   }
})