import React, { useEffect, useState } from "react";
import Card from "./Card";
import  Filter  from "./Filter";
import Dropdowns from "./Dropdowns";

function Fetching() {
  const [data, setData] = useState([]);
  const [selectRange, setSelectRange] = useState(0);
  const [findProduct, setFindProduct] = useState("");
  const [findCategory, setFindCategory] = useState("All");

  useEffect(() => {
    console.log("Component render ya update hua");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));

    return () => {
      // console.log("Component unmount ya update ho raha hai");
    };
  }, []);
  
  function priceRange(){

    
  }
  function categoryFilter(){

  }


  return (
    <>
      {/* {console.log(data)} */}
      {/* <section className="text-gray-600 body-font"> */}
      <div className="container px-5 py-24 mx-auto">
        <div>
          <Dropdowns value={findCategory} basicValue={"Under $50"} basicNext={"$50 to $100"} lastPrevious={"$101 to $500"} lastValue={"Above $500"} onChange={()=>(priceRange)}/>
          <Dropdowns value={findCategory} basicValue={"men's clothing"} basicNext={"women's clothing"} lastPrevious={"jewelery"} lastValue={"electronics"} onChange={()=>(categoryFilter)}/>
          <input type="search" value={findProduct} onChange={setFindProduct}/>
        </div>
          <div className="flex flex-wrap lg:w-11/12 m-auto m-4">
            {data.map((data, index)=>(
            
               <Card image={data.image} title={data.title} price={data.price} key={index} category={data.category}  />

              ))}
            
          </div>
        </div>
      {/* </section> */}

     
    </>
  );
}

export default Fetching;
