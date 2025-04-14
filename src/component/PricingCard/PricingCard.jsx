import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing
    return (
        <div className='flex flex-col border bg-blue-400 rounded-2xl p-4'>
            {/* card headder */}
            <div >
                <h1 className='text-4xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-blue-200 rounded-2xl mt-10 flex-1'>
                <p className='text-[#000] p-3'>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures 
                    key={index} 
                    feature = {feature}></PricingFeatures>)
                }
            </div>
            <button className='btn w-full'>Subscribe</button>
        </div>
    );
};

export default PricingCard;