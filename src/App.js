import './App.css';

import Products from './Products';

import { useSelector, useDispatch } from 'react-redux'
import { withdraw, deposite } from './rtk/slices/bank-slice';




function App() {

  const state = useSelector(state => state.bank)
  const dispatch = useDispatch()


  return (
    <div className="App">
      


      <p>Your balance: {state}</p>
      <button onClick={()=> dispatch(withdraw(100))}>Withdraw</button>
      <button onClick={()=> dispatch(deposite(100))}>Deposite</button>

      <Products />



    </div>
  )
}

export default App;
