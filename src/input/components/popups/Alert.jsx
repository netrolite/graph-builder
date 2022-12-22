import { useContext } from "react";
import { ShowNotAllValsAlertContext, SetShowNotAllValsAlertContext } from "../../../App"

export default function Alert({content}) {
    const showNotAllValsAlert = useContext(ShowNotAllValsAlertContext);

    return (
        <div className={
            "alert alert-danger rounded-0 fs-5 bs-override-alert" 
            + (showNotAllValsAlert ? " active" : "")
        }
        >
            {content}
        </div>
    )
}
