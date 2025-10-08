// src/components/TwElementsInit.jsx
import { useEffect } from 'react';
// Import the entire module and access initTE from the object
import * as TE from 'tw-elements';

export default function TwElementsInit() {
  useEffect(() => {
    console.log('✅ Initializing tw-elements (CommonJS fallback)');
    // Use the default export object
    TE.initTE({ Carousel: TE.Carousel });
  }, []);

  return null;
}