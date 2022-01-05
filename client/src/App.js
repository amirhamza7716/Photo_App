import React,{useState} from 'react'
import './App.css';
import PrimarySearchAppBar from './component/navbar/Navbar';
import Album from './component/albumb/albumb';
import {BrowserRouter, Route,Routes,Navigate} from "react-router-dom";
import Login from './component/login/login';
import Signup from './component/Signup/signup'
import PostDetail from './component/PostDetail/PostDetail'
function App() {


  
    const [search,setsearch]=useState('');
    const [tags,settags]=useState([]);

  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);
  console.log(user==null);
  return (
    <BrowserRouter>
  




      <PrimarySearchAppBar  search={search}  setsearch={setsearch} tags={tags} settags={settags}/>
      <Routes>
       
        <Route exact path="/" element={<Navigate to="/posts" />} />
        <Route exact path="/posts" element={<Album  search={search} tags={tags} />} />
        <Route exact path="/posts/find" element={<Album />} />
        <Route  path="/posts/:id" element={<PostDetail />} />
        <Route path="/login" exact element={!user ? <Login/>:<Navigate to="/posts" />} />
        <Route path="/signup" exact element={!user ? <Signup/>:<Navigate to="/posts" />} />
      </Routes>
      
    </BrowserRouter>

  
  );
}

export default App;

