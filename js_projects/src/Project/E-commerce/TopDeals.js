import {useState } from "react";
import products from "./products.json";
import ProCard from "./ProCard";
import {FaHotjar} from "react-icons/fa"

const TopDeals = () => {
  const [data] = useState(products);
  return (
     <div className="d-flex flex-column products">
     {/*  myHeading  */}
     <div className="container-fluid px-2 display-6 text-bottom d-flex justify-content-between align-items-center bg-info top-0 position-fixed">
         <div className="text-gradient bg-danger sticky" style={{height:"20vh"}}>Top Deals</div>
     </div>
     {/*  My product fetcher */}
         <div className="d-flex py-5 flex-wrap justify-content-center align-items-center" style={{maxWidth:"100vw", height:"auto"}}>
          {data?.map((items)=>{
              return <ProCard key={items.id} data={items} />
          })}
      </div>
     </div>
  );
}


export default TopDeals;