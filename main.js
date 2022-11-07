import { GatewayIntentBits, Partials, Collection, Client } from 'discord.js';
import dotenv from 'dotenv';
import logs from 'discord-logs';

dotenv.config()

const protect = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.Channel, Partials.Message]
  });
logs(protect)

