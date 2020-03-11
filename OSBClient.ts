import {Client, ClientOptions, Collection} from "discord.js";
import OSBCommand from "./OSBCommand";

export default class OSBClient extends Client {
    public aliases: Collection<string, OSBCommand>;
    public commands: Collection<string, OSBCommand>;

    constructor(options?: ClientOptions) {
        super(options);
        this.aliases = new Collection<string, OSBCommand>();
        this.commands = new Collection<string, OSBCommand>();
    }

    private loadCommands(dir: string = "./") {
        // TODO: Load commands
    }
}