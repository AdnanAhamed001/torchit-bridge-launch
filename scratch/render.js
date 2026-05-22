import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Route } from './src/routes/low-vision-solutions.tsx';

// Wait, low-vision-solutions.tsx has image imports. Node can't run .tsx files with asset imports natively without a bundler or ts-node + extensions.
