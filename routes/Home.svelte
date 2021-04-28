<script lang="ts">
    import { loggedIn } from "../scripts/store";
    import { login } from "../scripts/login";
    

  
</script>
<br>
<h1>Home</h1>
<br />
<p>
     <br /><br /> user picture? <br /><br />recent listenings<br /><br />
</p>

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
<style>

    h1{
        background-color: #77b1ad;
        border: 3px solid #322831;
		border-radius: 20px;
		color: aliceblue;
    }
</style>
