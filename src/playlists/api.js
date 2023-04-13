import {Alg} from './algebra.js';

const API = {
    Show: (playlist) => Alg.show(playlist),
    Add: (...playlists) => Alg.add(...playlists),
    Filter:  (filterReq, playlist) => Alg.filter(filterReq, playlist)
};

export {
    API as Playlist
};