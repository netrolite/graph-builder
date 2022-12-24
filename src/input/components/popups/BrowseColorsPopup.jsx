import { useContext } from "react"
import { AnimDataContext } from "../../../App";
import Palettes from "../Palettes"

export default function BrowseColorsPopup({showPalettesPopup}) {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

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