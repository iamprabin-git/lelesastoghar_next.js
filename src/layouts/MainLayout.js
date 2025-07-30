<<<<<<< HEAD
"use client"

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function MainLayout({children}) {
    const { theme } = useSelector((state) => state.userPreference);
  return (
    <div className={theme}>{children}
    
     <ToastContainer />
    </div>
  )
}

=======
"use client"

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function MainLayout({children}) {
    const { theme } = useSelector((state) => state.userPreference);
  return (
    <div className={theme}>{children}
    
     <ToastContainer />
    </div>
  )
}

>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
export default MainLayout;