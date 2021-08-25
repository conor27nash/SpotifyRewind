<script>
  
    import request from "request";
    import { access_token, user_id , playlistDropDown} from "../scripts/store";
   
    let playlistName;
    export let songList;

    function setStatus() {
        playlistDropDown.update();
    }

    async function makePlaylist() {
        let options = {
            method: "POST",
            url:
                `https://spotifyauthfunction.azurewebsites.net/api/playlist?Authorization=${access_token}&user_id=${user_id}&name=` +
                encodeURIComponent(playlistName),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ songlist: [songList] }),
        };

        let promise = new Promise((resolve, reject) => {
            request(options, (error, response) =>
                error ? reject(error) : resolve(response)
            );
        }).then((response) => {
            resObj = JSON.parse(response.body);

            if (resObj.error) {
                responseMessage = {
                    error: resObj.error,
                    description: resObj.error_description,
                };
                console.log(responseMessage)
            } else {
                responseMessage = resObj;
                console.log(responseMessage)
            }
        });

        let result = await promise;

        setStatus()
    }
</script>

<head>
    <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script></head
>
<body>
    <div class="playlist">
        <div class="form-outline mb-4">
            <label class="form-label" for="form1Example1">Playlist Name</label>
            <input
                type="text"
                bind:value={playlistName}
                id="form1Example1"
                class="form-control"
            />
        </div>

        <button class="btn" on:click={makePlaylist}>Make Playlist</button>
    </div>
</body>

<style>
    .btn {
        color: #322831;
        transition: all 0.5s;
        position: relative;
        padding-left: 10%;
        padding-right: 10%;
        margin: 0px;
    }
    .btn::before {
        content: "";
        background-color: rgb(255, 77, 77, 0.1);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        /* background-color: rgba(51, 68, 78, 0.05); */
        transition: all 0.3s;
        border: 3px solid teal;
        border-radius: 10px;
    }
    .btn:hover::before {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }
    .btn::after {
        color: white;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        background-color: rgb(255, 77, 77, 0.5);
        border: 3px solid navy;
        border-radius: 10px;
        transform: scale(1.2, 1.2);
    }
    .btn:hover::after {
        opacity: 1;
        transform: scale(1, 1);
    }
    .playlist {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
