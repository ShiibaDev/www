function openMenu(evt, Menu) {
   var Tabs, i, trigger

   // Get elements.
   Tabs = document.getElementsByClassName('Menu');
   for (i = 0; i < Tabs.length; i++) {
      Tabs[i].style.display = "none";
   }

   // Elements
   trigger = document.getElementsByClassName('Trigger');
   for (i = 0; trigger.length; i++) {
      trigger[i].className = trigger[i].className.replace(" active", "");
   }

   document.getElementById(Menu).style.display = "block";
   evt.currentTarget.className += " active";
}