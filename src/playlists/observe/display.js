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
    },
    Filter: ({filterReq, playlist}) => {
        return playlist.filter(filterReq);
    },
    Sort: ({sortReq, playlist}) => {
        return playlist.sort(sortReq);
    }
})
export {display};