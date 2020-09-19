# CLI Badges

Generate Badges for your CLI.

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/cli_badges)  [![deno version](https://img.shields.io/badge/deno-^1.3.2-lightgrey?logo=deno)](https://github.com/denoland/deno) [![GitHub release](https://img.shields.io/github/release/Delta456/cli_badges.svg)](https://github.com/Delta456/cli_badges/releases) [![CI](https://github.com/Delta456/cli_badges/workflows/CI/badge.svg)](https://github.com/Delta456/cli_badges/actions?query=workflow%3ACI)

**NOTE**: It is recommended to update pre-exisiting versions of this module to `^v0.1.0` as there are many breaking changes from this release in the API.

## Features
- Make Beautiful Badges for CLI 🤩
- Works across all terminals 🦄
- Link support 🔗
- Variety of colors to choose from 🎨
- Written in TS with Deno 🦕

> Warning ⚠️: If your terminal has a custom theme then the colors will blend according to your configuration which can cause unwanted results.

## Usage

### Simple Example

Showcases `failed`, `success` and `skipped` badge on the terminal

```ts
import { badge } from "https://deno.land/x/cli_badges@v0.1.1/mod.ts";

console.log(badge("failed", "2", { msgBg: "red" }));

console.log(badge("success", "2", { msgBg: "green" }));

console.log(badge("skipped", "2", { msgBg: "yellow" }));
```

![sample_output](img/sample_output.png)

### Hyperlink Example

The hyperlink will only work if [supported](https://github.com/Delta456/cli_badges#hyperlink-support).

```ts
import { badge } from "https://deno.land/x/cli_badges@v0.1.1/mod.ts";

console.log(badge('❤️ donate', 'ko-fi', { hyper_link: 'https://ko-fi.com/logginjs',
}));
```

![donate_output](./img/donate_output.png)

For more see [examples](./examples/) for more usages

## `badge` function

`badge` function accepts the following arguments:

- `label`: label of the badge
- `msg`: message of the badge
- `opts`: accepts an interface of `BadgeOptions` 

## `BadgeOptions` Interface

```ts
interface BadgeOptions {
  msgBg: string; // default is blue
  labelBg: string; // default is brightBlack
  msgColor: string; // default is white
  labelColor: string; // default is white
  msgStyle?: string; // default is null
  labelStyle?: string; // default is null
  msgWidth?: number; // default is msg length + 2
  labelWidth?: number; // default is label length + 2
  is_8bit?: boolean; // default is false as it uses 24 bits
  hyper_link?: string; // hyperlink for the badge
}
```

## Available Options

### Foreground Colors

- `black`
- `red`
- `blue`
- `green`
- `yellow`
- `magenta`
- `cyan`
- `white`
- `brightBlack`
- `brightRed`
- `brightBlue`
- `brightGreen`
- `brightYellow`
- `brightMagenta`
- `brightCyan`
- `brightWhite`

### Background Colors

- `black`
- `red`
- `blue`
- `green`
- `yellow`
- `magenta`
- `cyan`
- `white`
- `brightBlack`
- `brightRed`
- `brightBlue`
- `brightGreen`
- `brightYellow`
- `brightMagenta`
- `brightCyan`
- `brightWhite`

### Custom Colors

Custom Colors are available and can be used for `msgBg`, `labelmsg`, `msgColor` and `labelColor` only. There are options to make `8 bit` and `24 bit` colors respectively. Set `is_8bit` to true if you want custom 8 bit RGB colors else it will be set to 24 bit RBG colors by default.

**NOTE**: `24 bit` Colors **must** be in a range of `0x000000` and `0xffffff` and `8 bit` Colors **must** in a range of `0x0` and `0xFF`.

### Styles

- `bold`
- `italic`
- `inverse`
- `dim`
- `strike`
- `underline`

### Hyperlink Support

Hyperlink is only supported on [some](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda) terminals.

## Acknowledgments

I thank the author of [nombrekeff/cli-badges](https://github.com/nombrekeff/cli-badges) for his original implementation in JS wth Node and also helped me with some Deno issues and giving me guidance on this project as this is my first project written in TS and Deno.

## License

Licensed under [MIT](LICENSE).
