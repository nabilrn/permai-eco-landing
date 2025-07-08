#!/usr/bin/env node

/**
 * SEO Health Check Script for Bank Sampah Pondok Permai
 * This script checks various SEO factors and provides recommendations
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = "banksampah.pondokpermai.my.id";
const BASE_URL = `https://${DOMAIN}`;

// Colors for console output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Function to check if URL is accessible
function checkURL(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          url: url,
        });
      })
      .on("error", (err) => {
        reject({ error: err.message, url: url });
      });
  });
}

// Function to fetch page content
function fetchContent(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            content: data,
            headers: res.headers,
          });
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Function to check local files
function checkLocalFiles() {
  const results = [];

  // Check critical files
  const criticalFiles = [
    "public/sitemap.xml",
    "public/robots.txt",
    "public/manifest.json",
    "public/browserconfig.xml",
    "src/components/SEO.tsx",
    "src/lib/schemas.ts",
    "src/lib/analytics.ts",
  ];

  criticalFiles.forEach((file) => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      results.push({ file, status: "exists", message: "✅ File exists" });
    } else {
      results.push({ file, status: "missing", message: "❌ File missing" });
    }
  });

  return results;
}

// Function to analyze HTML content for SEO
function analyzeHTMLContent(content) {
  const analysis = {
    title: null,
    description: null,
    h1Count: 0,
    h2Count: 0,
    imgWithoutAlt: 0,
    totalImages: 0,
    internalLinks: 0,
    externalLinks: 0,
    canonicalUrl: null,
    ogTags: {
      title: null,
      description: null,
      image: null,
      url: null,
    },
    twitterCard: null,
    structuredData: 0,
  };

  // Extract title
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) analysis.title = titleMatch[1];

  // Extract meta description
  const descMatch = content.match(
    /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
  );
  if (descMatch) analysis.description = descMatch[1];

  // Count headings
  analysis.h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
  analysis.h2Count = (content.match(/<h2[^>]*>/gi) || []).length;

  // Analyze images
  const imgTags = content.match(/<img[^>]*>/gi) || [];
  analysis.totalImages = imgTags.length;
  analysis.imgWithoutAlt = imgTags.filter(
    (img) => !img.includes("alt=")
  ).length;

  // Count links
  const linkTags = content.match(/<a[^>]*href="([^"]*)"[^>]*>/gi) || [];
  linkTags.forEach((link) => {
    if (link.includes("http")) {
      analysis.externalLinks++;
    } else {
      analysis.internalLinks++;
    }
  });

  // Extract canonical URL
  const canonicalMatch = content.match(
    /<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/i
  );
  if (canonicalMatch) analysis.canonicalUrl = canonicalMatch[1];

  // Extract Open Graph tags
  const ogTitleMatch = content.match(
    /<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i
  );
  if (ogTitleMatch) analysis.ogTags.title = ogTitleMatch[1];

  const ogDescMatch = content.match(
    /<meta[^>]*property="og:description"[^>]*content="([^"]*)"[^>]*>/i
  );
  if (ogDescMatch) analysis.ogTags.description = ogDescMatch[1];

  const ogImageMatch = content.match(
    /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i
  );
  if (ogImageMatch) analysis.ogTags.image = ogImageMatch[1];

  // Extract Twitter Card
  const twitterCardMatch = content.match(
    /<meta[^>]*name="twitter:card"[^>]*content="([^"]*)"[^>]*>/i
  );
  if (twitterCardMatch) analysis.twitterCard = twitterCardMatch[1];

  // Count structured data
  analysis.structuredData = (
    content.match(/<script[^>]*type="application\/ld\+json"[^>]*>/gi) || []
  ).length;

  return analysis;
}

// Function to generate SEO score
function calculateSEOScore(analysis, urlChecks) {
  let score = 0;
  let maxScore = 100;
  const issues = [];
  const recommendations = [];

  // Title check (15 points)
  if (
    analysis.title &&
    analysis.title.length >= 30 &&
    analysis.title.length <= 60
  ) {
    score += 15;
  } else if (analysis.title) {
    score += 5;
    issues.push("Title length should be between 30-60 characters");
  } else {
    issues.push("Missing title tag");
  }

  // Description check (15 points)
  if (
    analysis.description &&
    analysis.description.length >= 120 &&
    analysis.description.length <= 160
  ) {
    score += 15;
  } else if (analysis.description) {
    score += 5;
    issues.push("Meta description length should be between 120-160 characters");
  } else {
    issues.push("Missing meta description");
  }

  // H1 tag check (10 points)
  if (analysis.h1Count === 1) {
    score += 10;
  } else if (analysis.h1Count === 0) {
    issues.push("Missing H1 tag");
  } else {
    issues.push("Multiple H1 tags found (should be only one)");
  }

  // H2 tags check (5 points)
  if (analysis.h2Count >= 2) {
    score += 5;
  } else {
    recommendations.push("Add more H2 tags for better content structure");
  }

  // Images alt text check (10 points)
  if (analysis.imgWithoutAlt === 0 && analysis.totalImages > 0) {
    score += 10;
  } else if (analysis.imgWithoutAlt > 0) {
    issues.push(`${analysis.imgWithoutAlt} images missing alt text`);
  }

  // Canonical URL check (5 points)
  if (analysis.canonicalUrl) {
    score += 5;
  } else {
    issues.push("Missing canonical URL");
  }

  // Open Graph check (15 points)
  if (
    analysis.ogTags.title &&
    analysis.ogTags.description &&
    analysis.ogTags.image
  ) {
    score += 15;
  } else {
    issues.push("Incomplete Open Graph tags");
  }

  // Twitter Card check (5 points)
  if (analysis.twitterCard) {
    score += 5;
  } else {
    issues.push("Missing Twitter Card");
  }

  // Structured Data check (10 points)
  if (analysis.structuredData >= 2) {
    score += 10;
  } else if (analysis.structuredData === 1) {
    score += 5;
    recommendations.push("Add more structured data types");
  } else {
    issues.push("Missing structured data");
  }

  // URL accessibility check (10 points)
  if (urlChecks.sitemap && urlChecks.robots) {
    score += 10;
  } else {
    if (!urlChecks.sitemap) issues.push("Sitemap not accessible");
    if (!urlChecks.robots) issues.push("Robots.txt not accessible");
  }

  return { score, maxScore, issues, recommendations };
}

// Main function
async function main() {
  log("🔍 SEO Health Check for Bank Sampah Pondok Permai", colors.blue);
  log("=".repeat(55), colors.blue);

  try {
    // Step 1: Check local files
    log("\n📁 Step 1: Checking local SEO files...", colors.yellow);
    const localFiles = checkLocalFiles();
    localFiles.forEach((file) => {
      if (file.status === "exists") {
        log(`${file.message} ${file.file}`, colors.green);
      } else {
        log(`${file.message} ${file.file}`, colors.red);
      }
    });

    // Step 2: Check URLs
    log("\n🌐 Step 2: Checking URL accessibility...", colors.yellow);
    const urlChecks = {
      sitemap: false,
      robots: false,
      homepage: false,
    };

    try {
      const sitemapCheck = await checkURL(`${BASE_URL}/sitemap.xml`);
      urlChecks.sitemap = sitemapCheck.statusCode === 200;
      log(
        `${urlChecks.sitemap ? "✅" : "❌"} Sitemap.xml (Status: ${
          sitemapCheck.statusCode
        })`,
        urlChecks.sitemap ? colors.green : colors.red
      );
    } catch (error) {
      log(`❌ Sitemap.xml (Error: ${error.error})`, colors.red);
    }

    try {
      const robotsCheck = await checkURL(`${BASE_URL}/robots.txt`);
      urlChecks.robots = robotsCheck.statusCode === 200;
      log(
        `${urlChecks.robots ? "✅" : "❌"} Robots.txt (Status: ${
          robotsCheck.statusCode
        })`,
        urlChecks.robots ? colors.green : colors.red
      );
    } catch (error) {
      log(`❌ Robots.txt (Error: ${error.error})`, colors.red);
    }

    // Step 3: Analyze homepage content
    log("\n🔍 Step 3: Analyzing homepage content...", colors.yellow);
    let analysis = null;

    try {
      const homepageContent = await fetchContent(BASE_URL);
      urlChecks.homepage = homepageContent.statusCode === 200;

      if (urlChecks.homepage) {
        analysis = analyzeHTMLContent(homepageContent.content);
        log("✅ Homepage content analyzed successfully", colors.green);
      } else {
        log(
          `❌ Homepage not accessible (Status: ${homepageContent.statusCode})`,
          colors.red
        );
      }
    } catch (error) {
      log(`❌ Homepage analysis failed: ${error.message}`, colors.red);
    }

    // Step 4: Calculate SEO Score
    if (analysis) {
      log("\n📊 Step 4: SEO Score Analysis...", colors.yellow);
      const seoScore = calculateSEOScore(analysis, urlChecks);

      // Display score
      const scoreColor =
        seoScore.score >= 80
          ? colors.green
          : seoScore.score >= 60
          ? colors.yellow
          : colors.red;
      log(
        `\n🎯 SEO Score: ${seoScore.score}/${seoScore.maxScore} (${Math.round(
          (seoScore.score / seoScore.maxScore) * 100
        )}%)`,
        scoreColor
      );

      // Display detailed analysis
      log("\n📋 Content Analysis:", colors.cyan);
      log(`• Title: ${analysis.title || "Not found"}`, colors.reset);
      log(
        `• Title Length: ${
          analysis.title ? analysis.title.length : 0
        } characters`,
        colors.reset
      );
      log(
        `• Description: ${analysis.description || "Not found"}`,
        colors.reset
      );
      log(
        `• Description Length: ${
          analysis.description ? analysis.description.length : 0
        } characters`,
        colors.reset
      );
      log(`• H1 Tags: ${analysis.h1Count}`, colors.reset);
      log(`• H2 Tags: ${analysis.h2Count}`, colors.reset);
      log(
        `• Images: ${analysis.totalImages} (${analysis.imgWithoutAlt} missing alt text)`,
        colors.reset
      );
      log(`• Internal Links: ${analysis.internalLinks}`, colors.reset);
      log(`• External Links: ${analysis.externalLinks}`, colors.reset);
      log(
        `• Canonical URL: ${analysis.canonicalUrl || "Not found"}`,
        colors.reset
      );
      log(
        `• Structured Data: ${analysis.structuredData} schemas`,
        colors.reset
      );

      // Display issues
      if (seoScore.issues.length > 0) {
        log("\n❌ Issues to Fix:", colors.red);
        seoScore.issues.forEach((issue) => {
          log(`  • ${issue}`, colors.reset);
        });
      }

      // Display recommendations
      if (seoScore.recommendations.length > 0) {
        log("\n💡 Recommendations:", colors.yellow);
        seoScore.recommendations.forEach((rec) => {
          log(`  • ${rec}`, colors.reset);
        });
      }
    }

    // Step 5: Next Actions
    log("\n🚀 Next Actions for Better SEO:", colors.blue);
    log("1. Setup Google My Business profile", colors.reset);
    log("2. Submit sitemap to Google Search Console", colors.reset);
    log("3. Add Google Analytics tracking", colors.reset);
    log("4. Create regular blog content", colors.reset);
    log("5. Build quality backlinks", colors.reset);
    log("6. Monitor keyword rankings", colors.reset);

    log("\n🔗 Useful Tools:", colors.blue);
    log(
      "• Google Search Console: https://search.google.com/search-console",
      colors.reset
    );
    log(
      "• Google PageSpeed Insights: https://pagespeed.web.dev/",
      colors.reset
    );
    log("• Google My Business: https://business.google.com/", colors.reset);
    log(
      "• Rich Results Test: https://search.google.com/test/rich-results",
      colors.reset
    );

    log("\n✅ SEO Health Check Completed!", colors.green);
  } catch (error) {
    log(`\n❌ Error during SEO check: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Run the script
main();
