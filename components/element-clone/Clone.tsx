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
            {
              id: 1,
              name: 'AWS',
              link: 'http://awsmblx550bs059:3000/',
            },
            {
              id: 2,
              name: 'Gerrit',
              link: 'https://gerrit1.harman.com/dashboard/self',
            },
            {
              id: 3,
              name: 'EXE',
              link: 'https://artifactory-mb.harman.com/ui/packages',
            },
            {
              id: 4,
              name: 'Figma',
              link: 'https://www.figma.com/file/HStiZvrxDvYff9ijEhB09S/Harman-Space-4-Tool-Kit-(Copy-2)?node-id=3%3A2&t=juntBXp1PKJemrun-0',
            },
            {
              id: 5,
              name: 'ALM',
              link: 'https://alm.harman.com/ccm/web/projects/Base%20Software%20(CCM)#action=com.ibm.team.dashboard.viewDashboard&team=GTC-FS%20TOOLS',
            },
            {
              id: 6,
              name: 'Confluence',
              link: 'https://confluence.harman.com/confluence/display/CCSPTOOLS/CoC+SWPF+DevTools+Home',
            },
            {
              id: 7,
              name: 'TimeSheet',
              link: 'https://workplace.harman.com/apps/EasyPlanning/TimeSheet/_layouts/15/start.aspx#/SitePages/Data%20Entry.aspx',
            },
            {
              id: 8,
              name: 'Holiday Calender',
              link: 'https://confluence.harman.com/confluence/display/CCSPTOOLS/Holiday+Calendar+2022',
            },
            {
              id: 9,
              name: 'Leaves Calender',
              link: 'https://confluence.harman.com/confluence/display/CCSPTOOLS/calendars',
            },
          ],
        }}
      />
    </div>
  );
}
