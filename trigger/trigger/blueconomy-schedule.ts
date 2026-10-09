import { schedules } from "@trigger.dev/sdk";

export const blueconomyScheduleDemo = schedules.task({
  id: "blueconomy-schedule-demo",
  cron: "*/15 * * * *",
  run: async (payload) => {
    const a = 21;
    const b = 21;
    const result = a * b;
    console.log("blueconomy_math_demo", { a, b, result, timestamp: payload.timestamp, timezone: payload.timezone });
    return { a, b, result, message: "Deterministic Trigger.dev docs demo" };
  },
});
