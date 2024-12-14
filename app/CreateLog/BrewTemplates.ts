import { BrewTimelineTemplate } from './types';

export const BeerTimelineTemplate: BrewTimelineTemplate = {
    name: 'Beer',
    steps: [
        {
            name: 'Brew Day',
            description: 'Woo! Brew Day!',
            daysPostBrew: 0
        },
        {
            name: 'Cold Crash',
            description: 'After fermentation is complete, cold crashing for 3-5 days results in a less hazy, clearer finish to the beer.',
            daysPostBrew: 14
        },
        {
            name: 'Bottling & Conditioning',
            description: 'After cold crashing, it is time to bottle the beer and carbonate it.',
            daysPostBrew: 19
        },
        {
            name: 'Chill & Serve',
            description: 'After conditioning for 2 weeks, it is ready to be chilled and served. Enjoy!',
            daysPostBrew: 33
        },
    ]
}

export const MeadTimelineTemplate: BrewTimelineTemplate = {
    name: 'Mead',
    steps: [
        {
            name: 'Brew Day',
            description: 'Woo! Brew Day!',
            daysPostBrew: 0
        },
        {
            name: 'Day 2 Nutrients',
            description: 'Add half the nutrient packet, SLOWLY.',
            daysPostBrew: 1
        },
        {
            name: 'Day 5 Nutrients',
            description: 'Add the rest of the nutrient packet.',
            daysPostBrew: 4
        },
        {
            name: 'Day 20 - Settling',
            description: 'Let it sit for at least 10 days before bottling.',
            daysPostBrew: 19
        },
        {
            name: 'Day 30 - Bottling',
            description: 'Woo!',
            daysPostBrew: 29
        },
    ]
}

export const CiderTimelineTemplate: BrewTimelineTemplate = {
    name: 'Cider',
    steps: [
        {
            name: 'Brew Day',
            description: 'Woo! Brew Day!',
            daysPostBrew: 0
        },
        {
            name: 'Conditioning',
            description: 'Make it bubble!',
            daysPostBrew: 14
        },
        {
            name: 'Bottling Day',
            description: 'Time to serve.',
            daysPostBrew: 28
        }
    ]
}