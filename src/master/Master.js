import React from 'react';
import TaskForm from './task-form/TaskForm';
import TaskList from './task-list/TaskList';
import _ from 'lodash';
import * as actions from '../_actions';
import { connect } from 'react-redux';

class App extends React.Component {
	Title = 'Task Manager V11';
	constructor() {
		super();
		this.AddTask = this.AddTask.bind(this);
	}

	AddTask(task) {
		this.props.addTask({
			Id: this.props.Tasks.length + 1,
			TaskName: task,
			IsCompleted: false,
		});		
	}

	render() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<h4>{this.Title}</h4>
					</div>
					<TaskForm
						addTask={this.AddTask}
					></TaskForm>
					<TaskList></TaskList>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		Tasks: state.task,
	};
}
export default connect(mapStateToProps, actions)(App);
