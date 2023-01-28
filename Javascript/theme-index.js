// wait until the elements load
document.addEventListener('DOMContentLoaded',function() {
   const themeButton = document.querySelector("#Change-Theme");
   const body = document.querySelector("#wrapper");
   const header = document.querySelector("#Tab-managerS");
   const links = document.querySelectorAll("a");

   // Check if there's a theme saved in local storage and apply it
   if (localStorage.getItem("theme")) {
      body.classList.add(localStorage.getItem("theme"));
   }

   themeButton.addEventListener("click", function() {
      // Button color scheme.
      themeButton.classList.toggle("light-theme");
      themeButton.classList.toggle("dark-theme");
      //Wrapper
      body.classList.toggle("light-theme-wrapper");
      body.classList.toggle("dark-theme-wrapper");
      // Header
      header.classList.toggle("light-theme");
      header.classList.toggle("dark-theme");
      // Links color scheme
      links.classList.toggle("light-theme");
      links.classList.toggle("dark-theme");


      // Save theme in local storage
      localStorage.getItem("theme", themeButton.classList.contains("dark-theme") ? "dark-theme" : "light-theme");
      localStorage.getItem("theme", links.classList.contains("dark-theme") ? "dark-theme" : "light-theme");
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