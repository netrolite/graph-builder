import { useContext } from "react";
import { AnimDataContext, SetAnimDataContext } from "../../App";
import { changeProp } from "../functions";

export default function BgColor() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="bg-color" className="form-label heading">Background Color</label>
                <div className="input-color-wrapper">
                    <input 
                        type="color"
                        className="form-control form-control-color"
                        value={animData.bgColor}
                        id="bg-color"
                        name="bgColor"
                        onChange={e => changeProp(e, setAnimData)}
                    />

                    {animData.bgColor}
                </div>
            </div>
        </div>
    )
}