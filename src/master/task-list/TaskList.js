import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class TaskList extends React.Component {
	constructor() {
		super();
	}
	bindListView() {
		return _.map(this.props.Tasks, ({ TaskName, Id, IsCompleted }) => {
			return (
				<li key={Id} class='collection-item'>
					{TaskName}
				</li>
			);
		});
	}
	render() {
		return (
			<div className='row'>
				<ul className='collection col-12'>{this.bindListView()}</ul>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		Tasks: state.task,
	};
}
export default connect(mapStateToProps, null)(TaskList);
