const secondsPerEarthYear = 31557600;

const orbitalPeriodsInEarthYears = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.ageInEarthYears = seconds / secondsPerEarthYear;
  }

  formatResult(years) {
    return Number.parseFloat(Number.parseFloat(years).toFixed(2));
  }

  onEarth() {
    return this.formatResult(this.ageInEarthYears);
  }

  onMercury() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Mercury);
  }

  onVenus() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Venus);
  }

  onMars() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Mars);
  }

  onJupiter() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Jupiter);
  }

  onSaturn() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Saturn);
  }

  onUranus() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Uranus);
  }

  onNeptune() {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears.Neptune);
  }
}

export default SpaceAge;
