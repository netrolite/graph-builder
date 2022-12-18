export default function AddColor({setAnimData}) {
    function addColor() {
        setAnimData(prevState => {
            // add "#000000" to the end of fillColors array
            return {
                ...prevState,
                fillColors: [...prevState.fillColors, "#000000"]
            }
        })
    }
    
    return (
        <button
            className="button button-secondary w-100"
            onClick={addColor}
        >
            + Add New
        </button>
    )
}