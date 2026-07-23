import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between a min and max */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Simple linear interpolation, used by cursor / magnetic effects */
export function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}
