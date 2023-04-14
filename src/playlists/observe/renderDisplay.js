const renderDisplay = (display) => {
    let displayString = "";
    console.log(display);
    // Checks if it's just 1 array
    if (display[1] == null || !Array.isArray(display[1])) {
        // Setting name
        displayString += '<b>' + display[0] + '</b>' + '<br />';

        // Setting duration
        displayString += 'Duration: ' + display[1] + '<br />';

        // Setting Number of Plays
        displayString += 'Total Plays: ' + display[2] + '<br />';


        displayString += '<br /> <ul>';
        // Going through song names
        for (let i = 3; i < display.length; i++) {
            displayString += '<li>' + display[i] + '</li><br />';
        }
        displayString += '<ul>';

        return displayString;
    } else {
        // if there are more than 2 playlists to display
        console.log(display);
        display.forEach(element => {
            // Setting name
            displayString += '<b>' + element[0] + '</b>' + '<br />';

            // Setting duration
            displayString += 'Duration: ' + element[1] + '<br />';

            // Setting Number of Plays
            displayString += 'Total Plays: ' + element[2] + '<br />';


            displayString += '<br /> <ul>';
            // Going through song names
            for (let i = 3; i < element.length; i++) {
                displayString += '<li>' + element[i] + '</li><br />';
            }
            displayString += '</ul><br />';
        });
        return displayString;
    }

}

export {renderDisplay};