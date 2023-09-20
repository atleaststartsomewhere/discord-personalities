<script lang="ts">    
    import { Chart } from 'chart.js/auto';
    import { onMount } from 'svelte';
    import { StackedData } from '$data/aggregate';

    let ctx;
    let canvas;

    const config = {
        type: 'line',
        data: StackedData,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
            x: {
                title: {
                    display: true,
                    text: 'Category'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Value'
                }
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