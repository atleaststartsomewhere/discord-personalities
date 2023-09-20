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


function generateStackedDataset(dataset: personalityType) {

    let valExtroverted = dataset.Extraverted > dataset.Introverted ? dataset.Extraverted - 50: -1 * dataset.Introverted + 50;
    let valIntuitive   = dataset.Intuitive > dataset.Observant ? dataset.Intuitive - 50: -1 * dataset.Observant + 50;
    let valThinking    = dataset.Thinking > dataset.Feeling ? dataset.Thinking - 50: -1 * dataset.Feeling + 50;
    let valJudging     = dataset.Judging > dataset.Prospecting ? dataset.Judging - 50: -1 * dataset.Prospecting + 50;
    let valAssertive   = dataset.Assertive > dataset.Turbulent ? dataset.Assertive - 50: -1 * dataset.Turbulent + 50;
    
    return {
        label: dataset.label,
        data: [
            valExtroverted,
            valIntuitive,
            valThinking,
            valJudging,
            valAssertive,
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

function generateStackedDatasets():Array<object> {
    return [
        generateStackedDataset(bella),
        generateStackedDataset(brady),
        generateStackedDataset(jason),
        generateStackedDataset(joel),
        generateStackedDataset(kevin),
        generateStackedDataset(ryan),
        generateStackedDataset(taylor),
        generateStackedDataset(sam),
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

const StackedData = {
    labels: [
        'Extraverted',
        'Intuitive',
        'Thinking',
        'Judging',
        'Assertive',
    ],
    datasets: generateStackedDatasets(),
}

export { Data, StackedData };