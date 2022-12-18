import "./input.css"
import BrowseColorsPopup from "./components/popups/BrowseColorsPopup";
import ShapesAmount from "./components/ShapesAmount";
import Velocity from "./components/Velocity";
import ShapeTypes from "./components/ShapeTypes";
import Palettes from "./components/Palettes";
import FillColors from "./components/FIllColors";
import StartAnim from "./components/buttons/StartAnim";
import RectSettings from "./components/RectSettings";
import CircSettings from "./components/CircSettings";
import { useState, useContext } from "react";
import { AnimDataContext, SetAnimDataContext } from "../App";

export default function Input() {
    const [showPalettesPopup, setShowPalettesPopup] = useState(false);
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="container p-4 main">
            

            <h1 className="mb-4 fw-semibold">Animation</h1>

            <div className="inputs">
                <BrowseColorsPopup showPalettesPopup={showPalettesPopup} />
                <ShapesAmount />
                <Velocity />
                <ShapeTypes />
                <FillColors setShowPalettesPopup={setShowPalettesPopup} />
                <RectSettings />
                <CircSettings />
            </div>

            <StartAnim />            
        </div>
    )
}
