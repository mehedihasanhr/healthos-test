import * as React from 'react';
import { orders } from '../../fakeData/orders';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import Link from 'next/link';

const columnHelper = createColumnHelper<typeof orders[0]>();

const productStatus = {
    pending: 'bg-orange-500/10 text-orange-500',
    shipped: 'bg-green-500/10 text-green-500',
    delivered: 'bg-blue-500/10 text-blue-500',
    canceled: 'bg-red-500/10 text-red-500',
};

const paymentMehod = {
    paypal: 'fi fi-brands-paypal text-gray-500 -mb-1.5',
    credit: 'bg-green-500/10 text-green-500',
    visa: 'fi fi-brands-visa text-gray-500 text-4xl -mb-1.5',
    applepay: 'fi fi-brands-apple-pay text-gray-500 text-4xl -mb-1.5',
};

const columns = [
    columnHelper.accessor('invoice', {
        cell: (info) => (
            <Link
                href="/"
                className="text-sm font-semibold text-blue-600 hover:underline"
            >
                {info.getValue()}
            </Link>
        ),
        header: '# Invoice',
    }),

    columnHelper.accessor('products', {
        cell: (info) => (
            <span className="text-sm text-gray-500">
                {info.getValue().length} items
            </span>
        ),

        header: 'Products',
    }),

    columnHelper.accessor('total', {
        cell: (info) => (
            <span className="text-sm font-medium text-gray-500">
                ${info.getValue()}
            </span>
        ),
        header: 'Total',
    }),

    columnHelper.accessor('payment', {
        cell: (info) => (
            <span className="flex items-center space-x-1">
                <i
                    className={
                        paymentMehod[
                            info
                                .getValue()
                                .method.toLowerCase() as keyof typeof paymentMehod
                        ]
                    }
                />
                <span className="text-sm font-medium text-gray-500">
                    {info.getValue().method === 'Paypal'
                        ? (info.getValue().method as string)
                        : null}
                </span>
            </span>
        ),
    }),

    columnHelper.accessor('status', {
        cell: (info) => (
            <span
                className={`text-xs font-medium flex items-center w-fit px-2.5 rounded-full ${
                    productStatus[info.getValue() as keyof typeof productStatus]
                }`}
            >
                {info.getValue()}
            </span>
        ),
    }),
];

// order table component
const OrdersTable = () => {
    const table = useReactTable({
        data: orders,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="w-full table-fixed">
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className="bg-slate-100 py-4 px-4 text-left"
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr
                        key={row.id}
                        className="even:bg-slate-50/80 hover:bg-slate-50"
                    >
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="p-3 px-4 text-left">
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OrdersTable;
