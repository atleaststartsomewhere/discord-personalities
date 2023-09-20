<script>
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';

    export let data;
    let ctx;
    let canvas;

    onMount(() => {
        ctx = canvas.getContext('2d');

        var chart = new Chart(ctx, data.chartConfig)
    });

</script>
<h1>Discord Personalities</h1>
<div>
    <canvas bind:this={canvas} height={600} width={400}></canvas>
</div>