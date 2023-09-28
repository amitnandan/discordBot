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
    "AUTH_TOKEN"
 )


 client.on('interactionCreate' , (interaction)=>{
    console.log(interaction);
    interaction.reply("Pong !");
 } )
