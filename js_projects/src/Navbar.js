import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/Component.css';
import LiMaker from './LiMaker';
import Ecommerce from './Project/Ecommerce'
import ToDoList from './Project/Ecommerce'
import MusicPlayer from './Project/Ecommerce'
import ResponsiveBlogSite from './Project/Ecommerce'


const myJson = require('./Files.json');


function Navbar(props){

    return (
        <div className="nav container-fluid d-flex justify-content-between align-items-center text-light">
            <div className="logo ms-2 px-2">
                {/* <img src="#" alt="Logo"/> */}
                <h3 >
                    1_FootInArt
                </h3>
            </div>
            <div className="navigate d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center">
                        <BrowserRouter>
                            <Route path='/'>
                               <LiMaker menuitems = {myJson}/>
                            </Route>
                        </BrowserRouter>
                          </div>
                          <div className="px-2">
                            <button type="button" className = "btn btn-info" >
                                SomeThing Fun :)
                            </button>
                          </div>
                        </div>
            </div>
    )

}

export default Navbar;