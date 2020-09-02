import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";

console.log(badges("failed", "2", { msgBg: "red" }));

console.log(badges("success", "2", { msgBg: "green" }));

console.log(badges("skipped", "2", { msgBg: "yellow" }));
