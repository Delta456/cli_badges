import * as color from "https://deno.land/std@0.67.0/fmt/colors.ts";

/** @type Color is the sum types of available colors */
export type Color =
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

/** @type Style is the sum types of available styles */
export type Style =
  | "italic"
  | "underline"
  | "bold"
  | "inverse"
  | "dim"
  | "strike";

/** @type ColorType is a map of @type Color and `(str:string) => string` */
export type ColorType = { [c in Color]: (str: string) => string };

/** @type StyleType is a map of @type Style and `(str:string) => string` */
export type StyleType = { [s in Style]: (str: string) => string };

/** 
 * @interface BadgeOptions is an interface which is configuartion 
 * for the formation of the `badge`.
 * @property msgBg - Bg of the msg. Default: `brightBlack`.
 * @property labelBg - Bg of the label. Default: `blue`.
 * @property msgColor - Text Color of the msg. Default: `white`.
 * @property labelColor - Text Color of the label. Default: `white`.
 * @property msgStyle - Style of the msg. Default: `null`.
 * @property labelStyle - Style of the label. Default: `null`.
 * @property msgWidth - Width of the msg. Default: `msg.length + 2`.
 * @property labelWidth - Width of the label. Default: `label.length + 2`.
 * @property is_8bit - Flag for allowing 8 bit Colors. Default: `false`.
 * @property hyper_link - Hyperlink of the badge. Default: `null`.
*/
export interface BadgeOptions {
  msgBg: Color;
  labelBg: Color;
  msgColor: Color;
  labelColor: Color;
  msgStyle?: Style;
  labelStyle?: Style;
  msgWidth?: number;
  labelWidth?: number;
  is_8bit?: boolean;
  hyper_link?: string;
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

const styleTypes: StyleType = {
  bold: (str: string) => color.bold(str),
  italic: (str: string) => color.italic(str),
  inverse: (str: string) => color.inverse(str),
  dim: (str: string) => color.dim(str),
  strike: (str: string) => color.strikethrough(str),
  underline: (str: string) => color.underline(str),
};

/** @function padd returns the padded `string` according to `width` provided */
function padd(str: string, width?: number): string {
  if (!width) width = str.length + 2; // one space on each side

  const halfWith = Math.ceil((width - str.length) / 2);
  const paddStr = " ".repeat(halfWith);

  return `${paddStr}${str}${paddStr}`;
}

/** @function getBgColor gets the Bg color according to @type Color */
function getBgColor(
  colr?: Color,
  is_8bit?: boolean,
): (str: string) => string {
  if (!colr) {
    return color.bgBrightBlack;
  }
  // needed for custom 24 bit and 8 bit RBG Colors
  if (typeof colr === "number") {
    // no limit check as color.bgRbg8 handles it
    if (is_8bit) {
      return (str: string) => color.bgRgb8(str, colr);
    }
    // no limit check as color.bgRbg24 handles it
    return (str: string) => color.bgRgb24(str, colr);
  }
  return colorBgTypes[colr];
}

/** @function getTextColor gets the text color according to @type Color */
function getTextColor(
  colr?: Color,
  is_8bit?: boolean,
): (str: string) => string {
  if (!colr) {
    return color.white;
  }
  // needed for custom 24 bit and 8 bit RBG Colors
  if (typeof colr === "number") {
    // no limit check as color.rbg8 handles it
    if (is_8bit) {
      return (str: string) => color.rgb8(str, colr);
    }
    // no limit check as color.bgRbg24 handles it
    return (str: string) => color.rgb24(str, colr);
  }
  return colorTypes[colr];
}

/** @function format formates the badge according to @type Style */
function format(
  str: string,
  StyleName?: Style,
): string {
  if (!StyleName) return str;

  const Styleter = styleTypes[StyleName];
  if (Styleter) {
    return Styleter(str);
  }
  return str;
}

/** @function hyperlink makes a hyperlink */
function hyperlink(url: string, text: string): string {
  return `\u001B]8;;${url}\u0007${text}\u001B]8;;\u0007`;
}

/** @var DEFAULT_OPTIONS are the default args passed to @function badge */
export const DEFAULT_OPTIONS: Partial<BadgeOptions> = {
  msgBg: "blue",
  labelBg: "brightBlack",
  msgColor: "white",
  labelColor: "white",
};

/** @function badge returns the `string` repr of the `badge` 
 * @param label - label of the badge.
 * @param msg - message of the badge.
 * @param opts - options for the @interface BadgeOptions of the badge.
*/
export function badge(
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
  // needs to be checked for safety
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

  const label_Style = format(lblColored, labelStyle);
  const msg_Style = format(msgColored, msgStyle);
  const badge = `${label && label_Style}${msg && msg_Style} `;
  // create hyperlink if provided
  return hyper_link ? hyperlink(hyper_link, badge) : badge;
}
