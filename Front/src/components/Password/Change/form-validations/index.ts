import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export const validations = {
    changePasswordModel: {
        userName: { required },
        actualPassword: {
            required,
        },
        newPassword: {
            required,
            minLength: minLength(6)
        },
        confirmPassword: {
            required,
            minLength: minLength(6),
            sameAsPassword: sameAs('newPassword')
        },
    },
};

export const loginErrors = (changePassword: any) => {
    const errors: string[] = [];

    if (!changePassword.userName.$dirty) {
        return errors;
    }

    if (!changePassword.userName.required) {
        errors.push("O campo 'Usuário' é obrigatório.");
    }

    return errors;
};

export const actualPasswordErrors = (changePassword: any) => {
    const errors: string[] = [];

    if (!changePassword.actualPassword.$dirty) {
        return errors;
    }

    if (!changePassword.actualPassword.required) {
        errors.push("O campo 'Senha Atual' é obrigatório.");
    }

    return errors;
};

export const newPasswordErrors = (changePassword: any) => {
    const errors: string[] = [];

    if (!changePassword.newPassword.$dirty) {
        return errors;
    }

    if (!changePassword.newPassword.required) {
        errors.push("O campo 'Nova Senha' é obrigatório.");
    }

    if (!changePassword.newPassword.minLength) {
        errors.push("A senha deve ter no mínimo 6 caracteres");
    }

    return errors;
};

export const confirmedPasswordErrors = (changePassword: any) => {
    const errors: string[] = [];

    if (!changePassword.confirmPassword.$dirty) {
        return errors;
    }

    if (!changePassword.confirmPassword.required) {
        errors.push("O campo 'Confirmação da nova senha' é obrigatório.");
    }

    if (!changePassword.confirmPassword.minLength) {
        errors.push("A senha deve ter no mínimo 6 caracteres");
    }

    if (!changePassword.confirmPassword.sameAsPassword) {
        errors.push("As senhas devem ser idênticas.");
    }

    return errors;
};



