import { ADD_TYPE } from '../_shared/types';

export const addTask = (task) => {
	// setInterval(() => {
	return function (dispatch) {
		setInterval(() => {
            dispatch({
                type: ADD_TYPE,
                newTask: task,
            })
        }, 3000);
	};

	// }, 3000);
};
