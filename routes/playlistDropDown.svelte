<script>
    import { createEventDispatcher } from "svelte";
    import { access_token, user_id, playlistDropDown, songsForPlaylist } from "../scripts/store";
    
    let playlistName;
    let songList = songsForPlaylist;

    console.log(songlist)
    const dispatch = createEventDispatcher();

    function setStatus() {
        playlistDropDown.update();
    }

    const submitHandler = () => {
        dispatch("add");

        let url =
            `https://spotifyauthfunction.azurewebsites.net/api/playlist?Authorization=${access_token}&user_id=${user_id}&name=` +
            encodeURIComponent(playlistName);

        const options = {
            method: "POST",
            body: JSON.stringify({ songlist: [songList] }),
            headers: {
                "Content-Type": "application/json",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => console.log(res));
    };

    async function makePlaylist() {
        submitHandler()
        setStatus();
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
