import React from "react"
import "./Switcher.css"

const Switcher = (props) => {

         // function to set a given theme/color-scheme
         function setTheme(themeName) {
          localStorage.setItem('theme', themeName);
          document.documentElement.className = themeName;
          
      }

      // function to toggle between light and dark theme
      const toggleTheme = () => {
          if (localStorage.getItem('theme') === 'theme-dark') {
              setTheme('theme-light');
              document.querySelector(".switch-btn").textContent = "Day";
          } else {
              setTheme('theme-dark');
              document.querySelector(".switch-btn").textContent = "Night";
          }
      }

      // Immediately invoked function to set the theme on initial load
      (function () {
          if (localStorage.getItem('theme') === 'theme-dark') {
              setTheme('theme-dark');
          } else {
              setTheme('theme-light');
          }
      })();

  return(
    <div className="header">
      <button className="switch-btn" onClick={toggleTheme}>Day</button>
    </div>
  )

}

export default Switcher;