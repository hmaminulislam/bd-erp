import React, { useState } from 'react';
import './Address.css'
import GeoLocation from './GeoLocation';


const Address = () => {
  const [value, setValue] = useState("");
  //billing
  const [selected, setSelected] = useState('');
  const [contentUnion, setContentUnion] = useState(false);
  const [contentZip, setContentZip] = useState(false);
  const [contentVillage, setContentVillage] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState('');
  const [village, setVillage] = useState('');
  const [house, setHouse] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');

  //shipping
  const [selectedShip, setSelectedShip] = useState("");
  const [contentUnionShip, setContentUnionShip] = useState(false);
  const [contentZipShip, setContentZipShip] = useState(false);
  const [contentVillageShip, setContentVillageShip] = useState(false);
  const [nameShip, setNameShip] = useState("");
  const [countryShip, setCountryShip] = useState("");
  const [stateShip, setStateShip] = useState("");
  const [districtShip, setDistrictShip] = useState("");
  const [cityShip, setCityShip] = useState("");
  const [zipShip, setZipShip] = useState("");
  const [villageShip, setVillageShip] = useState("");
  const [houseShip, setHouseShip] = useState("");
  const [phoneShip, setPhoneShip] = useState("");
  const [faxShip, setFaxShip] = useState("");

  const handleCopyBilling = () => {
    setSelectedShip(selected)
    setContentUnionShip(contentUnion)
    setContentZipShip(contentZip)
    setContentVillageShip(contentVillage)
    setNameShip(name)
    setCountryShip(country)
    setStateShip(state)
    setDistrictShip(district)
    setCityShip(city)
    setZipShip(zip)
    setVillageShip(village)
    setHouseShip(house)
    setPhoneShip(phone)
    setFaxShip(fax)
  }
console.log(house, phone, fax, city);
    return (
      <div className="address-container">
        <div className="billing-container">
          <h2 className="bil-title">Billing address</h2>
          <form>
            <div className="input-field">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter personal name"
              />
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
            <div className="input-field">
              <input
                onChange={(e) => setHouse(e.target.value)}
                className="input-field"
                type="text"
              />
            </div>
            {/* Phone */}
            <label className="label">Phone</label>
            <div className="input-field">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
                type="tel"
              />
            </div>
            {/* Fax */}
            <label className="label">Fax</label>
            <div className="input-field">
              <input
                onChange={(e) => setFax(e.target.value)}
                className="input-field"
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="shipping-container">
          <h2 className="ship-title">Shipping address</h2>
          <span onClick={handleCopyBilling} className="copy-bil">Copy Billing Address</span>
          <form>
            <div className="input-field">
              <input
                onChange={(e) => setNameShip(e.target.value)}
                type="text"
                placeholder="Enter personal name"
                value={nameShip}
              />
            </div>
            <label className="label">Country</label>
            <GeoLocation isCountry onChange={setCountryShip} setValue={setValue} value={value}></GeoLocation>
            <label className="label">Devision/Province/State</label>
            <GeoLocation onChange={setStateShip} geoId={countryShip}></GeoLocation>
            <label className="label">District</label>
            <GeoLocation onChange={setDistrictShip} geoId={stateShip}></GeoLocation>
            <label className="label">City/Sub District/Thana</label>
            <GeoLocation onChange={setCityShip} geoId={districtShip}></GeoLocation>
            {/* Union Area and Town */}
            <label className="label">Union/Area/Town</label>
            <div
              onClick={() => setContentUnionShip(!contentUnionShip)}
              className="select-btn"
            >
              {selectedShip ? <span>{selectedShip}</span> : <span>Please Search</span>}
            </div>
            <div className={`content ${contentUnionShip ? "active" : "deactive"}`}>
              <div className="search">
                <input
                  onChange={(e) => setSelectedShip(e.target.value)}
                  onBlur={() => setContentUnionShip(false)}
                  type="text"
                  placeholder="Search"
                  value={selectedShip}
                />
              </div>
            </div>
            {/* Zip code */}
            <label className="label">Zipcode</label>
            <div
              onClick={() => setContentZipShip(!contentZip)}
              className="select-btn"
            >
              {zipShip ? <span>{zipShip}</span> : <span>Please Search</span>}
            </div>
            <div className={`content ${contentZipShip ? "active" : "deactive"}`}>
              <div className="search">
                <input
                  onChange={(e) => setZipShip(e.target.value)}
                  onBlur={() => setContentZipShip(false)}
                  type="text"
                  placeholder="Search"
                  value={zipShip}
                />
              </div>
            </div>
            {/* Street Address and Village */}
            <label className="label">Street Address/Village</label>
            <div
              onClick={() => setContentVillageShip(!contentVillageShip)}
              className="select-btn"
            >
              {villageShip ? <span>{villageShip}</span> : <span>Please Search</span>}
            </div>
            <div
              className={`content ${contentVillageShip ? "active" : "deactive"}`}
            >
              <div className="search">
                <input
                  onChange={(e) => setVillageShip(e.target.value)}
                  onBlur={() => setContentVillageShip(false)}
                  type="text"
                  placeholder="Search"
                  value={villageShip}
                />
              </div>
            </div>
            {/* House apartment */}
            <label className="label">House/suite/apartment no</label>
            <div className="input-field">
              <input
                onChange={(e) => setHouseShip(e.target.value)}
                className="input-field"
                type="text"
                value={houseShip}
              />
            </div>
            {/* Phone */}
            <label className="label">Phone</label>
            <div className="input-field">
              <input
                onChange={(e) => setPhoneShip(e.target.value)}
                className="input-field"
                type="tel"
                value={phoneShip}
              />
            </div>
            {/* Fax */}
            <label className="label">Fax</label>
            <div className="input-field">
              <input
                onChange={(e) => setFaxShip(e.target.value)}
                className="input-field"
                type="text"
                value={faxShip}
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Address;