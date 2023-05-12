
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadCoffee = useLoaderData();


  return (
    <>
      <h2 className='text-center'> Thsis is coffee shop{loadCoffee.length}</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        {
          loadCoffee.map(coffee => <CoffeeCard coffee={coffee} key="coffee._id"></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
