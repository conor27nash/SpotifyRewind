import { tracksShort, tracksLong, tracksMedium, artistLong, artistMedium, artistShort, access_token } from "./store";
import {get} from 'svelte/store'

export let getAllInfo = () => {
    getInfo("tracks", "short_term", tracksShort)
    getInfo("tracks", "medium_term", tracksMedium)
    getInfo("tracks", "long_term", tracksLong)
    getInfo("artists", "short_term", artistShort)
    getInfo("artists", "medium_term", artistMedium)
    getInfo("artists", "long_term", artistLong)

}

let getInfo = async (type, timeRange, store) => {
    let token = get(access_token)
        // short_term     medium_term   long_term
    let infoURL = `https://spotifyauthfunction.azurewebsites.net/api/personalizationInfo?type=${type}&time_range=${timeRange}&Authorization=${token}`;
    let res = await fetch(infoURL);
    let object = await res.json();
    store.update(object)

};

