<script lang="ts">
	import { Heading, P, Span } from 'flowbite-svelte';
	import type { Flavour } from '$lib/types'
	import { IceCreamFlavour, IceCreamManufacturer } from '$lib/config'

	const _defaultGradient = 'text-transparent bg-clip-text bg-gradient-to-r'

	const gradientMap = new Map<Flavour, string>();
	gradientMap.set(
		'strawberry',
		`${_defaultGradient} to-pink-300 from-rose-600`
	);
	gradientMap.set(
		'pineapple',
		`${_defaultGradient} to-yellow-200 from-amber-500`
	);
	gradientMap.set(
		'lime',
		`${_defaultGradient} to-teal-400 from-emerald-600`
	);
</script>

<div class="justify-center items-center">
	<Heading
		tag="h1"
		class="mb-4 mt-10 text-center"
		customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl"
	>
		Best <Span gradient gradientClass={gradientMap.get(IceCreamFlavour)}>{IceCreamFlavour} flavour</Span> ice cream in
		the world!
	</Heading>
	<img class="m-auto scale-75" src="{IceCreamFlavour}.png" alt={IceCreamFlavour}>
	<P class="mb-4 mt-10 text-center font-extrabold">Created by {IceCreamManufacturer}™️</P>
</div>
