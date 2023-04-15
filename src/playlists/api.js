import {Alg} from './algebra.js';

const API = {
    Show: (playlist) => Alg.show(playlist),
    Add: (...playlists) => Alg.add(...playlists),
    Filter:  (filterReq, playlist) => Alg.filter(filterReq, playlist),
    FilterDuplicates: (playlist) =>
    {
        return Alg.playlistFilter(((value,index) => playlist.indexOf(value) == index),playlist);
    },
    RemovePlaylist: (playlists, playlist) =>
    {
        if (playlists.indexOf(playlist))
        {
            let i = playlists.indexOf(playlist);
            return playlists.toSpliced(i, 1);
        }
        else 
        {
            console.log("Playlist with that name could not be found");
        }
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