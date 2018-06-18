const secondsPerEarthYear = 31557600;

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  formatResult(years) {
    return Number.parseFloat(Number.parseFloat(years).toFixed(2));
  }

  onEarth() {
    return this.formatResult(this.seconds / secondsPerEarthYear);
  }

  onMercury() {
    return this.formatResult(this.onEarth() / 0.2408467);
  }

  onVenus() {
    return this.formatResult(this.onEarth() / 0.61519726);
  }

}

export default SpaceAge;

/* Earth: orbital period 365.25 Earth days, or 31557600 seconds
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years */
