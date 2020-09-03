import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";
import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

Deno.test("Only Label", function (): void {
  assertEquals(
    badges("hello"), "\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m ",
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("hello"),
    "\u001b[48;5;8m\u001b[38;5;15m hello \u001b[0m\u001b[0m\u001b[48;5;4m\u001b[38;5;15m\u001b[0m\u001b[0m ",
  );
});

Deno.test("Counter Badge", function (): void {
  assertEquals(
    badges("counter", "5"),
    `\u001b[37m\u001b[100m counter \u001b[49m\u001b[39m\u001b[37m\u001b[44m 5 \u001b[49m\u001b[39m `,
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("counter", "5"),
    "\u001b[48;5;8m\u001b[38;5;15m counter \u001b[0m\u001b[0m\u001b[48;5;4m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
});

Deno.test("Success Badge", function (): void {
  assertEquals(
    badges("success", "5", { msgBg: "green" }),
    `\u001b[37m\u001b[100m success \u001b[49m\u001b[39m\u001b[37m\u001b[42m 5 \u001b[49m\u001b[39m `,
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("success", "5", { msgBg: "green" }),
    "\u001b[48;5;8m\u001b[38;5;15m success \u001b[0m\u001b[0m\u001b[48;5;2m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
});

Deno.test("Fail Badge", function (): void {
  assertEquals(
    badges("fail", "5", { msgBg: "red" }),
    `\u001b[37m\u001b[100m fail \u001b[49m\u001b[39m\u001b[37m\u001b[41m 5 \u001b[49m\u001b[39m `,
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("fail", "5", { msgBg: "red" }),
    "\u001b[48;5;8m\u001b[38;5;15m fail \u001b[0m\u001b[0m\u001b[48;5;1m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
});

Deno.test("Only Msg", function (): void {
  assertEquals(
    badges("", "fail"),
    "\u001b[37m\u001b[44m fail \u001b[49m\u001b[39m ",
  );
  // they may look the same but they are not!
  assertNotEquals(
    badges("", "fail"),
    "\u001b[48;5;8m\u001b[38;5;15m\u001b[0m\u001b[0m\u001b[48;5;4m\u001b[38;5;15m fail \u001b[0m\u001b[0m",
  );
});

Deno.test("Custom Badge", function (): void {
    assertEquals(
      badges("custom", "badge", { msgBg: "red", labelBg: 'yellow' }),
      `\u001b[37m\u001b[43m custom \u001b[49m\u001b[39m\u001b[37m\u001b[41m badge \u001b[49m\u001b[39m `,
    );
    // they may look the same but they are not!
    assertNotEquals(
      badges("custom", "badge", { msgBg: "red", labelBg: 'yellow' }),
      "\u001b[48;5;3m\u001b[38;5;15m custom \u001b[0m\u001b[0m\u001b[48;5;1m\u001b[38;5;15m badge \u001b[0m\u001b[0m ",
    );
});
