import React, { useState } from 'react';
import './Address.css'
import GeoLocation from './GeoLocation';


const Address = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
    return (
      <div className="address-container">
        <div className="billing-container">
          <h2>Billing address</h2>
          <form>
            <input type="text" placeholder="Enter personal name" />
            <label className="label">Country</label>
            <GeoLocation isCountry onChange={setCountry}></GeoLocation>
            <label className="label">Devision/Province/State</label>
            <GeoLocation onChange={setState} geoId={country}></GeoLocation>
            <label className="label">District</label>
            <GeoLocation onChange={setDistrict} geoId={state}></GeoLocation>
            <label className="label">City/Sub District/Thana</label>
            <GeoLocation onChange={setCity} geoId={district}></GeoLocation>
            <label className="label">Union/Area/Town</label>
            <GeoLocation onChange={setTown} geoId={city}></GeoLocation>
          </form>
        </div>
        <div className="shipping-container">
          <h2>Shipping address</h2>
        </div>
      </div>
    );
};

export default Address;


// import React, { useState } from "react";
// import Select from "react-select";

// export default function Address() {
//   // React state to manage selected options
//   const [selectedOptions, setSelectedOptions] = useState();

//   // Array of all options
//   const optionList = [
//     { value: "red", label: "Red" },
//     { value: "green", label: "Green" },
//     { value: "yellow", label: "Yellow" },
//     { value: "blue", label: "Blue" },
//     { value: "white", label: "White" }
//   ];

//   // Function triggered on selection
//   function handleSelect(data) {
//     setSelectedOptions(data);
//   }
//   return (
//     <div className="app">
//       <h2>Choose your color</h2>
//       <div className="dropdown-container">
//         <Select
//           options={optionList}
//           placeholder="Select color"
//           value={selectedOptions}
//           onChange={handleSelect}
//           isSearchable={true}
//           isMulti
//         />
//       </div>
//     </div>
//   );
// }