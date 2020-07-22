import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		background: 'white',
		borderRadius: '8px',
		height: '50px'
	}
}));

const AutoCompleteText = (props) => {
	const classes = useStyles();
	const [ inputValue, setInputValue ] = React.useState('');

	const fontIconClick = (e, props) => {
		e.preventDefault();
	};

	return (
		<React.Fragment>
			<Autocomplete
				style={{
					width: '200px',
					color: 'white'
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				autoComplete
				autoHighlight
				selectOnFocus
				clearOnBlur
				freeSolo
				handleHomeEndKeys
				options={props.firmwares.map((option) => option.title)}
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
						size="small"
						{...params}
						label="Search Firmware"
						margin="normal"
						variant="filled"
					/>
				)}
			/>
			<div>
				<Link to={'/app/top_firmware/' + `${inputValue}`}>
					<IconButton color="inherit" aria-label="add an alarm">
						<SearchIcon style={{ fontSize: 35 }} />
					</IconButton>
				</Link>
			</div>
		</React.Fragment>
	);
};
export default AutoCompleteText;
