export const DEFAULT_ACCENT = "#3b82f6";
export const MAX_BOARDS_COUNT = 5;

export const MONTHS = [
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

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const TODAY = new Date();
export const CURRENT_DAY = TODAY.getDate();
export const CURRENT_MONTH = TODAY.getMonth();

export const COLUMNS = {
  "To-do": ["High", "Medium", "Low"],
  "In-Progress": ["High", "Medium", "Low"],
  Completed: ["High", "Medium", "Low"],
};

export const NOTES_CHART_DATA = [
  { dataKey: "high", fill: "rgb(239 68 68)" },
  { dataKey: "medium", fill: "rgb(245 158 11)" },
  { dataKey: "low", fill: "rgb(14 165 233)" },
];
