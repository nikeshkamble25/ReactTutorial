import React from 'react';

class TaskForm extends React.Component {
	constructor(prop) {
		super(prop);
		this.state = {
			currentTask: '',
			addTask: prop.addTask,
		};
		this.saveTextBoxState = this.saveTextBoxState.bind(this);
	}

	saveTextBoxState(event) {
		this.setState({ currentTask: event.target.value });
	}
	render() {
		return (
			<div className='row'>
				<div class='input-field col-10'>
					<input
						placeholder='Hows in your mind?'
						id='currentTask'
						type='text'
						className='validate'
						onChange={this.saveTextBoxState}
					/>
					<label for='first_name'></label>
				</div>
				<div className='col-2'>
					<a
						className='waves-effect waves-light btn'
						onClick={() => {
							this.state.addTask(this.state.currentTask);
						}}
					>
						Add Task
					</a>
				</div>
			</div>
		);
	}
}
export default TaskForm;
