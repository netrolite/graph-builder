import { useContext } from "react";
import { ShowNotAllValsAlertContext } from "../../../App"

export default function Alert({content}) {
    const showNotAllValsAlertContext = useContext(ShowNotAllValsAlertContext);
    const showNotAllValsAlert = showNotAllValsAlertContext.showNotAllValsAlert;

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
