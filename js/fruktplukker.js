const fruits = ["🍎","🍌","🍒","🍇","🍉"]; // easy to extend
      const reelsEl = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3')];
      const statusEl = document.getElementById('status');
      const btn = document.getElementById('playBtn');
      const confettiEl = document.getElementById('confetti');

      function randomFruit(){ return fruits[Math.floor(Math.random()*fruits.length)]; }

      function setReel(reelEl, emoji){
        reelEl.querySelector('.cell')?.remove();
        const s = document.createElement('span');
        s.className = 'cell';
        s.textContent = emoji;
        reelEl.appendChild(s);
        reelEl.appendChild(reelEl.querySelector('.gloss') || Object.assign(document.createElement('div'),{className:'gloss'}));
        // micro spin flair
        reelEl.classList.remove('spin');
        void reelEl.offsetWidth; // reflow to restart animation
        reelEl.classList.add('spin');
      }

      function spinOnce(){
        btn.disabled = true; statusEl.className = 'status'; statusEl.textContent = 'Spinning…';
        const result = [];

        // staggered reveal for juice
        const delay = [0, 120, 240];
        reelsEl.forEach((reel, i)=>{
          setTimeout(()=>{
            const f = randomFruit();
            setReel(reel, f);
            result[i] = f;
            if(i===2){ // last one landed
              setTimeout(()=> finish(result), 60);
            }
          }, delay[i]);
        });
      }

      function finish(result){
        const win = result[0]===result[1] && result[1]===result[2];
        if(win){
          statusEl.className = 'status win';
          statusEl.textContent = 'You won! 🎉';
          burstConfetti();
        } else {
          statusEl.className = 'status lose';
          statusEl.textContent = 'You lost! 😢';
        }
        btn.disabled = false;
      }

      function burstConfetti(){
        const pieces = 26;
        for(let i=0;i<pieces;i++){
          const sp = document.createElement('span');
          const left = Math.random()*100;
          const dur = 800 + Math.random()*900; // 0.8–1.7s
          const size = 8 + Math.random()*10;
          sp.style.left = left+"vw";
          sp.style.top = "-20px";
          sp.style.width = size+"px";
          sp.style.height = (size*1.3)+"px";
          sp.style.background = `linear-gradient(135deg, hsl(${Math.random()*360} 95% 62%), hsl(${Math.random()*360} 95% 72%))`;
          sp.style.transform = `translateY(0) rotate(${Math.random()*180}deg)`;
          sp.style.animationDuration = dur+"ms";
          sp.style.opacity = 1;
          confettiEl.appendChild(sp);
          setTimeout(()=> sp.remove(), dur+200);
        }
      }

      // events
      btn.addEventListener('click', ()=> spinOnce());
      window.addEventListener('keydown', (e)=>{
        if((e.code==='Space' || e.code==='Enter') && !btn.disabled){ e.preventDefault(); spinOnce(); }
      });