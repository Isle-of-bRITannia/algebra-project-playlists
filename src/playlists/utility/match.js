const match = (matchFunctions) => (playlist) => {
    if (playlist._tag in matchFunctions === false) {
      throw new Error(`No matching function provided for _tag == "${playlist._tag}"`);
    }
    
    return matchFunctions[playlist._tag](playlist);
  };
  
  export {match};