<script lang="ts">
	import { onMount } from 'svelte';
	import { Geolocation } from '@capacitor/geolocation';
	import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
	import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Input } from "$lib/components/ui/input";

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

<h1 class="text-green-600 font-bold">Vejove</h1>

<!-- symptom daily log -->
<h2 class="text-2xl font-bold">Symptom Log:</h2>
<Textarea placeholder="How are you feeling today?" />
<Button class="bg-amber-600 text-green-300">save</Button>

<!-- medication list -->
<form class="flex w-full max-w-sm items-center space-x-2">
	<Input type="medication" placeholder="medication" />
	<Button type="submit">add</Button>
</form>

<div>
	<h2 class="text-2xl font-bold">Medications:</h2>
	
	<ul>
		{#each MedicationList as med}
			<li>{med.name}{med.dose}</li>
		{/each}
	</ul>
</div>

<br>
<h1>{fileData}</h1>
<h2>Geolocation</h2>
<p>Your location is:</p>
<p>Latitude: {loc ? loc.coords.latitude : 'Getting location...'}</p>
<p>Longitude: {loc ? loc.coords.longitude : 'Getting location...'}</p>

<style lang="postcss">
</style>