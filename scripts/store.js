import { writable } from "svelte/store";




export const access_token = createTokenStore()
export const refresh_token = createTokenStore()
export const loggedIn = createLogin()
export const tracksShort = createInfoStore()
export const tracksMedium = createInfoStore()
export const tracksLong = createInfoStore()
export const artistShort = createInfoStore()
export const artistMedium = createInfoStore()
export const artistLong = createInfoStore()
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



function createLogin() {
    const { subscribe, set, update } = writable(false);
    return {
        subscribe,
        update: () => update(n => n = !n),
        reset: () => set(false)
    }
}





