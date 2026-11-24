// Match the Three.js release used by RE/giới thiệu 6 cái topic.html.
const groups = [
  { title: 'Executive Board', people: [
    ['Linh D. M. Nguyen','Professor\nCo-Founder in MakerViet\nSecurity Expert at Embassy of the Socialist Republic of Vietnam in America','linh-d-m-nguyen.png'],
    ['Thanh T. Dao','Professor\nHead of AI & Blockchain\nSenior AI Reseacher in National Chung Cheng University (China)','thanh-t-dao.png'],
  ]},
  { title: 'Present', people: [
    ['Dat T. M. Bui','HR x AI Reseacher','member-placeholder.png'],['Chau M. D. Dang','AI Reseacher','chau-m-d-dang.png'],['Trung-Anh Nguyen','Lead of Security','trung-anh-nguyen.jpeg'],
    ['Hung Tran','Lead of Robotics','member-placeholder.png'],['Hieu D. Dinh','Lead of AI','member-placeholder.png'],['Hai-Anh Nguyen','AI Reseacher','hai-anh-nguyen.png'],['Dang H. Trinh','AI Engineer','hai-dang.jpeg'],
  ]},
  { title: 'Former', people: [
    ['Lam T. Vu','AI Specialist in Viettel Construction','lam-t-vu.jpeg'],['Duc-Anh Do','PhD In Computer Science @ SMU (Singapore)','duc-anh-do.jpeg'],
    ['Quang D. Vu','Pentester in Viettel Cyber Security','dang-q-vu.png'],['Khanh C. Nguyen','Embedded Engineer in FPT Sofware','khanh-c-nguyen.png'],
    ['Lap Nguyen','Embedded Engineer in FPT Software','lap-nguyen.jpeg'],['Khanh N. Ho','Security Expert in Kaspersky (Russia)','member-placeholder.png'],
    ['An D. Tran','AI Engineer in VinSmart Future','an-tran.jpeg'],['Mung T. Nguyen','AI Engineer in VNPT Group','mung-t-nguyen.png'],
    ['Hieu M. Tran','Web Developer in BIDV Bank','hieu-m-tran.jpeg'],['Xiu Mai','AI Reseacher in Kansai University (Japan)','xiu-mai.png'],
    ['Duy-Anh Nguyen','Data Engineer in Austdoor Group','duy-anh-nguyen.jpeg'],['Quyen T. Nguyen','Full Stack Engineer in MegaAds Ltd','member-placeholder.png'],
    ['Trung Tran','AI Engineer at Viettel Group','trung-tran.jpeg'],
  ]},
];

const topics = [
  {en:'Software Engineering',vi:'Công nghệ phần mềm',short:'SOFTWARE SYSTEMS · APPLICATIONS',shortVi:'HỆ THỐNG · ỨNG DỤNG PHẦN MỀM'},
  {en:'Internet of Things (IoT)',vi:'Internet vạn vật (IoT)',short:'CONNECTED DEVICES · EMBEDDED',shortVi:'THIẾT BỊ KẾT NỐI · HỆ THỐNG NHÚNG'},
  {en:'Artificial Intelligence',vi:'Trí tuệ nhân tạo',short:'INTELLIGENT SYSTEMS · AI APPLICATIONS',shortVi:'HỆ THỐNG THÔNG MINH · ỨNG DỤNG AI'},
  {en:'Robotics',vi:'Robot học',short:'AUTONOMY · MECHATRONICS',shortVi:'TỰ ĐỘNG HÓA · CƠ ĐIỆN TỬ'},
  {en:'Blockchain',vi:'Chuỗi khối',short:'DECENTRALIZED TECHNOLOGIES · CRYPTOGRAPHY',shortVi:'CÔNG NGHỆ PHI TẬP TRUNG · MẬT MÃ'},
  {en:'Cybersecurity',vi:'An toàn thông tin',short:'DEFENSIVE SECURITY · THREAT DETECTION',shortVi:'PHÒNG THỦ · PHÁT HIỆN MỐI ĐE DỌA'},
];

const topicList = document.querySelector('#topicList');
const topicDetailFrames = [...document.querySelectorAll('.topic-detail-frame')];
const topicDetailStages = [...document.querySelectorAll('.topic-detail-stage')];
const paperStages = [...document.querySelectorAll('.papers-stage')];
const memberGroups = document.querySelector('#memberGroups');
const storyMantra = document.querySelector('.story-mantra');
const storyCharacters = [];
if (storyMantra) {
  const phrase = storyMantra.textContent.trim();
  storyMantra.setAttribute('aria-label', phrase);
  const phraseNodes = [];
  phrase.split(' ').forEach((word, wordIndex) => {
    if (wordIndex) {
      const gap = document.createElement('span');
      gap.className = 'mantra-space';
      gap.setAttribute('aria-hidden', 'true');
      gap.textContent = '\u00a0';
      phraseNodes.push(gap);
    }
    const wordNode = document.createElement('span');
    wordNode.className = 'mantra-word';
    wordNode.setAttribute('aria-hidden', 'true');
    [...word].forEach(letter => {
      const character = document.createElement('span');
      character.className = 'mantra-char';
      character.textContent = letter;
      wordNode.append(character);
      storyCharacters.push(character);
    });
    phraseNodes.push(wordNode);
  });
  storyMantra.replaceChildren(...phraseNodes);
}
let language = 'en';

topics.forEach((topic,i)=>{
  const row=document.createElement('article'); row.className='topic-row reveal';
  const copy=document.createElement('div');
  const title=document.createElement('h3');
  title.dataset.en=topic.en; title.dataset.vi=topic.vi; title.textContent=topic.en;
  const summary=document.createElement('p');
  summary.dataset.en=topic.short; summary.dataset.vi=topic.shortVi; summary.textContent=topic.short;
  copy.append(title,summary);
  const link=document.createElement('a');
  link.className='topic-arrow'; link.href=`#detail-topic-${i+1}`;
  link.setAttribute('aria-label',`Read about ${topic.en}`); link.textContent='↗';
  row.append(copy,link);
  topicList.append(row);
});

groups.forEach((group,gi)=>{
  const section=document.createElement('section'); section.className='member-group';
  const viTitle={'Executive Board':'Ban Điều hành','Present':'Thành viên hiện tại','Former':'Cựu thành viên'}[group.title];
  const heading=document.createElement('h3'); heading.className='group-title';
  heading.dataset.en=group.title; heading.dataset.vi=viTitle; heading.textContent=group.title;
  const grid=document.createElement('div'); grid.className='member-grid';
  section.append(heading,grid);
  group.people.forEach(([name,role,image],i)=>{
    const card=document.createElement('article'); card.className='member-card reveal';
    const photo=document.createElement('img'); photo.className='member-photo';
    photo.src=`/website/public/assets/members/${image}`; photo.alt=`Portrait of ${name}`; photo.loading='lazy';
    const memberName=document.createElement('h4'); memberName.className='member-name'; memberName.textContent=name;
    const memberRole=document.createElement('p'); memberRole.className='member-role'; memberRole.textContent=role;
    if(image==='member-placeholder.png') photo.classList.add('placeholder-photo');
    card.append(photo,memberName,memberRole);
    grid.append(card);
  });
  memberGroups.append(section);   
});

function setLanguage(next){
  language=next; document.documentElement.lang=next;
  document.querySelectorAll('[data-en][data-vi]').forEach(el=>el.textContent=el.dataset[next]);
  document.querySelector('#langToggle').textContent=next.toUpperCase();
  const message={type:'smart-lab-language',language:next};
  document.querySelector('#topicRibbon')?.contentWindow?.postMessage(message,window.location.origin);
  topicDetailFrames.forEach(frame=>frame.contentWindow?.postMessage(message,window.location.origin));
}
document.querySelector('#langToggle').addEventListener('click',()=>setLanguage(language==='en'?'vi':'en'));
document.querySelector('#year').textContent=new Date().getFullYear();
topicDetailFrames.forEach(frame=>frame.addEventListener('load',()=>frame.contentWindow?.postMessage({type:'smart-lab-language',language},window.location.origin)));

if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.normalizeScroll({type:'wheel'}) sets touch-action: pan-x on
  // its target. Keep it off touch-capable devices so iOS Safari can process
  // native vertical swipes; use it only to tune desktop mouse-wheel input.
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches && ScrollTrigger.isTouch===0){
    ScrollTrigger.normalizeScroll({type:'wheel',wheelSpeed:.008,allowNestedScroll:true});
  }
  const topicFrame=document.querySelector('#topicRibbon');
  const syncTopicScene=(progress=0)=>{
    const child=topicFrame?.contentWindow, track=child?.document?.querySelector('#track');
    if(!child||!track)return;
    child.scrollTo(0,progress*Math.max(0,track.offsetHeight-child.innerHeight));
  };
  ScrollTrigger.create({trigger:'#topics',start:'top top',end:'bottom bottom',onUpdate:self=>syncTopicScene(self.progress),onRefresh:self=>syncTopicScene(self.progress)});
  topicFrame?.addEventListener('load',()=>{
    ScrollTrigger.refresh();
    topicFrame.contentWindow?.postMessage({type:'smart-lab-language',language},window.location.origin);
  });
  gsap.utils.toArray('.reveal').forEach((el)=>gsap.fromTo(el,{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  gsap.from('.intro-brand-label',{y:12,duration:.75,ease:'power3.out'});
  gsap.from('.intro-brand-title',{y:26,letterSpacing:'.12em',duration:1.05,ease:'power3.out',delay:.08});
  gsap.from('.intro-brand-note',{y:10,letterSpacing:'.55em',duration:.8,ease:'power2.out',delay:.45});
  gsap.timeline({scrollTrigger:{trigger:'#story',start:'top top',end:'bottom bottom',scrub:.8}})
    .fromTo(storyCharacters,{autoAlpha:0,yPercent:70,scale:.78,filter:'blur(10px)'},{autoAlpha:1,yPercent:0,scale:1,filter:'blur(0px)',duration:.26,stagger:.055,ease:'power2.out'},0)
    .fromTo('.story-copy>.eyebrow',{autoAlpha:0,y:22},{autoAlpha:1,y:0,duration:.35,ease:'none'},1)
    .fromTo('.story-copy>p:not(.eyebrow)',{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.42,ease:'none'},1.15)
    .to('.story-mantra',{scale:1.035,letterSpacing:'.1em',duration:.35,ease:'none'},1.75)
    .to('.story-copy',{autoAlpha:0,y:-30,duration:.5,ease:'none'},2.35);
  gsap.from('.members-header>*',{autoAlpha:0,y:18,duration:.8,stagger:.1,scrollTrigger:{trigger:'.members-header',start:'top 82%',once:true}});
  gsap.to('.progress i',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.2}});
  gsap.to('#intro',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#story',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#story',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#story',start:'top bottom',end:'top 30%',scrub:true}});
  gsap.to('#story',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#topics',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#topics',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#topics',start:'top bottom',end:'top 35%',scrub:true}});
  gsap.fromTo('#details',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#details',start:'top bottom',end:'top 35%',scrub:true}});
  gsap.timeline({scrollTrigger:{trigger:'.details-intro-track',start:'top top',end:'bottom bottom',scrub:.75}})
    .fromTo('.details-intro .eyebrow',{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.22,ease:'none'},0)
    .fromTo('.details-heading-line',{autoAlpha:0,y:24,clipPath:'inset(0 100% 0 0)',filter:'blur(8px)'},{autoAlpha:1,y:0,clipPath:'inset(0 0 0 0)',filter:'blur(0px)',duration:.28,stagger:.16,ease:'none'},.12)
    .fromTo('.details-support',{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.24,ease:'none'},.82)
    .to('.details-intro',{autoAlpha:0,y:-22,duration:.22,ease:'none'},1.35);
  const topicSequence=document.querySelector('.topic-detail-sequence');
  const topicSwap=gsap.timeline({scrollTrigger:{trigger:topicSequence,start:'top top',end:'bottom bottom',scrub:.65}});
  topicDetailStages.forEach((stage,index)=>{
    const start=index;
    if(index>0) topicSwap.to(topicDetailStages[index-1],{autoAlpha:0,scale:1.025,y:-22,duration:.14,ease:'none'},start-.24);
    topicSwap.fromTo(stage,{autoAlpha:0,scale:.975,y:24},{autoAlpha:1,scale:1,y:0,duration:.18,ease:'none'},start);
  });
  topicSwap.to(topicDetailStages.at(-1),{autoAlpha:0,scale:1.025,y:-22,duration:.14,ease:'none'},5.74);
  gsap.to('#details',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#papers',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#papers',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#papers',start:'top bottom',end:'top 35%',scrub:true}});
  gsap.timeline({scrollTrigger:{trigger:'.papers-title-track',start:'top top',end:'bottom bottom',scrub:.8}})
    .fromTo('.papers-title',{autoAlpha:0,y:34,scale:.94,filter:'blur(12px)'},{autoAlpha:1,y:0,scale:1,filter:'blur(0px)',duration:.9,ease:'none'},.05)
    .to('.papers-title',{autoAlpha:0,y:-28,scale:1.03,filter:'blur(8px)',duration:.8,ease:'none'},1.6);
  const papersSequence=document.querySelector('.papers-sequence');
  const papersSwap=gsap.timeline({scrollTrigger:{trigger:papersSequence,start:'top top',end:'bottom bottom',scrub:1.1}});
  papersSwap.fromTo(paperStages[0],{autoAlpha:0,scale:.975,y:24},{autoAlpha:1,scale:1,y:0,duration:.42,ease:'none'},0)
    .to(paperStages[0],{autoAlpha:0,scale:1.02,y:-20,duration:.6,ease:'none'},1.18)
    .fromTo(paperStages[1],{autoAlpha:0,scale:.975,y:24},{autoAlpha:1,scale:1,y:0,duration:.5,ease:'none'},1.65)
    .to(paperStages[1],{autoAlpha:0,scale:1.02,y:-20,duration:.65,ease:'none'},3.35);
  gsap.to('#papers',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#members',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#members',{autoAlpha:.12},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#members',start:'top 45%',end:'top -30%',scrub:1}});
  gsap.to('.members-header, #memberGroups',{autoAlpha:0,y:-20,ease:'none',scrollTrigger:{trigger:'#story-outro',start:'top bottom',end:'top top',scrub:.7}});
  gsap.timeline({scrollTrigger:{trigger:'#love',start:'top bottom',end:'top top',scrub:.75}})
    .fromTo('#love',{autoAlpha:0,yPercent:9},{autoAlpha:1,yPercent:0,ease:'none',duration:.45},0)
    .fromTo('.timelapse',{opacity:0,scale:1.06,filter:'blur(18px)'},{opacity:.72,scale:1,filter:'blur(0px)',ease:'none',duration:.65},.08)
    .to('#journeyBackground',{autoAlpha:0,ease:'none',duration:.35},.65);
}

// Hidden presentation shortcut: press 9 to scroll slowly to the page end.
// Press 9 again, or begin a manual scroll/touch, to stop it immediately.
let guidedScrollFrame=0;
let guidedScrollActive=false;
function stopGuidedScroll(){
  if(!guidedScrollActive)return;
  guidedScrollActive=false;
  cancelAnimationFrame(guidedScrollFrame);
}
function startGuidedScroll(){
  const startY=window.scrollY;
  const maxScroll=()=>Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
  const distance=maxScroll()-startY;
  if(distance<=1)return;
  guidedScrollActive=true;
  const startedAt=performance.now();
  const duration=Math.max(30000,distance/160*1000);
  const step=now=>{
    if(!guidedScrollActive)return;
    const progress=Math.min(1,(now-startedAt)/duration);
    const currentMax=maxScroll();
    window.scrollTo(0,startY+(currentMax-startY)*progress);
    if(progress<1)guidedScrollFrame=requestAnimationFrame(step);
    else stopGuidedScroll();
  };
  guidedScrollFrame=requestAnimationFrame(step);
}
document.addEventListener('keydown',event=>{
  const target=event.target;
  if(target instanceof HTMLElement && (target.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)))return;
  if(event.key==='9'||event.code==='Numpad9'){
    event.preventDefault();
    if(guidedScrollActive)stopGuidedScroll();
    else startGuidedScroll();
    return;
  }
  if(guidedScrollActive&&['ArrowDown','PageDown','End',' '].includes(event.key))stopGuidedScroll();
});
['wheel','touchstart','pointerdown'].forEach(type=>document.addEventListener(type,stopGuidedScroll,{passive:true}));

// Let the closing timelapse start when the ending enters view; browsers may still require user gesture for playback.
const video=document.querySelector('#timelapse');
const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){video.play().catch(()=>{});}else video.pause();
}),{threshold:.05});
video.addEventListener('canplay',()=>{if(video.getBoundingClientRect().top<innerHeight&&video.getBoundingClientRect().bottom>0) video.play().catch(()=>{});});
videoObserver.observe(video);
