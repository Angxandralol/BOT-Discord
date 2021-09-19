const { Discord, Intents, Client } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require('../config.json');
const token = config.token;
const prefix = config.prefix;
//const messagesWelcome = require('./welcome');


//client.login(token);

/*client.on('ready', ()=> {
    console.log(`El bot está listo!. Estas iniciando con ${client.user.tag}!`);
});

client.on('message', (message) => {
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g); //Argumentos
    const command = args.shift().toLowerCase(); // comando (prefix)

    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;

    switch(command) {
        case 'ping': 
            message.channel.send({ 
                embed: {
                    color: 3447003, 
                    author: {
                        name: client.user.name,
                        icon_url: client.user.avatarURL()
                    }, 
                    fields: {
                        name: "Bienvenido!",
                        value: "pong!"
                    }
                }           
            });
        break;
        case 'inicio':
            message.channel.send({ 
                embed: {
                    color: 3447003, 
                    author: {
                        name: client.user.name,
                        icon_url: client.user.avatarURL()
                    }, 
                    fields:[{
                        name: "Bienvenido",
                        value: "Este es un bot que se encarga de guardar un registro de numeros escritos por los usuarios"
                    }, 
                    {
                        name: "Cómo empezar?",
                        value: "Ingresa la palabra 1d seguido de dos numeros con los que quieras trabajar"
                    }]
                }     
            });
        break;
        case 'Hello':
            message.channel.send("Hello!");
        break;
        case 'repetir':
            let argsOne = args[0];
            let argsTwo = args[1];
            if (!argsOne || !argsTwo) return message.channel.send("Escribe algo para repetir");
            message.channel.send(`Este es el primer argumento que escribiste: ${argsOne}`);
            message.channel.send(`Este es el segundo argumento que escribiste: ${argsTwo}`);
        break;
        case 'mencion': 
            let mencionado = message.mentions.users;
            let name = mencionado.username;
            if (!name) return message.reply('No ha mencionado a nadie');
            message.channel.send(`Has mencionado a ${name}`);
        break;
        case 'list':
            let list = [0,1,2,3,4];
            message.channel.send(list);
        break;
    }
})*/