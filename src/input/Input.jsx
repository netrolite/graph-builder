import "./input.css"
import BrowseColorsPopup from "./components/popups/BrowseColorsPopup";
import ShapesAmount from "./components/ShapesAmount";
import Velocity from "./components/Velocity";
import ShapeTypes from "./components/ShapeTypes";
import StrokeColor from "./components/StrokeColor";
import BgColor from "./components/BgColor";
import FillColors from "./components/FIllColors";
import StartAnimBtn from "./components/buttons/StartAnimBtn";
import RectSettings from "./components/RectSettings";
import CircSettings from "./components/CircSettings";
import { checkValuesProvided } from "./functions";
import { useContext, useState } from "react";
import { SetAnimDataContext } from "../App";

export default function Input() {
    const setAnimData = useContext(SetAnimDataContext);
    const [showPalettesPopup, setShowPalettesPopup] = useState(false);
    // resets body background-color when going back from animation to this page
    document.body.style.backgroundColor = null;

    return (
        <main className="container p-4 main">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            <form className="inputs">
                <BrowseColorsPopup showPalettesPopup={showPalettesPopup} />
                <ShapesAmount />
                <Velocity />
                <BgColor />
                <StrokeColor />
                <FillColors setShowPalettesPopup={setShowPalettesPopup} />
                <ShapeTypes />
                <RectSettings />
                <CircSettings />
            </form>

            <StartAnimBtn />
        </main>
    )
}
