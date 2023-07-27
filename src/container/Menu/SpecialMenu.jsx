import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center__padding' id='menu'>
    <div className=''>
      <SubHeading title='Menu that fits your needs'/>
      <h1 className='headtext__cormorant'>Today Special</h1>
    </div>

    <div className='app__specialMenu-menu'>  
  <div className='app__specialMenu-menuwine flex__center'>
<p className='app__specialMenu_menu_heading'>Wine & Beer</p>
<div className='app__special_menu_item'>

</div>
  </div>
    </div>
  </div>
);

export default SpecialMenu;
