<script lang="ts">
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';
    import { Data } from '$data/aggregate';

    let ctx;
    let canvas;

    const config = {
        type: 'radar',
        data: Data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
    };

    onMount(() => {
        ctx = canvas.getContext('2d');

        var chart = new Chart(ctx, config)
    });
</script>

<div>
    <canvas bind:this={canvas} height={600} width={400}></canvas>
</div>