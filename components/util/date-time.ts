export const dateNth = (day: number): string => {
  if (3 < day && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export const formatDate = (dateTime: Date): string => {
  return dateTime
    .toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })
    .replace(',', '')
    .replace(/\d+/, day => day + dateNth(parseInt(day)));
}

const createEndTime = (dateTime: Date): Date => {
  const end = new Date(dateTime.getTime());
  end.setHours(end.getHours() + 1);
  return end;
}

export const formatTime = (dateTime: Date, dateTimeEnd: Date = createEndTime(dateTime)): string => {
  const start = dateTime
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
    .replace(':00', '') // Remove unecessary minutes if e.g. 7:00pm
    .replace(/[a-z]+/, '');  // Remove 'am' or 'pm' from start time
  const end = dateTimeEnd
    .toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true })
    .replace(':00', '') // Remove unecessary minutes if e.g. 7:00pm
    .replace(' ', ' ');  // Swap standard space with narrow no-break space (U+202f) to match Chromes toLocaleTimeString
  return `${start} - ${end} (UK time)`;
}
