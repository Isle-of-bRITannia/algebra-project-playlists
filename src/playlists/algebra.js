const Alg = {
    show: (playlist) => ({
        _tag: 'Show',
        playlist
    }),
    add: (...playlists) => ({
        _tag: 'Add',
        playlists
    })
};

export {
    Alg
};