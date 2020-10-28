export const fetchAlbumns = (ARTIST_NAME) => {
  const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
  // const url = `https://itunes.apple.com/lookup?id=1530646834`;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  return fetch(proxyurl + url, {mode: "cors"}).then((res) => res.json());}

