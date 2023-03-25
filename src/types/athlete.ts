export type SweepPreference = 'port' | 'portDominant' | 'bi' | 'starboardDominant' | 'starboard';

export type Athlete = {
  athleteId: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  dob: string;
  sex: 'M' | 'F';
  sweep: SweepPreference;
  noviceEligibilityDate?: string;
  benchmarks: Benchmark[];
};

export type Benchmark = {
  time: number;
  distance: number;
  benchmarkId: string;
  weight: number;
}
