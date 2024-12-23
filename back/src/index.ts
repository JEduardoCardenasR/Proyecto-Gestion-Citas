import { AppDataSource } from "./config/dataSource";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";

AppDataSource.initialize()
    .then(res => {
        console.log("Database connected");
        server.listen(PORT, ()=> {
            console.log("Server listening in PORT", PORT);  
        })
    })
