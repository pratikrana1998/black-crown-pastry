import { Routes, Route } from "react-router";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./components/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the Shop page.</h1>
}

const App = () => {
  return(
    /* Routes allows this application to register these Route level components that will then in turn render a specific component when it matches 
       the specific route that you're looking for */ 
    <Routes>
      <Route path='/' element={ <Navigation /> } >
        <Route index element={ <Home /> } />
        <Route path='shop' element={ <Shop /> } />
        <Route path='sign-in' element={ <SignIn /> } />
      </Route>
    </Routes>
  )
}

export default App;
