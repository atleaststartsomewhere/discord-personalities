import { CHART_COLORS } from "$lib/chartColors";

export default {
    Extraverted: 35,
    Introverted: 65,
    Intuitive: 43,
    Observant: 57,
    Thinking: 61,
    Feeling: 39,
    Judging: 42,
    Prospecting: 58,
    Assertive: 39,
    Turbulent: 61,

    label: 'Taylor',
    style: {
        backgroundColor: CHART_COLORS.redLight,
        borderColor: CHART_COLORS.red,
        pointBackgroundColor: CHART_COLORS.red,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: CHART_COLORS.red,
    }
};