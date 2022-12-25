export const orders = [
    {
        id: 1,
        invoice: 'INV-0001',
        products: [123423, 2234324, 32342342],
        status: 'delivered',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'Paypal', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'delivered',
        },
    },
    {
        id: 2,
        invoice: 'INV-0002',
        products: [123423, 2234324, 32342342],
        status: 'pending',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'ApplePay', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'pending',
        },
    },

    {
        id: 3,
        invoice: 'INV-0003',
        products: [123423, 2234324, 32342342],
        status: 'shipped',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'visa', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'shipped',
        },
    },

    {
        id: 4,
        invoice: 'INV-0004',
        products: [123423, 2234324, 32342342],
        status: 'canceled',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'ApplePay', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'canceled',
        },
    },

    {
        id: 5,
        invoice: 'INV-0005',
        products: [123423, 2234324, 32342342],
        status: 'shipped',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'visa', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'pending',
        },
    },
    

    {
        id: 6,
        invoice: 'INV-0005',
        products: [123423, 2234324, 32342342],
        status: 'shipped',
        total: 1000,
        date: '2020-01-01',
        customer: { id: 1, name: 'John Doe' },
        payment: { method: 'visa', status: 'pending' },
        shipping: {
            phone: '123456789',
            address: '123 Street',
            status: 'pending',
        },
    },
];
