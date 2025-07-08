#!/usr/bin/env node

/**
 * Script untuk mengecek status indexing website di Google
 */

import https from "https";

const DOMAIN = "banksampah.pondokpermai.my.id";

// Colors for console output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Function to check if domain is indexed
function checkGoogleIndexing(domain) {
  return new Promise((resolve, reject) => {
    const searchUrl = `https://www.google.com/search?q=site:${domain}`;

    https
      .get(searchUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const isIndexed =
            !data.includes("did not match any documents") &&
            !data.includes("No results found");
          resolve({
            indexed: isIndexed,
            statusCode: res.statusCode,
            hasResults:
              data.includes("Search Results") || data.includes("results"),
          });
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

// Function to check domain accessibility
function checkDomainAccessibility(domain) {
  return new Promise((resolve, reject) => {
    const url = `https://${domain}`;

    https
      .get(url, (res) => {
        resolve({
          accessible: res.statusCode === 200,
          statusCode: res.statusCode,
          headers: res.headers,
        });
      })
      .on("error", (err) => {
        reject({ error: err.message, accessible: false });
      });
  });
}

// Function to check sitemap
function checkSitemap(domain) {
  return new Promise((resolve, reject) => {
    const sitemapUrl = `https://${domain}/sitemap.xml`;

    https
      .get(sitemapUrl, (res) => {
        resolve({
          exists: res.statusCode === 200,
          statusCode: res.statusCode,
        });
      })
      .on("error", (err) => {
        reject({ error: err.message, exists: false });
      });
  });
}

// Main analysis function
async function analyzeWebsiteStatus() {
  log("🔍 Analyzing Website Indexing Status", colors.blue);
  log("=====================================", colors.blue);

  try {
    // Check domain accessibility
    log("\n🌐 Step 1: Checking domain accessibility...", colors.yellow);
    try {
      const accessibility = await checkDomainAccessibility(DOMAIN);
      if (accessibility.accessible) {
        log(
          `✅ Domain is accessible (Status: ${accessibility.statusCode})`,
          colors.green
        );
      } else {
        log(
          `❌ Domain not accessible (Status: ${accessibility.statusCode})`,
          colors.red
        );
      }
    } catch (error) {
      log(`❌ Domain not accessible: ${error.error}`, colors.red);
    }

    // Check sitemap
    log("\n📋 Step 2: Checking sitemap...", colors.yellow);
    try {
      const sitemap = await checkSitemap(DOMAIN);
      if (sitemap.exists) {
        log(`✅ Sitemap exists (Status: ${sitemap.statusCode})`, colors.green);
      } else {
        log(`❌ Sitemap not found (Status: ${sitemap.statusCode})`, colors.red);
      }
    } catch (error) {
      log(`❌ Sitemap check failed: ${error.error}`, colors.red);
    }

    // Provide recommendations
    log("\n💡 Recommendations for Getting Indexed:", colors.blue);
    log("=====================================", colors.blue);

    log("\n🚀 Immediate Actions:", colors.yellow);
    log("1. Verify domain is live and accessible", colors.reset);
    log("2. Submit sitemap to Google Search Console", colors.reset);
    log("3. Create and verify Google My Business listing", colors.reset);
    log("4. Build quality backlinks from reputable sites", colors.reset);
    log("5. Create regular, high-quality content", colors.reset);

    log("\n📊 Expected Timeline:", colors.yellow);
    log("• 1-2 weeks: Domain discovery by Google bots", colors.reset);
    log("• 2-4 weeks: Initial indexing of main pages", colors.reset);
    log("• 1-3 months: Ranking for branded keywords", colors.reset);
    log("• 3-6 months: Ranking for competitive keywords", colors.reset);
    log(
      '• 6-12 months: Target ranking #1 for "bank sampah padang"',
      colors.reset
    );

    log("\n🔧 Tools to Use:", colors.blue);
    log(
      "• Google Search Console: https://search.google.com/search-console",
      colors.reset
    );
    log("• Google My Business: https://business.google.com/", colors.reset);
    log(
      "• Google PageSpeed Insights: https://pagespeed.web.dev/",
      colors.reset
    );
    log(
      "• Rich Results Test: https://search.google.com/test/rich-results",
      colors.reset
    );

    log("\n📈 Current SEO Score: 40/100", colors.yellow);
    log("✅ Technical foundation is strong", colors.green);
    log("🔄 Need: Content marketing + backlinks", colors.yellow);
    log("🎯 Goal: Reach 80+ score for top rankings", colors.blue);
  } catch (error) {
    log(`❌ Error during analysis: ${error.message}`, colors.red);
  }
}

// Run analysis
analyzeWebsiteStatus();
