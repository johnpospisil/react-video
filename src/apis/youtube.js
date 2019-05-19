// remember to do a 'npm install axios' in your terminal
// to install axios into your project
import axios from 'axios';

const KEY = 'AIzaSyCOX_g_sFUhUWGJZhd0JlY2Vpzf4AVBukr';

// https://developers.google.com/youtube/v3/docs/search/list
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});