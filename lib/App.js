"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const Config_1 = require("./Config");
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const client = new discord_js_1.default.Client();
client.on('ready', () => {
    console.log('Bot Is Online.');
});
app.get('/api/guilds/get/:id', (req, res) => {
    const guild = client.guilds.cache.get(req.params.id);
    if (!guild)
        return res.status(404).json({ message: 'Guild Not Found' });
    return res.status(200).json({
        name: guild.name,
        id: guild.id,
        icon: guild.icon,
        memberCount: guild.memberCount
    });
});
client.login(Config_1.token);
app.listen(3000, () => {
    console.log('API Is Online.');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsc0RBQTZCO0FBQzdCLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQTtBQUNyQixNQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFHbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDeEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDcEQsSUFBRyxDQUFDLEtBQUs7UUFBRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQTtJQUV0RSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtRQUNoQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7UUFDaEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQ2pDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFLLENBQUMsQ0FBQztBQUNwQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc2NvcmQgZnJvbSAnZGlzY29yZC5qcydcbmltcG9ydCB7IHRva2VuIH0gZnJvbSAnLi9Db25maWcnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuY29uc3QgYXBwID0gZXhwcmVzcygpXG5jb25zdCBjbGllbnQgPSBuZXcgZGlzY29yZC5DbGllbnQoKVxuXG5cbmNsaWVudC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0JvdCBJcyBPbmxpbmUuJylcbn0pXG5cbmFwcC5nZXQoJy9hcGkvZ3VpbGRzL2dldC86aWQnLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBndWlsZCA9IGNsaWVudC5ndWlsZHMuY2FjaGUuZ2V0KHJlcS5wYXJhbXMuaWQpXG4gICAgaWYoIWd1aWxkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnR3VpbGQgTm90IEZvdW5kJyB9KVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgbmFtZTogZ3VpbGQubmFtZSxcbiAgICAgICAgaWQ6IGd1aWxkLmlkLFxuICAgICAgICBpY29uOiBndWlsZC5pY29uLFxuICAgICAgICBtZW1iZXJDb3VudDogZ3VpbGQubWVtYmVyQ291bnRcbiAgICB9KVxufSlcblxuY2xpZW50LmxvZ2luKHRva2VuKTtcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdBUEkgSXMgT25saW5lLicpXG59KSJdfQ==