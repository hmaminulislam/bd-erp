import React, { useEffect, useState } from 'react';
import Geonames from "geonames.js";
import './GeoLocation.css'

const geonames = new Geonames({
  username: "thalesandrade",
  lan: "en",
  encoding: "JSON",
});

const GeoLocation = (props) => {
    const { geoId, onChange, isCountry } = props;
    const [options, setOptions] = useState([]);
    const [content, setContent] = useState(false);
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState('');
    const [subOptions, setSubOptions] = useState('')
   
 
    useEffect(() => {
      try {
        const data = async () => {
          (await isCountry)
            ? geonames.countryInfo({}).then((res) => {
                setOptions(res.geonames);
              })
            : geonames.children({ geonameId: geoId }).then((res) => {
                if (res.totalResultsCount) setSubOptions(res.geonames);
              });
        };
        data();
      } catch (err) {
        console.error(err);
      }
    }, [geoId, isCountry, content]);

    const handleContent = () => {
      setContent(true)
    }
    
    const handleSelect = (e) => {
      setSelected(e.target.innerText)
      onChange(e.target.value);
      setContent(false)
    }
    return (
      <div className="select-box">
        <>
          <div
            onClick={handleContent}
            className={`select-btn`}
          >
            {selected ? <span>{selected}</span> : <span>Please Search</span>}
          </div>
            <>
              <div className={`content ${content? 'active' : 'deactive'}`}>
                <div className="search">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    value={search}
                  />
                </div>
                <ul className="options">
                  {subOptions ? (
                    <>
                      {subOptions
                        .filter((item) => {
                          return search.toLowerCase() === ""
                            ? item
                            : item.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((option, index) => (
                          <li
                            onClick={(e) => handleSelect(e)}
                            key={index}
                            value={option.geonameId}
                          >
                            {isCountry ? option.countryName : option.name}
                          </li>
                        ))}
                    </>
                  ) : (
                    <>
                      {options
                        .filter((item) => {
                          return search.toLowerCase() === ""
                            ? item
                            : item.countryName.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((option, index) => (
                          <li
                            onClick={(e) => handleSelect(e)}
                            key={index}
                            value={option.geonameId}
                          >
                            {isCountry ? option.countryName : option.name}
                          </li>
                        ))}
                    </>
                  )}
                </ul>
              </div>
            </>
        </>
      </div>
    );
};

export default GeoLocation;