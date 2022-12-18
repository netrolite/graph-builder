// changes "Amount of Shapes", "Velocity"...
function changeProp(e, setAnimData) {
    setAnimData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

// changes rect width, rect height, circle radius...
function changeShapeProp(e, setAnimData, isBoolean = false) {
    console.log(isBoolean);
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

export {
    changeProp,
    changeShapeProp
}