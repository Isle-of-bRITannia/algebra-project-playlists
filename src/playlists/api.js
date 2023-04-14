import {Alg} from './algebra.js';

const API = {
    Show: (playlist) => Alg.show(playlist),
    Add: (...playlists) => Alg.add(...playlists),
    Filter:  (filterReq, playlist) => Alg.filter(filterReq, playlist),
    FilterDuplicates: (playlist) =>
    {
        return API.Filter((value,index) => playlist.indexOf(value) == index);
    },
    SortByPlays: (playlist) =>
    {

    },
    SortByLength: (playlist) =>
    {

    }
};

export {
    API as Playlist
};