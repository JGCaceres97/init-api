import { Request, Response } from 'express';

export const signUp = (req: Request, res: Response) => {
  res.send('SignUp');
};

export const signIn = (req: Request, res: Response) => {
  res.send('SignIn');
};

export default usuarioCtrl;
