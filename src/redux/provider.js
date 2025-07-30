<<<<<<< HEAD
"use client"
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function AppProvider({children}) {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
    </Provider>
    
  )
}

=======
"use client"
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function AppProvider({children}) {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
    </Provider>
    
  )
}

>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
export default AppProvider;