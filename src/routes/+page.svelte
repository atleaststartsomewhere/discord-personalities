<script>
    import './page.css';
    import LineChart from '$components/LineChart.svelte';
    import RadarChart from '$components/RadarChart.svelte';
    import LineChartStacked from '$components/LineChartStacked.svelte';

    let radar = true;
    let line = false;
    let lineStacked = false;

</script>

<h1 class="text-4xl">Discord Personalities</h1>

<div class="grid">
    <div class="flex gap-6 items-center">
        <div>
            <label for="radar">Radar</label>
            <input type="checkbox" name="radar" bind:checked={radar} id="radar">
        </div>
        <div>
            <label for="line">Line</label>
            <input type="checkbox" name="line" bind:checked={line} id="line">
        </div>
        <div>
            <label for="line-stacked">Line Stacked</label>
            <input type="checkbox" name="line-stacked" bind:checked={lineStacked} id="line-stacked">
        </div>
    </div>
</div>

<div class="flex">
    {#if radar}
        <RadarChart />
    {/if}
    {#if line}
        <LineChart />
    {/if}
    {#if lineStacked}
        <LineChartStacked />
    {/if}
</div>