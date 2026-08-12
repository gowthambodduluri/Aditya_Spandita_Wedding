/**
 * Floating Marigold, Rose Petals & Gold Dust Canvas Particle Engine
 * Aditya & Spandita Wedding Invitation
 */

class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 45;
    
    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle() {
    const isPetal = Math.random() > 0.4;
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height - this.canvas.height,
      size: isPetal ? Math.random() * 8 + 6 : Math.random() * 3 + 1,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.7 + 0.3,
      isPetal: isPetal,
      color: isPetal 
        ? (Math.random() > 0.5 ? '#f59e0b' : '#991b1b') // Marigold Yellow or Rose Crimson
        : '#d4af37' // Golden Dust
    };
  }

  drawPetal(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.rotate((p.rotation * Math.PI) / 180);
    this.ctx.globalAlpha = p.opacity;
    this.ctx.fillStyle = p.color;

    // Draw soft petal curve
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.5, -p.size / 3, 0, p.size * 1.2);
    this.ctx.bezierCurveTo(-p.size * 1.5, -p.size / 3, -p.size / 2, -p.size, 0, 0);
    this.ctx.fill();
    this.ctx.restore();
  }

  drawSparkle(p) {
    this.ctx.save();
    this.ctx.globalAlpha = p.opacity;
    this.ctx.fillStyle = p.color;
    this.ctx.shadowBlur = 8;
    this.ctx.shadowColor = '#d4af37';
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, index) => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.8 + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.isPetal) {
        this.drawPetal(p);
      } else {
        this.drawSparkle(p);
      }

      // Reset when falling out of bounds
      if (p.y > this.canvas.height + 20) {
        this.particles[index] = this.createParticle();
        this.particles[index].y = -20;
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticleEngine('particle-canvas');
});
