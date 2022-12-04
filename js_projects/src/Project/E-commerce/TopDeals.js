import {useState } from "react";
import products from "./products.json";
import ProCard from "./ProCard";
import {FaHotjar} from "react-icons/fa"

const TopDeals = () => {
  const [data] = useState(products);
  return (
     <div className="d-flex flex-column products">
     {/*  myHeading  */}
     <div className="container-fluid px-2 text-bottom d-flex bg-black top-0 position-fixed align-items-center">
         <div className="text-gradient bg-danger sticky d-flex  justify-content-end " style={{height:"20vh"}}>
            <div className="display-6 d-flex flex-column-reverse py-2">
                Top Deals
            </div>
            <div className="">
                <></>
            </div>
         </div>
     </div>
     {/*  My product fetcher */}
         <div className="d-flex flex-wrap justify-content-center align-items-center" style={{maxWidth:"100vw",padding:"10vh 0px",height:"auto"}}>
          {data?.map((items)=>{
              return <ProCard key={items.id} data={items} />
          })}
      </div>
     </div>
  );
}


export default TopDeals;