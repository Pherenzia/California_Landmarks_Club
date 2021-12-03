import React, { useState } from 'react';
import Result from '../components/Result/Result' 
import "./SearchResults.css";

function SearchResults() {
    
    //This 'results' array is a place holder until we hook up the backend.
    const [results] = useState([
        {
          name: 'really-old-place',
          description: 'a description of this really old place',
          link: "https://parkwebsite.com",
        },
        {
          name: 'really-old-place-2',
          description: 'a description of this really old place',
          link: "https://parkwebsite.com"
        },
        {
          name: 'really-old-place-3',
          description: 'a description of this really old place',
          link: "https://parkwebsite.com"
        },
        {
          name: 'really-old-place-4',
          description: 'a description of this really old place',
          link: "https://parkwebsite.com"
        },
        {
          name: 'really-old-place-5',
          description: 'a description of this really old place',
          link: "https://parkwebsite.com"
        },
      ]);

      return (
        <div>
          <div className="flex-row">
            {results.map((result, idx) => (
              <Result
                result={result}
                key={"result" + idx}
              />
            ))}
          </div>
        </div>
      );
}

  

  


export default SearchResults;
