<script lang="ts">
    import type { ChartConfiguration } from 'chart.js';
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';

    export let data: { chartConfig: ChartConfiguration };

    let canvas: HTMLCanvasElement | null = null;

    onMount(() => {
        if (!canvas) return;  // Safeguard in case canvas isn't properly bound

        let chart = new Chart(canvas, data.chartConfig);
    });

</script>

<h1>Discord Personalities</h1>
<div>
    <canvas bind:this={canvas} height={600} width={400}></canvas>
</div>
