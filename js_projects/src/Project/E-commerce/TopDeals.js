import { useEffect ,useState } from "react";
import products from "./products.json";
import ProCard from "./ProCard";

const TopDeals = () => {
  const [data , setData] = useState(products);
  return (
     <div>
     <div className="container-fluid py-2 px-2 display-6 text-bottom">
         Top Deals
     </div>
         <div className="d-flex py-5 flex-wrap justify-content-center align-items-center" style={{maxWidth:"100vw"}}>
          {data?.map((items)=>{
              return <ProCard key={items.id} data={items} />
          })}
      </div>
     </div>
  );
}


export default TopDeals;