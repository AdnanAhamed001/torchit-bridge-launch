import fs from 'fs';

const generateRandomId = () => Math.random().toString(36).substr(2, 7);

const conditions = [
  "Macular Degeneration", "Diabetic Retinopathy", "Glaucoma", 
  "Retinitis Pigmentosa", "Cataracts", "Albinism", 
  "Optic Nerve Disorders", "Retinopathy of Prematurity", "Inherited Retinal Conditions"
];

const generateTemplate = () => {
  const pillWidgets = conditions.map(condition => ({
    "id": generateRandomId(),
    "elType": "widget",
    "widgetType": "heading",
    "settings": {
      "title": condition,
      "title_color": "#111827",
      "typography_typography": "custom",
      "typography_font_family": "Inter",
      "typography_font_size": { "unit": "px", "size": 16 },
      "typography_font_weight": "500",
      "background_color": "#ffffff",
      "border_border": "solid",
      "border_width": { "unit": "px", "top": 1, "right": 1, "bottom": 1, "left": 1, "isLinked": true },
      "border_color": "#EDF2F7",
      "border_radius": { "unit": "px", "top": 99, "right": 99, "bottom": 99, "left": 99, "isLinked": true },
      "padding": { "unit": "px", "top": 12, "right": 20, "bottom": 12, "left": 20, "isLinked": false },
      "margin": { "unit": "px", "top": "0", "right": "12", "bottom": "12", "left": "0", "isLinked": false },
      "align": "center",
      "_element_width": "initial"
    }
  }));

  const template = {
    "version": "0.4",
    "title": "Torchit Understanding Low Vision",
    "type": "section",
    "content": [
      {
        "id": generateRandomId(),
        "elType": "section",
        "settings": {
          "layout": "boxed",
          "content_width": { "unit": "px", "size": 1000 },
          "padding": { "unit": "px", "top": "120", "right": "20", "bottom": "120", "left": "20", "isLinked": false },
          "padding_tablet": { "unit": "px", "top": "80", "right": "20", "bottom": "80", "left": "20", "isLinked": false },
          "padding_mobile": { "unit": "px", "top": "60", "right": "20", "bottom": "60", "left": "20", "isLinked": false },
          "background_background": "classic",
          "background_color": "#F7FAFC"
        },
        "elements": [
          {
            "id": generateRandomId(),
            "elType": "column",
            "settings": {
              "_column_size": 100
            },
            "elements": [
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "heading",
                "settings": {
                  "title": "What is Low Vision?",
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
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "32", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "text-editor",
                "settings": {
                  "editor": "Low vision is a visual impairment that cannot be fully corrected using standard glasses, contact lenses, medication, or surgery. Individuals with low vision may experience blurred vision, reduced contrast sensitivity, tunnel vision, central vision loss, blind spots, or difficulty recognizing faces and reading printed text.",
                  "text_color": "#64748B",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 22 },
                  "typography_font_size_tablet": { "unit": "px", "size": 18 },
                  "typography_font_size_mobile": { "unit": "px", "size": 16 },
                  "typography_line_height": { "unit": "em", "size": 1.7 },
                  "align": "center",
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false }
                }
              },
              {
                "id": generateRandomId(),
                "elType": "section",
                "isInner": true,
                "settings": {
                   "content_width": { "unit": "px", "size": 1000 },
                   "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "24", "left": "0", "isLinked": false }
                },
                "elements": [
                  {
                    "id": generateRandomId(),
                    "elType": "column",
                    "settings": {
                      "_column_size": 100,
                      "align": "center"
                    },
                    "elements": pillWidgets
                  }
                ]
              },
              {
                "id": generateRandomId(),
                "elType": "widget",
                "widgetType": "text-editor",
                "settings": {
                  "editor": "Many people with low vision retain some usable sight but require accessibility support and assistive technology to perform daily activities independently.",
                  "text_color": "#64748B",
                  "typography_typography": "custom",
                  "typography_font_family": "Inter",
                  "typography_font_size": { "unit": "px", "size": 20 },
                  "typography_font_size_tablet": { "unit": "px", "size": 18 },
                  "typography_font_size_mobile": { "unit": "px", "size": 16 },
                  "typography_line_height": { "unit": "em", "size": 1.7 },
                  "align": "center",
                  "margin": { "unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": false }
                }
              }
            ]
          }
        ]
      }
    ]
  };

  fs.writeFileSync('understanding-elementor.json', JSON.stringify(template, null, 2));
  console.log('Successfully generated understanding-elementor.json!');
};

generateTemplate();
