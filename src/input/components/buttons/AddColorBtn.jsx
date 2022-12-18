export default function AddColorBtn({setAnimData}) {
    function addColor(e) {
        e.preventDefault();
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
            onClick={e => addColor(e)}
        >
            + Add New
        </button>
    )
}