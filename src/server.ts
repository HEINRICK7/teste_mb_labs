import { app } from './app';


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>{
    
    console.log(`connected server http://localhost:${PORT}`);
    
})

/**
 * Ao finalizar o processo, o server é finalizado também
 */
process.on('SIGINT', () => {

    server.close();
    console.log('server finalizado');

})