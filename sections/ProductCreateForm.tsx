import React from 'react';
import { Input } from '../components/Form';

const ProductCreateForm = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">
                    <div>
                        <Input type="text" label="Product Name" />
                        <Input type="Number" label="Prices" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreateForm;
