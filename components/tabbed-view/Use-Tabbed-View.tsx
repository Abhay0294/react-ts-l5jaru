import { createContext, ReactNode, useCallback, useState } from 'react';
import * as React from 'react';

export interface ViewMapping {
  [id: string]: {
    component: (props: any) => JSX.Element;
  };
}

export type useTabbedViewReturn = {
  views: string[];
  currentView: string;
  setCurrentView: (x: string) => void;
  component: (props: any) => JSX.Element;
};

export interface TabbedViewContextType {
  [viewName: string]: any;
}

export const TabbedViewContext = createContext<{
  getTabState: (viewName: string) => any;
  setTabState: (data: any) => void;
  currentView: string;
}>({
  getTabState: (view) => undefined,
  setTabState: () => undefined,
  currentView: '',
});

export function TabbedViewStateProvider(props: {
  currentView: string;
  children: ReactNode;
}) {
  const [tabState, setTabState] = useState<TabbedViewContextType>({});

  const getTabState = useCallback(
    (viewName: string) => tabState[viewName],
    [tabState]
  );
  const setTabStateCb = useCallback(
    (data: any) =>
      setTabState((state) => ({ ...state, [props.currentView]: data })),
    [props.currentView, tabState, setTabState]
  );

  return (
    <TabbedViewContext.Provider
      value={{
        getTabState,
        setTabState: setTabStateCb,
        currentView: props.currentView,
      }}
    >
      {props.children}
    </TabbedViewContext.Provider>
  );
}

export function useTabbedView(
  mapping: ViewMapping,
  defaultView: string
): useTabbedViewReturn {
  const [currentView, setCurrentView] = useState(defaultView);

  return {
    views: Object.keys(mapping) as string[],
    currentView,
    setCurrentView,
    component: mapping[currentView].component,
  };
}
