import { Dropdown } from "flowbite-react";

function Dropdowns(value, basicValue,basicNext,lastPrevious,lastValue, onchange) {
  return (
    <Dropdown label="Price Range" value={value} onChange={onchange} dismissOnClick={false}>
      <Dropdown.Item key={1}>{basicValue}</Dropdown.Item>
      <Dropdown.Item key={2}>{basicNext}</Dropdown.Item>
      <Dropdown.Item key={3}>{lastPrevious}</Dropdown.Item>
      <Dropdown.Item key={4}>{lastValue}</Dropdown.Item>
    </Dropdown>
  );
}


export default Dropdowns