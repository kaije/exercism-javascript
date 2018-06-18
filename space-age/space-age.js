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

  calculateYears(planet) {
    return this.formatResult(this.ageInEarthYears / orbitalPeriodsInEarthYears[planet]);
  }

  formatResult(years) {
    return Number.parseFloat(Number.parseFloat(years).toFixed(2));
  }

  onEarth() {
    return this.formatResult(this.ageInEarthYears);
  }

  onMercury() {
    return this.calculateYears('Mercury');
  }

  onVenus() {
    return this.calculateYears('Venus');    
  }

  onMars() {
    return this.calculateYears('Mars');
  }

  onJupiter() {
    return this.calculateYears('Jupiter');
  }

  onSaturn() {
    return this.calculateYears('Saturn');
  }

  onUranus() {
    return this.calculateYears('Uranus');
  }

  onNeptune() {
    return this.calculateYears('Neptune');
  }
}

export default SpaceAge;
