const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("ket noi du lieu");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`server dang chay tren port ${PORT}`);
        });
    } catch (error) {
        console.log("khong the ket noi toi du lieu", error);
        process.exit();
    }
}

startServer();
