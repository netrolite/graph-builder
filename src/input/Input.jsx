import "./input.css"
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
    const [showPalettesWindow, setShowPalettesWindow] = useState(false);
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="container p-4 main">
            <div className="popup">
                <div className="bg-overlay"></div>
                <div className="popup-window p-4 container">
                    <Palettes
                        animData={animData}
                        setAnimData={setAnimData}
                    />
                </div>
            </div>

            <h1 className="mb-4 fw-semibold">Animation</h1>

            <div className="inputs">
                <ShapesAmount />
                <Velocity />
                <ShapeTypes />
                <FillColors setShowPalettesWindow={setShowPalettesWindow} />
                <RectSettings />
                <CircSettings />
            </div>

            <StartAnim />            
        </div>
    )
}
