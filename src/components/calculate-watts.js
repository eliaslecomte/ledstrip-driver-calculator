import React from "react"
import Slider from './slider';

const styles = {
  ledProperty: {
    marginTop: '50px',
  },
  wattRequiredText: {
    fontSize: '22px',
  }
};

class CalculateWatts extends React.Component {
    state = {
      length: 2,
      numberOfLedsPerMeter: 30,
      maximumPowerDrawPerLed: 0.30,
      watt: '',
    }

    get wattRequired() {
      return (this.state.length * this.state.numberOfLedsPerMeter * this.state.maximumPowerDrawPerLed).toFixed(2);
    }

    get canCalculate() {
      return (
        this.state.length && this.state.numberOfLedsPerMeter && this.state.maximumPowerDrawPerLed
      )
    }

    get amp12Volt() {
      return (this.wattRequired / 12).toFixed(1);
    }

    get amp5Volt() {
      return (this.wattRequired / 5).toFixed(1);
    }

    componentDidMount() {
      const search = window.location.search;
      if (!search.startsWith('?code=')) {
        return;
      }

      const data = search.replace('?code=', '');
      const urlState = JSON.parse(window.atob(data));
      this.setState({ ...urlState });
    }

    componentDidUpdate() {
      const { length, numberOfLedsPerMeter, maximumPowerDrawPerLed } = this.state;
      const encodedState = window.btoa(JSON.stringify({ length, numberOfLedsPerMeter, maximumPowerDrawPerLed }));
      window.history.replaceState(
        null,
        null,
        `?code=${encodedState}`
      );
    }

    render() {
      const canCalculate = this.canCalculate;
      const wattRequired = this.wattRequired;
      const { length, numberOfLedsPerMeter, maximumPowerDrawPerLed} = this.state;
      return (
        <div>
          <form>
            <div style={styles.ledProperty}>
              <h3>
                <span role="img" aria-label="ruler emoji">📏 </span>
                How long is your LED strip? (in meter)
              </h3>
              <Slider
                min={0.5}
                max={20}
                step={0.5}
                value={length}
                unit="m"
                onChangeSlider={(val) => this.setState({ length: val })}
              />
            </div>
            <div style={styles.ledProperty}>
              <h3>
                <span role="img" aria-label="bulb emoji">💡 </span>
                How many LEDS per meter?
              </h3>
              <Slider
                max={120}
                value={numberOfLedsPerMeter}
                unit="LEDs"
                onChangeSlider={(val) => this.setState({ numberOfLedsPerMeter: val })}
              />
            </div>
            <div style={styles.ledProperty}>
              <h3>
                <span role="img" aria-label="plug emoji">🔌 </span>
                Max. power draw per led?
              </h3>
              <Slider
                max={1}
                value={maximumPowerDrawPerLed}
                unit="W"
                onChangeSlider={(val) => this.setState({ maximumPowerDrawPerLed: val })}
                step={0.01}
              />
            </div>
          </form>
          {canCalculate
            ? <p style={styles.wattRequiredText}>You need at least {wattRequired} watt.</p>
            : <p style={styles.wattRequiredText}>Fill in the values above to calculate total watt needed</p>
          }
          {canCalculate && <p>When using a 5V ledstrip {this.amp5Volt} A is the equivalent of {wattRequired} W.</p> }
        </div>
      );
    }
  }

  export default CalculateWatts
