import {SIGNIN, SIGNUP} from '../constants/actionType';

import * as api from '../api/index';

export const signin = (formData) => async (dispatch) => {
    try{
        const {data} = await api.signIn(formData);

        dispatch({type: SIGNIN, data});
        // history.push('/');
    } catch(error) {
        console.log(error);
    }
}

export const signup = (formData) => async(dispatch) => {
    try{
        const {data} = await api.signUp(formData);

        dispatch({type: SIGNUP, data});

        // history.push('/');
    } catch(error) {
        console.log(error);
    }
}