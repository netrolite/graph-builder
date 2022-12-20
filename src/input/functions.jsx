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

function intFromRange(min, max) {
    return Math.random() * (max - min) + min;
}

function useDefaultVals(setAnimData, shape, prop) {
    setAnimData(prevState => {
        // if value is not provided (empty string), replace it with a default
        // animData.rectangles.widthRandRange.range.forEach
        const newRange = prevState[shape][prop].range.map((item, index) => {
            if (typeof item === "string") {
                console.log(item);
                const defaultVal = prevState[shape][prop].default[index];
                item = defaultVal;
            }
            return item;
        })
        
        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [prop]: {
                    ...prevState[shape][prop],
                    range: newRange
                }
            }
        }
    })
}

function checkValuesProvided(setAnimData) {
    // if a value is not provided (empty string), replace it with a default value
    useDefaultVals(setAnimData, "rectangles", "widthRandRange");
    useDefaultVals(setAnimData, "rectangles", "heightRandRange");
    useDefaultVals(setAnimData, "circles", "radiusRandRange");
}

export {
    changeProp,
    changeShapeProp,
    intFromRangeArr,
    toggleRandomValue,
    changeRange,
    useDefaultVals,
    checkValuesProvided
}