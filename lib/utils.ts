import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { label: "year", second: 31536000 },
    { label: "month", second: 2592000 },
    { label: "week", second: 604800 },
    { label: "day", second: 86400 },
    { label: "hour", second: 3600 },
    { label: "minute", second: 60 },
    { label: "second", second: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.second);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? "s" : ""}ago`;
    }
  }
  return "just now";
};
