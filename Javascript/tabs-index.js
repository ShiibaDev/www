document.addEventListener('DOMContentLoaded', () => {
   openMenu, () => {
      var Tabs, i, trigger

      // Get elements.
      Tabs = document.getElementsByClassName('Menu');
      for (i = 0; i < Tabs.length; i++) {
         Tabs[i].style.display = "none";
      }

      // Elements
      trigger = document.getElementsByClassName('Trigger');
      for (i = 0; trigger.length; i++) {
         trigger[i].classname = trigger[i].classNAme.replace(" active", "");
      }

      document.getElementsbyId("")
   }
})