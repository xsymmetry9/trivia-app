import React, { createContext} from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet, useLoaderData} from "react-router-dom"

export const AppContext = createContext({
  questions: []
});
const App = () => {

  const questions = useLoaderData();

  return (
    <AppContext.Provider value = {{questions}}>
      <div className ="root-start">
      <Header/>
      <div className ="content">
         <Outlet/>
      </div> 
        <Footer />
      </div>
    </AppContext.Provider>

  );
}

export default App;
