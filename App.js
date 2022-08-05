import { useEffect, useState } from "react";
import LoginRoute from "./loginRoute.js";
import Routing from "./routing.js";
import {Provider} from 'react-redux'
import store from './Store/Store'
function App() {


  store.subscribe(()=>{
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()) );
  })
  
const [Auth, setAuth] =useState(false)
useEffect(()=>{
  console.log(localStorage.getItem('auth'))
})

  return (
    <>
<Provider store={store}>

{localStorage.getItem('auth')==='Success' ?

<Routing/>

:
<LoginRoute/>

}
</Provider>
</>

  );
}

export default App;
