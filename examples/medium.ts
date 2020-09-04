import { badge } from "../mod.ts";

console.log(badge("failed", "2", { msgBg: "red" }));

console.log(badge("success", "2", { msgBg: "green" }));

console.log(badge("skipped", "2", { msgBg: "yellow" }));
