import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';

import AddNewFood from './Component/Add New food/AddNewFood';
import Foods from './Component/FoodOrder/Foods';
import Login from './Component/LoginAndSignup/Login';
import Signup from './Component/LoginAndSignup/Signup';
import AuthProvider from './Component/Context/AuthProvider';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import MyOrder from './Component/My order/MyOrder';
import Footer from './Component/Footer/Footer';
import AllOrders from './Component/All Order/AllOrders';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/foodorder">
            <Foods></Foods>
          </Route>
          <Route path="/addnewfood">
            <AddNewFood></AddNewFood>
          </Route>
          <Route path="/orderPlaced/:id">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/allorder">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
