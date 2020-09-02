import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";

console.log(
  badges("dollar", "$", { labelBg: 0x087f5b, msgBg: 0x02d21a }),
  "\n",
);

console.log(badges("Pony", "🦄", { msgBg: 0x1098ad }), "\n");

console.log(badges("Deno", "🦕", { labelBg: 0x24292e, msgBg: "white" }), "\n");

console.log(
  badges("Docker", "🐳", { labelBg: 0x2e3440, msgBg: 0x00ccff }),
  "\n",
);
