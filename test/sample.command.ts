import {Message, PartialMessage} from "discord.js";
import OSBClient from "../OSBClient";
import OSBCommand from "../OSBCommand";

export default class SampleCMD extends OSBCommand {

    constructor(client: OSBClient) {
        super({
            name: "sample",
            client
        });
    }

    public async execute(message: Message | PartialMessage, ...args: Array<string>): Promise<any> {
        await message.channel.send('hello');
    }

}
