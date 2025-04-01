import React, {createContext, Dispatch, ReactNode, SetStateAction, use, useState} from "react";

interface ISomeContext {
    value: number | null,
    setValue: Dispatch<SetStateAction<number | null>>,
}

export const SomeContext = createContext<ISomeContext>({
    value: null,
    setValue: () => {},
});

export const SomeContextProvider = ({ children  } : { children : ReactNode}) => {
  const [value, setValue] = useState<number | null>(null);
  return (
      <SomeContext value={{value, setValue}}>
          {children}
      </SomeContext>
  )
};

export const useSomeContext = () => use(SomeContext);
