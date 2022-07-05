import {SIGNIN, SIGNUP} from '../constants/actionType';
import Swal from 'sweetalert2'

import * as api from '../api/index';

export const signin = (formData) => async (dispatch) => {
    try{
        const {data} = await api.signIn(formData);

        dispatch({type: SIGNIN, data});
        // history.push('/');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Wellcome to ironbeez',
            showConfirmButton: false,
            timer: 2500
          })
    } catch(error) {
        console.log(error.response);
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.message}`,
            showConfirmButton: false,
            timer: 2500
        })
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