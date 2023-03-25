class Fireworks {
    constructor() {
      this.globalTime = 0;
      this.particles = [];
    }
  
    randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    createParticles(x, y) {
      const angleIncrement = (Math.PI * 2) / 100;
      for (let angle = 0; angle < Math.PI * 2; angle += angleIncrement) {
        const speed = this.randomInRange(1, 3);
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        this.particles.push({ x, y, vx, vy, life: 100 });
      }
    }
  
    updateParticles() {
      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        if (particle.life <= 0) {
          this.particles.splice(i, 1);
          i--;
        }
      }
    }
  
    drawParticles(ctx) {
      ctx.fillStyle = "yellow";
      for (const particle of this.particles) {
        ctx.fillRect(particle.x - 1, particle.y - 1, 2, 2);
      }
    }
  
    createFirework() {
      const x = this.randomInRange(100, window.innerWidth - 100);
      const y = this.randomInRange(100, window.innerHeight - 100);
      this.createParticles(x, y);
    }
  
    update(ctx) {
      this.globalTime++;
  
      if (this.globalTime % 20 === 0) {
        this.createFirework();
      }
  
      this.updateParticles();
      this.drawParticles(ctx);
    }
  }
  