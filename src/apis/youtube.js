import axios from 'axios'; //remember to 'npm install axios' in project terminal

const KEY = 'AIzaSyCOX_g_sFUhUWGJZhd0JlY2Vpzf4AVBurk';

// https://developers.google.com/youtube/v3/docs/search/list
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});