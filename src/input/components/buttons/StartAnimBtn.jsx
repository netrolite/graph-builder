import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../../../App";

export default function StartAnimBtn() {
    const navigate = useNavigate();

    const alertContext = useContext(AlertContext);
    const showAlert = alertContext.showAlert;
    const setShowAlert = alertContext.setShowAlert;
    const alertContent = alertContext.alertContent;
    const setAlertContent = alertContext.setAlertContent;


    // check if all values from all visible inputs are provided (not an empty string)
    function checkAllValsProvided(setShowNotAllValsAlert) {
        const inputsNodes = document.querySelectorAll("input");
        const inputs = Array.from(inputsNodes);
        // inputs type checkbox don't have a value so I'm excluding them
        const inputsExceptCheckboxes = inputs.filter(input => input.type !== "checkbox");

        // if any input value is out of min max range
        const invalidValInput = inputsExceptCheckboxes.find(input => {
            if (input.min || input.max) {
                return parseFloat(input.value) < parseFloat(input.min) 
                || parseFloat(input.value) > parseFloat(input.max);
            }
        })
        
        // if every value is provided
        const allProvided = inputsExceptCheckboxes.every(input => (
            input.value !== ""
        ))

        
        // if any of the values aren't provided or are invalid, activate alert and close after 1s
        if (!allProvided) {
            setAlertContent("You can't leave any input fields empty!");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
        else if (invalidValInput) {

            setAlertContent(`Invalid ${invalidValInput.name} input! Minimum value is ${invalidValInput.min}`);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
        else {
            navigate("/animation");
        }
    }

    return (
        <div className="mt-4">
            <button
                className="button w-100"
                onClick={checkAllValsProvided}
            >
                Start Animation
            </button>
        </div>
    )
}