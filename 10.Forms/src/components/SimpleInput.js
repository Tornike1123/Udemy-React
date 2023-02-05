import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameToueched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlur = () => {
		setEnteredNameToueched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameToueched(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		setEnteredName("");
		setEnteredNameToueched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onBlur={nameInputBlur}
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must be to Empty!</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
