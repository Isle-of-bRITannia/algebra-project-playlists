const renderDisplay = (display) => {
    let displayString = "";
    for (let i = 0; i < display.length; i++) {
        displayString += display[i] + '<br />';
    }

    return displayString;
}

export {renderDisplay};