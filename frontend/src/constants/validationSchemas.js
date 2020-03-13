import * as Yup from 'yup';

const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,64}$/;

const wrongNameWarningMessage = field => `${field}Name must contains only letters and starts of capital letter`;
const wrongPasswordWarningMessage = `Password must contains from 8 to 64 characters(upper, lowercase letters or numbers) and starts of letter`

export const signUpSchema = Yup.object().shape({
                                                 firstName: Yup.string().required().matches(NAME_PATTERN, wrongNameWarningMessage('First')).label('First name'),
                                                 lastName: Yup.string().required().matches(NAME_PATTERN, wrongNameWarningMessage('Last')).label('Last name'),
                                                 email: Yup.string().email().required().label('Email'),
                                                 password: Yup.string().required().matches(PASSWORD_PATTERN, wrongPasswordWarningMessage).label('Password'),
                                                 confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Both password need to be the same').label('Confirm password'),
                                               });

export const signInSchema = Yup.object().shape({
                                                 email: Yup.string().email().required().label('Email'),
                                                 password: Yup.string().min(8).required().matches(PASSWORD_PATTERN, wrongPasswordWarningMessage).label('Password'),
                                               });