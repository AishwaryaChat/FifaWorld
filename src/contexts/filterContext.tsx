import React, { createContext, Dispatch, useMemo, useReducer } from "react";

type FilterStateType = {
  search: String;
  range: {
    low: Number;
    high: Number;
  };
};

type FilterActionType = {
  type: "UPDATE_SEARCH" | "UPDATE_RANGE";
  data: String | Number;
};

const filterReducer = (state: FilterStateType, action: FilterActionType) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, search: action.data };
    case "UPDATE_RANGE":
      return { ...state, range: action.data };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const defaultState = {
  search: "",
  range: {
    low: 0,
    high: 100000,
  },
};

interface FilterContextProps {
  // <--- your custom page props
  children: React.ReactNode;
  props?: Object;
}

export const FilterContext = createContext<FilterStateType>(defaultState);

const FilterContextProvider: React.FC<FilterContextProps> = ({
  children,
  props,
}) => {
  const [filter, setFilter] = useReducer(filterReducer, defaultState);
  const contextValue = useMemo(
    () => ({ filter, setFilter }),
    [filter, setFilter]
  );
  return (
    <FilterContext.Provider value={contextValue} {...props}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
