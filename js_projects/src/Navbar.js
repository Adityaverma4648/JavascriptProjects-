import '../src/Component.css';


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
                 <ul className="navlist">
                    <li className="navlists">
                         <a href="http://localhost:3000/MusicPlayer" className='text-white text-decoration-none px-2 py-1'>MusicPlayer</a>
                    </li>
                    <li className="navlists">
                         <a href="http://localhost:3000/ToDoList" className='text-white text-decoration-none px-2 py-1'>ToDoList</a>
                    </li>
                    <li className="navlists">
                         <a href="http://localhost:3000/Ecommerce" className='text-white text-decoration-none px-2 py-1'>Ecommerce</a>
                    </li>
                    <li className="navlists">
                         <a href="http://localhost:3000/ResponsiveBlogSite" className='text-white text-decoration-none px-2 py-1'>ResponsiveBlogSite</a>
                    </li>
                    <li className="navlists">
                         <a href="http://localhost:3000/ArtDisplay" className='text-white text-decoration-none px-2 py-1'>ArtDisplay</a>
                    </li>
                 </ul>        
                 </div>
                
            </div>
    )

}

export default Navbar;