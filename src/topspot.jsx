import React from 'react';

export default props => {
  return (
    <div className='well'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a className='btn btn-success' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`}>View on Google Maps </a>
    </div>
  );
};
