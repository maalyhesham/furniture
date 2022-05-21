import React from "react"
import ReactNotification from "react-notifications-component"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ReactToolTip from "react-tooltip"
import { Home, AboutUs, } from "./pages"


function App() {


  return (
    <div className="App greenish-theme">
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={AboutUs} />
          <Route path={['/', '/home']} component={Home} />
        </Switch>
      </BrowserRouter>
      <ReactToolTip delayShow={300} type='light' />
      <ReactNotification />
    </div>
  )
}

export default App
