<script lang="ts">
    import { loggedIn, recentTracks } from "../scripts/store";

    let orgData = $recentTracks;
    console.log(orgData)
    let localloggedin = false;
    localloggedin = $loggedIn
</script>

<br >
<h1>Home</h1>
<br />
<p>
<br> Current build 1.3 <br />
  
</p>

{#if localloggedin}
    <h2>Recent Tracks</h2>
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
