const Alg = {
    show: (playlist) => ({
        _tag: 'Show',
        playlist
    }),
    add: (...playlists) => ({
        _tag: 'Add',
        playlists
    }),
    filter: (filterReq, playlist) => ({
      _tag: 'Filter',
      filterReq,
      playlist  
    }),
    sort: (sortReq, playlist) => ({
        _tag: 'Sort',
        sortReq,
        playlist
    })
};

export {
    Alg
};