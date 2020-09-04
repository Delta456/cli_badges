import { badge } from "../mod.ts"

console.log(badge("RBG", "255", { msgBg: 230, is_8bit: true }), "\n");

console.log(
  badge(
    "RBG",
    "255",
    { msgBg: 255, labelBg: 110, labelColor: 30, is_8bit: true },
  ),
  "\n",
);

console.log(
  badge(
    "RBG",
    "255",
    { msgBg: 245, labelBg: 132, labelColor: 5, msgColor: 12, is_8bit: true },
  ),
);
