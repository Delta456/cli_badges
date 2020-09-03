import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";
import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

Deno.test("Bold", function (): void {
  assertEquals(
    badges("hello", "", { labelStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m\u001b[22m ",
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("hello", "", { labelStyle: "bold" }),
    "\x1b[1m\x1b[48;5;8m\x1b[38;5;15m\x1b[0m\x1b[0m\x1b[0m\x1b[48;5;4m\x1b[38;5;15m\x1b[0m\x1b[0m ",
  );

  assertEquals(
    badges("hello", "world", { labelStyle: "bold", msgStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m\u001b[22m\u001b[1m\u001b[37m\u001b[44m world \u001b[49m\u001b[39m\u001b[22m ",
  );
  assertEquals(
    badges("foo", "bar", { labelBg: "cyan", labelStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[46m foo \u001b[49m\u001b[39m\u001b[22m\u001b[37m\u001b[44m bar \u001b[49m\u001b[39m ",
  );
});
