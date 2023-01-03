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
  const start = dateTime.toLocaleTimeString('en-GB', { hour: 'numeric', hour12: true }).replace(/[^\d]+/, '');
  const end = dateTimeEnd.toLocaleTimeString('en-GB', { hour: 'numeric', hour12: true });
  return `${start} - ${end} (UK time)`;
}
