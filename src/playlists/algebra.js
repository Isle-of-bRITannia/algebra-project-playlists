const Alg = {
    show: (playlist) => ({
        _tag: 'Show',
        playlist
    }),
    add: (...playlists) => ({
        _tag: 'Add',
        playlists
    }),
    playlistFilter: (filterReq, playlist) => ({
      _tag: 'Filter',
      filterReq,
      playlist  
    }),
    playlistSort: (index, ...playlists) => ({
        _tag: 'Sort',
        index,
        playlists
    }),
};

export {
    Alg
};