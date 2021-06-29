export class ChangePasswordModel {
    public userName = '';
    public actualPassword = '';
    public newPassword = '';
    public confirmPassword = '';

    constructor(data?: ChangePasswordModel) {
        if (data) {
            for (const property in data) {
                if (Object.prototype.hasOwnProperty.call(data, property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}