import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav'
import NavBar from './component/NavBar/NavBar'
import PricingOption from './component/pricingOption/pricingOption'
import RechartsChart from './component/RechartsChart/RechartsChart'
import MarksChart from './component/MarksChart/MarksChat'


const pricingPromise = fetch('PriceingData.json').then(res => res.json())

const marksPromise = fetch('markData.json').then(res => res.json());
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

        <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
          <MarksChart marksPromise={marksPromise} />
        </Suspense>

        <RechartsChart></RechartsChart>
      </main>
         
    </>
  )
}

export default App
