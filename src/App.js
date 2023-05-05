import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import {Switch,Route} from 'react-router-dom';
import Product from './component/Product';
import Products from './component/Products';


function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/product' component={Product}/>
    <Route exact path='/products/:id' component={Products}/>
    </Switch>
    </>
  );
}

export default App;
