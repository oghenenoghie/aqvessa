const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * "2026-11-02" to "2 November 2026", the house date style. Parsed by hand so the output never
 * depends on the server's locale or time zone.
 */
export function formatDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) throw new Error(`Expected an ISO date (YYYY-MM-DD), got "${iso}"`);
  const [, year, month, day] = match;
  const monthIndex = Number(month) - 1;
  const dayNumber = Number(day);
  if (monthIndex < 0 || monthIndex > 11 || dayNumber < 1 || dayNumber > 31) {
    throw new Error(`Invalid date "${iso}"`);
  }
  return `${dayNumber} ${MONTHS[monthIndex]} ${year}`;
}
