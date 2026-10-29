/* 1. Matrix rain background */
(function(){
  var c=document.getElementById("rain"),x=c.getContext("2d"),cols,drops;
  var chars="01アイウエオカキクケコ☠🎃👻#$%&<>/\\".split("");
  function size(){c.width=innerWidth;c.height=innerHeight;cols=Math.floor(c.width/16);drops=Array(cols).fill(1)}
  size();addEventListener("resize",size);
  setInterval(function(){
    x.fillStyle="rgba(5,8,6,.12)";x.fillRect(0,0,c.width,c.height);
    x.font="16px monospace";
    for(var i=0;i<cols;i++){
      x.fillStyle=Math.random()>.97?"#ff6a00":"#00ff66";
      x.fillText(chars[Math.floor(Math.random()*chars.length)],i*16,drops[i]*16);
      if(drops[i]*16>c.height&&Math.random()>.975)drops[i]=0;
      drops[i]++;
    }
  },60);
})();

/* 2. Countdown to Halloween */
(function(){
  var target=new Date(new Date().getFullYear(),9,31,23,59,59);
  function pad(n){return String(n).padStart(2,"0")}
  function tick(){
    var t=Math.max(0,target-new Date());
    d.textContent=pad(Math.floor(t/864e5));
    h.textContent=pad(Math.floor(t/36e5)%24);
    m.textContent=pad(Math.floor(t/6e4)%60);
    s.textContent=pad(Math.floor(t/1e3)%60);
  }
  tick();setInterval(tick,1000);
})();

/* 3. Typing terminal */
(function(){
  var lines=[
    "$ ssh ghost@haunted-server.local",
    "Connecting... [OK]",
    "$ sudo ./summon_pumpkin.sh",
    "Bypassing firewall...... [DONE]",
    "Injecting candy.exe...... [DONE]",
    "WARNING: 666 spirits online",
    "$ whoami",
    "root (and very scary)",
    "$ _"
  ];
  var el=document.getElementById("typed"),li=0,ci=0,text="";
  function type(){
    if(li>=lines.length){el.innerHTML=text+'<span class="cursor"></span>';return}
    var line=lines[li];
    if(ci<line.length){text+=line[ci++];el.innerHTML=text+'<span class="cursor"></span>';setTimeout(type,35)}
    else{text+="\n";li++;ci=0;setTimeout(type,350)}
  }
  type();
})();

/* 4. The red button */
(function(){
  var msgs=["Accessing mainframe...","Bypassing 13 firewalls...","Downloading 1,000,000 candies...","Summoning ghosts...","💀 ACCESS GRANTED. Happy Halloween! 🎃"];
  var btn=document.getElementById("hack"),out=document.getElementById("out");
  btn.addEventListener("click",function(){
    document.body.classList.add("breach");
    var i=0;btn.disabled=true;
    var iv=setInterval(function(){
      out.textContent=msgs[i++];
      if(i>=msgs.length){clearInterval(iv);btn.disabled=false;document.body.classList.remove("breach")}
    },700);
  });
})();
