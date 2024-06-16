require("./settings.js"); // Sesuaikan dengan nama file dan lokasi yang benar jika perlu
const http = require("http");
const app = require("./index"); // Sesuaikan dengan nama file dan lokasi yang benar jika perlu

const port = process.env.PORT || 8080;
const creator = process.env.CREATOR || "Matzz";

http.createServer(app).listen(port, () => {
    console.log(`
        ███╗   ███╗ █████╗ ████████╗██████████╗
        ████╗ ████║██╔══██╗╚══██╔══╝██╔══════╝
        ██╔████╔██ ███████║   ██║   ███████╗  
        ██║╚██╔╝██║██╔══██║   ██║   ██╔═══██╗ 
        ██║ ╚═╝ ██║██║  ██║   ██║   ███████║ 
        ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

    Server running on http://localhost:${port}
    Hello ${creator}
    `);
});
