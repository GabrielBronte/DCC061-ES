import { required, minLength, alphaNum, email } from 'vuelidate/lib/validators';

export const validations = {
    cadastro: {
        username: { required },
        password: {
            required,
        }
    },
};

export const userNameErrors = (cadastro: any) => {
    const errors: string[] = [];

    if (!cadastro.username.$dirty) {
        return errors;
    }

    if (!cadastro.username.required) {
        errors.push("O campo 'Usuário' é obrigatório.");
    }
    
    return errors;
};

export const passwordErrors = (cadastro: any) => {
    const errors: string[] = [];


    if (!cadastro.password.$dirty) {
        return errors;
    }

    if (!cadastro.password.required) {
        errors.push("O campo 'Senha' é obrigatório.");
    }

    return errors;
};
