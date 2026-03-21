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
 * Generate an upward-facing square pyramid.
 * Distributes points along the four triangular faces.
 */
export function pyramidToPoints(count: number, size: number = 2.5, height: number = 3.0): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Generate uniform points on 2D triangle
    const r1 = Math.random();
    const r2 = Math.random();
    const sqrtR1 = Math.sqrt(r1);
    
    // Distance from apex downwards
    const h = sqrtR1; 
    // Y position (Apex is at height/2, base is at -height/2)
    const y = (height / 2) - h * height; 
    
    // Width of the pyramid face at this height
    const w = h * size;
    
    // Pick a random face (0 to 3)
    const face = Math.floor(Math.random() * 4);
    // Position across the face's width (-0.5 to 0.5)
    const t = r2 - 0.5;
    
    let x = 0, z = 0;
    if (face === 0) { x = t * w; z = w / 2; }
    else if (face === 1) { x = t * w; z = -w / 2; }
    else if (face === 2) { x = w / 2; z = t * w; }
    else { x = -w / 2; z = t * w; } // face 3
    
    // Add slight noise to give the pyramid volume/thickness
    positions[i * 3] = x + (Math.random() - 0.5) * 0.1;
    positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1;
    positions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.1;
  }
  return positions;
}

/**
 * Generate a DNA double helix.
 * Represents life, biology, and health.
 */
export function helixToPoints(count: number, radius: number = 1.0, height: number = 4.0, turns: number = 2.5): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random(); // 0 to 1 position along the helix
    const angle = t * turns * 2 * Math.PI;
    const y = (t - 0.5) * height; // Centered vertically
    
    // Two opposite strands
    const strandOffset = i % 2 === 0 ? 0 : Math.PI;
    
    // Occasional connecting bridges (rungs)
    // 15% of particles form rungs between the strands
    if (Math.random() > 0.85) {
      const rungT = Math.random(); // Position along the rung diameter
      // Linear interpolation between the two strands
      const x1 = radius * Math.cos(angle);
      const z1 = radius * Math.sin(angle);
      const x2 = radius * Math.cos(angle + Math.PI);
      const z2 = radius * Math.sin(angle + Math.PI);
      
      positions[i * 3] = x1 + rungT * (x2 - x1);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z1 + rungT * (z2 - z1);
    } else {
      positions[i * 3] = radius * Math.cos(angle + strandOffset) + (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.1;
      positions[i * 3 + 2] = radius * Math.sin(angle + strandOffset) + (Math.random() - 0.5) * 0.2;
    }
  }
  return positions;
}
