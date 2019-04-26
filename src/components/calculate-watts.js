import React from "react"
import Slider from './slider';

const ledProperty = {
    marginTop: '25px',
  };

class CalculateWatts extends React.Component {
    state = {
      length: 2,
      numberOfLedsPerMeter: 30,
      maximumPowerDrawPerLed: 0.30,
      watt: '',
    }

    get wattRequired() {
      return this.state.length * this.state.numberOfLedsPerMeter * this.state.maximumPowerDrawPerLed;
    }

    get canCalculate() {
      return (
        this.state.length && this.state.numberOfLedsPerMeter && this.state.maximumPowerDrawPerLed
      )
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div style={ledProperty}>
              <h3>
                <span role="img" aria-label="ruler emoji">📏 </span>
                How long is your LED strip? (in meter)
              </h3>
              <Slider
                min={1}
                max={20}
                defaultValue={this.state.length}
                unit=" Meter"
                onChangeSlider={(val) => this.setState({ length: val })}
              />
            </div>
            <div style={ledProperty}>
              <h3>
                <span role="img" aria-label="bulb emoji">💡 </span>
                How many LEDS per meter?
              </h3>
              <Slider
                max={120}
                defaultValue={this.state.numberOfLedsPerMeter}
                unit=" LEDs"
                onChangeSlider={(val) => this.setState({ numberOfLedsPerMeter: val })}
              />
            </div>
            <div style={ledProperty}>
              <h3>
                <span role="img" aria-label="plug emoji">🔌 </span>
                Max. power draw per led?
              </h3>
              <Slider
                max={1}
                defaultValue={this.state.maximumPowerDrawPerLed}
                unit=" W"
                onChangeSlider={(val) => this.setState({ maximumPowerDrawPerLed: val })}
                step={0.01}
              />
            </div>
          </form>
          {this.canCalculate
            ? <p>You need: {this.wattRequired} watt.</p>
            : <p>Fill in the values above to calculate total watt needed</p>
          }
        </div>
      );
    }
  }

  export default CalculateWatts
