"use client";
import { createContext, ReactNode } from "react";
import { RootStore } from "./store";

export const StoreContext = createContext(RootStore);

export const StoreWrapper = ({ children }: { children: ReactNode }):ReactNode => {
  return (
    <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
  );
};