import { useContext } from "react"
import { AnimDataContext, SetAnimDataContext } from "../../App"
import { changeProp } from "../functions"

export default function Velocity() {
    const animData = useContext(AnimDataContext);
    const setAnimData = useContext(SetAnimDataContext);

    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="velocity" className="form-label heading">Velocity</label>
                <div className="input-elem">
                    <input
                        type="number"
                        min={1}
                        id="velocity"
                        name="velocity"
                        className="form-control"
                        value={animData.velocity}
                        onChange={e => changeProp(e, setAnimData)}
                    />
                </div>
            </div>
        </div>
    )
}