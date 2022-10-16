// import React from 'React'
import '../src/Component.css';
import LiMaker from './LiMaker';

const myJson = require('./Files.json');


function Navbar(){

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
                        <LiMaker menuitems = {myJson} />
                        </div>
                        <div className="px-2">
                            <button type="button" className = "btn btn-info" >
                                 Play Songs
                            </button>
                        </div>
            </div>


        </div>
    )

}

export default Navbar;