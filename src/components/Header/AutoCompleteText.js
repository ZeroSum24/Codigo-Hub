import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'white',
		borderRadius: '8px'
	}
}));

const AutoCompleteText = ({ firmwares }) => {
	const classes = useStyles();

	return (
		<Autocomplete
			style={{
				width: '200px',
				color: 'white'
			}}
			autoComplete
			autoHighlight
			selectOnFocus
			clearOnBlur
			freeSolo
			handleHomeEndKeys
			options={firmwares.map((option) => option.title)}
			renderInput={(params) => (
				<TextField
					classes={{
						root: classes.root // class name, e.g. `classes-nesting-root-x`
					}}
					InputProps={{
						root: classes.root // class name, e.g. `classes-nesting-root-x`
					}}
					color="primary"
					disableClearable
					size="medium"
					{...params}
					label="Search Firmware"
					margin="normal"
					variant="filled"
				/>
			)}
		/>
	);
};
export default AutoCompleteText;
