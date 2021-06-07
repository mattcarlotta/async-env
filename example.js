const { config } = require("@noshot/env");

const { extracted } = config({ paths: ".env.dynamicdata" });

console.log("🚀 extracted: ", extracted);
