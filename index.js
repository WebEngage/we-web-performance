const puppeteer = require("puppeteer");

const webSiteURL = 'Testing website URL'; //Enter URL of the website you want to test.
const iterations = 1;
const viewPort = {width: 1300, height: 1024};

(async () => {
    for (let i = 0; i < iterations; i++) {
        const browser = await puppeteer.launch({headless: false})
        try {
            const page = await browser.newPage();
            // // Set the viewport to the screen dimensions
            await page.setViewport(viewPort);
            // Navigate to the desired URL
            await page.goto(webSiteURL, {waitUntil: 'networkidle0'});

            // Measure web vitals using PerformanceObserver
            const metrics = await page.evaluate(() => {
                return new Promise((resolve) => {
                    let fcp = 0;
                    let lcp = 0;
                    let cls = 0;
                    let ttfb = 0;
                    let fid = 0;

                    // PerformanceObserver for FCP and LCP
                    const po = new PerformanceObserver((list) => {
                        list.getEntries().forEach((entry) => {
                            if (entry.name === 'first-contentful-paint') {
                                fcp = entry.startTime;
                            } else if (entry.entryType === 'largest-contentful-paint') {
                                lcp = entry.startTime;
                            }
                        });
                    });

                    po.observe({type: 'paint', buffered: true});
                    po.observe({type: 'largest-contentful-paint', buffered: true});

                    // PerformanceObserver for CLS
                    let sessionValue = 0;
                    let sessionEntries = [];

                    const clsObserver = new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                            if (!entry.hadRecentInput) {
                                sessionValue += entry.value;
                                sessionEntries.push(entry);
                            }
                        }
                        cls = sessionValue;
                    });

                    clsObserver.observe({type: 'layout-shift', buffered: true});

                    // PerformanceObserver for TTFB
                    const ttfbObserver = new PerformanceObserver((list) => {
                        const navigationEntry = performance.getEntriesByType('navigation')[0];
                        if (navigationEntry) {
                            ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
                        }
                    });

                    ttfbObserver.observe({type: 'navigation', buffered: true});

                    // Resolve the metrics after a delay
                    setTimeout(() => {
                        resolve({fcp, lcp, cls, ttfb, fid});
                    }, 10000);
                });
            });
            //Metrics will be printed in the console
            console.log(`FCP: ${metrics.fcp}, LCP: ${metrics.lcp}, CLS: ${metrics.cls}, TTFB: ${metrics.ttfb}\n`);
        } catch (e) {
            console.log(e)
        } finally {
            await browser.close();
        }
    }
})();




