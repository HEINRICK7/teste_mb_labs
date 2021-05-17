import { createConnection } from 'typeorm';

export const connectSeverDB = async () => {
    const connect = await createConnection();
    console.log(`App Connected DB ${ connect.options.database}`);

    process.on('SIGINT', () => {
        connect.close().then(() => console.log('DB connection closed'))
    });
}