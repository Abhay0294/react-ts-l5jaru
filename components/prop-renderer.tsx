import * as React from 'react';

function WelcomePage(props) {
  console.log('Received Props', props);
  return <div>{props.name}</div>;
}

export default WelcomePage;
