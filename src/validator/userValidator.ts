import { Request, Response, NextFunction} from 'express'
import { check, validationResult } from 'express-validator'

export const userValidatorResult = ( req: Request, res: Response , next: NextFunction) => {

const result = validationResult(req);
if (!result.isEmpty()) {
    const error = result.array()[0].msg;
  return res.status(422).json({success: false, error: error});
}
next();
}

export const userValidator = [
    check('nome')
        .trim()
        .not()
        .isEmpty()
        .withMessage('O nome é obrigatório')
        .isLength({min: 3, max: 20 })
        .withMessage('O nome deve ter de 3 a 20 caracteres'),

    check('email')
        .isEmail()
        .withMessage('Digite um email válido'),

        check('password')
        .isLength({ min: 5 })
        .withMessage('Deve ter pelo menos 5 caracteres')
        .matches(/\d/)
        .withMessage('deve conter um número'),
]