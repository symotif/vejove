<script>
	import { onMount } from 'svelte';
	import { Geolocation } from '@capacitor/geolocation';
	import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
	import { Button } from "$lib/components/ui/button";

	let fileData, loc;

	async function getCurrentPosition() {
		try {
			const res = await Geolocation.getCurrentPosition();
			loc = res;
		} catch (e) {
			console.log(e);
			loc = {
				coords: {
					latitude: "Couldn't get location data",
					longitude: "Couldn't get location data"
				}
			};
		}
	}

	async function readDummyTextFile() {
		let file;
		try {
			file = await Filesystem.readFile({
				path: 'dummy.txt',
				directory: Directory.Data,
				encoding: Encoding.UTF8
			});
			fileData = file.data;
			return file;
		} catch (e) {
			await Filesystem.writeFile({
				path: 'dummy.txt',
				data: 'This is a dummy text file.',
				directory: Directory.Data,
				encoding: Encoding.UTF8
			});
			readDummyTextFile();
		}
	}

	onMount(async () => {
		readDummyTextFile();
		Geolocation.watchPosition({}, (location) => loc = location);
	});

	let MedicationList = [
		{
			name: "Metformin",
			dose: 500
		},
		{
			name: "Insulin Glargine", 
			dose: "5 units"
		}
	];

</script>

<h1 class="text-red-600 font-bold underline">Vejove!</h1>
<p>keep track of your health</p>
<Button class="bg-amber-600 text-green-300">Click me</Button>
<h1>{fileData}</h1>
<div>
	<h2 class="text-3xl font-bold underline">Medication List:</h2>
	
	<ul>
		{#each MedicationList as med}
			<li>{med.name}{med.dose}</li>
		{/each}
	</ul>
	
	<h2>Geolocation</h2>
	<p>Your location is:</p>
	<p>Latitude: {loc ? loc.coords.latitude : 'Getting location...'}</p>
	<p>Longitude: {loc ? loc.coords.longitude : 'Getting location...'}</p>
</div>

<style lang="postcss">
</style>