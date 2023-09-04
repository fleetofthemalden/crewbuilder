import { DateTime } from 'luxon';
import { Athlete } from 'types/athlete';

export const getRowingAge = (dob: Athlete['dob']) => {
  const thisYear = DateTime.now().year;
  const birthYear = DateTime.fromFormat(dob, 'MM/dd/yyyy').year;
  console.log({ thisYear, birthYear });
  return thisYear - birthYear;
};

export const getRowingAgeClassification = (rowingAge: number) => {
  if (rowingAge < 15) {
    return 'U15';
  } else if (rowingAge < 17) {
    return 'U17';
  } else if (rowingAge < 19) {
    return 'U19';
  } else if (rowingAge < 21) {
    return 'U21';
  } else if (rowingAge < 23) {
    return 'U23';
  } else if (rowingAge < 27) {
    return 'AA';
  } else if (rowingAge < 36) {
    return 'A';
  } else if (rowingAge < 43) {
    return 'B';
  } else if (rowingAge < 50) {
    return 'C';
  } else if (rowingAge < 55) {
    return 'D';
  } else if (rowingAge < 60) {
    return 'E';
  } else if (rowingAge < 65) {
    return 'D';
  } else if (rowingAge < 70) {
    return 'E';
  } else if (rowingAge < 75) {
    return 'D';
  } else if (rowingAge < 80) {
    return 'E';
  } else if (rowingAge < 85) {
    return 'D';
  } else if (rowingAge >= 85) {
    return 'K';
  }
  return '?'
};

export const isLightWeight = (benchmarks: Athlete['benchmarks'], sex: Athlete['sex'], lightweightCutoff?: number) => {
  const lwCutoff = lightweightCutoff || (sex === 'F' ? 130 : 160);
  const weight = benchmarks.find(bm => bm.weight);
};