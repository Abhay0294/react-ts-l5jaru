import * as React from 'react';

export function DivElement(props): JSX.Element {
  const { properties } = props;

  return (
    <div className="parent-div">
      {Object.keys(properties).map((key) =>
        properties[key].map((item) => (
          <ul>
            <li key={item.id}>
              <a href={item.link} target="_blank">
                {item.name}
              </a>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}

export function CloneElement(): JSX.Element {
  return (
    <div>
      <DivElement
        properties={{
          key1: [
            { id: 1, name: 'Google', link: 'https://www.google.com' },
            { id: 2, name: 'Amazon', link: 'https://www.amazon.com' },
            {
              id: 3,
              name: 'Harman',
              link: 'https://www.harman.com/',
            },
            { id: 4, name: 'Adobe', link: 'https://www.Adobe.com' },
          ],
        }}
      />
    </div>
  );
}
