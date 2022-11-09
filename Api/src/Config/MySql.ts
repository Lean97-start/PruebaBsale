require("dotenv/config");
const mysql = require("mysql");

interface connectingDB {
  host: string;
  user: string;
  password: string;
  database: string;
}

let dataConfigDB: connectingDB = {
  host: process.env.host || "localhost",
  user: process.env.user || "me",
  password: process.env.password || "123456",
  database: process.env.database || "Prueba",
};

let connection: any;

async function initDB() {
  try {
    connection = mysql.createConnection(dataConfigDB);

    await connection.connect((error: any) => { //Establezco conexión con la DB
      if (error) {
        console.log("Error connecting. Try again", error);
        initDB();
      } else {
        console.log("Connected database");
      }
    });

    connection.on("error", (err: any) => { //Me permitira restablecer la conexión cuando el servicio DB se caiga.
      console.log("Error db", err.code);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        initDB();
      } else {
        throw err;
      }
    });

  } catch (e) {
    console.log(e);
  }
}

export { initDB , connection};
