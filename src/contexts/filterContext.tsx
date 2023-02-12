import React, { createContext, Dispatch, useReducer } from "react";


type FilterStateType = {
  search: String;
  range: {
    low: Number;
    high: Number;
  };
};

type FilterActionType = {
  type: "UPDATE_SEARCH" | "UPDATE_RANGE_LOW" | "UPDATE_RANGE_HIGH";
  data: String | Number;
};

const filterReducer = (state: FilterStateType, action: FilterActionType) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return { ...state, search: action.data };
    case "UPDATE_RANGE_LOW":
      return { ...state, range: { ...state.range, low: action.data } };
    case "UPDATE_RANGE_HIGH":
      return { ...state, range: { ...state.range, high: action.data } };
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
    props?: Object
  }


export const FilterContext = createContext<FilterStateType>(defaultState);

const FilterContextProvider: React.FC<FilterContextProps> = ({
  children,
  props,
}) => {
  const [filter, setFilter] = useReducer(filterReducer, defaultState);
  return (
    <FilterContext.Provider value={{ filter, setFilter }} {...props}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider
