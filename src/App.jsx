import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav'
import NavBar from './component/NavBar/NavBar'
import PricingOption from './component/pricingOption/pricingOption'


const pricingPromise = fetch('PriceingData.json').then(res => res.json())
function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback ={<span className="loading loading-spinner loading-md"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
         
    </>
  )
}

export default App
