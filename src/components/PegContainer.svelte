<script lang="ts">
    export let rows = 1
    export let columns = 1

    $: containerStyle = `
            grid-row: span ${rows};
            grid-column: span ${columns};
        `
</script>

<div style={containerStyle}>
    <slot>
        <svg>
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" />
        </svg>
    </slot>
</div>