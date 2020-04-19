import { ADD_TYPE } from '../_shared/types';

const initalState = [
	{
		Id: 1,
		TaskName: 'Install NPM',
		IsCompleted: false,
	},
];

function TaskReducer(state = initalState, action) {
	switch (action.type) {
		case ADD_TYPE:            
			return [
                ...state,
                action.newTask
            ];
		default:
			return state;
	}
}
export default TaskReducer;
