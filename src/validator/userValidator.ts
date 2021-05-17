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
        .withMessage('name is required')
        .isLength({min: 3, max: 20 })
        .withMessage('First name muste be 3 to 20 characters long'),

    check('email')
        .isEmail()
        .withMessage('Digite um email válido'),
]