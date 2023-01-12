import * as React from 'react';
import { linkMapping } from './constants/Constants';

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
            {
              id: 1,
              name: 'AWS',
              link: linkMapping.AWS,
            },
            {
              id: 2,
              name: 'Gerrit',
              link: linkMapping.Gerrit,
            },
            {
              id: 3,
              name: 'EXE',
              link: linkMapping.EXE,
            },
            {
              id: 4,
              name: 'Figma',
              link: linkMapping.Figma,
            },
            {
              id: 5,
              name: 'ALM',
              link: linkMapping.ALM,
            },
            {
              id: 6,
              name: 'Confluence',
              link: linkMapping.Confluence,
            },
            {
              id: 7,
              name: 'TimeSheet',
              link: linkMapping.TImeSheet,
            },
            {
              id: 8,
              name: 'Holiday Calender',
              link: linkMapping.HolidayCalender,
            },
            {
              id: 9,
              name: 'Leaves Calender',
              link: linkMapping.LeavesCalender,
            },
          ],
        }}
      />
    </div>
  );
}
