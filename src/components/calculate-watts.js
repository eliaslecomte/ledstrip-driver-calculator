import React from "react"
import Slider from './slider';

class CalculateWatts extends React.Component {
    state = {
      watt: ''
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
            <div>
              <h3>
                <span role="img" aria-label="ruler emoji">📏 </span>
                How long is your LED strip? (in meter)
              </h3>
              <Slider
                max={10}
                unit=" Meter"
                onChangeSlider={(val) => this.setState({ length: val })}
              />
            </div>
            <div>
              <h3>
                <span role="img" aria-label="bulb emoji">💡 </span>
                How many LEDS per meter?
              </h3>
              <Slider
                max={10}
                unit=" LEDs"
                onChangeSlider={(val) => this.setState({ numberOfLedsPerMeter: val })}
              />
            </div>
            <div>
              <h3>
                <span role="img" aria-label="plug emoji">🔌 </span>
                Max. power draw per led?
              </h3>
              <Slider
                max={10}
                onChangeSlider={(val) => this.setState({ maximumPowerDrawPerLed: val })}
                step={0.5}
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
