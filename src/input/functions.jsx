// changes "Amount of Shapes", "Velocity"...
function changeProp(e, setAnimData) {
    setAnimData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

// changes rect width, rect height, circle radius...
function changeShapeProp(e, setAnimData, isBoolean = false) {
    // example:
    // e.target.name === "rectangles"
    // e.target.dataset.shapeProp === "height"
    // if isBoolean, use "checked" attribute insead of "value" because value for checkboxes is always "on"
    setAnimData(prevState => {
        const prop = e.target.dataset.shapeProp;
        return {
            ...prevState,
            [e.target.name]: {
                ...prevState[e.target.name],
                [prop]: isBoolean ? e.target.checked : e.target.value
            }
        }   
    })
}

function intFromRangeArr(range) {
    const min = range[0];
    const max = range[1];
    return Math.ceil(Math.random() * (max - min) + min);
}

export {
    changeProp,
    changeShapeProp,
    intFromRangeArr
}