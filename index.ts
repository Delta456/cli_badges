//const color = require('cli-color');
///const terminalLink = require('terminal-link');

import * as color from "https://deno.land/std@0.66.0/fmt/colors.ts";

function padd(str : string, width : number) : string {
    
    if (!width) width = str.length + 2; // one space on each side

    const halfWith = Math.ceil((width - str.length) / 2);
    const paddStr = ' '.repeat(halfWith);

    return `${paddStr}${str}${paddStr}`;
}

function getBg(colr: string): (str : string) => string {
    if (!colr) {
        return color.bgBlue
    }
    return colorbgtypes[colr]
};

function getLabel(colr: string): (str : string) => string {
    if (!colr) {
        return color.bgBlue
    }
    return colortypes[colr];
};


const colorbgtypes : { [x: string]: (str : string) => string } = {
    'black': (str: string) => color.bgBlack(str),
    'red': (str: string) => color.bgRed(str),
    'blue' : (str: string) => color.bgBlue(str),
    'green': (str: string) => color.bgGreen(str),
    'yellow': (str: string) => color.bgYellow(str),
    'magenta': (str: string) => color.bgMagenta(str),
    'cyan': (str: string) => color.bgCyan(str),
    'white': (str: string) => color.bgWhite(str),
};

const colortypes : { [x: string]: (str : string) => string } = {
    'black': (str: string) => color.black(str),
    'red': (str: string) => color.red(str),
    'blue' : (str: string) => color.blue(str),
    'green': (str: string) => color.green(str),
    'yellow': (str: string) => color.yellow(str),
    'magenta': (str: string) => color.magenta(str),
    'cyan': (str: string) => color.cyan(str),
    'white': (str: string) => color.white(str),
};


const formatters : { [x: string]: (str : string) => string } = {
    'bold': (str: string) => color.bold(str),
    'italic': (str: string) => color.italic(str),
    'inverse': (str: string) => color.inverse(str),
    'dim': (str: string) => color.dim(str),
    'strike': (str: string) => color.strikethrough(str),
    'underline': (str: string) => color.underline(str),
};

function format(col: (str : string) => string, s : string, formatter : string): string {
    let form = formatters[formatter]
    if (form) {
       return form(col(s))
    }
    return col(s)
};

export function badges(label = '', msg = '', msgBg = 'blue', labelBg = 'black', msgColor = 'white', labelColor = 'white', msgStyle = '', labelStyle = '', msgWidth = 0, labelWidth = 0) {
    
    const lblColorer = getLabel(getBg(labelBg)(label));
    const msgColorer = getLabel(getBg(msgBg)(msg));
    const labelformat = format(lblColorer, padd(label, labelWidth), labelStyle)
    const msgformat = format(msgColorer, padd(label, msgWidth), msgStyle)

    return `${label && labelformat}${msg && msgformat} `
  
};

console.log(badges('hello','world'))


/*
const format = (color, s, formatter) => {
    let f = formatters[formatter];
    return f ? f(str: string) : color(str);
};


module.exports = {
    badge(label = '', message = '', {
        messageBg = 'blue',
        labelBg = 'blackBright',
        messageColor = 'white',
        labelColor = 'white',
        messageStyle = null,
        labelStyle = null,
        labelWidth = null,
        messageWidth = null,
        link = null,
    } = {}) {
        const lblColorer = getLabel(getBg(color, labelBg), labelColor);
        const msgColorer = getLabel(getBg(color, messageBg), messageColor);

        const lblFormatted = format(lblColorer, padd(label, labelWidth), labelStyle);
        const msgFormatted = format(msgColorer, padd(message, messageWidth), messageStyle);

        const badge = `${label && lblFormatted}${message && msgFormatted} `;
        //const makeLink = link && terminalLink.isSupported;

        return badge;
    },
};
*/
