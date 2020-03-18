import {
	GET_USERS_LIST,
	GET_SINGLE_USER,
	DELETE_USER,
	ADD_USER
} from "./types";

export const getUsers = () => {
	return {
		type: GET_USERS_LIST
	};
};

export const addUser = user => {
	return {
		type: ADD_USER,
		payload: user
	};
};

export const deleteUser = id => {
	return {
		type: DELETE_USER,
		payload: id
	};
};

export const showUserDetails = id => {
	return {
		type: GET_SINGLE_USER,
		payload: id
	};
};
