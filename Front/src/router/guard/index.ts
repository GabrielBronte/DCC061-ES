import { required } from 'vuelidate/lib/validators';
import store from "@/store";
import { getModule } from "vuex-module-decorators";
import Auth from "@/store/modules/Auth/Auth.module";

const autModule = getModule(Auth, store);

export function verifyPermissions(to: any, next: any) {
  const requiredPermissions = to.matched.some(
    (record: any) => record.meta.requiredPermission
  );
  if (requiredPermissions) {
    let permissionsNeeded: any[] = [];
    let required = false;
    to.matched.find(
      (record: any) => {
        (permissionsNeeded = record.meta.requiredPermission)
        required = record.meta.requiredAllPermission
      }
    );
    if (required ? permissionsNeeded.find((x: any) => autModule.permissions.includes(x)) :
      permissionsNeeded.every((x: any) => autModule.permissions.includes(x))) {
      next();
    } else {
      next({
        path: "/error/403",
        params: { nextUrl: to.fullPath }
      });
    }
  } else {
    next();
  }
}

export const beforeEach = (to: any, from: any, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!autModule.accessToken) {
      next({
        path: "/error/403",
        params: { nextUrl: to.fullPath }
      });
    } else {
      verifyPermissions(to, next);
    }
  } else {
    next();
  }
};


