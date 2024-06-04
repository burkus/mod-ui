<script lang="ts">
	import PegContainer from './PegContainer.svelte';
	import componentMap from '.';
	import { type Peg } from '../types/peg';
    
	export let pegs: Peg[] = [];
	export let rows = 4;
	export let columns = 4;

	$: containerStyle = `
        grid-template-rows: repeat(${rows}, 1fr);
        grid-template-columns: repeat(${columns}, 1fr);
    `;
</script>

<div>
	<div class="input">
		<div>Rows</div>
		<input bind:value={rows} type="range" min="0" max="10" />
	</div>
	<div class="input">
		<div>Columns</div>
		<input bind:value={columns} type="range" min="0" max="10" />
	</div>
	<div class="container" style={containerStyle}>
		{#each Array(rows * columns) as _, i}
			<PegContainer>
				{#if pegs[i]}
					{@const Component = componentMap[pegs[i].type]}
					<Component {...pegs[i].props} />
				{:else}
					<svg>
						<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" />
					</svg>
				{/if}
			</PegContainer>
		{/each}
	</div>
</div>

<style>
	.container {
		display: grid;
		padding: 4px;
	}

	.input {
		display: flex;
		justify-content: space-between;
	}
</style>
