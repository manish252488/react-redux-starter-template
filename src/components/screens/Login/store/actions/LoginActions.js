import { auth } from "../../../../../config/auth";
import { isFunction } from '../../../../../utils/Utils';
export const LOGIN_USER = '[LOGIN] LOGIN USER';
export function login({ data, onSuccess, onFailure }) {
    return dispatch =>
        auth.signInWithEmail(data)
            .then(res => {
                dispatch({
                    type: LOGIN_USER,
                    payload: res
                })
                if (isFunction(onSuccess)) onSuccess();
            })
            .catch(err => {
                console.log("login failed", err)
                if (isFunction(onFailure)) onFailure()
            })
}
export function loginWithJwt() {

}