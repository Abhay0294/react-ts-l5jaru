import * as React from 'react';
import WelcomePage from './prop-renderer';

export default function FunctionalComponent() {
  return (
    <div>
      <WelcomePage name="Abhay" Age={27} />
    </div>
  );
}
