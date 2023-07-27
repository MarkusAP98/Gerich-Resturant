import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center__padding" id="menu">
    <div className="">
      <SubHeading title="Menu that fits your needs" />
      <h1 className="headtext__cormorant">Today Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__special_menu_item">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img"></img>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__special_menu_item">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
      <div style={{marginTop: '15px'}}>
        <button type="buttom" className="custom__buttom"></button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
