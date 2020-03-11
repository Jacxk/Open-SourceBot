import OSBClient from "../OSBClient";
import OSBConsole from "../OSBConsole";

const client: OSBClient = new OSBClient();

client.on("ready", () => {
    OSBConsole.log(`${client.user.tag} is now ready!`);
});

client.login(process.env.TOKEN).catch(OSBConsole.error);