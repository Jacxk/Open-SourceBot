export default class OSBConsole {

    public static COLORS = {
        Reset: '\u001b[0m',
        Black: '\u001b[30m',
        Red: '\u001b[31m',
        Green: '\u001b[32m',
        Yellow: '\u001b[33m',
        Blue: '\u001b[34m',
        Magenta: '\u001b[35m',
        Cyan: '\u001b[36m',
        White: '\u001b[37m',
        Bright_Black: '\u001b[30;1m',
        Bright_Red: '\u001b[31;1m',
        Bright_Green: '\u001b[32;1m',
        Bright_Yellow: ' \u001b[33;1m',
        Bright_Blue: '\u001b[34;1m',
        Bright_Magenta: '\u001b[35;1m',
        Bright_Cyan: '\u001b[36;1m',
        Bright_White: '\u001b[37;1m'
    };

    public static log(message: any) {
        const time: string = `[${new Date().toLocaleString()}] `;
        console.log(`${OSBConsole.COLORS.Reset}${time}${message}${OSBConsole.COLORS.Reset}`)
    }

    public static warning(message: any) {
        OSBConsole.log(`${OSBConsole.COLORS.Yellow}${message}`)
    }

    public static error(message: any) {
        OSBConsole.log(`${OSBConsole.COLORS.Red}${message}`)
    }

    public static info(message: any) {
        OSBConsole.log(`${OSBConsole.COLORS.Blue}${message}`)
    }
}