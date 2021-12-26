import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({ countries, handleCountryChange }) => {
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={e => handleCountryChange(e.target.value)}>
        <option value=''>Global</option>
        {countries.map((country, index) =>
          <option key={index} value={country}>{country}</option>
        )}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;