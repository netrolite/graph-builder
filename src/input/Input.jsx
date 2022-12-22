import BrowseColorsPopup from "./components/popups/BrowseColorsPopup";
import Alert from "./components/popups/Alert"
import Physics from "./components/Physics";
import ShapeTypes from "./components/ShapeTypes";
import StrokeColor from "./components/StrokeColor";
import BgColor from "./components/BgColor";
import FillColors from "./components/FIllColors";
import StartAnimBtn from "./components/buttons/StartAnimBtn";
import RectSettings from "./components/RectSettings";
import CircSettings from "./components/CircSettings";
import { useState } from "react";

export default function Input() {
    const [showPalettesPopup, setShowPalettesPopup] = useState(false);
    // resets body background-color when going back from animation to this page
    document.body.style.backgroundColor = null;

    return (
        <main className="container p-4 main">
            <h1 className="mb-4 fw-semibold">Animation</h1>

            <form className="inputs">
                <BrowseColorsPopup showPalettesPopup={showPalettesPopup} />
                <Alert content="You can't leave any input fields blank!" />
                <Physics />
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
