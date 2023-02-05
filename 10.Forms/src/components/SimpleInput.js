import { useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameisValid] = useState(false);
	const [enteredNameTouched, setEnteredNameToueched] = useState(false);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const nameInputBlur = () => {
		setEnteredNameToueched(true);
		if (enteredName.trim() === "") {
			setEnteredNameisValid(false);
			return;
		}
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		setEnteredNameToueched(true);

		if (enteredName.trim() === "") {
			setEnteredNameisValid(false);
			return;
		}

		setEnteredNameisValid(true);

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		// nameInputRef.current.value = ""; =>  useRed for update value is not ideal -  it is working, but it manipulates directly to the DOM
		setEnteredName("");
	};

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					ref={nameInputRef}
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
