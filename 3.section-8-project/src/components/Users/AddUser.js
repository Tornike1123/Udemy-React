import React, { useState, useRef } from "react";
// import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Please entered a valid name and age (empty)",
			});
			return;
		}
		//example: var x = +'11' + +'12'
		//(+)we are forcing string to be a number
		if (+enteredAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Age should not be bellow the 1",
			});
			return;
		}
		props.onAddUser(enteredName, enteredAge);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		//<React.Fragment></React.Fragment> === <> </>
		<React.Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
};

export default AddUser;
