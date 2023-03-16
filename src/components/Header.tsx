import Sidebar from './Sidebar';
import React, { useState } from 'react';
interface HeaderProps {isCreatePostPopUpVisible: boolean, changeCreatePostPopUpVisiblility: Function}


const Header: React.FC<HeaderProps>= function ({isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility} ) {
    
    const [screenName, setScreenName] = useState('HOME');
    function changePopUpVisibility() {
      changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible)
    }

    return(
         <div className='header-container flex-row flex justify-between items-center'>
         <div className='header-item-left flex flex-row'>
         <div className='logo-container pr-2'>
            <img src='logo.jpg'/>
         </div>
         <div className='screen-name'>
            {screenName}
         </div>
         </div>
         <div className='header-item-right flex flex-row items-center'>
         <div className='label-container pr-3 items-center'>Latest</div>
            <div className='post-crete-btn'>
                <button className='button-post' onClick={changePopUpVisibility}>New post</button>
            </div>
         </div>



         </div>
    )
 }

 export default Header;