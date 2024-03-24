<script>
	import '../app.postcss';
	import { DarkMode } from 'flowbite-svelte';
	import { Navbar } from 'flowbite-svelte';
</script>

<Navbar
	navDivClass="flex flex-wrap justify-start"
	navClass="px-2 sm:px-4 py-2.5 bg-gray-300 dark:bg-gray-900"
>
	<DarkMode btnClass="mr-10" />
</Navbar>

<slot />
