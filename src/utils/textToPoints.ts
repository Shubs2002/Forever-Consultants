/**
 * textToPoints.ts
 *
 * Renders text onto an offscreen canvas, samples filled pixels,
 * and returns a Float32Array of 3D positions for particle morphing.
 */

export interface TextPointsOptions {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  canvasWidth?: number;
  canvasHeight?: number;
  sampleCount: number;
  scaleX?: number;
  scaleY?: number;
}

/**
 * Generate an array of 3D positions that form the given text string.
 * Each position is in world-space coordinates centered around origin.
 */
export function textToPoints({
  text,
  fontSize = 140,
  fontFamily = "Arial, Helvetica, sans-serif",
  canvasWidth = 512,
  canvasHeight = 256,
  sampleCount,
  scaleX = 5.0,
  scaleY = 3.0,
}: TextPointsOptions): Float32Array {
  const canvas = document.createElement("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d")!;

  // Clear transparent
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw text centered
  ctx.fillStyle = "#fff";
  ctx.font = `900 ${fontSize}px ${fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);

  // Read pixel data
  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  const pixels = imageData.data;

  // Collect all filled pixel positions
  const filledPositions: [number, number][] = [];
  for (let y = 0; y < canvasHeight; y++) {
    for (let x = 0; x < canvasWidth; x++) {
      const idx = (y * canvasWidth + x) * 4;
      // Check alpha channel to support emojis and color glyphs
      if (pixels[idx + 3] > 40) {
        filledPositions.push([x, y]);
      }
    }
  }

  // Sample positions
  const positions = new Float32Array(sampleCount * 3);

  if (filledPositions.length === 0) {
    // Fallback: scatter randomly if text produced no pixels
    for (let i = 0; i < sampleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return positions;
  }

  for (let i = 0; i < sampleCount; i++) {
    const [px, py] =
      filledPositions[Math.floor(Math.random() * filledPositions.length)];

    // Normalize to -0.5..0.5, then scale to world units
    const nx = (px / canvasWidth - 0.5) * scaleX;
    const ny = -(py / canvasHeight - 0.5) * scaleY; // flip Y for 3D
    const nz = (Math.random() - 0.5) * 0.15; // slight z depth variation

    positions[i * 3] = nx;
    positions[i * 3 + 1] = ny;
    positions[i * 3 + 2] = nz;
  }

  return positions;
}

/**
 * Generate infinity-curve positions for the given number of particles.
 * Uses the lemniscate of Bernoulli parametric formula.
 */
export function infinityToPoints(
  count: number,
  scale: number = 2.6,
  spread: number = 0.14
): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const sinT = Math.sin(t);
    const cosT = Math.cos(t);
    const denom = 1 + sinT * sinT;

    positions[i * 3] = (scale * cosT) / denom;
    positions[i * 3 + 1] = (scale * sinT * cosT) / denom;
    positions[i * 3 + 2] = 0;

    // Add a bit of spread
    positions[i * 3] += (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] += (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] += (Math.random() - 0.5) * spread * 0.4;
  }

  return positions;
}

/**
 * Generate a solid sphere of particles.
 * Distributes points uniformly across the surface of a sphere.
 */
export function sphereToPoints(count: number, radius: number = 2.0): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * Math.random());
    const theta = Math.random() * 2 * Math.PI;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

/**
 * Generate a growing line graph showing steady mutual fund growth.
 */
export function graphToPoints(count: number, width: number = 3.5, height: number = 2.5): Float32Array {
  const positions = new Float32Array(count * 3);
  
  // Data points for a growing stock chart (X from 0.0 to 1.0, Y from 0.0 to 1.0)
  const graphData = [
    { x: 0.0, y: 0.1 },
    { x: 0.15, y: 0.15 },
    { x: 0.30, y: 0.1 },
    { x: 0.45, y: 0.35 },
    { x: 0.60, y: 0.4 },
    { x: 0.80, y: 0.7 },
    { x: 1.0, y: 0.95 }
  ];
  
  for (let i = 0; i < count; i++) {
    const typeProb = Math.random();
    
    // 15% particles to draw grid/axes
    if (typeProb < 0.15) {
      if (Math.random() > 0.5) {
        // X-axis / bottom boundary
        positions[i*3] = (Math.random() - 0.5) * width;
        positions[i*3 + 1] = -height / 2;
        positions[i*3 + 2] = (Math.random() - 0.5) * 0.5;
      } else {
        // Grid lines (vertical and horizontal scattered)
        positions[i*3] = (Math.random() - 0.5) * width;
        positions[i*3 + 1] = (Math.random() - 0.5) * height;
        positions[i*3 + 2] = -0.5; // push grid backward
      }
    } 
    else {
      // Find Y on the specific line segment
      const t = Math.random(); // t from 0 to 1
      let yNorm = 0;
      for (let j = 0; j < graphData.length - 1; j++) {
        if (t >= graphData[j].x && t <= graphData[j+1].x) {
          const segmentT = (t - graphData[j].x) / (graphData[j+1].x - graphData[j].x);
          yNorm = graphData[j].y + segmentT * (graphData[j+1].y - graphData[j].y);
          break;
        }
      }
      
      const worldX = (t - 0.5) * width;
      const worldY = (yNorm - 0.5) * height;

      // 35% particles as the solid area UNDER the curve
      if (typeProb < 0.5) {
        // Random Y under the curve yNorm
        const fillDist = Math.random() * yNorm;
        positions[i*3] = worldX + (Math.random() - 0.5) * 0.1;
        positions[i*3+1] = (fillDist - 0.5) * height; 
        positions[i*3+2] = (Math.random() - 0.5) * 0.3; 
      } 
      // 50% particles as the thick glowing line itself
      else {
        positions[i*3] = worldX + (Math.random() - 0.5) * 0.05;
        positions[i*3+1] = worldY + (Math.random() - 0.5) * 0.05;
        positions[i*3+2] = (Math.random() - 0.5) * 0.6; // wide 3D ribbon
      }
    }
  }
  return positions;
}

/**
 * Generate a hollow 3D-like heart shape.
 * Represents health insurance and care.
 */
export function heartToPoints(count: number, scale: number = 0.14, scatter: number = 0.35): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Distribute points predominantly along the outline (2PI contour)
    const t = Math.random() * Math.PI * 2;
    
    // Parametric heart equations
    const x = scale * 16 * Math.pow(Math.sin(t), 3);
    const y = scale * (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    
    // Slight noise for volumetric "hollow tube" thickness
    const nx = (Math.random() - 0.5) * scatter;
    const ny = (Math.random() - 0.5) * scatter;
    const nz = (Math.random() - 0.5) * (scatter * 1.5); // Deeper on Z axis
    
    positions[i * 3] = x + nx;
    positions[i * 3 + 1] = y + ny + 0.4; // Raise it slightly so it spins on-center
    positions[i * 3 + 2] = nz;
  }
  return positions;
}
