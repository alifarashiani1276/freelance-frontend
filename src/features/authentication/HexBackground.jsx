import { useEffect, useRef } from "react";

function HexBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const HEX_SIZE = 70;
    const GAP = 4;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    // به‌جای resize() یک‌باره + گوش‌دادن فقط به resize پنجره،
    // از ResizeObserver استفاده می‌کنیم تا هر بار ابعاد واقعی canvas
    // (چه در لود اول، چه در navigation داخل اپ) مشخص شد، بلافاصله رسم بشه.
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(canvas);

    function hexCorners(cx, cy, size) {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 180) * (60 * i - 30);
        pts.push([cx + size * Math.cos(angle), cy + size * Math.sin(angle)]);
      }
      return pts;
    }

    function getHexCenters(w, h) {
      const centers = [];
      const colW = HEX_SIZE * Math.sqrt(3) + GAP;
      const rowH = HEX_SIZE * 1.5 + GAP;
      const cols = Math.ceil(w / colW) + 2;
      const rows = Math.ceil(h / rowH) + 2;
      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * colW + (row % 2 === 1 ? colW / 2 : 0);
          const y = row * rowH;
          centers.push({ x, y });
        }
      }
      return centers;
    }

    function drawHexGrid(w, h) {
      const centers = getHexCenters(w, h);
      centers.forEach(({ x, y }) => {
        const pts = hexCorners(x, y, HEX_SIZE - 2);
        ctx.beginPath();
        pts.forEach(([px, py], i) =>
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py),
        );
        ctx.closePath();

        const grd = ctx.createLinearGradient(
          x - HEX_SIZE,
          y - HEX_SIZE,
          x + HEX_SIZE,
          y + HEX_SIZE,
        );
        grd.addColorStop(0, "rgba(40,40,50,0.5)");
        grd.addColorStop(1, "rgba(15,15,18,0.5)");
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.strokeStyle = "rgba(50,50,60,0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    class EdgeBeam {
      constructor() {
        this.reset();
      }

      reset() {
        const w = canvas.width,
          h = canvas.height;
        const colW = HEX_SIZE * Math.sqrt(3) + GAP;
        const rowH = HEX_SIZE * 1.5 + GAP;
        const cols = Math.ceil(w / colW) + 1;
        const rows = Math.ceil(h / rowH) + 1;
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        const cx = col * colW + (row % 2 === 1 ? colW / 2 : 0);
        const cy = row * rowH;
        const pts = hexCorners(cx, cy, HEX_SIZE - 2);
        const edgeIdx = Math.floor(Math.random() * 6);
        this.x1 = pts[edgeIdx][0];
        this.y1 = pts[edgeIdx][1];
        this.x2 = pts[(edgeIdx + 1) % 6][0];
        this.y2 = pts[(edgeIdx + 1) % 6][1];
        this.progress = 0;
        this.speed = 0.012 + Math.random() * 0.008;
        this.length = 0.25;
        this.alive = true;
      }

      draw() {
        if (!this.alive) return;
        this.progress += this.speed;
        if (this.progress > 1 + this.length) {
          this.alive = false;
          return;
        }
        const head = Math.min(this.progress, 1);
        const tail = Math.max(this.progress - this.length, 0);
        const hx = this.x1 + (this.x2 - this.x1) * head;
        const hy = this.y1 + (this.y2 - this.y1) * head;
        const tx = this.x1 + (this.x2 - this.x1) * tail;
        const ty = this.y1 + (this.y2 - this.y1) * tail;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "rgba(0,200,255,0)");
        grad.addColorStop(0.5, "rgba(0,210,255,0.85)");
        grad.addColorStop(1, "rgba(180,240,255,0.95)");

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "rgba(0,200,255,0.8)";
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    const beams = [];
    let lastBeamTime = 0;
    const BEAM_INTERVAL = 2000;

    function spawnBeam() {
      beams.push(new EdgeBeam());
    }

    setTimeout(spawnBeam, 1000);

    let animId;
    function loop(ts) {
      const w = canvas.width,
        h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      drawHexGrid(w, h);

      if (ts - lastBeamTime > BEAM_INTERVAL) {
        spawnBeam();
        lastBeamTime = ts;
      }

      for (let i = beams.length - 1; i >= 0; i--) {
        beams[i].draw();
        if (!beams[i].alive) beams.splice(i, 1);
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    // cleanup
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

export default HexBackground;
