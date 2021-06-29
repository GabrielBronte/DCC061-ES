import { required, minLength, alphaNum, email } from 'vuelidate/lib/validators';

export const validations = {
    login: {
        username: { required },
        password: {
            required,
        },
    },
};

export const userNameErrors = (login: any) => {
    const errors: string[] = [];

    if (!login.username.$dirty) {
        return errors;
    }

    if (!login.username.required) {
        errors.push("O campo 'Usuário' é obrigatório.");
    }
    
    return errors;
};

export const passwordErrors = (login: any) => {
    const errors: string[] = [];


    if (!login.password.$dirty) {
        return errors;
    }

    if (!login.password.required) {
        errors.push("O campo 'Senha' é obrigatório.");
    }

    return errors;
};
