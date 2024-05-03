'use client';

import { ChangeEvent, useState } from 'react';
import dayjs from 'dayjs';
import { BeerTimelineTemplate } from './BrewTemplates';
import { ImportantDates } from './types';

export default function CreateLog() {
  const [brewStartDate, setBrewStartDate] = useState(
    dayjs().format('YYYY-MM-DD')
  );
  const [brewType, setBrewType] = useState('beer');
  const [autofillDate, setAutofillDate] = useState(false);
  const [brewDates, setBrewDates] = useState<Array<ImportantDates>>([]);

  const changeDate = (value: ChangeEvent<HTMLInputElement>) => {
    setBrewStartDate(value.target.value);
  };

  const changeBrew = (value: ChangeEvent<HTMLSelectElement>) => {
    console.log(value.target.value);
    setBrewType(value.target.value);
  };

  const submit = () => {
    console.log(brewStartDate, brewType, autofillDate);

    if (autofillDate) {
      const startDateObject = dayjs(brewStartDate);
      const importantDates = BeerTimelineTemplate.steps.map((step) => {
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
          <option value="beer">Beer</option>
          <option value="mead">Mead</option>
          <option value="cyser">Cyser</option>
          <option value="cider">Cider</option>
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
