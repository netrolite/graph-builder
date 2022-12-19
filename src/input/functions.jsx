// changes "Amount of Shapes", "Velocity"...
function changeProp(e, setAnimData) {
    const prop = e.target.dataset.prop
    let value = e.target.value;
    if (e.target.type === "number") {
        value = parseInt(e.target.value);
    }
    
    setAnimData(prevState => ({
        ...prevState,
        [prop]: value
    }))
}

// changes rect width, rect height, circle radius...
function changeShapeProp(e, setAnimData, isBoolean = false) {
    // example:
    // e.target.dataset.shapeProp === "height"
    // e.target.dataset.shape === "rectangles"
    // if isBoolean, use "checked" attribute insead of "value" because value for checkboxes is always "on"
    const shape = e.target.dataset.shape;
    const prop = e.target.dataset.shapeProp;
    let value = e.target.value;
    if (e.target.type === "number") {
        value = parseInt(e.target.value);
    }

    setAnimData(prevState => {
        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [prop]: isBoolean ? e.target.checked : value
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