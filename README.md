# CLI Badges

Generate Badges for your CLI.

## Features
- Make Beautiful Badges in CLI
- Works across all terminals
- Link support (soon)
- Variety of colors to choose from
- Written in TS with Deno
- many more coming...

## Usage

```ts
import { badges } from "https://deno.land/x/cli_badges@v0.0.3/index.ts";

console.log(badges('failed', '2', {msgBg: "red"}))

console.log(badges('success', '2', {msgBg: "green"}))

console.log(badges('skipped', '2', { msgBg: "yellow"}))
```

## Output

![sample_output](img/sample_output.png)

## `badges` function

`badges` function accepts the following arguments:

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
  labelWidth?: number; //default is label length + 2
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

Custom color support coming soon

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

Custom color support coming soon

### Styles

- `bold`
- `italic`
- `inverse`
- `dim`
- `strike`
- `underline`

## Acknowledgments

I thank the author of [nombrekeff/cli-badges](https://github.com/nombrekeff/cli-badges) for his original implementation in JS wth Node and also helped me with some Deno issues and giving me guidance on this project as this is my first project with TS.

## License

Licensed under [MIT](LICENSE).
