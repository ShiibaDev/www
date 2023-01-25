// wait until the elements load
document.addEventListener('DOMContentLoaded',() => {
   const themeButton = document.querySelector("#Change-Theme");
   const body = document.querySelector(".wrapper");
   const header = document.querySelector("header");

   // Check if there's a theme saved in local storage and apply it
   if (localStorage.getItem("theme")) {
      body.classList.add(localStorage.getItem("theme"));
   }

   themeButton.addEventListener("click", () => {
      body.classList.toggle("light-theme");
      body.classList.toggle("dark-theme");
      header.classList.toggle("light-theme");
      header.classList.toggle("dark-theme");
      // Save theme in local storage
      localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark-theme" : "light-theme");
   });

   // Update the theme in local storage
   if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark-theme");
   } else {
      localStorage.setItem("theme", "light-theme");
   }
   
   if (header.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light-theme");
   } else {
      localStorage.setItem("theme", "dark-theme");
   }
})