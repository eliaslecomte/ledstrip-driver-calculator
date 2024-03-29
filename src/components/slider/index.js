import React from 'react';
import {
  Slider as AntSlider,
} from 'antd';
import 'antd/lib/slider/style/css';
import PropTypes from "prop-types"

import * as styles from './Slider.module.css';

const Slider = ({ min, max, onChangeSlider, unit, step, value }) => (
  <div className={styles.rowContainer}>
    <AntSlider
      className={styles.slider}
      onChange={onChangeSlider}
      min={min}
      max={max}
      tipFormatter={val => `${val}${(unit && unit.length > 0) ? ' ' + unit : ''}`}
      step={step}
      value={value}
    />
  </div>
)

Slider.defaultProps = {
  min: 0,
  max: 1,
  step: 1,
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChangeSlider: PropTypes.func.isRequired,
  unit: PropTypes.string,
  step: PropTypes.number,
  value: PropTypes.number,
}

export default Slider;
