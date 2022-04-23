import { Switch, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const Routes = () => {
  return (
    <Switch>
      <Route exact path = "/">
        <Login/>
      </Route>

      <Route exact path = "/register">
        <Register/>
      </Route>

      <Route exact path = "/home">
        <Home/>
      </Route>
    </Switch>
  )
}

export default Routes