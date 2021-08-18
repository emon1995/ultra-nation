import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const countryStyle = {display: 'inline-block',border: '1px solid gold', margin: '10px', padding: '10px', height: '300px', width: '300px'}
    return (
        <div style={countryStyle}>
            <h3>{name}</h3>
            <img style={{height: '50px'}} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region} </small></p>
            <button onClick={() => props.handleAddToCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;