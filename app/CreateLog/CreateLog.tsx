'use client';

import { ChangeEvent, useState } from 'react';
import dayjs from 'dayjs';
import {
  BeerTimelineTemplate,
  CiderTimelineTemplate,
  MeadTimelineTemplate,
} from './BrewTemplates';
import { BrewTimelineTemplate, ImportantDates, AvailableBrew } from './types';

const availableBrews: Array<AvailableBrew> = [
  {
    timeline: BeerTimelineTemplate,
    id: 0,
    display: 'Beer',
  },
  {
    timeline: MeadTimelineTemplate,
    id: 1,
    display: 'Mead',
  },
  {
    timeline: CiderTimelineTemplate,
    id: 2,
    display: 'Cider',
  },
];

export default function CreateLog() {
  const [brewStartDate, setBrewStartDate] = useState(
    dayjs().format('YYYY-MM-DD')
  );
  const [brewType, setBrewType] = useState<number>(0);
  const [autofillDate, setAutofillDate] = useState<boolean>(false);
  const [brewDates, setBrewDates] = useState<Array<ImportantDates>>([]);
  const [template, setTemplate] = useState<BrewTimelineTemplate | undefined>(
    BeerTimelineTemplate
  );

  const changeDate = (value: ChangeEvent<HTMLInputElement>) => {
    setBrewStartDate(value.target.value);
  };

  const changeBrew = (value: ChangeEvent<HTMLSelectElement>) => {
    const brewId = Number(value.target.value);
    console.log(brewId);
    setBrewType(brewId);

    const timelineTemplate: AvailableBrew | undefined = availableBrews.find(
      (brew) => brew.id === brewId
    );
    setTemplate(timelineTemplate?.timeline);
  };

  const submit = () => {
    console.log(brewStartDate, brewType, autofillDate);

    if (autofillDate && template) {
      const startDateObject = dayjs(brewStartDate);
      const importantDates = template.steps.map((step) => {
        return {
          date: startDateObject
            .add(step.daysPostBrew, 'days')
            .format('YYYY-MM-DD'),
          step: step.name,
        };
      });

      setBrewDates(importantDates);
    }

    if (!brewType) console.log('Nah bruh, go fix yo sheesh');
  };

  return (
    <div className="h-full flex flex-col items-start justify-around">
      <span>
        <span className="text-xl">Starting Brew Date: </span>
        <input
          type="date"
          id="brewdate"
          name="date"
          defaultValue={brewStartDate}
          onChange={changeDate}
          className="p-2 rounded-md bg-amber-800 text-stone-300 focus:text-stone-100 text-xl"
        />
      </span>

      <span>
        <span className="text-xl">Select what you are brewing: </span>
        <select
          onChange={changeBrew}
          className="py-2 px-4 rounded-md bg-amber-800 text-stone-300 focus:text-stone-100 text-xl"
        >
          {availableBrews.map((brew) => {
            return (
              <option
                key={brew.id}
                value={brew.id}
              >
                {brew.display}
              </option>
            );
          })}
        </select>
      </span>

      <span className="flex gap-2 accent-amber-800">
        <input
          type="checkbox"
          onChange={() => setAutofillDate(!autofillDate)}
        />
        <label>Autofill dates?</label>
      </span>

      <span>
        <ul>
          {brewDates.map((date) => {
            return (
              <li
                key={`${date.date}${date.step}`}
              >{`${date.date}: ${date.step}`}</li>
            );
          })}
        </ul>
      </span>

      <button
        type="button"
        onClick={submit}
        className="px-4 py-1 text-xl text-stone-300 border-amber-800 font-semibold rounded-md border
        hover:bg-amber-800 hover:border-transparent 
        active:text-stone-100 active:bg-amber-900"
      >
        Enter
      </button>
    </div>
  );
}
