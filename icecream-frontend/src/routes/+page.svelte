<script lang="ts">
	import { Heading, P, Span } from 'flowbite-svelte';
	const flavour = 'strawberry'; //READ FROM ENV
	const manufacturer = 'ice company (R)'; //READ FROM ENV

	const gradientMap = new Map<string, string>();
	gradientMap.set(
		'strawberry',
		'text-transparent bg-clip-text bg-gradient-to-r to-pink-300 from-rose-600'
	);
	gradientMap.set(
		'pineapple',
		'text-transparent bg-clip-text bg-gradient-to-r to-yellow-200 from-amber-500'
	);
	gradientMap.set(
		'lime',
		'text-transparent bg-clip-text bg-gradient-to-r to-teal-400 from-emerald-600'
	);
</script>

<div class="justify-center">
	<Heading
		tag="h1"
		class="mb-4 mt-10 text-center"
		customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
	>
		Best <Span gradient gradientClass={gradientMap.get(flavour)}>{flavour} flavour</Span> ice cream in
		the world!
	</Heading>
	<!-- TOOD: image -->
	<P class="mb-4 mt-10 text-center font-extrabold">From {manufacturer}</P>
</div>
