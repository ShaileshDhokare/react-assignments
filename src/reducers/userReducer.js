import {
	SET_LOADING,
	GET_SINGLE_USER_SUCCESS,
	GET_SINGLE_USER_FAIL,
	GET_USERS_LIST_SUCCESS,
	GET_USERS_LIST_FAIL,
	ADD_USER_SUCCESS,
	DELETE_USER,
	GET_ERRORS
} from "../actions/types";

const initialState = {
	users: [],
	userDetails: {},
	errors: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_USERS_LIST_SUCCESS:
			return {
				...state,
				users: action.payload || state.users
			};

		case ADD_USER_SUCCESS:
			action.payload.id = state.users.length + 1;
			return {
				...state,
				users: [...state.users, action.payload]
			};

		case GET_SINGLE_USER_SUCCESS:
			return {
				...state,
				userDetails: action.payload
			};

		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.payload)
			};

		case SET_LOADING:
			return {
				...state,
				loading: !state.loading
			};

		case GET_SINGLE_USER_FAIL:
		case GET_USERS_LIST_FAIL:
		case GET_ERRORS:
			return {
				...state,
				errors: [state.errors, ...action.payload]
			};

		default:
			return state;
	}
}
