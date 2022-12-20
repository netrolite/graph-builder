import { useContext } from "react";
import { Link } from "react-router-dom";
import { SetAnimDataContext } from "../../../App";
import { checkValuesProvided } from "../../functions";

export default function StartAnimBtn() {
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="mt-4">
            <Link to="/animation">
                <button
                    className="button w-100"
                    onClick={() => checkValuesProvided(setAnimData)}
                >
                    Start Animation
                </button>
            </Link>
        </div>
    )
}