import React from "react";
import { useLoaderData } from "react-router";

const TipDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>this is tips details page</h1>
      <h2>{data?.title}</h2>
    </div>
  );
};

export default TipDetails;
