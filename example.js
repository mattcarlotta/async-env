const { readFileSync } = require("fs");
const { config, parse } = require("@noshot/env");

// dynamic values
const { extracted } = config({ paths: ".env.dynamicdata" });
console.log("🚀 extracted: ", extracted);

// extended envs from magic comments
const result = parse(readFileSync(".env.extends"));
console.log("🚀 result: ", result);
