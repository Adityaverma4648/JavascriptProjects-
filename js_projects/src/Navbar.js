// import React from 'React'
import '../src/Component.css';
import LiMaker from './LiMaker';

const myJson = require('./Files.json');


function Navbar(){

    return (
        <div className="nav container-fluid d-flex flex-column justify-content-center align-items-center">
            <div className="logo">
                {/* <img src="#" alt="Logo"/> */}
                <h3>
                    Logo
                </h3>
            </div>
            <div className="navigate">
                <ul className="navlists">
                        <LiMaker menuitems = {myJson} />
                </ul>

                   


            </div>

        </div>
    )

}

export default Navbar;