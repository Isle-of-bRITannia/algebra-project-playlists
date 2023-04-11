import {Playlist} from './playlists/api.js';
import { display } from './playlists/observe/display.js';
import { renderDisplay } from './playlists/observe/renderDisplay.js';

let testPlaylist = ['song 1', 'song 2', 'song 3'];

const playlist = Playlist.Show(testPlaylist);

const finalDisplay = display(playlist);
document.querySelector('#app').innerHTML = renderDisplay(finalDisplay);