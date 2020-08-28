//const color = require('cli-color');
///const terminalLink = require('terminal-link');

import * as color from 'https://deno.land/std@0.66.0/fmt/colors.ts';

type ColorType = { [x: string]: (str: string) => string };

export interface BadgeOptions {
  msgBg: string;
  labelBg: string;
  msgColor: string;
  labelColor: string;
  msgStyle?: string;
  labelStyle?: string;
  msgWidth?: number;
  labelWidth?: number;
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
};

const formatters: ColorType = {
  bold: (str: string) => color.bold(str),
  italic: (str: string) => color.italic(str),
  inverse: (str: string) => color.inverse(str),
  dim: (str: string) => color.dim(str),
  strike: (str: string) => color.strikethrough(str),
  underline: (str: string) => color.underline(str),
};

function padd(str: string, width: number | undefined): string {
  if (!width) width = str.length + 2; // one space on each side

  const halfWith = Math.ceil((width - str.length) / 2);
  const paddStr = ' '.repeat(halfWith);

  return `${paddStr}${str}${paddStr}`;
}

function getBgColor(
  colr: string | undefined
): (str: string) => string {
  if (!colr) {
    return color.bgBlue;
  }
  return colorBgTypes[colr];
}

function getTextColor(
  colr: string | undefined
): (str: string) => string {
  if (!colr) {
    return color.bgBlue;
  }
  return colorTypes[colr];
}

function format(
  str: string,
  formatterName: string | undefined
): string {
  if (!formatterName) return str;

  const formatter = formatters[formatterName];
  if (formatter) {
    return formatter(str);
  }
  return str;
}

export const DEFAULT_OPTIONS: BadgeOptions = {
  msgBg: 'blue',
  labelBg: 'black',
  msgColor: 'white',
  labelColor: 'white',
};

export function badges(
  label = '',
  msg = '',
  opts: BadgeOptions = DEFAULT_OPTIONS
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
  } = opts;

  const lblStr = padd(label, labelWidth);
  const msgStr = padd(msg, msgWidth);

  const lblColored = getTextColor(labelColor)(
    getBgColor(labelBg)(lblStr)
  );
  const msgColored = getTextColor(msgColor)(
    getBgColor(msgBg)(msgStr)
  );

  const labelformat = format(lblColored, labelStyle);
  const msgformat = format(msgColored, msgStyle);

  return `${label && labelformat}${msg && msgformat} `;
}

console.log(badges('hello', 'world'));
