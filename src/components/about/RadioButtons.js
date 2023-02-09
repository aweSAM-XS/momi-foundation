import React, { useState } from 'react';

const RadioButtons = () => {
    const [selectedOption, setSelectedOption] = useState('about');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <input
                type='radio'
                value='mission'
                id='mission'
                name='slider'
                checked={selectedOption === 'mission'}
                onChange={handleOptionChange}
            />
            <input
                type='radio'
                value='about'
                id='about'
                name='slider'
                checked={selectedOption === 'about'}
                onChange={handleOptionChange}
            />
            <input
                type='radio'
                value='vision'
                id='vision'
                name='slider'
                checked={selectedOption === 'vision'}
                onChange={handleOptionChange}
            />
        </>
    );
};

export default RadioButtons;
