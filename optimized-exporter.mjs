import fs from 'fs';

const generateRandomId = () => Math.random().toString(36).substr(2, 7);

const generateTemplate = () => {
  const template = {
    "version": "0.4",
    "title": "Torchit 1024 Optimized Hero",
    "type": "section",
    "content": [
      {
        "id": generateRandomId(),
        "elType": "section",
        "settings": {
          "layout": "boxed",
          "content_width": { "unit": "px", "size": 1400 },
          "padding": { "unit": "px", "top": "20", "right": "20", "bottom": "120", "left": "20", "isLinked": false },
          "padding_tablet": { "unit": "px", "top": "20", "right": "20", "bottom": "60", "left": "20", "isLinked": false },
          "background_background": "classic",
          "background_color": "#ffffff"
        },
        "elements": [
          {
            "id": generateRandomId(),
            "elType": "column",
            "settings": {
              "_column_size": 50,
              "_column_size_tablet": 100,
              "padding": { "unit": "px", "top": "20", "right": "40", "bottom": "20", "left": "20", "isLinked": false },
              "padding_tablet": { "unit": "px", "top": "20", "right": "20", "bottom": "40", "left": "20", "isLinked": false }
            },
            "elements": [
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": "LOW VISION SOLUTIONS",
                  "title_color": "#2388FF",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 14 },
                  "typography_font_weight": "600",
                  "background_color": "#ffffff",
                  "border_border": "solid",
                  "border_width": { "unit": "px", "top": 1, "right": 1, "bottom": 1, "left": 1, "isLinked": true },
                  "border_color": "#EDF2F7",
                  "border_radius": { "unit": "px", "top": 99, "right": 99, "bottom": 99, "left": 99, "isLinked": true },
                  "padding": { "unit": "px", "top": 10, "right": 18, "bottom": 10, "left": 18, "isLinked": false },
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false },
                  "align": "left",
                  "_element_width": "inline"
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": "Independent Living Starts With Better Accessibility",
                  "header_size": "h1",
                  "title_color": "#111827",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 72 },
                  "typography_font_size_tablet": { "unit": "px", "size": 48 },
                  "typography_font_size_mobile": { "unit": "px", "size": 36 },
                  "typography_font_weight": "800",
                  "typography_line_height": { "unit": "em", "size": 1.1 },
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "text-editor",
                "settings": {
                  "editor": "Low vision should never limit independence. Torchit low vision solutions combine assistive technology, magnification tools, digital accessibility products, and AI-powered support systems designed to improve reading, learning, daily living, and accessibility.",
                  "text_color": "#64748B",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 22 },
                  "typography_font_size_tablet": { "unit": "px", "size": 18 },
                  "typography_font_size_mobile": { "unit": "px", "size": 16 },
                  "typography_line_height": { "unit": "em", "size": 1.7 },
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "40", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "section",
                "isInner": true,
                "settings": {},
                "elements": [
                  {
                    "id": generateRandomId(),
                    "elType": "column",
                    "settings": {
                      "_column_size": 30,
                      "_column_size_tablet": 50,
                      "_column_size_mobile": 100
                    },
                    "elements": [
                      {
                        "id": generateRandomId(),
                        "elType": "widget",
                        "widgetType": "button",
                        "settings": {
                          "text": "Explore Solutions",
                          "link": { "url": "#explore", "is_external": false },
                          "background_color": "#2388FF",
                          "button_text_color": "#ffffff",
                          "typography_typography": "custom",
                          "typography_font_family": "Inter",
                          "typography_font_weight": "500",
                          "typography_font_size": { "unit": "px", "size": 16 },
                          "border_radius": { "unit": "px", "top": 99, "right": 99, "bottom": 99, "left": 99, "isLinked": true },
                          "align": "left",
                          "margin": { "unit": "px", "top": "0", "right": "16", "bottom": "0", "left": "0", "isLinked": false }
                        }
                      }
                    ]
                  },
                  {
                    "id": generateRandomId(),
                    "elType": "column",
                    "settings": {
                      "_column_size": 70,
                      "_column_size_tablet": 50,
                      "_column_size_mobile": 100
                    },
                    "elements": [
                      {
                        "id": generateRandomId(),
                        "elType": "widget",
                        "widgetType": "button",
                        "settings": {
                          "text": "Talk To Expert",
                          "link": { "url": "#expert", "is_external": false },
                          "background_color": "#ffffff",
                          "button_text_color": "#111827",
                          "typography_typography": "custom",
                          "typography_font_family": "Inter",
                          "typography_font_weight": "500",
                          "typography_font_size": { "unit": "px", "size": 16 },
                          "border_radius": { "unit": "px", "top": 99, "right": 99, "bottom": 99, "left": 99, "isLinked": true },
                          "border_border": "solid",
                          "border_width": { "unit": "px", "top": 2, "right": 2, "bottom": 2, "left": 2, "isLinked": true },
                          "border_color": "#EDF2F7",
                          "align": "left"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": generateRandomId(),
            "elType": "column",
            "settings": {
              "_column_size": 50,
              "_column_size_tablet": 100,
              "padding": { "unit": "px", "top": "20", "right": "0", "bottom": "20", "left": "40", "isLinked": false },
              "padding_tablet": { "unit": "px", "top": "20", "right": "20", "bottom": "20", "left": "20", "isLinked": false }
            },
            "elements": [
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "image",
                "settings": {
                  "image": {
                    "url": "https://via.placeholder.com/540x540",
                    "id": ""
                  },
                  "border_radius": { "unit": "px", "top": 36, "right": 36, "bottom": 36, "left": 36, "isLinked": true },
                  "align": "center",
                  "caption_source": "none"
                }
              }
            ]
          }
        ]
      }
    ]
  };

  fs.writeFileSync('1024-optimized-elementor.json', JSON.stringify(template, null, 2));
  console.log('Successfully generated 1024-optimized-elementor.json!');
};

generateTemplate();
