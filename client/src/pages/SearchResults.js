import React, { useState, useEffect } from "react";
import Result from "../components/Result/Result";
import "./SearchResults.css";
import { searchLandmarks } from "../util/api";
import { useLocation } from "react-router";

function SearchResults() {
  const { search } = useLocation();
  
  // const { search } = useParams();
  // const userSearch = fetch(`/api/${search}`);
  // console.log(userSearch);
  // function setSearch() {}
  //This 'results' array is a place holder until we hook up the backend.
  const [results, setResults] = useState([
    {
      name: "really-old-place",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
    },
    {
      name: "really-old-place-2",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
    },
    {
      name: "really-old-place-3",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
    },
    {
      name: "really-old-place-4",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
    },
    {
      name: "really-old-place-5",
      description: "a description of this really old place",
      id: "https://parkwebsite.com",
    },
  ]);
  useEffect(() => {
    // Update the document title using the browser API
    searchLandmarks(search).then((data)=> {
      console.log(data)
      setResults(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[search]) ;
  return (
    <div>
      <div className="flex-row">
        {results.map((result, idx) => (
          <Result result={result} key={"result" + idx} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
