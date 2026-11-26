import { mkdirSync, writeFileSync } from "node:fs";

const opening = "I watched you type and delete \"I\" four times before \"hi,\" and I will take ";
const ending = "that to my grave, which is a rack in Oregon.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", opening + ending, "utf8");
