import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AnimDataContext, SetShowNotAllValsAlertContext } from "../../../App";

export default function StartAnimBtn() {
    const navigate = useNavigate();
    const animData = useContext(AnimDataContext);
    const setShowNotAllValsAlert = useContext(SetShowNotAllValsAlertContext);


    // check if all values from all visible inputs are provided (not an empty string)
    function checkAllValsProvided(setShowNotAllValsAlert) {
        const inputsNodes = document.querySelectorAll("input");
        const inputs = Array.from(inputsNodes);
        // inputs type checkbox don't have a value so I'm excluding them
        const inputsExceptCheckboxes = inputs.filter(input => input.type !== "checkbox");

        const allProvided = inputsExceptCheckboxes.every(input => (
            input.value !== ""
        ))

        // if any of the values aren't provided, activate alert and close after 1s
        if (!allProvided) {
            setShowNotAllValsAlert(true);
            setTimeout(() => {
                setShowNotAllValsAlert(false);
            }, 1500);
        }
        else {
            navigate("/animation");
        }
    }

    return (
        <div className="mt-4">
            <button
                className="button w-100"
                onClick={() => checkAllValsProvided(setShowNotAllValsAlert)}
            >
                Start Animation
            </button>
        </div>
    )
}