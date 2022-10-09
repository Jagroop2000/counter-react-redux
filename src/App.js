import { useSelector , useDispatch} from 'react-redux';
import './App.css';


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment =()=>{
      dispatch({type : "INCR"})
  }
  const decrement =()=>{
    dispatch({type : "DECR"})
  }
  const addByTen =()=>{
    dispatch({type : "ADD",payload : 10})
  }
  return (
    <div className='container'>       
      <h1 className='d-flex   justify-content-center'> Counter  App : </h1>
      <h2 className='d-flex  justify-content-center'>{counter}</h2>
      <div className='button-alignment row'>
      <button type="button" class="btn btn-primary col-md-2" onClick={increment}>+</button>
      <button type="button" class="btn btn-primary col-md-2" onClick={decrement}>-</button>
      <button  type="button" class="btn btn-warning col-md-2" onClick={addByTen}>+ 10</button>
      </div>
    </div>
  );
}

export default App;
