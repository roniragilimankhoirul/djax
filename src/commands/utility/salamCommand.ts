import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("assalamualaikum")
  .setDescription("Replies with Waalaikumsalam");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Waalaikumsalam!");
}
