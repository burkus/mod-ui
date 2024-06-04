<script lang="ts">
    export let onSubmit: () => void

    let command = ""

    $: handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            onSubmit?.()
        }
    }
</script>

<style>
    .prompt {
        padding: 4px;
    }

    .prompt::before {
        content: ">>>";
    }

    .input {
        border: none;
        outline-width: 0;
        padding: 4px;
    }
</style>

<div class=prompt >
    <input on:keydown={handleKeyDown} class=input bind:value={command} type=text />
</div>