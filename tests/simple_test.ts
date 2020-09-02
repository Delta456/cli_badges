import { badges } from "https://deno.land/x/cli_badges@v0.0.5/index.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Simple Hello Badge", function (): void {
    assertEquals(badges('hello'), '\u001b[37m\u001b[100m hello \u001b[49m\u001b[39m ');
});
