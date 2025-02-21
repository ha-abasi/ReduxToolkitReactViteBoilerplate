
import './App.css'
import logo from './assets/restaurant_logo.png'

import {useDispatch, useSelector} from "react-redux";
import {pizzaOrder} from "./redux/features/pizza/pizzaSlice.js";
import {burgerOrder} from "./redux/features/burger/burgerSlice.js";
import ProductListView from "./redux/features/products/ProductListView.jsx";

function App() {
  const pizza = useSelector(state => state.pizza);
  const burger = useSelector(state => state.burger);

  const dispatch = useDispatch();


  const handleClickPizza = () => {
    dispatch(pizzaOrder({amount: 1}))
  }

  const handleClickBurger = () => {
    dispatch(burgerOrder({amount: 1}))
  }

  return (
    <>
        <img src={logo} style={{width: "210px"}}/>
        <h1>Welcome to our restaurant</h1>
        <p>We offer a wide range of pizza and burger options.</p>
        <hr />
        <strong style={{fontSize: "18px", color: "crimson"}}>If you order a pizza, you will get two burger buns along with it!</strong>

      <table className={"table"} style={{textAlign: "left"}}>
        <tbody>
          <tr>
            <td style={{paddingRight: "10px"}}>Pizza amount left: </td><td style={{color: "green"}}>{pizza.pizzaBase.toLocaleString()}</td>
          </tr>
          <tr>
            <td style={{paddingRight: "10px"}}>Burger amount left:</td><td style={{color: "red"}}>{burger.burgerBuns.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <button onClick={handleClickPizza}>Order Pizza</button>
      &nbsp;|&nbsp;
      <button onClick={handleClickBurger}>Order Burger</button>

    <hr />
       <ProductListView/>
    </>
  )
}

export default App
