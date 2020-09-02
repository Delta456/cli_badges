import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";

console.log(badges("RBG", "255", { msgBg: 230, is_8bit: true }), "\n");

console.log(
  badges(
    "RBG",
    "255",
    { msgBg: 255, labelBg: 110, labelColor: 30, is_8bit: true },
  ),
  "\n",
);

console.log(
  badges(
    "RBG",
    "255",
    { msgBg: 245, labelBg: 132, labelColor: 5, msgColor: 12, is_8bit: true },
  ),
);
