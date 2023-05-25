import React from "react";
import { Fragment } from "react";
const fruitsData = [
  {id:1, value: "Apple" },
  { id:2,value: "Orange" },
  {id:3, value: "Mango" },
  {id:4, value: "PineApple" },
];
const vegetableData = [
  { id:1,value: "Tomato" },
  {id:2, value: "Potato" },
  { id:3,value: "Carrot" },
  { id:4,value: "Raddish" },
];

const OrderedListComponent: React.FC = () => {
  return (
    <Fragment>
      <h1>Ordered List</h1>
      <ol>
        {fruitsData?.map((fruit) => (
          <li key={fruit?.id}>{fruit?.value}</li>
        ))}
      </ol>
    </Fragment>
  );
};

const UnOrderedListComponent: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Un Ordered List </h1>
      {vegetableData?.map((vegetable) => (
        <li key={vegetable?.id}>{vegetable?.value}</li>
      ))}
    </React.Fragment>
  );
};
const ReactFragmentComponent: React.FC = () => {
  return (
    // short-hand react fragment
    <>
      <OrderedListComponent />
      <UnOrderedListComponent />
    </>
  );
};
export default ReactFragmentComponent;
