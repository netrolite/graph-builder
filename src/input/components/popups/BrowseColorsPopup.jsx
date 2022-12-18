import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../../App";
import Palettes from "../Palettes"

export default function BrowseColorsPopup({showPalettesPopup}) {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className={"popup" + (showPalettesPopup ? " active" : "")}>
            <div className="bg-overlay"></div>
            <div className="popup-window p-4 container">
                <Palettes
                    animData={animData}
                    setAnimData={setAnimData}
                />
            </div>
        </div>
    )
}