import "./input.css"
import BrowseColorsPopup from "./components/popups/BrowseColorsPopup";
import ShapesAmount from "./components/ShapesAmount";
import Velocity from "./components/Velocity";
import ShapeTypes from "./components/ShapeTypes";
import FillColors from "./components/FIllColors";
import StartAnimBtn from "./components/buttons/StartAnimBtn";
import RectSettings from "./components/RectSettings";
import CircSettings from "./components/CircSettings";
import { useState } from "react";

export default function Input() {
    const [showPalettesPopup, setShowPalettesPopup] = useState(false);

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

            <StartAnimBtn />
        </div>
    )
}
