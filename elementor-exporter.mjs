import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to local server...');
  await page.goto('http://localhost:8080/low-vision-solutions', { waitUntil: 'networkidle0' });
  
  console.log('Extracting HTML...');
  // Click on any FAQ items to open them so their content is in the DOM (optional, but framer-motion might have them removed from DOM if not open)
  // Actually, framer motion unmounts `AnimatePresence`. Only the first FAQ is open initially because `useState(0)`.
  // Elementor HTML widget doesn't support React interactivity anyway. The user will lose interactivity (FAQ accordion) if they just copy HTML.
  // Wait, if they lose interactivity, the HTML widget is a terrible idea for the FAQ section!
  
  let html = await page.evaluate(() => {
    // Add tailwind script
    const tailwind = '<script src="https://cdn.tailwindcss.com"></script>\n';
    
    // Get root element
    const el = document.getElementById('PAGE_ROOT');
    if (!el) return '';
    
    // Replace all src="/assets/..." with something the user can easily find/replace
    const htmlString = el.outerHTML;
    return tailwind + htmlString;
  });

  console.log('Building Elementor JSON...');
  
  const elementorJson = {
    "version": "0.4",
    "title": "Torchit - Low Vision Solutions",
    "type": "page",
    "content": [
      {
        "id": "hero_section_123",
        "elType": "section",
        "settings": {
          "content_width": "full"
        },
        "elements": [
          {
            "id": "column_123",
            "elType": "column",
            "settings": {
              "_column_size": 100
            },
            "elements": [
              {
                "id": "html_widget_123",
                "elType": "widget",
                "widgetType": "html",
                "settings": {
                  "html": html
                },
                "elements": []
              }
            ]
          }
        ]
      }
    ]
  };

  fs.writeFileSync('elementor-low-vision-template.json', JSON.stringify(elementorJson, null, 2));
  console.log('Exported to elementor-low-vision-template.json');
  
  await browser.close();
})();
