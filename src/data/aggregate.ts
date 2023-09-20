import bella from "./individuals/bella";
import brady from "./individuals/brady";
import jason from "./individuals/jason";
import joel from "./individuals/joel";
import kevin from "./individuals/kevin";
import ryan from "./individuals/ryan";
import taylor from "./individuals/taylor";
import sam from "./individuals/sam";

type personalityType = {
    Extraverted: number,
    Introverted: number,
    Intuitive: number,
    Observant: number,
    Thinking: number,
    Feeling: number,
    Judging: number,
    Prospecting: number,
    Assertive: number,
    Turbulent: number,
    label: string,
    style: {
        backgroundColor: string,
        borderColor: string,
        pointBackgroundColor: string,
        pointBorderColor: string,
        pointHoverBackgroundColor: string,
        pointHoverBorderColor: string,
    }
}

function generateDataset(dataset: personalityType) {
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
        generateDataset(sam),
    ];
}

const Data = {
    labels: [
        'Extraverted',
        'Intuitive',
        'Thinking',
        'Judging',
        'Assertive',
        'Introverted',
        'Observant',
        'Feeling',
        'Prospecting',
        'Turbulent',
    ],
    datasets: generateDatasets(),
};

export { Data };