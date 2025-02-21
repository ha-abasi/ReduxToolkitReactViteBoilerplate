
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {pizzaOrder} from "./redux/features/pizza/pizzaSlice.js";
import {burgerOrder} from "./redux/features/burger/burgerSlice.js";

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
      <table className={"table"} style={{textAlign: "left"}}>
        <tbody>
          <tr>
            <td>Pizza: </td><td style={{color: "green"}}>{pizza.pizzaBase.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Burger:</td><td style={{color: "red"}}>{burger.burgerBuns.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <button onClick={handleClickPizza}>Order Pizza</button>
      &nbsp;|&nbsp;
      <button onClick={handleClickBurger}>Order Burger</button>
    </>
  )
}

export default App
