import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' }).setToken(    "MTE1Njg1OTg0OTI0Njc2OTIxMg.Gxb3wO.tNjOqYQIORMgl8st2imXtZG2vdSuuIjRMirwug"
);

(async()=>{
    
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("1156859849246769212"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

