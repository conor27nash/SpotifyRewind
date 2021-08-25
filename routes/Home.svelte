<script lang="ts">
    import { loggedIn, recentTracks } from "../scripts/store";

    let orgData = $recentTracks;
  
    let localloggedin = false;
    localloggedin = $loggedIn
</script>

<br >
<h1>Home</h1>
<br />
<p>

  
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

    
</style>
