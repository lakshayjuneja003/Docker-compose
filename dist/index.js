"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const PORT = 3001;
const client = new client_1.PrismaClient();
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.user.create({
        data: {
            email: "hello@gmail.com",
            password: "mypassword"
        }
    });
    res.send("Hello World! This is a Docker-Compose test with TypeScript and Node.js");
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findFirst();
    res.json(users);
    return;
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
