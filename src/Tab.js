import { createContext } from "react";


const TabContx = createContext();

function Tab ({currenttab, onChange, children}){
 return (
    <div>
        <TabContx.Provider value={{currenttab, onChange}} >
            {children}
            </TabContx.Provider>
    </div>
 )

}

export default Tab;