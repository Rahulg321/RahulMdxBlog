import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  category: string;
  summary: string;
  image?: string;
};

type FrontmatterResult = {
  metadata: Metadata;
  content: string;
};

function parseFrontmatter(fileContent: string): FrontmatterResult {
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

function readMDXFile(filePath: string): FrontmatterResult {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

type MDXData = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function getMDXData(dir: string): MDXData[] {
  // returns all the mdx files
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): MDXData[] {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function getBlogPostsWithCategory(category?: string): MDXData[] {
  let allPosts = getMDXData(path.join(process.cwd(), "app", "blog", "posts"));

  // If a category is provided, filter the posts by that category
  if (category) {
    return allPosts.filter(
      (post) => post.metadata.category.toLowerCase() === category.toLowerCase(),
    );
  }

  // Return all posts if no category filter is provided
  return allPosts;
}

export function formatDate(date: string, includeRelative = false): string {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
