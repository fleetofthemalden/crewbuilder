export type SweepPreference = 'port' | 'portDominant' | 'bi' | 'starboardDominant' | 'starboard';

export type Athlete = {
  athletId: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  dob: string;
  sweep: SweepPreference;
  noviceEligibilityDate?: string;
};

export type Benchmark = {
  time: number;
  distance: number;
  benchmarkId: string;
}
