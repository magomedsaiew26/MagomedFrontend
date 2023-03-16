import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';



const CreatePost = () => {
  const [postText, setPostText] = useState('');

  const handlePostTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(postText); 
    setPostText(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="ml-5">
      <input
        type="text"
        placeholder="Type something here"
        value={postText}
        onChange={handlePostTextChange}
        className="py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
        <p>Post</p>
      </button>
    </form>
  );
};

const MainContent = () => {
  return (
    <div className="w-4/5 pt-10 pl-10">
    <div className='user-name font-bold'>
      <span>Øystein Opperud</span>
    </div>
    <div className='user-role'>
      <span>Developer</span>
    </div>
    <div className='user-current-status mt-3 font-bold'>
      <span>"Noroff"</span>
    </div>
    <div className='user-location mt-3 font-light'>
      <span>Oslo, Norway<a className='user-contact-info ml-2 text-blue-600'>Contact info</a></span>
    </div>
    <div className='user-bio mt-3'>
      <label className='bio-bold font-bold'>Bio</label>
      <p>When I graduated from college, life was going to be so different. I was going to be able to finally do what I wanted, go where I wanted and make my own decisions. It didn’t turn out that way. After three years of unsuccessful job interviews, freelance writing and odd jobs, I realized that the life I dreamed of didn’t exist for me. Instead of a brightly lit future with endless possibilities, my path led me through endless dead ends and no clear destination. So what went wrong?

      </p>
    </div>
    </div>
  );
};

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something here"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};



const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full mt-3 ml-3">

        <div className="flex items-center justify-between border-b-2 border-gray-300 p-5">
          <CreatePost />
        </div>
        <MainContent />
      </div>
    </div>
  );
};

export default App;
