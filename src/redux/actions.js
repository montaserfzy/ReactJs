import { OPEN_SIGNUP, OPEN_LOGIN} from "./actions-type";

export function openLogin(text) {
    return {
      type: OPEN_LOGIN,
      text
    }
}
export function openSignup(text) {
    return {
      type: OPEN_SIGNUP,
      text
    }
}
