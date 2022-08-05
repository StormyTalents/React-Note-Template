import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      {/*the heading of our notes app*/}
      <h1>
        <span className="header-title">React</span> Notes
      </h1>
      {/*this is our toggle button 
        using this button we can change the background theme for our application*/}
      <button
        onClick={() => {
          handleToggleDarkMode((prev) => {
            if (prev)
              document.documentElement.setAttribute("dark-theme", "light");
            else document.documentElement.setAttribute("dark-theme", "dark");
            return !prev;
          });
        }}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
