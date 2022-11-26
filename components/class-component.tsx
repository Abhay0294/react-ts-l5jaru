import * as React from 'react';
import WelcomePage from './prop-renderer';

class ClassComponent extends React.Component {
  protected dummyData = [
    { name: 'Abhay', class: 10 },
    { name: 'Ajay', class: 6 },
    { name: 'Vivek', class: 12 },
  ];
  render() {
    return (
      <div>
        <WelcomePage name={'Props'} />
      </div>
    );
  }
}
export default ClassComponent;
