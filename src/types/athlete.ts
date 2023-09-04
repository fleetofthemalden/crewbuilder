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

type BenchmarkBasics = {
  date: string;
  benchmarkId: string;
};
interface BenchmarkWeight extends BenchmarkBasics {
  weight: number;
}
interface BenchmarkTest extends BenchmarkBasics {
  time: number;
  distance: number;
}

export type Benchmark = BenchmarkWeight | BenchmarkTest | (BenchmarkTest & BenchmarkWeight);
