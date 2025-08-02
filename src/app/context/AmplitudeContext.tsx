'use client';
import { useEffect, createContext } from 'react';
import { init, track } from '@amplitude/analytics-browser';

export const AmplitudeContext = createContext({});

import { ReactNode } from 'react';
import { BaseEvent } from '@amplitude/analytics-browser/lib/esm/types';
import { useContext } from 'react';

interface AmplitudeContextProviderProps {
  children: ReactNode;
}

const AmplitudeProviderContext = createContext<{
  trackAmplitudeEvent: (
    eventName: string | BaseEvent,
    eventProperties?: Record<string, any>
  ) => void;
}>({
  trackAmplitudeEvent: () => {},
});

const AmplitudeContextProvider = ({
  children,
}: AmplitudeContextProviderProps) => {
  useEffect(() => {
    init('780fbeed1a62d891270fada0a4ebfaa4', undefined, {
      defaultTracking: {
        sessions: true,
      },
    });
  }, []);
  const trackAmplitudeEvent = (
    eventName: string | BaseEvent,
    eventProperties: Record<string, any> | undefined
  ) => {
    track(eventName, eventProperties);
  };

  const value = { trackAmplitudeEvent };

  return (
    <AmplitudeProviderContext.Provider value={value}>
      {children}
    </AmplitudeProviderContext.Provider>
  );
};

const useAmplitudeContext = () => {
  const context = useContext(AmplitudeProviderContext);
  if (context === undefined)
    throw new Error(
      'useAmplitudeContext must be used within a AmplitudeContextProvider'
    );
  return context;
};

export { AmplitudeContextProvider, useAmplitudeContext };
