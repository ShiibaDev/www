const themeChanger = () => {
   const trigger_theme = document.querySelector('#Change-Theme')
   const wrap = document.querySelector('wrapper')
   const box = document.querySelector('.box')
   trigger_theme.addEventListener('click', () => {
      this.classList.trigger_theme("active");
      body.classList.trigger_theme("active");

      if(trigger_theme.classList.contains("active")) {
         content.innerHTML = "Dark Mode";
      } else {
         content.innerHTML = "Light Mode";
      }
   });;

   if (darkMode) {
      darkMode = false;
      wrap.style.background = 'linear-gradient(90deg, rgba(63, 63, 63, 0.782), rgba(118, 118, 118, 0.733), rgba(102, 102, 102, 0.93) 100%)'
      box.style.border = '6px solid rgba(231, 152, 231, 0.418)'
   }
   else {
      darkMode = true;
      wrap.style.background = 'linear-gradient(90deg, rgba(45, 45, 45, 0.782), rgba(49, 49, 49, 0.733), rgba(16, 16, 16, 0.93) 100%)'
      box.style.border = '6px solid rgba(202, 202, 202, 0.418)'
   }
}

themeChanger()