// import React, { useEffect, useRef, ReactElement } from "react";
// import ReactDOM from "react-dom";
// import { Wrapper, Status } from "../src";

// const render = (status: Status): ReactElement => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return null;
// };

// function MyMapComponent({
//   center,
//   zoom,
// }: {
//   center: google.maps.LatLngLiteral;
//   zoom: number;
// }) 
// {
//   const ref = useRef();

//   useEffect(() => {
//     new window.google.maps.Map(ref.current, {
//       center,
//       zoom,
//     });
//   });

//   return <div ref={ref} id="map" />;
// }

// function App() {
//   const center = { lat: -34.397, lng: 150.644 };
//   const zoom = 4;

//   return (
//     <Wrapper apiKey="AIzaSyABei7qsaJawM-o0ibN05LmcjU3ge6MUhc" render={render}>
//       <MyMapComponent center={center} zoom={zoom} />
//     </Wrapper>
//   );
// }

// ReactDOM.render(<App />, document.querySelector("#root"));

