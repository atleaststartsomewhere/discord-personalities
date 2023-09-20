import bella from "./individuals/bella";
import brady from "./individuals/brady";
import jason from "./individuals/jason";
import joel from "./individuals/joel";
import kevin from "./individuals/kevin";
import ryan from "./individuals/ryan";
import taylor from "./individuals/taylor";

function generateDataset(dataset:object) {

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
            dataset.Turbulent,
        ],
        fill: true,
        backgroundColor: dataset.style.backgroundColor,
        borderColor: dataset.style.borderColor,
        pointBackgroundColor: dataset.style.pointBackgroundColor,
        pointBorderColor: dataset.style.pointBorderColor,
        pointHoverBackgroundColor: dataset.style.pointHoverBackgroundColor,
        pointHoverBorderColor: dataset.style.pointHoverBorderColor,
    }

}

function generateDatasets():Array<object> {
    return [
        generateDataset(bella),
        generateDataset(brady),
        generateDataset(jason),
        generateDataset(joel),
        generateDataset(kevin),
        generateDataset(ryan),
        generateDataset(taylor),
    ];
}

const Data = {
    labels: [
        'Extraverted',
        'Introverted',
        'Intuitive',
        'Observant',
        'Thinking',
        'Feeling',
        'Judging',
        'Prospecting',
        'Assertive',
        'Turbulent',
    ],
    datasets: generateDatasets(),
};

export { Data };