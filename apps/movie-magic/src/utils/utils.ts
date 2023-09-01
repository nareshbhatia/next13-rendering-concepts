export interface HoursAndMinutes {
  hours: number;
  minutes: number;
}

export function toHoursAndMinutes(minutes: number): HoursAndMinutes {
  if (minutes < 0) {
    throw new Error('Input must be a non-negative number.');
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return { hours, minutes: remainingMinutes };
}
