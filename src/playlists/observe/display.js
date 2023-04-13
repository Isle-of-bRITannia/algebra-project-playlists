import { Alg } from "../algebra.js";
import { match } from '../utility/index.js' 

const display = match({
    Show:  ({playlist}) => {
        return playlist;
    },
    Add: ({playlists}) => {
        let playlist = [];
        playlists.forEach(element => {
            playlist = playlist.concat(element);
        });
        return  playlist;
    }
})
export {display};