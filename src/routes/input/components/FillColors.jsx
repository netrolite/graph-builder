import { useContext } from "react"
import { AnimDataContext } from "../../../App"
import FillColorsInputs from "./FillColorsInputs";
import AddColorBtn from "./buttons/AddColorBtn";
import BrowsePalettesBtn from "./buttons/BrowsePalettesBtn";

export default function FillColors({setShowPalettesPopup}) {
    const animDataContext = useContext(AnimDataContext);
    const animData = animDataContext.animData;
    const setAnimData = animDataContext.setAnimData;

    return (
        <div className="input-group">
            <label className="form-label heading">Fill Colors</label>
            <div>
                <div className="grid-2-cols">
                    <FillColorsInputs
                        animData={animData}
                        setAnimData={setAnimData}
                    />
                </div>
            </div>

            {/* "Add New" and "Browse Palettes" buttons */}
            {/* Wrapping in a div to fix safari grid row height bug */}
            {/* Also adding "height: min-content;" in CSS */}
            <div>
                <div className="input-subgroup grid-2-cols">
                    <AddColorBtn setAnimData={setAnimData} />
                    <BrowsePalettesBtn setShowPalettesPopup={setShowPalettesPopup} />
                </div>
            </div>
        </div>
    )
}