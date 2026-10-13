import app from "./app.js";
import { Server } from "node:http";

let server: Server;

async function startServer() {
    server = app.listen(3000, () => {
        console.log("Server started at Port:3000  Oo=o=oO");
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