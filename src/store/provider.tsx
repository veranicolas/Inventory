import { ReactNode, createContext } from "react";
import { RootStore } from ".";

export const InventoryContext = createContext(RootStore)

export const StoreWrapper = ({children}: { children: ReactNode}) =>{
    return(
        <InventoryContext.Provider value={RootStore}>
            {children}
        </InventoryContext.Provider>
    )
}