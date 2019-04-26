import React from 'react';

export const getTestMarkup = (testCases) => (
    <div>
        {testCases.map((test, index) => {
            const label = test[0];
            const component = test[1];
            const wrapperStyle = test[2];

            return (
                <div key={index}>
                    <p>{label}</p>
                    <div style={wrapperStyle ? wrapperStyle : {}}>
                        {component}
                    </div>
                    <br/>
                </div>
            );
        })}
    </div>
);
