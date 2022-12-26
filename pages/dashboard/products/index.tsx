import * as React from 'react';
import DashboardLayout from '../../../components/Layout/DashboardLayout';
import { products as ProductData } from '../../../fakeData/products';
import Tabs from '../../../components/Tabs';
import ProductCreateForm from '../../../sections/ProductCreateForm';
// import axios from '../../../config/axios';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import DataTable from '../../../components/Table/DataTable';
import { ProductTableColumns } from '../../../components/Table/ProductTableColumns';

const Products = (props: any) => {
    const [columnVisibility, setColumnVisibility] = React.useState({
        images: false,
        color: false,
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
                                <React.Suspense
                                    fallback={<div>Loading...</div>}
                                >
                                    <DataTable
                                        defaultColumns={ProductTableColumns}
                                        data={ProductData}
                                        columnVisibility={columnVisibility}
                                        setColumnVisibility={
                                            setColumnVisibility
                                        }
                                    />
                                </React.Suspense>
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
