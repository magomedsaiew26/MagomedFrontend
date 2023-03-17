import React, { useState } from 'react';
import CreatePostModal from './CreatePostModel';
import UserProfile from '../pages/UserProfile';
import noroffLogo from '../assets/noroff.png';


interface HeaderProps {
  isCreatePostPopUpVisible: boolean;
  changeCreatePostPopUpVisiblility: (visible: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isCreatePostPopUpVisible, changeCreatePostPopUpVisiblility }) => {
  const [screenName, setScreenName] = useState('HOME');

  const changePopUpVisibility = () => {
    changeCreatePostPopUpVisiblility(!isCreatePostPopUpVisible);
  };

  const handleCreatePostSubmit = (postText: string) => {
    changeCreatePostPopUpVisiblility(false);
  };

  return (
    /*<div className="header-container flex-row flex justify-between items-center">
      <div className="header-item-left flex flex-row">
        <div className="logo-container pr-2">
          <img src="C:\Users\magom\OneDrive\Skrivebord\noroff.png" />
        </div>
        <div className="screen-name">{screenName}</div>
      </div>*/
      <div className="header-container flex-row flex justify-between items-center">
      <div className="header-item-left flex flex-row">
        <div className="logo-container pr-2">
          <img src={noroffLogo} alt="Noroff Logo" />
        </div>
        <div className="screen-name">{screenName}</div>
      </div>
      <div className="header-item-right flex flex-row items-center">
        <div className="label-container pr-3 items-center">Latest</div>
        <div className="post-create-btn">
          <button className="button-post" onClick={changePopUpVisibility}>
            New post
          </button>
        </div>
      </div>
      {isCreatePostPopUpVisible && (
        <CreatePostModal
          isOpen={isCreatePostPopUpVisible}
          onClose={() => changeCreatePostPopUpVisiblility(false)}
          onSubmit={handleCreatePostSubmit}
        />
      )}
    </div>
  );
};

export default Header;
