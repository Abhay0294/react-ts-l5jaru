import * as React from 'react';
import './style.css';
import WelcomePage from './components/dummyfile'; //while importing don't give the file extension with it.
import ClassComponent from './components/class-component';
import FunctionalComponent from './components/functional-component';

export default function App() {
  return (
    <div>
      {/* <ClassComponent /> */}
      <FunctionalComponent />
    </div>
  );
}
