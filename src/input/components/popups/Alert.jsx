import { useContext } from "react";
import { AlertContext } from "../../../App"

export default function Alert() {
    const alertContext = useContext(AlertContext);
    const showAlert = alertContext.showAlert;
    const alertContent = alertContext.alertContent;

    return (
        <div className={
            "alert alert-danger rounded-0 fs-5 bs-override-alert" 
            + (showAlert ? " active" : "")
        }
        >
            {alertContent}
        </div>
    )
}
