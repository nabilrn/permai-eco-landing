#!/usr/bin/env node

/**
 * Script to submit sitemap to Google Search Console
 * Run this script after deploying your website
 */

import https from "https";
import { URL } from "url";

// Configuration
const DOMAIN = "banksampah.pondokpermai.my.id";
const SITEMAP_URL = `https://${DOMAIN}/sitemap.xml`;
const ROBOTS_URL = `https://${DOMAIN}/robots.txt`;

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

// Function to ping Google about sitemap
function pingGoogle(sitemapUrl) {
  return new Promise((resolve, reject) => {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(
      sitemapUrl
    )}`;

    https
      .get(pingUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(`Google pinged successfully for sitemap: ${sitemapUrl}`);
          } else {
            reject(`Failed to ping Google. Status: ${res.statusCode}`);
          }
        });
      })
      .on("error", (err) => {
        reject(`Error pinging Google: ${err.message}`);
      });
  });
}

// Function to ping Bing about sitemap
function pingBing(sitemapUrl) {
  return new Promise((resolve, reject) => {
    const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(
      sitemapUrl
    )}`;

    https
      .get(pingUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            resolve(`Bing pinged successfully for sitemap: ${sitemapUrl}`);
          } else {
            reject(`Failed to ping Bing. Status: ${res.statusCode}`);
          }
        });
      })
      .on("error", (err) => {
        reject(`Error pinging Bing: ${err.message}`);
      });
  });
}

// Function to check if sitemap is accessible
function checkSitemapAccessibility(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 200) {
          resolve(`Sitemap is accessible at: ${url}`);
        } else {
          reject(`Sitemap not accessible. Status: ${res.statusCode}`);
        }
      })
      .on("error", (err) => {
        reject(`Error checking sitemap: ${err.message}`);
      });
  });
}

// Function to check robots.txt
function checkRobotsTxt(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            if (data.includes("Sitemap:")) {
              resolve(
                `Robots.txt is properly configured with sitemap reference`
              );
            } else {
              reject(`Robots.txt doesn't contain sitemap reference`);
            }
          } else {
            reject(`Robots.txt not accessible. Status: ${res.statusCode}`);
          }
        });
      })
      .on("error", (err) => {
        reject(`Error checking robots.txt: ${err.message}`);
      });
  });
}

// Main function
async function main() {
  log("🚀 Starting SEO Sitemap Submission Process...", colors.blue);
  log("===============================================", colors.blue);

  try {
    // Step 1: Check sitemap accessibility
    log("\n📋 Step 1: Checking sitemap accessibility...", colors.yellow);
    const sitemapCheck = await checkSitemapAccessibility(SITEMAP_URL);
    log(`✅ ${sitemapCheck}`, colors.green);

    // Step 2: Check robots.txt
    log("\n🤖 Step 2: Checking robots.txt configuration...", colors.yellow);
    const robotsCheck = await checkRobotsTxt(ROBOTS_URL);
    log(`✅ ${robotsCheck}`, colors.green);

    // Step 3: Ping Google
    log("\n🔍 Step 3: Notifying Google about sitemap...", colors.yellow);
    const googlePing = await pingGoogle(SITEMAP_URL);
    log(`✅ ${googlePing}`, colors.green);

    // Step 4: Ping Bing
    log("\n🔍 Step 4: Notifying Bing about sitemap...", colors.yellow);
    const bingPing = await pingBing(SITEMAP_URL);
    log(`✅ ${bingPing}`, colors.green);

    // Success message
    log("\n🎉 SEO Sitemap Submission Completed Successfully!", colors.green);
    log("===============================================", colors.green);
    log("\n📊 Next Steps:", colors.blue);
    log("1. Verify your website in Google Search Console", colors.reset);
    log("2. Submit sitemap manually in GSC for faster indexing", colors.reset);
    log("3. Verify your website in Bing Webmaster Tools", colors.reset);
    log("4. Monitor indexing status in both platforms", colors.reset);
    log("\n🔗 Useful Links:", colors.blue);
    log(
      `• Google Search Console: https://search.google.com/search-console`,
      colors.reset
    );
    log(
      `• Bing Webmaster Tools: https://www.bing.com/webmasters`,
      colors.reset
    );
    log(`• Your Sitemap: ${SITEMAP_URL}`, colors.reset);
    log(`• Your Robots.txt: ${ROBOTS_URL}`, colors.reset);
  } catch (error) {
    log(`\n❌ Error: ${error}`, colors.red);
    log("\n🔧 Troubleshooting:", colors.yellow);
    log("1. Make sure your website is deployed and accessible", colors.reset);
    log(
      "2. Check that sitemap.xml and robots.txt are properly uploaded",
      colors.reset
    );
    log("3. Verify your domain name in the configuration", colors.reset);
    log("4. Ensure your server supports HTTPS", colors.reset);
    process.exit(1);
  }
}

// Run the script
main();

// Export for module usage
export { pingGoogle, pingBing, checkSitemapAccessibility, checkRobotsTxt };
