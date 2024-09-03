import toast from "react-hot-toast";
import { CURRENT_MONTH, MONTHS } from "./constants";

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const filterNotes = (notes, title, priorityValue) => {
  if (!notes) return;
  return notes.filter(
    (note) =>
      !note.archived &&
      note.columnTitle === title &&
      note.priority === priorityValue.toLowerCase(),
  );
};

export const generateNotesChartData = (notes) => [
  {
    column: "To-do",
    high: filterNotes(notes, "To-do", "high").length,
    medium: filterNotes(notes, "To-do", "medium").length,
    low: filterNotes(notes, "To-do", "low").length,
  },
  {
    column: "In-Progress",
    high: filterNotes(notes, "In-Progress", "high").length,
    medium: filterNotes(notes, "In-Progress", "medium").length,
    low: filterNotes(notes, "In-Progress", "low").length,
  },
  {
    column: "Completed",
    high: filterNotes(notes, "Completed", "high").length,
    medium: filterNotes(notes, "Completed", "medium").length,
    low: filterNotes(notes, "Completed", "low").length,
  },
];

export const generateMeetingsChartData = (meetings) => [
  {
    month: MONTHS[CURRENT_MONTH].slice(0, 3),
    meetings: meetings.filter(
      (meeting) => new Date(meeting.addedFor).getMonth() === CURRENT_MONTH,
    ).length,
  },
  {
    month: MONTHS[CURRENT_MONTH + 1].slice(0, 3),
    meetings: meetings.filter(
      (meeting) => new Date(meeting.addedFor).getMonth() === CURRENT_MONTH + 1,
    ).length,
  },
  {
    month: MONTHS[CURRENT_MONTH + 2].slice(0, 3),
    meetings: meetings.filter(
      (meeting) => new Date(meeting.addedFor).getMonth() === CURRENT_MONTH + 2,
    ).length,
  },
  {
    month: MONTHS[CURRENT_MONTH + 3].slice(0, 3),
    meetings: meetings.filter(
      (meeting) => new Date(meeting.addedFor).getMonth() === CURRENT_MONTH + 3,
    ).length,
  },
];

export const showToast = (message, type, isLight) => {
  toast[type](message, {
    style: {
      backgroundColor: isLight ? "rgb(245 245 245)" : "rgb(38 38 38)",
      color: isLight ? "black" : "white",
    },
  });
};
