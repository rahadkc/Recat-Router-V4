import React from 'react';

const NoMatch = ({location}) => {
    return(
        <h2>Page not found {location.pathname}</h2>
    )
};

export default NoMatch;