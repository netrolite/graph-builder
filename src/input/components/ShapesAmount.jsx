import { changeProp } from "../functions"

export default function ShapesAmount({animData, setAnimData}) {
    return (
        <div className="input-group">
            <div className="input-subgroup">
                <label htmlFor="shapes-amount" className="form-label heading">Amount of Shapes</label>
                <div className="input-elem">
                    <input
                        type="number"
                        min={1}
                        id="shapes-amount"
                        name="shapesAmount"
                        className="form-control"
                        value={animData.shapesAmount}
                        onChange={e => changeProp(e, setAnimData)}
                    />
                </div>
            </div>
        </div>
    )
}