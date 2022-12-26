// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../fakeData/products';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<typeof products>,
) {
    if (req.method === 'GET') {
        res.status(200).json(products);
    }
}
