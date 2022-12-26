import Link from 'next/link';
import * as React from 'react';

import DashboardLayout from '../../../components/Layout/DashboardLayout';

import { ProductTableColumns } from '../../../components/Table.tsx/ProductTableColumns';
import { products as ProductData } from '../../../fakeData/products';
import Tabs from '../../../components/Tabs';
import ProductCreateForm from '../../../sections/ProductCreateForm';
import dynamic from 'next/dynamic';

const DataTable = dynamic(
    () => import('../../../components/Table.tsx/DataTable'),
    { ssr: false },
);

const Products = () => {
    const [columnVisibility, setColumnVisibility] = React.useState({
        images: false,
        color: false,
        reviews: false,
        details: false,
        description: false,
    });

    return (
        <DashboardLayout>
            <div className="p-5 md:p-8">
                <div className="border-b border-dashed mb-5">
                    <h3 className="mb-2">Products Details</h3>
                </div>
                <div className="py-3">
                    <Tabs>
                        <Tabs.Pannel label="All Products">
                            <div className="mt-3">
                                <DataTable
                                    defaultColumns={ProductTableColumns}
                                    data={ProductData}
                                    columnVisibility={columnVisibility}
                                    setColumnVisibility={setColumnVisibility}
                                />
                            </div>
                        </Tabs.Pannel>
                        <Tabs.Pannel label="+Add Product">
                            <ProductCreateForm />
                        </Tabs.Pannel>
                    </Tabs>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Products;
