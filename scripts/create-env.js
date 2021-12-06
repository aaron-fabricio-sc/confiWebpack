const fs = require("fs");
fs.writeFileSync("./.env", `ALERTA=${process.env.ALERTA}\n`);
