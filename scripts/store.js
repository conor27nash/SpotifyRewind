import { writable } from "svelte/store";




export const access_token = createTokenStore()
export const refresh_token = createTokenStore()

export const loggedIn = createLogin()
export const playlistDropDown = createPlaylistDropDown()

export const songsForPlaylist = createInfoStore()
export const tracksShort = createInfoStore()
export const tracksMedium = createInfoStore()
export const tracksLong = createInfoStore()
export const artistShort = createInfoStore()
export const artistMedium = createInfoStore()
export const artistLong = createInfoStore()
export const recentTracks = createRecentStore()

export const user_id = createUserIdStore()


function createTokenStore() {
    const { subscribe, set, update } = writable('Not updated');

    return {
        subscribe,
        update: (value) => update(n => n = value),
        reset: () => set('')
    }
}
function createInfoStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        update: (object) => update(n => n = object),
        reset: () => set([])
    }
}

function createRecentStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        update: (obj) => update(n => n = obj),
        reset: () => set([])
    }
}
function createLogin() {
    const { subscribe, set, update } = writable(false);
    return {
        subscribe,
        update: () => update(n => n = !n),
        reset: () => set(false)
    }
}
function createPlaylistDropDown() {
    const { subscribe, set, update } = writable(false);
    return {
        subscribe,
        update: () => update(n => n = !n),
        reset: () => set(false)
    }
}

function createUserIdStore(){
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        update: (obj) => update(n => n = obj),
        reset: () => set([])
    } 
}




