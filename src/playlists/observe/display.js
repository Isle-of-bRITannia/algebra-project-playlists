import { Alg } from "../algebra.js";
import { match } from '../utility/index.js' 

const display = match({
    Show:  ({playlist}) => {
        return playlist;
    }
});

export {display};