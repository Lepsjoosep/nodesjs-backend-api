import { Server } from "node:http";
import app from "./app.js";
import { env } from "./config/env.js";

const PORT = process.env.PORT || 3000;

const server: Server = app.listen(env.PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on http://localhost:${env.PORT}`);
});

let isShuttingDown = false;


async function shutdown() {
    if (isShuttingDown) return;
    isShuttingDown = true;

    setTimeout(() => process.exit(1), 8000)
     
    await new Promise(resolve => server.close(resolve));
    process.exit(0);

}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);