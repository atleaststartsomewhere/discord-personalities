<script>
    import { Chart } from 'chart.js';
    import { onMount } from 'svelte';

    export let data;

    let spiderChartElement: HTMLCanvasElement;

    onMount(() => {
        new Chart()
    });
</script>