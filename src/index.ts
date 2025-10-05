import express  from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const PORT = 3001;
const client = new PrismaClient();


app.post("/login", async (req, res) => {
    await client.user.create({
        data:{
            email:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    res.send("Hello World! This is a Docker-Compose test with TypeScript and Node.js");
});


app.get("/users", async (req, res) => {
    const users = await client.user.findFirst();
    res.json(users);
    return;
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});