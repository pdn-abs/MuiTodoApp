import { Grid } from '@mui/material';
import { React } from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';

const Task = (context) => {
	const { data: { id, todo }} = context;

	return	<Grid key={ id } container={ true }	role="Task" className="task">
		<Grid item={ true } xs={ 1.5 } className="button">
			<AddButton { ...context }/>
		</Grid>
		<Grid item={ true } xs={ 4 }>{ todo }</Grid>
		<Grid item={ true } xs={ 1.5 } className="button">
			<RemoveButton { ...context }/>
		</Grid>
	</Grid>;
};

export default Task;
