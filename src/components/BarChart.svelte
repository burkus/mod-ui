<script lang="ts">
	import * as Plot from '@observablehq/plot';

	export let data: Record<string, unknown>[] = []
	export let x: string
	export let y: string

	let div: HTMLDivElement | undefined

	$: {
		div?.firstChild?.remove()
		div?.append(
			Plot.plot({
				marks: [Plot.barY(data, { x, y, fill: 'black' })],
                grid: true,
			})
		)
	}
</script>

<div bind:this={div}></div>