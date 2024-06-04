<script lang="ts">
    import PegBoard from "../components/PegBoard.svelte"
    import {pegs} from "../store/stores"
</script>

<PegBoard pegs={$pegs} />