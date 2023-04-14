import {Alg} from './algebra.js';

const API = {
    Show: (playlist) => Alg.show(playlist),
    Add: (...playlists) => Alg.add(...playlists),
    Filter:  (filterReq, playlist) => Alg.filter(filterReq, playlist),
    FilterDuplicates: (playlist) =>
    {
        return Alg.playlistFilter(((value,index) => playlist.indexOf(value) == index),playlist);
    },
    PlaylistSort: (index) =>  (...playlists) => {
        let sortedObject = Alg.playlistSort(...playlists.sort((a, b) => a[index] - b[index]));
        let sortedArray = [sortedObject.index, ...sortedObject.playlists]; 
        return sortedArray; 
    }, 
};

export {
    API as Playlist
};