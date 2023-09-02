import * as React from 'react';

type RefreshCountSetter = (refreshCount: number) => void;

const RefreshContext = React.createContext<
  { refreshCount: number; setRefreshCount: RefreshCountSetter } | undefined
>(undefined);

// ---------- RefreshContextProvider ----------
interface RefreshContextProviderProps {
  initialState?: number;
  children?: React.ReactNode;
}

function RefreshContextProvider({
  initialState = 0,
  children,
}: RefreshContextProviderProps) {
  const [refreshCount, setRefreshCount] = React.useState<number>(initialState);

  const value = { refreshCount, setRefreshCount };
  return (
    <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>
  );
}

// ---------- useRefreshContext ----------
function useRefreshContext() {
  const refreshContext = React.useContext(RefreshContext);
  /* istanbul ignore next */
  if (refreshContext === undefined) {
    throw new Error(
      'useRefreshContext must be used within a RefreshContextProvider'
    );
  }
  return refreshContext;
}

export { RefreshContextProvider, useRefreshContext };
