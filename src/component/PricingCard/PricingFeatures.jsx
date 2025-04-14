import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex gap-3 p-2'><CircleCheckBig className='ml-5'></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeatures;