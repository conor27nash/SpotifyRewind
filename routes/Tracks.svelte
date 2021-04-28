<script lang="ts">
    import { loggedIn, tracksShort,tracksMedium,tracksLong } from "../scripts/store";

    let orgData = $tracksShort;
    function setTracksShort(){
        orgData = $tracksShort
    }
    function setTracksMedium(){
        orgData = $tracksMedium
    }
    function setTracksLong(){
        orgData = $tracksLong
    }
</script>

<main>
    <br />
    <h1>Tracks</h1>
    <br />
    
    {#if $loggedIn}
    <button on:click={setTracksShort} class="btn">Last Month</button>
    <button on:click={setTracksMedium} class="btn">Last 6 Months</button>
    <button on:click={setTracksLong} class="btn">Of all Time</button>
    <br>
        {#each orgData as track, i}
            <div class="card">
                <div class="row">
                    <div class="col">
                        <h2>{i + 1}</h2>
                    </div>
                    <div class="col-5">
                        <img
                            src={track.Album.images[1].url}
                            alt="a cat"
                            width="320"
                            height="320"
                            class="img-fluid"
                        />
                    </div>
                    <div class="col-5">
                        <div class="card-body">
                            <h3>{track.Name}</h3>
                            {#each track.Artist as artist}
                                <h4>by {artist.artist_name}</h4>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
            <br />
        {/each}
    {/if}
    <!-- {#if $loggedIn}
    {#each orgData as track, i}
        <p>{i + 1}</p>
        <h1>{track.Name}</h1>
        {#each track.Artist as artist}
            <h3>by {artist.artist_name}</h3>
        {/each}
        <img
            src={track.Album.images[1].url}
            width="320"
            height="320"
            alt=""
            class="img-fluid"
        />
        <br />
    {/each}
{/if} -->
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
        color:#322831;
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
