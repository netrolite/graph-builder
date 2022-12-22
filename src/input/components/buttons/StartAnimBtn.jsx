import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimDataContext, SetShowNotAllValsAlertContext } from "../../../App";
import { checkAllValsProvided } from "../../functions";

export default function StartAnimBtn() {
    const animData = useContext(AnimDataContext);
    const setShowNotAllValsAlert = useContext(SetShowNotAllValsAlertContext);

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