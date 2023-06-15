<script lang="ts">
    import {
        loggedIn,
        tracksShort,
        tracksMedium,
        tracksLong,
        playlistDropDown,
        songsForPlaylist
    } from "../scripts/store";
    import PlaylistDropDown from "./playlistDropDown.svelte";

    let orgData = $tracksShort;

    
    console.log(orgData)
    
    let tracksForPlaylist = [];
    addCurrentTrackChoiceToPlaylistList();
 
    

    function addCurrentTrackChoiceToPlaylistList() {
        for (const track of orgData) {
            tracksForPlaylist.push(track.Uri);
        }
        songsForPlaylist.update(tracksForPlaylist)
    }

    function setTracksShort() {
        orgData = $tracksShort;
        addCurrentTrackChoiceToPlaylistList();
    }
    function setTracksMedium() {
        orgData = $tracksMedium;
        addCurrentTrackChoiceToPlaylistList();
    }
    function setTracksLong() {
        orgData = $tracksLong;
        addCurrentTrackChoiceToPlaylistList();
    }

    function setStatus() {
        playlistDropDown.update();
    }
</script>

<main>
    <br />
    <h1>Tracks</h1>

    {#if $loggedIn}
        <div class="container-fluid">
            <div class="row">
                <button on:click={setTracksShort} class="btn col-sm"
                    >Last Month</button
                >
                <button on:click={setTracksMedium} class="btn col-sm"
                    >Last 6 Months</button
                >
                <button on:click={setTracksLong} class="btn col-sm"
                    >Of all Time</button
                >
                <button on:click={setStatus} class="btn col-sm"
                    >Make a playlist</button
                >
            </div>
        </div>
        <br />
        {#if $playlistDropDown}
            <PlaylistDropDown></PlaylistDropDown>
        {/if}
        {#each orgData as track, i}
            <div class="card hideBig">
                <div class="col-sm">
                    <h2>{i + 1}</h2>
                </div>

                <div class="col-sm">
                    <img
                        src={track.Album.images[1].url}
                        alt="a cat"
                        width="320"
                        height="320"
                        class="img-fluid"
                    />
                </div>

                <div class="col-sm">
                    <div class="card-body">
                        <h5>Track Name: <br /></h5>
                        <p>{track.Name}</p>
                        <h4>Artists:</h4>
                        {#each track.Artist as artist}
                            <p>{artist.artist_name}</p>
                        {/each}
                    </div>
                </div>
            </div>

            <br />
        {/each}
    {/if}
</main>

<style>
    h1 {
        background-color: #77b1ad;
        border: 3px solid #322831;
        border-radius: 20px;
        color: aliceblue;
    }
    .card {
        background: transparent;
        margin: 5% 10%;
        outline: transparent;
        border: transparent;
        text-align: justify;
        text-align: center;
    }
    img {
        border-color: #322831;
        border-radius: 20px;
    }

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
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(51, 68, 78, 0.05);
        transition: all 0.3s;
        border: 3px solid #322831;
        border-radius: 10px;
    }
    .btn:hover::before {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }
    .btn::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border: 1px solid rgba(255, 255, 255);
        border-radius: 10px;
        transform: scale(1.2, 1.2);
    }
    .btn:hover::after {
        opacity: 1;
        transform: scale(1, 1);
    }
</style>
