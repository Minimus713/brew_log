'use client';

import { ChangeEvent, useState } from 'react';
import dayjs from 'dayjs';

export default function Page() {
  const [brewStartDate, setBrewStartDate] = useState(
    dayjs().format('YYYY-MM-DD')
  );
  const [brewType, setBrewType] = useState('');

  const changeDate = (value: ChangeEvent<HTMLInputElement>) => {
    setBrewStartDate(value.target.value);
  };

  const changeBrew = (value: ChangeEvent<HTMLSelectElement>) => {
    console.log(value.target.value);
    setBrewType(value.target.value);
  };

  const submit = () => {
    console.log(brewStartDate, brewType);
    console.log(dayjs().format('YYYY-MM-DD'));

    if (!brewType) console.log('Nah bruh, go fix yo sheesh');
  };

  return (
    <div className="m-4 color-red">
      <p>Starting Brew Date</p>
      <input
        type="date"
        id="brewdate"
        name="date"
        defaultValue={brewStartDate}
        onChange={changeDate}
      />
      <br />
      <button
        type="button"
        onClick={submit}
      >
        Enter
      </button>

      <select onChange={changeBrew}>
        <option value="">-- Whatcha Brewin'? -- </option>
        <option value="mead">Mead</option>
        <option value="cyser">Cyser</option>
        <option value="cider">Cider</option>
        <option value="beer">Beer</option>
      </select>
    </div>
  );
}
