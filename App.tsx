import * as React from 'react';
import { CloneElement } from './components/element-clone/Clone';
import { TabbedViewWidget } from './components/tabbed-view/Tabbed-View-Widget';
import './style.css';
import { SampleButton } from './components/buttons/sampleButton';

export default function App() {
  const Customprops = {
    href: 'https://www.google.com',
    onClick: () => {
      location.href = 'https://www.google.com';
    },
  };
  return (
    <div>
      {/* <TabbedViewWidget /> */}
      <SampleButton {...Customprops} />
    </div>
  );
}
