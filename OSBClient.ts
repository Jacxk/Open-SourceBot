import {Client, ClientOptions, Collection} from "discord.js";
import OSBCommand from "./OSBCommand";
import OSBConsole from "./OSBConsole";

export default class OSBClient extends Client {
    public aliases: Collection<string, OSBCommand>;
    public commands: Collection<string, OSBCommand>;

    constructor(options?: ClientOptions) {
        super(options);
        this.aliases = new Collection<string, OSBCommand>();
        this.commands = new Collection<string, OSBCommand>();
    }

    public onEnable(): Promise<OSBClient> {
        return new Promise<OSBClient>((resolve, reject) => {
            this.on("ready", () => {
                OSBConsole.log(`${this.user.tag} is now ready!`);
                resolve(this);
            });
            this.on("error", reject);
            this.on("message", message => {
                if (message.author.bot) return;

                let command: OSBCommand = this.commands.get(message.content);
                if (!command) command = this.aliases.get(message.content);
                if (!command) return;

                command.execute(message).catch(OSBConsole.error)
            });
        });
    }

    public registerCommand(command: OSBCommand): Promise<OSBCommand> {
        return new Promise<OSBCommand>((resolve, reject) => {
            if (this.commands.has(command.name)) {
                return reject(`Command with name ${command.name} already exists!`);
            }
            this.commands.set(command.name, command);
            command.aliases.forEach(alias => {
                if (this.aliases.has(alias)) {
                    return reject(`Alias ${alias} on command with name ${command.name} already exists!`);
                }
                this.aliases.set(alias, command);
            });
            OSBConsole.log(`Command ${OSBConsole.COLORS.Cyan}'${command.name}'${OSBConsole.COLORS.Reset} registered!`);
            return resolve(command);
        });
    }
}