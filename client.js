// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface ,Environment} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
    const surface1 = new Surface(
    300,
    600,
  );  
  const surface2 = new Surface(
    300,
    600,
  );  
  const surface3 = new Surface(
    300,
    600,
  );  
  const surface4 = new Surface(
    300,
    600,
  );  
  const surface5 = new Surface(
    300,
    600,
  );  
  const surface6 = new Surface(
    300,
    600,
  );  
  const surface7 = new Surface(
    300,
    600,
  );  
  const surface8 = new Surface(
    300,
    600,
  );  
  const surface9 = new Surface(
    300,
    600,
  );  
  const surface10 = new Surface(
    300,
    600,
  );

  surface1.setShape(Surface.SurfaceShape.Flat);
  surface1.setAngle(0, 0);
  surface2.setShape(Surface.SurfaceShape.Flat);
  surface2.setAngle(-Math.PI/5, 0);
  surface3.setShape(Surface.SurfaceShape.Flat);
  surface3.setAngle(-2*Math.PI/5, 0);
  surface4.setShape(Surface.SurfaceShape.Flat);
  surface4.setAngle(-3*Math.PI/5, 0);
  surface5.setShape(Surface.SurfaceShape.Flat);
  surface5.setAngle(-4*Math.PI/5, 0);
  surface6.setShape(Surface.SurfaceShape.Flat);
  surface6.setAngle(Math.PI, 0);
  surface7.setShape(Surface.SurfaceShape.Flat);
  surface7.setAngle(4*Math.PI/5, 0);
  surface8.setShape(Surface.SurfaceShape.Flat);
  surface8.setAngle(3*Math.PI/5, 0);
  surface9.setShape(Surface.SurfaceShape.Flat);
  surface9.setAngle(2*Math.PI/5, 0);
  surface10.setShape(Surface.SurfaceShape.Flat);
  surface10.setAngle(Math.PI/5, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('q1'),
    surface1,
  );
  r360.renderToSurface(
    r360.createRoot('q2'),
    surface2,
  );
  r360.renderToSurface(
    r360.createRoot('q3'),
    surface3,
  );
  r360.renderToSurface(
    r360.createRoot('q4'),
    surface4,
  );
  r360.renderToSurface(
    r360.createRoot('q5'),
    surface5,
  );
  r360.renderToSurface(
    r360.createRoot('q6'),
    surface6,
  );
  r360.renderToSurface(
    r360.createRoot('q7'),
    surface7,
  );
  r360.renderToSurface(
    r360.createRoot('q8'),
    surface8,
  );
  r360.renderToSurface(
    r360.createRoot('q9'),
    surface9,
  );
  r360.renderToSurface(
    r360.createRoot('q10'),
    surface10,
  );
   

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

}

window.React360 = {init};
