import { ReactDOM } from 'react';
import ArtBlog from '../responsiveBlog/ArtBlog';
import Gamepad from '../responsiveBlog/GamePad';
import ReactBlog from '../responsiveBlog/ReactBlog';
import Volley from '../responsiveBlog/Volley';

const FetchComp = (props) =>{

    const Comp = ["ArtBlog","Gamepad","React","Volley"]

     var state = props.data;
      const Fetcher1 = () =>{
        if(state == Comp[0]){
            console.log(state)
            return <ArtBlog />
        }
        else{
            console.log(state)
            return <Gamepad />
        }
    }

        const Fetcher2 = () =>{
        if(state == Comp[3]){
            console.log(state)
            return <ReactBlog />
        }
        else{
            console.log(state)
            return <Volley />
        }

       
      }
   return(
     <div id='fetcher' className='d-flex flex-column'>
        <Fetcher1 />
        <Fetcher2 />

     </div>
     
   )

}

export default FetchComp;
