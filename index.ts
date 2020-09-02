import * as color from "https://deno.land/std@0.67.0/fmt/colors.ts";

type Color =
  | number
  | "black"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "magenta"
  | "cyan"
  | "white"
  | "brightBlack"
  | "brightRed"
  | "brightBlue"
  | "brightGreen"
  | "brightYellow"
  | "brightMagenta"
  | "brightCyan"
  | "brightWhite";
type Format = "italic" | "underline" | "bold" | "inverse" | "dim" | "strike";
type ColorType = { [c in Color]: (str: string) => string };
type FormatType = { [format in Format]: (str: string) => string };

export interface BadgeOptions {
  msgBg: Color;
  labelBg: Color;
  msgColor: Color;
  labelColor: Color;
  msgStyle?: Format;
  labelStyle?: Format;
  msgWidth?: number;
  labelWidth?: number;
  is_8bit?: boolean;
  hyper_link?: string,
}

const colorBgTypes: ColorType = {
  black: (str: string) => color.bgBlack(str),
  red: (str: string) => color.bgRed(str),
  blue: (str: string) => color.bgBlue(str),
  green: (str: string) => color.bgGreen(str),
  yellow: (str: string) => color.bgYellow(str),
  magenta: (str: string) => color.bgMagenta(str),
  cyan: (str: string) => color.bgCyan(str),
  white: (str: string) => color.bgWhite(str),
  brightBlack: (str: string) => color.bgBrightBlack(str),
  brightRed: (str: string) => color.bgBrightRed(str),
  brightBlue: (str: string) => color.bgBrightBlue(str),
  brightGreen: (str: string) => color.bgBrightGreen(str),
  brightYellow: (str: string) => color.bgBrightYellow(str),
  brightMagenta: (str: string) => color.bgBrightMagenta(str),
  brightCyan: (str: string) => color.bgBrightCyan(str),
  brightWhite: (str: string) => color.bgBrightWhite(str),
};

const colorTypes: ColorType = {
  black: (str: string) => color.black(str),
  red: (str: string) => color.red(str),
  blue: (str: string) => color.blue(str),
  green: (str: string) => color.green(str),
  yellow: (str: string) => color.yellow(str),
  magenta: (str: string) => color.magenta(str),
  cyan: (str: string) => color.cyan(str),
  white: (str: string) => color.white(str),
  brightBlack: (str: string) => color.brightBlack(str),
  brightRed: (str: string) => color.brightRed(str),
  brightBlue: (str: string) => color.brightBlue(str),
  brightGreen: (str: string) => color.brightGreen(str),
  brightYellow: (str: string) => color.brightYellow(str),
  brightMagenta: (str: string) => color.brightMagenta(str),
  brightCyan: (str: string) => color.brightCyan(str),
  brightWhite: (str: string) => color.brightWhite(str),
};

const formatters: FormatType = {
  bold: (str: string) => color.bold(str),
  italic: (str: string) => color.italic(str),
  inverse: (str: string) => color.inverse(str),
  dim: (str: string) => color.dim(str),
  strike: (str: string) => color.strikethrough(str),
  underline: (str: string) => color.underline(str),
};

function padd(str: string, width?: number): string {
  if (!width) width = str.length + 2; // one space on each side

  const halfWith = Math.ceil((width - str.length) / 2);
  const paddStr = " ".repeat(halfWith);

  return `${paddStr}${str}${paddStr}`;
}

function getBgColor(
  colr?: Color,
  is_8bit?: boolean,
): (str: string) => string {
  if (!colr) {
    return color.bgBrightBlack;
  }
  if (typeof colr === "number") {
    if (is_8bit) {
      return (str: string) => color.bgRgb8(str, colr);
    }
    return (str: string) => color.bgRgb24(str, colr);
  }
  return colorBgTypes[colr];
}

function getTextColor(
  colr?: Color,
  is_8bit?: boolean,
): (str: string) => string {
  if (!colr) {
    return color.white;
  }
  if (typeof colr === "number") {
    if (is_8bit) {
      return (str: string) => color.rgb8(str, colr);
    }
    return (str: string) => color.rgb24(str, colr);
  }
  return colorTypes[colr];
}

function format(
  str: string,
  formatterName?: Format,
): string {
  if (!formatterName) return str;

  const formatter = formatters[formatterName];
  if (formatter) {
    return formatter(str);
  }
  return str;
}

function hyperlink(url: string , text: string) : string {
  return `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`
}

export const DEFAULT_OPTIONS: Partial<BadgeOptions> = {
  msgBg: "blue",
  labelBg: "brightBlack",
  msgColor: "white",
  labelColor: "white",
};

export function badges(
  label = "",
  msg = "",
  opts: Partial<BadgeOptions> = DEFAULT_OPTIONS,
) {
  const {
    labelBg,
    labelColor,
    labelWidth,
    labelStyle,
    msgWidth,
    msgColor,
    msgBg,
    msgStyle,
    is_8bit,
    hyper_link,
  } = opts;

  const lblStr = padd(label, labelWidth);
  const msgStr = padd(msg, msgWidth);

  let msgColored: string, lblColored: string;

  if (!labelBg) {
    lblColored = getTextColor(labelColor, is_8bit)(color.bgBrightBlack(lblStr));
  } else {
    lblColored = getTextColor(labelColor, is_8bit)(
      getBgColor(labelBg, is_8bit)(lblStr),
    );
  }
  if (!msgBg) {
    msgColored = getTextColor(msgColor, is_8bit)(color.bgBlue(msgStr));
  } else {
    msgColored = getTextColor(msgColor, is_8bit)(
      getBgColor(msgBg, is_8bit)(msgStr),
    );
  }

  const labelformat = format(lblColored, labelStyle);
  const msgformat = format(msgColored, msgStyle);
  const badge = `${label && labelformat}${msg && msgformat} `

  return hyper_link ? hyperlink(hyper_link, badge): badge;
}
