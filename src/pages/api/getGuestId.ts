import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const userAgent = req.headers['user-agent'] || '';
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';

    const stringToHash = userAgent + userIp;

    const guestId = crypto.createHash('sha256').update(stringToHash).digest('hex').substring(0, 16);

    res.status(200).json({ guestId });
}
