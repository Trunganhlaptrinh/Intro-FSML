// Match the Three.js release used by RE/giới thiệu 6 cái topic.html.
const groups = [
  { title: 'Executive Board', people: [
    ['Linh D. M. Nguyen','Professor\nCo-Founder in MakerViet\nSecurity Expert at Embassy of the Socialist Republic of Vietnam in America','linh-d-m-nguyen.png'],
    ['Thanh T. Dao','Professor\nHead of AI & Blockchain\nSenior AI Reseacher in National Chung Cheng University (China)','thanh-t-dao.png'],
  ]},
  { title: 'Present', people: [
    ['Dat T. M. Bui','HR x AI Reseacher','member-placeholder.png'],['Chau M. D. Dang','AI Reseacher','chau-m-d-dang.png'],['Trung-Anh Nguyen','Lead of Security','trung-anh-nguyen.jpeg'],
    ['Hung Tran','Lead of Robotics','member-placeholder.png'],['Hieu D. Dinh','Lead of AI','member-placeholder.png'],['Hai-Anh Nguyen','AI Reseacher','hai-anh-nguyen.png'],['Hai Dang','AI Engineer','hai-dang.jpeg'],
  ]},
  { title: 'Former', people: [
    ['Lam T. Vu','AI Specialist in Viettel Construction','lam-t-vu.jpeg'],['Duc-Anh Do','PhD In Computer Science @ SMU (Singapore)','duc-anh-do.jpeg'],
    ['Dang Q. Vu','Pentester in Viettel Cyber Security','dang-q-vu.png'],['Khanh C. Nguyen','Embedded Software Engineer in FPT Sofware','khanh-c-nguyen.png'],
    ['Lap Nguyen','Embedded Software Engineer in FPT Uni','lap-nguyen.jpeg'],['Khanh N. Ho','Security Expert in Kaspersky (Russia)','member-placeholder.png'],
    ['An Tran','AI Engineer in VinSmart Future','an-tran.jpeg'],['Mung T. Nguyen','AI Engineer in VNPT Group','mung-t-nguyen.png'],
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
const memberGroups = document.querySelector('#memberGroups');
let language = 'en';

topics.forEach((topic,i)=>{
  const row=document.createElement('article'); row.className='topic-row reveal';
  row.innerHTML=`<div><h3 data-en="${topic.en}" data-vi="${topic.vi}">${topic.en}</h3><p data-en="${topic.short}" data-vi="${topic.shortVi}">${topic.short}</p></div><a class="topic-arrow" href="#detail-topic-${i+1}" aria-label="Read about ${topic.en}">↗</a>`;
  topicList.append(row);
});

groups.forEach((group,gi)=>{
  const section=document.createElement('section'); section.className='member-group';
  const viTitle={'Executive Board':'Ban Điều hành','Present':'Thành viên hiện tại','Former':'Cựu thành viên'}[group.title];
  section.innerHTML=`<h3 class="group-title" data-en="${group.title}" data-vi="${viTitle}">${group.title}</h3><div class="member-grid"></div>`;
  const grid=section.querySelector('.member-grid');
  group.people.forEach(([name,role,image],i)=>{
    const card=document.createElement('article'); card.className='member-card reveal';
    card.innerHTML=`<img class="member-photo" src="/website/public/assets/members/${image}" alt="Portrait of ${name}" loading="lazy"><h4 class="member-name">${name}</h4><p class="member-role"></p>`;
    card.querySelector('.member-role').textContent=role;
    if(image==='member-placeholder.png') card.querySelector('.member-photo').classList.add('placeholder-photo');
    grid.append(card);
  });
  memberGroups.append(section);
});

function setLanguage(next){
  language=next; document.documentElement.lang=next;
  document.querySelectorAll('[data-en][data-vi]').forEach(el=>el.innerHTML=el.dataset[next]);
  document.querySelector('#langToggle').textContent=next.toUpperCase();
  document.querySelector('#topicRibbon')?.contentWindow?.postMessage({type:'smart-lab-language',language:next},'*');
  topicDetailFrames.forEach(frame=>frame.contentWindow?.postMessage({type:'smart-lab-language',language:next},'*'));
}
document.querySelector('#langToggle').addEventListener('click',()=>setLanguage(language==='en'?'vi':'en'));
document.querySelector('#year').textContent=new Date().getFullYear();
topicDetailFrames.forEach(frame=>frame.addEventListener('load',()=>frame.contentWindow?.postMessage({type:'smart-lab-language',language},'*')));

if(window.gsap&&window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
  const topicFrame=document.querySelector('#topicRibbon');
  const syncTopicScene=(progress=0)=>{
    const child=topicFrame?.contentWindow, track=child?.document?.querySelector('#track');
    if(!child||!track)return;
    child.scrollTo(0,progress*Math.max(0,track.offsetHeight-child.innerHeight));
  };
  ScrollTrigger.create({trigger:'#topics',start:'top top',end:'bottom bottom',onUpdate:self=>syncTopicScene(self.progress),onRefresh:self=>syncTopicScene(self.progress)});
  topicFrame?.addEventListener('load',()=>{
    ScrollTrigger.refresh();
    topicFrame.contentWindow?.postMessage({type:'smart-lab-language',language},'*');
  });
  gsap.utils.toArray('.reveal').forEach((el)=>gsap.fromTo(el,{autoAlpha:0,y:34},{autoAlpha:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
  gsap.from('.intro-brand-label',{y:12,duration:.75,ease:'power3.out'});
  gsap.from('.intro-brand-title',{y:26,letterSpacing:'.12em',duration:1.05,ease:'power3.out',delay:.08});
  gsap.from('.intro-brand-note',{autoAlpha:0,y:10,letterSpacing:'.55em',duration:.8,ease:'power2.out',delay:.45});
  gsap.from('.story-copy>*',{y:24,duration:.9,stagger:.12,ease:'power2.out',scrollTrigger:{trigger:'#story',start:'top 70%',once:true}});
  gsap.timeline({scrollTrigger:{trigger:'#story',start:'top top',end:'bottom bottom',scrub:1}})
    .fromTo('.story-mantra',{scale:.9,letterSpacing:'.14em'},{scale:1,letterSpacing:'.075em',ease:'none'},0)
    .fromTo('.story-copy>p:not(.eyebrow)',{y:24,opacity:.72},{y:-12,opacity:1,ease:'none'},.12)
    .to('.story-copy',{opacity:0,ease:'none',duration:.28},.72);
  gsap.from('.members-header>*',{autoAlpha:0,y:18,duration:.8,stagger:.1,scrollTrigger:{trigger:'.members-header',start:'top 82%',once:true}});
  gsap.to('.progress i',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:.2}});
  gsap.to('#intro',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#story',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#story',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#story',start:'top bottom',end:'top 30%',scrub:true}});
  gsap.to('#story',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#topics',start:'top bottom',end:'top top',scrub:true}});
  gsap.fromTo('#topics',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#topics',start:'top bottom',end:'top 35%',scrub:true}});
  gsap.fromTo('#details',{autoAlpha:0},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#details',start:'top bottom',end:'top 35%',scrub:true}});
  topicDetailStages.forEach(stage=>{
    const frame=stage.querySelector('.topic-detail-frame');
    const curtain=stage.querySelector('.topic-transition');
    gsap.timeline({scrollTrigger:{trigger:stage,start:'top bottom',end:'bottom top',scrub:.45}})
      .fromTo(frame,{autoAlpha:0,y:20,scale:1.018},{autoAlpha:1,y:0,scale:1,ease:'none',duration:.25},0)
      .to(frame,{autoAlpha:0,y:-12,scale:.985,ease:'none',duration:.22},.78)
      .to(curtain,{autoAlpha:.98,ease:'none',duration:.12},.82);
  });
  gsap.to('#details',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#members',start:'top 92%',end:'top 40%',scrub:true}});
  gsap.fromTo('#members',{autoAlpha:.72},{autoAlpha:1,ease:'none',scrollTrigger:{trigger:'#members',start:'top 92%',end:'top 52%',scrub:true}});
  gsap.to('#journeyBackground',{autoAlpha:0,ease:'none',scrollTrigger:{trigger:'#love',start:'top bottom',end:'top 35%',scrub:true}});
  gsap.fromTo('#love',{yPercent:9},{yPercent:0,ease:'none',scrollTrigger:{trigger:'#love',start:'top bottom',end:'top top',scrub:true}});
}

// Let the closing timelapse start when the ending enters view; browsers may still require user gesture for playback.
const video=document.querySelector('#timelapse');
const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){video.play().catch(()=>{});}else video.pause();
}),{threshold:.05});
video.addEventListener('canplay',()=>{if(video.getBoundingClientRect().top<innerHeight&&video.getBoundingClientRect().bottom>0) video.play().catch(()=>{});});
videoObserver.observe(video);
