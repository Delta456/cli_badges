import { badge } from "../mod.ts";
import {
  assertEquals,
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

Deno.test("Bold", function (): void {
  assertEquals(
    badge("hello", "", { labelStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m\u001b[22m ",
  );
  assertEquals(
    badge("hello", "world", { labelStyle: "bold", msgStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m\u001b[22m\u001b[1m\u001b[37m\u001b[44m world \u001b[49m\u001b[39m\u001b[22m ",
  );
  assertEquals(
    badge("foo", "bar", { labelBg: "cyan", labelStyle: "bold" }),
    "\u001b[1m\u001b[37m\u001b[46m foo \u001b[49m\u001b[39m\u001b[22m\u001b[37m\u001b[44m bar \u001b[49m\u001b[39m ",
  );

  assertEquals(
    badge(
      "foo",
      "bar",
      {
        labelBg: "green",
        labelStyle: "bold",
        msgBg: "magenta",
        msgStyle: "bold",
      },
    ),
    "\u001b[1m\u001b[37m\u001b[42m foo \u001b[49m\u001b[39m\u001b[22m\u001b[1m\u001b[37m\u001b[45m bar \u001b[49m\u001b[39m\u001b[22m ",
  );

  assertEquals(
    badge(
      "foo",
      "bar",
      {
        labelBg: "green",
        labelStyle: "bold",
        msgBg: "magenta",
        msgStyle: "bold",
        labelColor: "red",
      },
    ),
    "\u001b[1m\u001b[31m\u001b[42m foo \u001b[49m\u001b[39m\u001b[22m\u001b[1m\u001b[37m\u001b[45m bar \u001b[49m\u001b[39m\u001b[22m ",
  );

  assertEquals(
    badge(
      "foo",
      "bar",
      {
        labelBg: "green",
        labelStyle: "bold",
        msgBg: "magenta",
        msgStyle: "bold",
        labelColor: "yellow",
        msgColor: "green",
      },
    ),
    "\u001b[1m\u001b[33m\u001b[42m foo \u001b[49m\u001b[39m\u001b[22m\u001b[1m\u001b[32m\u001b[45m bar \u001b[49m\u001b[39m\u001b[22m ",
  );
});

Deno.test("Italic", function (): void {
  assertEquals(
    badge("hello", "", { labelStyle: "italic" }),
    "\u001b[3m\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m\u001b[23m ",
  );
});
