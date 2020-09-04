import { badge } from "../mod.ts";
import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

import { Color } from "../mod.ts";

const cases = [{
  name: "Only Label",
  options: { label: "hello", msg: "" },
  output: "\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m ",
}, {
  name: "Only Msg",
  options: { label: "", msg: "hello" },
  output: "\u001b[37m\u001b[44m hello \u001b[49m\u001b[39m ",
}, {
  name: "Counter Badge",
  options: { label: "counter", msg: "5" },
  output:
    "\u001b[37m\u001b[100m counter \u001b[49m\u001b[39m\u001b[37m\u001b[44m 5 \u001b[49m\u001b[39m ",
}];

for (const { name, options, output } of cases) {
  Deno.test(name, function () {
    assertEquals(badge(options.label, options.msg), output);
  });
}

const color_cases: {
  name: string;
  options: {
    label: string;
    msg: string;
    opts: {
      msgBg: Color;
    };
  };
  output: string;
}[] = [{
  name: "Success Badge",
  options: { label: "success", msg: "5", opts: { msgBg: "green" } },
  output:
    "\u001b[37m\u001b[100m success \u001b[49m\u001b[39m\u001b[37m\u001b[42m 5 \u001b[49m\u001b[39m ",
}, {
  name: "Fail Badge",
  options: { label: "fail", msg: "5", opts: { msgBg: "red" } },
  output:
    "\u001b[37m\u001b[100m fail \u001b[49m\u001b[39m\u001b[37m\u001b[41m 5 \u001b[49m\u001b[39m ",
}];

for (const { name, options, output } of color_cases) {
  Deno.test(name, function (): void {
    assertEquals(badge(options.label, options.msg, options.opts), output);
  });
}

Deno.test("Custom Badge", function (): void {
  assertEquals(
    badge("custom", "badge", { msgBg: "red", labelBg: "yellow" }),
    `\u001b[37m\u001b[43m custom \u001b[49m\u001b[39m\u001b[37m\u001b[41m badge \u001b[49m\u001b[39m `,
  );
});

Deno.test("Invalid Badges", function (): void {
  // they all may look the same but they are not!
  assertNotEquals(
    badge("success", "5", { msgBg: "green" }),
    "\u001b[48;5;8m\u001b[38;5;15m success \u001b[0m\u001b[0m\u001b[48;5;2m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
  assertNotEquals(
    badge("counter", "5"),
    "\u001b[48;5;8m\u001b[38;5;15m counter \u001b[0m\u001b[0m\u001b[48;5;4m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
  assertNotEquals(
    badge("fail", "5", { msgBg: "red" }),
    "\u001b[48;5;8m\u001b[38;5;15m fail \u001b[0m\u001b[0m\u001b[48;5;1m\u001b[38;5;15m 5 \u001b[0m\u001b[0m ",
  );
  assertNotEquals(
    badge("", "fail"),
    "\u001b[48;5;8m\u001b[38;5;15m\u001b[0m\u001b[0m\u001b[48;5;4m\u001b[38;5;15m fail \u001b[0m\u001b[0m",
  );
  assertNotEquals(
    badge("custom", "badge", { msgBg: "red", labelBg: "yellow" }),
    "\u001b[48;5;3m\u001b[38;5;15m custom \u001b[0m\u001b[0m\u001b[48;5;1m\u001b[38;5;15m badge \u001b[0m\u001b[0m ",
  );
});
