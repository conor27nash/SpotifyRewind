import { refresh_token, access_token, loggedIn } from "../scripts/store";
import { getAllInfo } from "../scripts/spotifyInfo";
import {get} from 'svelte/store'

var scopes = "user-read-private user-read-email user-top-read";
let redirect_uri = "https://spotifyrewind.z33.web.core.windows.net/popup.hmtl";
let url =
    "https://accounts.spotify.com/authorize?response_type=code&client_id=4c4f2ecd3bf648d49adc7846d0091831" +
    "&scope=" +
    encodeURIComponent(scopes) +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);
let json;
let code;
export function login() {
    myPopup(url, "mywindow", 350, 250);
}
function myPopup(myURL, title, myWidth, myHeight) {
    var left = (screen.width - myWidth) / 2;
    var top = (screen.height - myHeight) / 4;
    var myWindow = window.open(
        myURL,
        title,
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        myWidth +
        ", height=" +
        myHeight +
        ", top=" +
        top +
        ", left=" +
        left
    );
}

window.addEventListener("message", function (e) {
    code = e.data.code;
    exchange();
});

let exchange = async () => {

    let exchangeUrl = `https://spotifyauthfunction.azurewebsites.net/api/exchange?code=${code}`;
    let res = await fetch(exchangeUrl);
    let object = await res.json();
    access_token.update(object.access_token);
    console.log(get(access_token));
    refresh_token.update(object.refresh_token);
    refresh();
    json = JSON.stringify(object);
    getInfo();
};

let refresh = () => {
    setTimeout(async function () {
        let refreshUrl = `https://spotifyauthfunction.azurewebsites.net/api/refresh?refresh_token=${get(refresh_token)}`;
        let res = await fetch(refreshUrl);
        let object = await res.json();
        access_token.update(object.access_token);
        refresh();
    }, 3600);
};

function toggle() {
    loggedIn.update();
}

let getInfo = async () => {
    getAllInfo();
    toggle();
};