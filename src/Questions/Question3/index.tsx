import React from "react";
import { Fragment } from "react";
const fruitsData = [
  { value: "Apple" },
  { value: "Orange" },
  { value: "Mango" },
  { value: "PineApple" },
];
const vegetableData = [
  { value: "Tomato" },
  { value: "Potato" },
  { value: "Carrot" },
  { value: "Raddish" },
];

const OrderedListComponent: React.FC = () => {
  return (
    <Fragment>
      <h1>Ordered List</h1>
      <ol>
        {fruitsData?.map((fruit) => (
          <li>{fruit?.value}</li>
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
        <li>{vegetable?.value}</li>
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
