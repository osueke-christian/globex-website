/* scripts/download-framer-images.js */

const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT_DIR = process.cwd();
const OUTPUT_DIR = path.join(ROOT_DIR, "public/assets/images");

// Regex to match framer image URLs
const FRAMER_REGEX =
  /https:\/\/framerusercontent\.com\/images\/[^\s"'()]+/g;

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Recursively walk project files
function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // Ignore node_modules, .next, etc.
    if (
      filePath.includes("node_modules") ||
      filePath.includes(".next") ||
      filePath.includes(".git")
    ) {
      return;
    }

    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Download helper
function download(url, filepath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(`Failed: ${url}`);
          return;
        }

        const fileStream = fs.createWriteStream(filepath);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close(resolve);
        });
      })
      .on("error", reject);
  });
}

(async function run() {
  const files = walk(ROOT_DIR);
  const found = new Set();

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(FRAMER_REGEX);
    if (matches) {
      matches.forEach((url) => found.add(url));
    }
  });

  console.log(`Found ${found.size} framer images`);

  for (const url of found) {
    const filename = url.split("/").pop().split("?")[0];
    const outputPath = path.join(OUTPUT_DIR, filename);

    if (fs.existsSync(outputPath)) {
      console.log(`Skipping (exists): ${filename}`);
      continue;
    }

    console.log(`Downloading: ${filename}`);
    await download(url, outputPath);
  }

  console.log("✅ All images downloaded");
})();
