import { REST, Routes } from "discord.js";
import { commands } from "./utility";

const commandsData = Object.values(commands).map((command) => command.data);
const token = process.env.DISCORD_TOKEN;
const clientID = process.env.CLIENT_ID;

if (token === undefined || clientID === undefined) {
  console.error(
    "Discord token or client ID is not defined. Please ensure they are set in your environment variables."
  );
  process.exit(1);
}

const rest = new REST({ version: "10" }).setToken(token);

type DeployCommandsProps = {
  guildId: string;
};

export async function deployCommands({ guildId }: DeployCommandsProps) {
  try {
    console.log("Started refreshing application (/) commands.");

    if (typeof clientID === "string") {
      await rest.put(Routes.applicationGuildCommands(clientID, guildId), {
        body: commandsData,
      });

      console.log("Successfully reloaded application (/) commands.");
    } else {
      console.error("Invalid client ID.");
    }
  } catch (error) {
    console.error(error);
  }
}
