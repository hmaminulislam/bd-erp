import React, { useState } from 'react';
import './Address.css'
import GeoLocation from './GeoLocation';
import GeoNames from './GeoNames';


const Address = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [town, setTown] = useState("");
  console.log(country);
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
          <GeoNames></GeoNames>
        </div>
      </div>
    );
};

export default Address;