export type BrewTimelineTemplate = {
    name: string,
    steps: Array<Step>
}

export type AvailableBrew = {
    timeline: BrewTimelineTemplate,
    display: string,
    id: number
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