import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeProp } from "../functions"

export default function ShapesAmount() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="shapes-amount" className="form-label heading">Amount of Shapes</label>
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