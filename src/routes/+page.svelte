<script>
    import './page.css';
    import LineChart from '$components/LineChart.svelte';
    import RadarChart from '$components/RadarChart.svelte';
</script>
<h1 class="text-4xl">Discord Personalities</h1>

<h2>Radar</h2>
<RadarChart></RadarChart>

<h2>Line</h2>
<LineChart></LineChart>