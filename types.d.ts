import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface CommandConstraints {
    isVIP?: boolean;
    hasFunCommands?: boolean;
    isStaff?: boolean;
    isSrMod?: boolean;
    isAdmin?: boolean;
}

export interface CommandData {
    name: string;
    description: string;
    options: SlashCommandBuilder;
    constraints?: CommandConstraints;
    execute(interaction: ChatInputCommandInteraction): void;
}