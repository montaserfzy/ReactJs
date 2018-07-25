import { combineReducers } from 'redux'

import {openLogin} from "./actions"

var initState = {
    page : "home-page",
    param: []
}
function onLogin(state, action){
    if(state == undefined){
        return initState
    }
    return state
}



const registerApp = combineReducers({
    onLogin,
});
export default registerApp