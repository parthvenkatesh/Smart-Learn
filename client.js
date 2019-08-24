// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface ,Environment} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  const firstSurface = new Surface(
    1000,
    600,
  );  
  const secondSurface = new Surface(
    1000,
    600,
  );

  firstSurface.setShape(Surface.SurfaceShape.Flat);
  firstSurface.setAngle(0, 0);
  secondSurface.setShape(Surface.SurfaceShape.Flat);
  secondSurface.setAngle(Math.PI/2, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('RightScreen'),
    firstSurface,
  );
  r360.renderToSurface(
    r360.createRoot('LeftScreen'),
    secondSurface,
  );
  

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

}

window.React360 = {init};
