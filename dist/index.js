#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
program.name("hottokeki").description("Hottokeki CLI").version("0.0.1");
program
    .command("helloworld [fields...]")
    .description("prints hello world")
    .action(() => {
    console.log("Hello world");
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map