/*const minhaPromisse = () => new Promise((resolve,reject) => {
    setTimeout(() => {resolve("OK")},2000); 
});

/*
minhaPromisse()
    .then(response => {
        console.log(response);
    });
*/

//acima do es6+
/*
async function executaPromisse(){
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromisse();
*/
/*import axios from 'axios';

class Api {
    static async getuserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
        }catch(erro){
            console.warn("EROO : deu ruim!");
        }
        console.log(response);
    }
}

Api.getuserInfo('username');*/


//const delay = (text,seconds) => new Promise(resolve => setTimeout(resolve => console.log(text), seconds * 1000));
//const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/*async function umPorSegundo() {
    try{
         await delay();
         console.log('one second');

         await delay();
         console.log('two second');

         await delay();
         console.log('three second');

         await delay();
         console.log('Four segundo!');

    }catch(err){
        console.warn(`Deu erro ${erro}`);
    }
}

umPorSegundo();
*/




