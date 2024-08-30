import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

function Filter(className) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className=" bg-white border ">
        <Button onClick={() => setIsOpen(true)} className={`  ${className}`} >Filter:</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Filter" />
        <Drawer.Items>
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
export default Filter