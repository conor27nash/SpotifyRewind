<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "../routes/Home.svelte";
	import Tracks from "../routes/Tracks.svelte";
	import Artists from "../routes/Artists.svelte";
	import { loggedIn } from "../scripts/store";
	import { login } from "../scripts/login";

	
</script>

<Router {url}>
	<nav class="navbar fixed-bottom navbar-light" style="width:100%;">
		<div
			class="container-fluid text-center"
			style=" height:100%; width:100%; "
		>
			<Link to="/" style="height:100%; width:33%">
				<div class="tab">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-house-door-fill"
						viewBox="0 0 16 16"
						style="margin:5%"
					>
						<path
							d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
						/>
					</svg>
				</div>
			</Link>
			<Link to="tracks" style="height:100%; width:33%"
				><div class="tab">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-vinyl-fill"
						viewBox="0 0 16 16"
						style="margin:5%"
					>
						<path
							d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
						/>
						<path
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"
						/>
					</svg>
				</div></Link
			><Link to="artists" style="height:100%; width:33%">
				<div class="tab">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-file-music-fill"
						viewBox="0 0 16 16"
						style="margin:5%"
					>
						<path
							d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-.5 4.11v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3a1 1 0 0 1 1.196.98z"
						/>
					</svg>
				</div></Link
			>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row">
			<div class="col sides" />
			<div class="col-9 text-center">
				<Route path="tracks" component={Tracks} />
				<Route path="artists" component={Artists} />
				<Route path="/"><Home /></Route>
				{#if !$loggedIn}
					<h3>Hello There!<br /></h3>
					<h4>Please log in to see your rewind</h4>
					<button
						class="btn btn-lg btn-dark"
						on:click={login}
						style="background:#33444e">login</button
					>
				{/if}
			</div>
			<div class="col sides" />
		</div>
	</div>
</Router>

<style>
	.tab {
		border: 3px solid #21272d;
		background-color: #f9f1f1;
		border-radius: 20px;
		height: 100%;
		width: 100%;
		box-shadow: 0 0 40px 40px #f85f68 inset, 0 0 0 0 #f85f68;
		-webkit-transition: all 150ms ease-in-out;
		transition: all 150ms ease-in-out;
	}

	.tab:hover {
		box-shadow: 0 0 10px 0 #f85f68 inset, 0 0 10px 4px #f85f68;
	}

	.sides {
		background-color: #dfdfde;
	}

	div {
		height: 100%;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
