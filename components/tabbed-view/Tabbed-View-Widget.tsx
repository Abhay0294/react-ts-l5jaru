import {
  ViewMapping,
  useTabbedView,
  TabbedViewStateProvider,
  TabbedViewContext,
} from './Use-Tabbed-View';
import { useContext } from 'react';
import React = require('react');

function View1() {
  const { currentView, getTabState, setTabState } =
    useContext(TabbedViewContext);
  return (
    <div className="view-type">
      <input
        placeholder="Type Something..."
        value={getTabState(currentView)?.inputBox || ''}
        onChange={(e) => setTabState({ inputBox: e.target.value })}
      ></input>
    </div>
  );
}

function View2() {
  const { getTabState } = useContext(TabbedViewContext);
  return (
    <div className="view-type">
      <div id="text">
        <div id="effect">You Typed "{getTabState('Properties')?.inputBox}"</div>
      </div>
    </div>
  );
}

const testMapping: ViewMapping = {
  Properties: {
    component: View1,
  },
  Trigger: {
    component: View2,
  },
};

export function TabbedViewWidget() {
  const {
    views,
    currentView,
    setCurrentView,
    component: Component,
  } = useTabbedView(testMapping, 'Properties');

  return (
    <div className="tabbed-view">
      <div className="tabs">
        <ul>
          {views.map((view) => (
            <li
              key={view}
              onClick={() => setCurrentView(view)}
              style={{
                background: `${currentView === view ? '#DBD5A4' : 'none'}`,
              }}
            >
              {view}
            </li>
          ))}
        </ul>
      </div>
      <div className="view">
        <TabbedViewStateProvider currentView={currentView}>
          <Component />
        </TabbedViewStateProvider>
      </div>
    </div>
  );
}

export default TabbedViewWidget;
