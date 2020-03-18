import { put, takeLatest } from 'redux-saga/effects';

import { SET_LOADING, GET_SINGLE_USER, GET_SINGLE_USER_SUCCESS, GET_SINGLE_USER_FAIL, GET_USERS_LIST, GET_USERS_LIST_SUCCESS, GET_USERS_LIST_FAIL, ADD_USER, ADD_USER_SUCCESS } from '../actions/types';

function* fetchUser() {
    yield put({ type: SET_LOADING });
    try {
        const users = yield fetch('https://jsonplaceholder.typicode.com/users')
                        .then(response => response.json()); 

        yield put({ type: GET_USERS_LIST_SUCCESS, payload: users });
    } catch (e) {
        yield put({type: GET_USERS_LIST_FAIL, payload: e.message});
    }
    yield put({ type: SET_LOADING });
}
function* fetchUserDetails({action, payload}) {
    try {
        const user = yield fetch(`https://jsonplaceholder.typicode.com/users/${payload}`)
                        .then(response => response.json());

        yield put({ type: GET_SINGLE_USER_SUCCESS, payload: user });
    } catch (e) {
        yield put({type: GET_SINGLE_USER_FAIL, payload: e.message});
    }
}

function* addUser({action, payload}) {
    yield put({ type: ADD_USER_SUCCESS, payload});
}

export function* actionWatcher(){
    yield takeLatest(GET_USERS_LIST, fetchUser);
    yield takeLatest(GET_SINGLE_USER, fetchUserDetails);
    yield takeLatest(ADD_USER, addUser);
}
