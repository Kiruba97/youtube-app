import axios from "axios";

const API_KEY = 'AIzaSyC3diiy3r4lPE71GI-mwbL35fJBMzTAMJc';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : "snippet",
        maxResults : "5",
        key : API_KEY
    }
});
