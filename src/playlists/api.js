import {Alg} from './algebra.js';

const API = {
    Show: (playlist) => Alg.show(playlist),
    Add: (...playlists) => Alg.add(...playlists),
};

export {
    API as Playlist
};