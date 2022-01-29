import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom' 
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Products from './components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col align-center">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/products" component={Products}/>
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
