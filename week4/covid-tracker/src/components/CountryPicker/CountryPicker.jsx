import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({ countries, handleCountryChange }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value='global'>Global</option>
        {countries.map((country, index) =>
          <option
            key={index}
            value={country}
            onChange={handleCountryChange}
          >
            {country}
          </option>
        )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;