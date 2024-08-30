
import { Accordion } from "flowbite-react";
import Checkboxes from "./CheckBoxes";

function Accordions(minOnchange,maxOnchange ) {
    import { useState } from "react";
    const [minRange, setMinRange] = useState(0)
    const [maxRange, setMaxRange] = useState(25000)
    function priceRange(){

    }
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>PRODUCT TYPE</Accordion.Title>
        <Accordion.Content>
         <Checkboxes label1={bicycle}/>
         <Checkboxes label1={fixedGear}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>BRAND</Accordion.Title>
        <Accordion.Content>
        <Checkboxes label1={pureCycle}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>AVAILABILITY</Accordion.Title>
        <Accordion.Content>
        <Checkboxes label1={"In Stock"}/>
        <Checkboxes label={"Out of stock"}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>PRICE</Accordion.Title>
        <Accordion.Content>
        {minRange < maxRange}
         <input type="number" id="minRange" step="0" value={setMinRange} onChange={minOnchange}/>
         <input type="number" id="maxRange" step="0" value={setMaxRange} onChange={maxOnchange}/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>MORE FILTER</Accordion.Title>
        <Accordion.Content>
       
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
export default Accordions