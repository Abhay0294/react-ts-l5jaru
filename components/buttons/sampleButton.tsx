import * as React from 'react';

export function SampleButton(props): JSX.Element {
  if (props.href)
    return (
      <a href="/" className="my-button" onClick={props.onClick} {...props}>
        Click Link
      </a>
    );
  else
    return (
      <button className="my-button" onClick={props.onClick} {...props}>
        Click Button
      </button>
    );
}
