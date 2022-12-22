// changes "Amount of Shapes", "Velocity"...
function changeProp(e, setAnimData) {
    const prop = e.target.dataset.prop
    const value = e.target.value;

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
    const value = replaceNaN(e.target.value);

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

// toggles "widthRand", "heightRand", "radiusRand"...
function toggleRandomValue(setAnimData, shape, shapeProp) {
    setAnimData(prevState => ({
        ...prevState,
        [shape]: {
            ...prevState[shape],
            [shapeProp]: !prevState[shape][shapeProp]
        }
    }))
}

function intFromRangeArr(range) {
    const min = range[0];
    const max = range[1];
    return Math.ceil(Math.random() * (max - min) + min);
}

// if typeof NaN, replace with an empty string
function replaceNaN(value) {
    // react needs value to be casted to a string if it's typeof NaN
    const parsed = parseInt(value);
    if (isNaN(parsed)) return "";
    return parsed;
}

// changes ranges for values like width, height that look like [30, 50]
function changeRange(e, setAnimData, shape, shapeProp, rangeIndex) {
    // rangeIndex must be either 0 (start) or 1 (end)
    setAnimData(prevState => {
        const value = replaceNaN(e.target.value);

        // copy previous state of range array
        let newRange = [...prevState[shape][shapeProp]];
        // replace value at "rangeIndex"
        newRange.splice(rangeIndex, 1, value);

        return {
            ...prevState,
            [shape]: {
                ...prevState[shape],
                [shapeProp]: newRange
            }
        }
    })
}


// check if all values from all inputs visible on screen are provided (not an empty string)
function checkAllValsProvided(setShowNotAllValsAlert) {
        const inputsNodes = document.querySelectorAll("input");
        const inputs = Array.from(inputsNodes);
        // inputs type checkbox don't have a value so I'm excluding them
        const inputsExceptCheckboxes = inputs.filter(input => input.type !== "checkbox");

        const allProvided = inputsExceptCheckboxes.every(input => (
            input.value !== ""
        ))

        // if any of the values aren't provided, activate alert and close after 1s
        if (!allProvided) {
            setShowNotAllValsAlert(true);
            setTimeout(() => {
                setShowNotAllValsAlert(false);
            }, 1500);
        }
        else {
            location.href = "/animation"
        }
}

export {
    changeProp,
    changeShapeProp,
    intFromRangeArr,
    toggleRandomValue,
    changeRange,
    checkAllValsProvided
}