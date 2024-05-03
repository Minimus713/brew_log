export type BrewTimelineTemplate = {
    name: string,
    steps: Array<Step>
}

export type Step = {
    name: string,
    description: string,
    daysPostBrew: number
}

export type ImportantDates = {
    step: string,
    date: string
}