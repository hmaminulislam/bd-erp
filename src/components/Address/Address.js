import React, { useState } from 'react';
import './Address.css'
import GeoLocation from './GeoLocation';


const Address = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [selected, setSelected] = useState('');
  const [contentUnion, setContentUnion] = useState(false);
  const [contentZip, setContentZip] = useState(false);
  const [contentVillage, setContentVillage] = useState(false);
  const [zip, setZip] = useState('');
  const [village, setVillage] = useState('');

    return (
      <div className="address-container">
        <div className="billing-container">
          <h2>Billing address</h2>
          <form>
            <div className="input-field">
              <input type="text" placeholder="Enter personal name" />
            </div>
            <label className="label">Country</label>
            <GeoLocation isCountry onChange={setCountry}></GeoLocation>
            <label className="label">Devision/Province/State</label>
            <GeoLocation onChange={setState} geoId={country}></GeoLocation>
            <label className="label">District</label>
            <GeoLocation onChange={setDistrict} geoId={state}></GeoLocation>
            <label className="label">City/Sub District/Thana</label>
            <GeoLocation onChange={setCity} geoId={district}></GeoLocation>
            {/* Union Area and Town */}
            <label className="label">Union/Area/Town</label>
            <div
              onClick={() => setContentUnion(!contentUnion)}
              className="select-btn"
            >
              {selected ? <span>{selected}</span> : <span>Please Search</span>}
            </div>
            <div className={`content ${contentUnion ? "active" : "deactive"}`}>
              <div className="search">
                <input
                  onChange={(e) => setSelected(e.target.value)}
                  onBlur={() => setContentUnion(false)}
                  type="text"
                  placeholder="Search"
                  value={selected}
                />
              </div>
            </div>
            {/* Zip code */}
            <label className="label">Zipcode</label>
            <div
              onClick={() => setContentZip(!contentZip)}
              className="select-btn"
            >
              {zip ? <span>{zip}</span> : <span>Please Search</span>}
            </div>
            <div className={`content ${contentZip ? "active" : "deactive"}`}>
              <div className="search">
                <input
                  onChange={(e) => setZip(e.target.value)}
                  onBlur={() => setContentZip(false)}
                  type="text"
                  placeholder="Search"
                  value={zip}
                />
              </div>
            </div>
            {/* Street Address and Village */}
            <label className="label">Street Address/Village</label>
            <div
              onClick={() => setContentVillage(!contentVillage)}
              className="select-btn"
            >
              {village ? <span>{village}</span> : <span>Please Search</span>}
            </div>
            <div
              className={`content ${contentVillage ? "active" : "deactive"}`}
            >
              <div className="search">
                <input
                  onChange={(e) => setVillage(e.target.value)}
                  onBlur={() => setContentVillage(false)}
                  type="text"
                  placeholder="Search"
                  value={village}
                />
              </div>
            </div>
            {/* House apartment */}
            <label className="label">House/suite/apartment no</label>
            <div className='input-field'>
              <input className="input-field" type="text" />
            </div>
            {/* Phone */}
            <label className="label">Phone</label>
            <div className='input-field'>
              <input className="input-field" type="tel" />
            </div>
            {/* Fax */}
            <label className="label">Fax</label>
            <div className='input-field'>
              <input className="input-field" type="text" />
            </div>
          </form>
        </div>
        <div className="shipping-container">
          <h2>Shipping address</h2>
        </div>
      </div>
    );
};

export default Address;