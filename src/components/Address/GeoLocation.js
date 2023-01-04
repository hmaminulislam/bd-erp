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
    const [currentItem, setCurrentItem] = useState('');
    const [options, setOptions] = useState([]);
 
    useEffect(() => {
      try {
        const data = async () => {
          (await isCountry)
            ? geonames.countryInfo({}).then((res) => {
                console.log(res);
                setOptions(res.geonames);
              })
            : geonames.children({ geonameId: geoId }).then((res) => {
                if (res.totalResultsCount) setOptions(res.geonames);
              });
        };
        data();
      } catch (err) {
        console.error(err);
      }
    }, [geoId, isCountry]);

    const handleChange = (e) => {
        setCurrentItem(e.target.value)
        onChange(e.target.value)
    }

    return (
      <div className="select-box">
        <select value={currentItem} onChange={handleChange}>
          <option selected disabled>
            Please Search
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.geonameId}>
              {isCountry ? option.countryName : option.name}
            </option>
          ))}
        </select>
        
      </div>
    );
};

export default GeoLocation;