import fs from 'fs';

const generateRandomId = () => Math.random().toString(36).substr(2, 7);

const cardsData = [
  { t: "Reading Printed Information", d: "Reading textbooks, medicine labels, menus, receipts, or forms may become difficult because of reduced clarity or limited field of vision." },
  { t: "Identifying Distant Information", d: "Bus numbers, classroom boards, street signs, digital displays, and public information boards may be hard to recognize." },
  { t: "Digital Accessibility", d: "Computers, smartphones, websites, and interfaces can become difficult to use without magnification tools or accessibility adaptations." },
  { t: "Education Accessibility", d: "Students with low vision often require accessible learning tools to participate equally in classrooms." },
  { t: "Independent Navigation", d: "Moving safely through unfamiliar environments may become challenging when visual details are difficult to detect." },
  { t: "Everyday Independence", d: "Daily tasks like shopping, identifying products, recognizing currency, or locating personal belongings may require additional support." }
];

const generateCardMainColumn = (card) => {
  return {
    "id": generateRandomId(),
    "elType": "column",
    "settings": {
      "_column_size": 33,
      "_column_size_tablet": 50,
      "_column_size_mobile": 100
    },
    "elements": [
      {
        "id": generateRandomId(),
        "elType": "section",
        "isInner": true,
        "settings": {
          "background_background": "classic",
          "background_color": "#F7FAFC",
          "border_border": "solid",
          "border_width": { "unit": "px", "top": 1, "right": 1, "bottom": 1, "left": 1, "isLinked": true },
          "border_color": "#EDF2F7",
          "border_radius": { "unit": "px", "top": 32, "right": 32, "bottom": 32, "left": 32, "isLinked": true },
          "box_shadow_box_shadow_type": "yes",
          "box_shadow_box_shadow": { "horizontal": 0, "vertical": 12, "blur": 45, "spread": 0, "color": "rgba(15,23,42,0.08)" },
          "padding": { "unit": "px", "top": 0, "right": 0, "bottom": 0, "left": 0, "isLinked": true },
          "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false }
        },
        "elements": [
          {
            "id": generateRandomId(),
            "elType": "column",
            "settings": {
              "_column_size": 100,
              "padding": { "unit": "px", "top": 0, "right": 0, "bottom": 0, "left": 0, "isLinked": true }
            },
            "elements": [
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "image",
                "settings": {
                  "image": { "url": "https://via.placeholder.com/600x400" },
                  "border_radius": { "unit": "px", "top": 32, "right": 32, "bottom": 0, "left": 0, "isLinked": false },
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": true }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": card.t,
                  "title_color": "#111827",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 24 },
                  "typography_font_weight": "700",
                  "margin": { "unit": "px", "top": "24", "right": "32", "bottom": "12", "left": "32", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "text-editor",
                "settings": {
                  "editor": card.d,
                  "text_color": "#64748B",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 16 },
                  "typography_line_height": { "unit": "em", "size": 1.6 },
                  "margin": { "unit": "px", "top": "0", "right": "32", "bottom": "32", "left": "32", "isLinked": false }
                }
              }
            ]
          }
        ]
      }
    ]
  };
};

const generateTemplate = () => {
  const row1Cards = cardsData.slice(0, 3).map(generateCardMainColumn);
  const row2Cards = cardsData.slice(3, 6).map(generateCardMainColumn);

  const template = {
    "version": "0.4",
    "title": "Torchit Flawless Challenge Section",
    "type": "section",
    "content": [
      {
        "id": generateRandomId(),
        "elType": "section",
        "settings": {
          "layout": "boxed",
          "content_width": { "unit": "px", "size": 1400 },
          "padding": { "unit": "px", "top": "120", "right": "20", "bottom": "40", "left": "20", "isLinked": false },
          "padding_tablet": { "unit": "px", "top": "80", "right": "20", "bottom": "20", "left": "20", "isLinked": false },
          "padding_mobile": { "unit": "px", "top": "60", "right": "20", "bottom": "20", "left": "20", "isLinked": false },
          "background_background": "classic",
          "background_color": "#FFFFFF"
        },
        "elements": [
          {
            "id": generateRandomId(),
            "elType": "column",
            "settings": { "_column_size": 100 },
            "elements": [
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": "DAILY CHALLENGES",
                  "title_color": "#FF7A45",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 14 },
                  "typography_font_weight": "700",
                  "typography_transform": "uppercase",
                  "typography_letter_spacing": { "unit": "px", "size": 1 },
                  "align": "center",
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "16", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": "Everyday Tasks Can Become Significant Barriers",
                  "header_size": "h2",
                  "title_color": "#111827",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 58 },
                  "typography_font_size_tablet": { "unit": "px", "size": 48 },
                  "typography_font_size_mobile": { "unit": "px", "size": 36 },
                  "typography_font_weight": "700",
                  "typography_line_height": { "unit": "em", "size": 1.1 },
                  "align": "center",
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "text-editor",
                "settings": {
                  "editor": "People with low vision often encounter challenges that affect education, employment, mobility, and independence.",
                  "text_color": "#64748B",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 20 },
                  "typography_font_size_tablet": { "unit": "px", "size": 18 },
                  "typography_font_size_mobile": { "unit": "px", "size": 16 },
                  "align": "center",
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "60", "left": "0", "isLinked": false }
                }
              }
            ]
          }
        ]
      },
      {
        "id": generateRandomId(),
        "elType": "section",
        "settings": {
          "layout": "boxed",
          "content_width": { "unit": "px", "size": 1400 },
          "gap": "extended",
          "padding": { "unit": "px", "top": "0", "right": "20", "bottom": "0", "left": "20", "isLinked": false },
          "background_background": "classic",
          "background_color": "#FFFFFF"
        },
        "elements": row1Cards
      },
      {
        "id": generateRandomId(),
        "elType": "section",
        "settings": {
          "layout": "boxed",
          "content_width": { "unit": "px", "size": 1400 },
          "gap": "extended",
          "padding": { "unit": "px", "top": "0", "right": "20", "bottom": "120", "left": "20", "isLinked": false },
          "background_background": "classic",
          "background_color": "#FFFFFF"
        },
        "elements": row2Cards
      }
    ]
  };

  fs.writeFileSync('flawless-challenge-elementor.json', JSON.stringify(template, null, 2));
  console.log('Successfully generated flawless-challenge-elementor.json!');
};

generateTemplate();
