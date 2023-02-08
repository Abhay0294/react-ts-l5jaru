import * as React from 'react';
import { CloneElement } from './components/element-clone/Clone';
import { TabbedViewWidget } from './components/tabbed-view/Tabbed-View-Widget';
import './style.css';
import { SampleButton } from './components/buttons/SampleButton';

import TypingEffect from './components/react-animation-text/Type-Animation';

export default function App() {
  const Customprops = {
    href: 'https://www.google.com',
    onClick: () => {
      location.href = 'https://www.google.com';
    },
    typingSpeed: 200,
    text: 'Hello & Welcome To My page',
  };
  return (
    <div>
      {/* <TabbedViewWidget /> */}
      {/* <SampleButton {...Customprops} /> */}
      <TypingEffect {...Customprops} />
    </div>
  );
}
