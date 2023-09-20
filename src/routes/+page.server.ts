import * as Data from '$data/aggregate';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
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

    return {
        chartConfig: config
    }
}