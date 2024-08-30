
import { Checkbox, Label } from "flowbite-react";

function Checkboxes(label1, label2) {
  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2">
        <Checkbox id={label1} defaultChecked />
        <Label htmlFor="bicycles" className="flex">
          {label1}
         
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id={label2} />
        <Label htmlFor="items">{label2}</Label>
      </div>
  
    </div>
  );
}

export default Checkboxes