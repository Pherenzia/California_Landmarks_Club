import React from "react";

const GoogleMap = (q) => {
  return (
    <iframe
      title="GoogleMap"
      width="450"
      height="250"
      frameborder="0"
      src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyABei7qsaJawM-o0ibN05LmcjU3ge6MUhc&q=${q}`}
      allowfullscreen
    ></iframe>
  );
};

export default GoogleMap;
