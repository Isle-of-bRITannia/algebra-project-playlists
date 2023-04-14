import { Alg } from "../algebra.js";
import { match } from '../utility/index.js' 

const display = match({
    Show:  ({playlist}) => {
        return playlist;
    },
    Add: ({playlists}) => {
        let playlist = [];

        // setting name to 1st playlist name
        playlist[0] = playlists[0][0];
        playlist[1] = playlists[0][1] + playlists[1][1];
        playlist[2] = 0;

        // removes 1st 3 elements in array
        playlists.forEach(element => {
            element.splice(0, 3);
        });

        // concats songs into 1 playlist
        playlists.forEach(element => {
            playlist = playlist.concat(element);
        });
        
        return  playlist;

    },
    Filter: ({filterReq, playlist}) => {
        return playlist.filter(filterReq);
    }
})
export {display};