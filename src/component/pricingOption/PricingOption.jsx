import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOption = ({pricingPromise}) => {
    const priceingData = use(pricingPromise);

    console.log(priceingData)

    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
                {/* {
                    priceingData.map(pricing => <PricingCard
                        key={pricing.id} pricing ={pricing}></PricingCard>)
                } */}
                {
                    priceingData.map(pricing => <DaisyPricingCard
                    key={pricing.id}
                         pricing ={pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOption;