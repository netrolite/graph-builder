import { useContext } from "react";
import { AnimDataContext, SetAnimDataContext } from "../../App";
import { changeProp, changePropBool } from "../functions";

export default function Physics() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="input-group">
            <label htmlFor="velocity" className="form-label heading">Physics</label>
            <div className="input-subgroup">
                <label htmlFor="velocity" className="form-label">Velocity</label>
                <input
                    type="number"
                    min={1}
                    id="velocity"
                    name="velocity"
                    data-prop="velocity"
                    className="form-control"
                    value={animData.velocity}
                    onChange={e => changeProp(e, setAnimData)}
                />
            </div>

            <div className="input-subgroup">
                <label htmlFor="shapes-amount" className="form-label">Amount of Shapes</label>
                <input
                    type="number"
                    min={1}
                    id="shapes-amount"
                    name="shapes-amount"
                    data-prop="shapesAmount"
                    className="form-control"
                    value={animData.shapesAmount}
                    onChange={e => changeProp(e, setAnimData)}
                />
            </div>
        </div>
    )
}