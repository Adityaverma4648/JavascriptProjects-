import { BrowserRouter, Routes, Route } from "react-router-dom";

import MusicPlayer from './Project/MusicPlayer'
import Ecommerce from './Project/Ecommerce'
import ToDoList from './Project/ToDoList'
import Home from './Pages/Home';
import ResponsiveBlogSite from './Project/ResponsiveBlogSite'


function AppRouting(){

    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/MusicPLayer" element={<MusicPlayer />} />
        {/* <Route path="/ToDoList" element={<ToDoList />} />
        {/* <Route path="/ResponsiveBlogSite" element={<ResponsiveBlogSite />} /> */}
        <Route path="/ResponsiveBlogSite" element={<ResponsiveBlogSite />} /> 
      </Routes>
    </BrowserRouter>
    )

}

export default AppRouting;