import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "chart.js/auto";
const page = "";
const CHART_COLORS = {
  // taylor
  red: "rgb(255, 99, 132)",
  redLight: "rgba(255, 99, 132, 0.7)",
  // joel
  orange: "rgb(255, 159, 64)",
  orangeLight: "rgba(255, 159, 64, 0.7)",
  yellow: "rgb(255, 205, 86)",
  yellowLight: "rgba(255, 205, 86, 0.7)",
  // kevin
  gold: "rgb(248, 184, 52)",
  goldLight: "rgba(248, 184, 52, 0.7)",
  // jason
  green: "rgb(75, 192, 192)",
  greenLight: "rgba(75, 192, 192, 0.7)",
  lime: "rgb(80, 220, 100)",
  limeLight: "rgba(80, 220, 100, 0.7)",
  teal: "rgb(0, 170, 170)",
  tealLight: "rgba(0, 170, 170, 0.7)",
  // brady
  blue: "rgb(54, 162, 235)",
  blueLight: "rgba(54, 162, 235, 0.7)",
  indigo: "rgb(75, 0, 130)",
  indigoLight: "rgba(75, 0, 130, 0.7)",
  // bella
  purple: "rgb(153, 102, 255)",
  purpleLight: "rgba(153, 102, 255, 0.7)",
  magenta: "rgb(227, 0, 140)",
  magentaLight: "rgba(227, 0, 140, 0.7)",
  pink: "rgb(255, 105, 180)",
  pinkLight: "rgba(255, 105, 180, 0.7)",
  olive: "rgb(128, 128, 0)",
  oliveLight: "rgba(128, 128, 0, 0.7)",
  cyan: "rgb(0, 173, 239)",
  cyanLight: "rgba(0, 173, 239, 0.7)",
  navy: "rgb(0, 0, 128)",
  navyLight: "rgba(0, 0, 128, 0.7)",
  grey: "rgb(201, 203, 207)",
  greyLight: "rgba(201, 203, 207, 0.7)",
  // slate
  slate: "rgb(112, 128, 144)",
  slateLight: "rgba(112, 128, 144, 0.7)",
  maroon: "rgb(128, 0, 0)",
  maroonLight: "rgba(128, 0, 0, 0.7)",
  forest: "rgb(34, 139, 34)",
  forestLight: "rgba(34, 139, 34, 0.7)"
};
const bella = {
  Extraverted: 45,
  Introverted: 55,
  Intuitive: 87,
  Observant: 13,
  Thinking: 15,
  Feeling: 85,
  Judging: 88,
  Prospecting: 12,
  Assertive: 32,
  Turbulent: 68,
  label: "Bella",
  style: {
    backgroundColor: CHART_COLORS.purpleLight,
    borderColor: CHART_COLORS.purple,
    pointBackgroundColor: CHART_COLORS.purple,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.purple
  }
};
const brady = {
  Extraverted: 60,
  Introverted: 40,
  Intuitive: 55,
  Observant: 45,
  Thinking: 30,
  Feeling: 70,
  Judging: 42,
  Prospecting: 58,
  Assertive: 57,
  Turbulent: 43,
  label: "Brady",
  style: {
    backgroundColor: CHART_COLORS.blueLight,
    borderColor: CHART_COLORS.blue,
    pointBackgroundColor: CHART_COLORS.blue,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.blue
  }
};
const jason = {
  Extraverted: 29,
  Introverted: 71,
  Intuitive: 55,
  Observant: 45,
  Thinking: 54,
  Feeling: 46,
  Judging: 25,
  Prospecting: 75,
  Assertive: 19,
  Turbulent: 81,
  label: "Jason",
  style: {
    backgroundColor: CHART_COLORS.greenLight,
    borderColor: CHART_COLORS.green,
    pointBackgroundColor: CHART_COLORS.green,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.green
  }
};
const joel = {
  Extraverted: 18,
  Introverted: 82,
  Intuitive: 29,
  Observant: 71,
  Thinking: 39,
  Feeling: 61,
  Judging: 65,
  Prospecting: 35,
  Assertive: 36,
  Turbulent: 64,
  label: "Joel",
  style: {
    backgroundColor: CHART_COLORS.orangeLight,
    borderColor: CHART_COLORS.orange,
    pointBackgroundColor: CHART_COLORS.orange,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.orange
  }
};
const kevin = {
  Extraverted: 36,
  Introverted: 64,
  Intuitive: 63,
  Observant: 37,
  Thinking: 25,
  Feeling: 75,
  Judging: 28,
  Prospecting: 72,
  Assertive: 64,
  Turbulent: 36,
  label: "Kevin",
  style: {
    backgroundColor: CHART_COLORS.goldLight,
    borderColor: CHART_COLORS.gold,
    pointBackgroundColor: CHART_COLORS.gold,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.gold
  }
};
const ryan = {
  Extraverted: 43,
  Introverted: 57,
  Intuitive: 40,
  Observant: 60,
  Thinking: 62,
  Feeling: 38,
  Judging: 60,
  Prospecting: 40,
  Assertive: 60,
  Turbulent: 40,
  label: "Ryan",
  style: {
    backgroundColor: CHART_COLORS.slateLight,
    borderColor: CHART_COLORS.slate,
    pointBackgroundColor: CHART_COLORS.slate,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.slate
  }
};
const taylor = {
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
  label: "Taylor",
  style: {
    backgroundColor: CHART_COLORS.redLight,
    borderColor: CHART_COLORS.red,
    pointBackgroundColor: CHART_COLORS.red,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.red
  }
};
const sam = {
  Extraverted: 9,
  Introverted: 91,
  Intuitive: 59,
  Observant: 13,
  Thinking: 48,
  Feeling: 52,
  Judging: 56,
  Prospecting: 44,
  Assertive: 24,
  Turbulent: 86,
  label: "Sam",
  style: {
    backgroundColor: CHART_COLORS.indigoLight,
    borderColor: CHART_COLORS.indigo,
    pointBackgroundColor: CHART_COLORS.indigo,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: CHART_COLORS.indigo
  }
};
function generateDataset(dataset) {
  return {
    label: dataset.label,
    data: [
      dataset.Extraverted,
      dataset.Intuitive,
      dataset.Thinking,
      dataset.Judging,
      dataset.Assertive,
      dataset.Introverted,
      dataset.Observant,
      dataset.Feeling,
      dataset.Prospecting,
      dataset.Turbulent
    ],
    fill: true,
    backgroundColor: dataset.style.backgroundColor,
    borderColor: dataset.style.borderColor,
    pointBackgroundColor: dataset.style.pointBackgroundColor,
    pointBorderColor: dataset.style.pointBorderColor,
    pointHoverBackgroundColor: dataset.style.pointHoverBackgroundColor,
    pointHoverBorderColor: dataset.style.pointHoverBorderColor
  };
}
function generateDatasets() {
  return [
    generateDataset(bella),
    generateDataset(brady),
    generateDataset(jason),
    generateDataset(joel),
    generateDataset(kevin),
    generateDataset(ryan),
    generateDataset(taylor),
    generateDataset(sam)
  ];
}
({
  labels: [
    "Extraverted",
    "Intuitive",
    "Thinking",
    "Judging",
    "Assertive",
    "Introverted",
    "Observant",
    "Feeling",
    "Prospecting",
    "Turbulent"
  ],
  datasets: generateDatasets()
});
const LineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  return `<div><canvas${add_attribute("height", 600, 0)}${add_attribute("width", 400, 0)}${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const RadarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  return `<div><canvas${add_attribute("height", 600, 0)}${add_attribute("width", 400, 0)}${add_attribute("this", canvas, 0)}></canvas></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-4xl" data-svelte-h="svelte-n8505x">Discord Personalities</h1> <h2 data-svelte-h="svelte-z8egb6">Radar</h2> ${validate_component(RadarChart, "RadarChart").$$render($$result, {}, {}, {})} <h2 data-svelte-h="svelte-eomgps">Line</h2> ${validate_component(LineChart, "LineChart").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
