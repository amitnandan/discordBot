import { Client, GatewayIntentBits } from 'discord.js';



const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent],
 });




 client.on('messageCreate' , (message) =>{
    console.log(message.content);
    
    if( message.author.bot) return ;
    
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1]
        return message.reply({
            content : "Generating Short ID for " + url,
        })
    }
    
    message.reply({
       content : " Hi from BOT "
    })
 })

 client.login(
    "MTE1Njg1OTg0OTI0Njc2OTIxMg.Gxb3wO.tNjOqYQIORMgl8st2imXtZG2vdSuuIjRMirwug"
 )


 client.on('interactionCreate' , (interaction)=>{
    console.log(interaction);
    interaction.reply("Pong !");
 } )
