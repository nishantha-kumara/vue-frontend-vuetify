export const baseUrl = 'http://127.0.0.1:8000/';

export const userId = '2';
export const clientSecret = 'B9PRWm80pukzdtuu1hk4q1UBXt5nYIMkXecSsYjO';


export const getHeaders = function () {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'));
    const headers = {
        Authorization: 'Bearer ' + authUser.accessToken,
        Accept: 'application/json'
    }

    return headers;
}

export const isLogged = function () {
    const user = JSON.parse(window.localStorage.getItem('authUser'))
    if (user && user.accessToken) {
        return true;
    }else{
        return false;
    }
}


export const toast=function () {
    
}