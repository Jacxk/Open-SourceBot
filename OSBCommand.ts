import {Message} from "discord.js";
import OSBClient from "./OSBClient";

export default class OSBCommand {

    private client: OSBClient;

    public aliases: Array<string>;
    public name: string;

    constructor(options: IOSBCommand) {
        this.name = options.name;
        this.aliases = options.aliases || [];
        this.client = options.client;
    }

    public execute(message: Message, ...args: Array<string>): Promise<any> {
        throw `Command '${name}' does not override "execute()"`;
    }

}

interface IOSBCommand {
    name: string;
    client: OSBClient
    aliases?: Array<string>;
}