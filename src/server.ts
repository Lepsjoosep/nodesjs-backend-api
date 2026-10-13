import app from "./app.js";
import { get, Server } from "node:http";

let server: Server;
let port: number = process.env.PORT

async function startServer() {
    server = app.listen(port , () => {
        console.log(`Server started at Port: ${port}  Oo=o=oO`);
    });

    server.on('error', (error) => {
        console.error(`Server start failed: ${error}`);
        process.exit(1);
    })
}

async function closeConnection() {
    if (server) {
        await new Promise(resolve => server.close(resolve));
    }
}

startServer().catch((error) => {
    console.error(`Server start failed: ${error}`);
    closeConnection();
    process.exit(1);
});

