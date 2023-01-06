import * as React from 'react';
import { CloneElement } from './components/element-clone/Clone';
import { TabbedViewWidget } from './components/tabbed-view/Tabbed-View-Widget';
import './style.css';

export default function App() {
  return (
    <div>
      {/* <TabbedViewWidget /> */}
      <CloneElement />
    </div>
  );
}
