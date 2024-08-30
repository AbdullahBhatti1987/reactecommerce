import React from "react";
import Card from "./Card";

function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap lg:w-11/12 m-auto m-4">
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
