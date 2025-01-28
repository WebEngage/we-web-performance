# Web Metrics Measuring Tool

This repository dedicated to measuring and analyzing web performance metrics using [Puppeteer](https://pptr.dev/), a powerful Node.js library for controlling headless Chrome browsers.

## Overview

This project leverages Puppeteer to collect critical performance metrics, enabling developers to monitor and improve the speed, responsiveness, and overall performance of their web applications.

## Features

- **Web Metrics Collection**: Measure key performance metrics such as First Contentful Paint (FCP), Largest Contentful Paint (LCP), and more.
- **Automated Testing**: Automate performance testing of web pages using Puppeteer.
- **Customizable Scripts**: Easily adapt and extend scripts to suit your specific needs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/WebEngage/we-web-performance.git
   cd we-web-performance

2. **Install Dependencies**:
Install the required Node.js packages:
    ```bash
    npm install

### Running the Scripts

To measure web performance metrics using Puppeteer, follow these steps:

1. **Edit the index.js**
    - Specify the `webSiteURL` URL you want to analyze.
    - Specify the `iterations` you want the test to run.

2. **Execute the Script**  
   Run the performance script using the following command:
   ```bash
   node index.js

3. **Review Metrics**  
   Once the script completes execution, the results will include key performance metrics, such as:

    - **Time to First Byte (TTFB) in ms**  
      Measures the time it takes for the server to send the first byte of the response after the request is made.  
      *Example*: `0.5 seconds`

    - **First Contentful Paint (FCP) in ms**  
      Indicates the time when the first visible content (e.g., text, image) appears on the screen.  
      *Example*: `1200`

    - **Largest Contentful Paint (LCP) in ms**  
      Represents the time when the largest visible content (e.g., hero image, headline) is fully rendered.  
      *Example*: `200`

    - **Cumulative Layout Shift (CLS)**  
      Quantifies the visual stability of a web page by tracking unexpected layout shifts during loading.  
      *Example*: `0.03`

### Example Output
```string
FCP: 1434, LCP: 5034.0999999940395, CLS: 1.303931890839797, TTFB: 666.5
```

## Resources

Here are some useful links and references to help you understand web performance metrics and work with Puppeteer:

- [Puppeteer Documentation](https://pptr.dev/)  
  Official documentation for Puppeteer, providing detailed guides, API references, and examples.

- [Web Performance Metrics](https://web.dev/metrics/)  
  A comprehensive guide to understanding key performance metrics like FCP, LCP, CLS, and more.

- [Introduction to Puppeteer](https://developers.google.com/web/tools/puppeteer)  
  An overview of Puppeteer and its use cases, written by Google’s web developers.
