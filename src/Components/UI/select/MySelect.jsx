import React from 'react';

const MySelect = ({option, DefaultValue,value, onChange}) => {
    return (
        <select
            value={value}
            onChange = {event => onChange(event.target.value)}
        >
            <option disabled value="">{DefaultValue}</option>
            {option.map(option =>
                <option key ={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;