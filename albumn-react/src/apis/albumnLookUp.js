export const fetchAlbumnsByArtistId = (artistId) => {
    console.log(artistId)
    // const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
    const url = `https://itunes.apple.com/lookup?id=${artistId}`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyurl + url, {mode: "cors"}).then((res) => res.json());}
  
  