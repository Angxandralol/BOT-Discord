const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;

//Archivos
const convertidor = require('./Function/convertidor');
const operacion = require('./Function/sumador');
const list = require('./Function/list');

//Arranque
client.login(token);
client.on('ready', () => {
    console.log(`El ${client.user.tag} ya está funcionando en tu canal!`);

});

//Mensajes
client.on('message', (message) => {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    switch(command) {

        case 'help':
            message.channel.send({
                embed: {
                    color: 3447003, 
                    author: {
                        name: client.user.name,
                        icon_url: client.user.avatarURL()
                    }, 
                    fields:[{
                        name: "Bienvenido a mi PrimerBot",
                        value: "Este es un bot que se encarga de guardar un registro de numeros escritos por los usuarios"
                    }, 
                    {
                        name: "Cómo empezar?",
                        value: "Escribe .roll 1d mas dos numeros con los que desees trabajar" 
                    },
                    {
                        name: "Comandos",
                        value: "help: ayuda. list: Lista de numeros. CleanList: Borrado de la lista. 1d: para añadir numeros"
                    }]

                }
            });
        break;

        case '1d': 
            let argsOne = args[0];
            let argsTwo = args[1];
            if (!argsOne && !argsTwo) return message.channel.send("Debes ingresar dos numeros");

            let numberOne = convertidor.convertidorNumeros(argsOne);
            let numberTwo = convertidor.convertidorNumeros(argsTwo);
            let result = operacion.getSumador(numberOne,numberTwo);

            let guardado = list.añadirList(result);
            if (guardado==0) {
                console.log("El numero se ha guardado correctamente en la lista");
                message.channel.send(`El numero final es: ${result}`);
            }
            else return console.log("El numero no se ha podido guardar en la lista");
        break;

        case 'list':
            let listaCompleta = list.list;
            if (listaCompleta.length!=0) {
                let length = listaCompleta.length;
                let index = 0;
                while (index<length) {
                    message.channel.send(listaCompleta[index]);
                    index++;
                }
            } else {
                message.channel.send("La lista está vacía");
            }
        break;

        case 'cleanlist': 
            let borrado = list.borrarList();
            if (borrado==0) return message.channel.send("La lista no se ha podido borrar");
            else return message.channel.send("La lista se ha borrado con èxito!");
        break;

    }

})