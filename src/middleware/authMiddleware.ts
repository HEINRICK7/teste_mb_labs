import { NextFunction, Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';

import * as authConfig from '../config/auth.json';

interface Token {
    id: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const { authAuthorization } = req.params;

    if(!authAuthorization)
    return res.status(401).send({error: 'No token provided'});

    const parts = authAuthorization.split(' ');

    if (!parts)
        return res.status(401).send({ error: 'Token error'});

    const [ scheme, token] = parts;
    
    if(!/^Bearer$/i.test(scheme))

        return res.status(401).send({ error: 'Token malformated'});


    jwt.verify( token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalid'});

        const { id } = decoded as Token;
        req.userId = id ;

        return next();

    })
}