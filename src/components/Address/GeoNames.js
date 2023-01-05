import React, { useEffect, useState } from 'react';
import Geonames from "geonames.js";

const geonames = new Geonames({
  username: "thalesandrade",
  lan: "en",
  encoding: "JSON",
});

const GeoNames = () => {
    const [countries, setCountries] = useState([]);
    const [content, setContent] = useState(false);
    const [contentState, setContentState] = useState(false);
    const [selected, setSelected] = useState('');
    const [search, setSearch] = useState('');
    const [states, setStates] = useState([]);
    const [geoId, setGeoId] = useState('');
    const [selectedState, setSelectedState] = useState('')
    const [regions, setRegions] = useState([])
    const [contentRegion, setContentRegion] = useState('')
    const [selectedRegion, setSelectedRegion] = useState('')
    useEffect( () => {
        try {
          const getCountries = async () => {
            const allCountries = await geonames.countryInfo({});
            setCountries(allCountries.geonames);
          };
          getCountries();
        } catch (err) {
          console.error(err);
        }
    }, [content]);

    useEffect( () => {
        try {
          const getStates = async () => {
            const states = await geonames.children({
              geonameId: geoId,
            });
            setStates(states.geonames)
          };
          getStates();
        } catch (err) {
          console.error(err);
        }
    }, [geoId]);

    useEffect( () => {
        try {
            const getRegion = async () => {
              const regions = await geonames.children({
                geonameId: geoId,
              });
              setRegions(regions.geonames)
              // const cities = await geonames.children({
              //   geonameId: regions.geonames[0].geonameId,
              // });
            };
          getRegion();
        } catch (err) {
          console.error(err);
        }
    }, [geoId]);

    const handleSelect = (e) => {
        setContentState(false)
      setSelected(e.target.innerText);
      setGeoId(e.target.value)
      setContent(false);
    };

    const handleSelectState = (e) => {
        setContent(false)
        setSelectedState(e.target.innerText)
        setGeoId(e.target.value)
        setContentState(false)
    }

    const handleSelectRegion = (e) => {
        setSelectedRegion(e.target.innerText);
        setGeoId(e.target.value);
        setContentRegion(false)
    }

    // console.log(countries)
    console.log(geoId)
    console.log(states)
    console.log(regions)
    return (
      <div>
        <>
          <div onClick={() => setContent(!content)} className={`select-btn`}>
            {selected ? <span>{selected}</span> : <span>Select Country</span>}
          </div>
          {content ? (
            <>
              <div className="content">
                <div className="search">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    value={search}
                  />
                </div>
                <ul className="options">
                  {countries
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.countryName.toLowerCase().includes(search);
                    })
                    .map((option, index) => (
                      <li
                        onClick={(e) => handleSelect(e)}
                        key={index}
                        value={option.geonameId}
                      >
                        {countries ? option.countryName : option.name}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
        <br />
        <br />
        <>
          <div
            onClick={() => setContentState(!contentState)}
            className={`select-btn`}
          >
            {selectedState ? (
              <span>{selectedState}</span>
            ) : (
              <span>Select Devision</span>
            )}
          </div>
          {contentState ? (
            <>
              <div className="content">
                <div className="search">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <ul className="options">
                  {states
                    ?.filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.toponymName.toLowerCase().includes(search);
                    })
                    ?.map((option, index) => (
                      <li
                        onClick={(e) => handleSelectState(e)}
                        key={index}
                        value={option.geonameId}
                      >
                        {option.toponymName}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
        <>
          <div
            onClick={() => setContentRegion(!contentRegion)}
            className={`select-btn`}
          >
            {selectedRegion ? (
              <span>{selectedRegion}</span>
            ) : (
              <span>Select District</span>
            )}
          </div>
          {contentRegion ? (
            <>
              <div className="content">
                <div className="search">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <ul className="options">
                  {regions
                    ?.filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.toponymName.toLowerCase().includes(search);
                    })
                    ?.map((option, index) => (
                      <li
                        onClick={(e) => handleSelectRegion(e)}
                        key={index}
                        value={option.geonameId}
                      >
                        {option.toponymName}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      </div>
    );
};

export default GeoNames;