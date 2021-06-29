import { LoadState } from './modules/Load/model/Load.state';
import { AuthState } from "./modules/Auth/model/Auth.state";

export interface State {
  auth: AuthState;
  load: LoadState;
}
