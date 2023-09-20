<script>
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';

    export let data;
    let chart;

    onMount(() => {
        const ctx = document.getElementById('myChart').getContext('2d');

        console.log(data);

        chart = new Chart(ctx, data.chartConfig)
    });

</script>
<h1>Discord Personalities</h1>
<canvas id="myChart" height="600" width="400"></canvas>