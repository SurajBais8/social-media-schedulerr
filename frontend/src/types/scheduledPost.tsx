export interface ScheduledPost {
  id: number;

  day: number;
  month: number;
  year: number;

  caption: string;

  platform: string;

  scheduleDateTime: string;

  imageName?: string;

  status: "Draft" | "Scheduled";
}