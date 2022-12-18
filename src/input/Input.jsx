import "./input.css"
import ShapesAmount from "./components/ShapesAmount";
import Velocity from "./components/Velocity";
import ShapeTypes from "./components/ShapeTypes";
import FillColors from "./components/FIllColors";
import Palettes from "./components/Palettes";
import AddColor from "./components/buttons/AddColor";
import StartAnim from "./components/buttons/StartAnim";
import BrowsePalettes from "./components/buttons/BrowsePalettes";
import { useState, useContext } from "react";
import { AnimDataContext, SetAnimDataContext } from "../App";

export default function Input() {
    const [showPalettesWindow, setShowPalettesWindow] = useState(false);
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);
    

    let rectanglesSettingsNode;
    let circlesSettingsNode;


    if (animData.rectangles.checked) {
        rectanglesSettingsNode = (
            <div className="input-group">
                <label className="form-label heading">Rectangles Settings</label>
                {/* name attribute is for identifying the shape */}
                {/* id attribute is for label working correctly */}
                {/* data attribute is for identifying the shape prop (width, height, radius...) */}
                <div className="input-subgroup">
                    <label htmlFor="rect-width" className="form-label">Width</label>
                    <div className="input-elem">
                        <input
                            className="form-control"
                            type="number"
                            id="rect-width"
                            name="rectangles"
                            data-shape-prop="width"
                            onChange={e => changeShapeProp(e)}
                            value={animData.rectangles.width}
                        />
                    </div>
                </div>

                <div className="input-subgroup">
                    <label htmlFor="rect-height" className="form-label">Height</label>
                    <div className="input-elem">
                        <input
                            className="form-control"
                            type="number"
                            id="rect-height"
                            name="rectangles"
                            data-shape-prop="height"
                            onChange={e => changeShapeProp(e)}
                            value={animData.rectangles.height}
                        />
                    </div>
                </div>

                <div className="input-subgroup">
                    <label htmlFor="rect-corner-radius" className="form-label">Corner Radius</label>
                    <div className="input-elem">
                        <input
                            className="form-control"
                            type="number"
                            id="rect-corner-radius"
                            name="rectangles"
                            data-shape-prop="cornerRadius"
                            onChange={e => changeShapeProp(e)}
                            value={animData.rectangles.cornerRadius}
                        />
                    </div>
                </div>

                <div className="input-subgroup">
                    <div className="checkbox-group">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="rect-filled"
                            name="rectangles"
                            data-shape-prop="filled"
                            checked={animData.rectangles.filled}
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="rect-filled">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

    if (animData.circles.checked) {
        circlesSettingsNode = (
            <div className="input-group">
                <label className="form-label heading">Circles Settings</label>

                <div className="input-subgroup">
                    <label htmlFor="circ-radius" className="form-label">Radius</label>
                    <div className="input-elem">
                        <input
                            className="form-control"
                            type="number"
                            id="circ-radius"
                            name="circles"
                            data-shape-prop="radius"
                            onChange={e => changeShapeProp(e)}
                            value={animData.circles.radius}
                        />
                    </div>
                </div>

                <div className="input-subgroup">
                    <div className="checkbox-group">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="circ-filled"
                            name="circles"
                            data-shape-prop="filled"
                            checked={animData.circles.filled}
                            onChange={e => changeShapeProp(e, true)}
                        />
                        <label htmlFor="circ-filled">Filled</label>
                    </div>
                </div>
            </div>
        )
    }

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

                <ShapesAmount animData={animData} setAnimData={setAnimData} />

                <Velocity animData={animData} setAnimData={setAnimData} />

                <ShapeTypes animData={animData} setAnimData={setAnimData} />
                

                {/* Colors */}
                <div className="input-group">
                    <label className="form-label heading">Fill Colors</label>
                    <div>
                        <div className="grid-2-cols">
                            <FillColors
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

                {rectanglesSettingsNode}
                {circlesSettingsNode}

            </div>

            <StartAnim />            
        </div>
    )
}
