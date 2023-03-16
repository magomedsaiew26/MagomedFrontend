import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostForm from './pages/PostForm';
import UserProfile from './pages/UserProfile';
import CreatePost from './components/CreatePost';


const App: React.FC = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='HomePage' element={<HomePage />} />
        <Route path='UserProfile' element={<UserProfile />} />
 
        <Route path='PostForm' element={<PostForm onSubmit={function (text: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
