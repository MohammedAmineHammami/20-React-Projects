import React, { useState } from "react";
import "./style.css";
function CustomTabs({ tabs }) {
  const [currentComp, setCurrentComp] = useState(tabs[0].comp);

  const handleTabClick = (el) => {
    setCurrentComp(el.comp);
  };
  return (
    <div>
      <div className="tabs">
        {tabs &&
          tabs.length > 0 &&
          tabs.map((el, i) => {
            return (
              <h1
                className={
                  currentComp === el.comp ? "activeTab" : "inactiveTab"
                }
                key={i}
                onClick={() => handleTabClick(el)}
              >
                {el.label}
              </h1>
            );
          })}
      </div>
      {currentComp}
    </div>
  );
}

export default CustomTabs;
