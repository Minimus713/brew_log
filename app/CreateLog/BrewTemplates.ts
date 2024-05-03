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