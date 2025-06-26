import fs from "fs";
import path from "path";

type Metadata = {
  date: string;
};

type Musing = {
  metadata: Metadata;
  content: string;
};

function parseFrontmatter(fileContent: string): { metadata: Metadata; content: string } {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  if (!match) {
    throw new Error("Invalid frontmatter");
  }
  let frontMatterBlock = match[1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): { metadata: Metadata; content: string } {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export function getMusings(): Musing[] {
  const dir = path.join(process.cwd(), "app", "musings", "posts");
  const mdxFiles = getMDXFiles(dir);
  const musings = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    return {
      metadata,
      content,
    };
  });

  return musings.sort((a, b) => {
    if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
      return -1;
    }
    return 1;
  });
}
