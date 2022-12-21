import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnimDataContext, SetShowNotAllValsPopup } from "../../../App";
import { checkAllValsProvided } from "../../functions";

export default function StartAnimBtn() {
    const animData = useContext(AnimDataContext);
    const setShowNotAllValsPopup = useContext(SetShowNotAllValsPopup);

    return (
        <div className="mt-4">
            <button
                className="button w-100"
                onClick={() => checkAllValsProvided(animData, setShowNotAllValsPopup)}
            >
                Start Animation
            </button>
        </div>
    )
}