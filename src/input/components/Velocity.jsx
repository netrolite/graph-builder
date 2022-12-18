import { changeProp } from "../functions"

export default function Velocity({animData, setAnimData}) {
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