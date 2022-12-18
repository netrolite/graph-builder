// used in "Browse Palettes"
export default function Palettes({animData, setAnimData}) {
    return animData.palettes.map((item, index) => {
        const rowColors = item.map((item, index) => {
            return (
                <div
                    className="browse-palettes-color"
                    style={{backgroundColor: item}}
                    key={index}
                ></div>
            )
        })

        return (
            <div 
                className="browse-palettes-row"
                key={index}
                onClick={() => setAnimData(prevState => ({ ...prevState, fillColors: item }))}
            >
                {rowColors}
            </div>
        )
    })
}