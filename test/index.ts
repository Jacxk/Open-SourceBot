import OSBClient from "../OSBClient";
import OSBConsole from "../OSBConsole";
import SampleCMD from "./sample.command";

const client: OSBClient = new OSBClient();

client.onEnable().then(client => {
    client.registerCommand(new SampleCMD(client)).catch(OSBConsole.error);
}).catch(OSBConsole.error);

client.login(process.env.TOKEN).catch(OSBConsole.error);
