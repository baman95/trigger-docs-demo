import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: "proj_cbjzmcpeivbpcgbgrlqt",
  runtime: "node-24",
  dirs: ["./trigger"],
  logLevel: "log",
  retries: { enabledInDev: false, default: { maxAttempts: 1 } },
});
