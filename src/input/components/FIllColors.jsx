import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import FillColorsInputs from "./FIllColorsInputs";
import AddColor from "./buttons/AddColor";
import BrowsePalettes from "./buttons/BrowsePalettes";

export default function FillColors({setShowPalettesWindow}) {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

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
                    <AddColor setAnimData={setAnimData} />
                    <BrowsePalettes setShowPalettesWindow={setShowPalettesWindow} />
                </div>
            </div>
        </div>
    )
}