import { Switch, Route } from 'react-router-dom' 
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'

function App() {
  // IT2: Prop-lifting ile Success sayfasına veri taşı
  const [orderResult, setOrderResult] = useState(null)

  return (
    <>
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Route path="/form">
          <Order onSubmitSuccess={setOrderResult} />
        </Route>
        <Route path="/success">
          <Success order={orderResult} />
        </Route>
     </Switch>
      
    </>
  )
}

export default App
