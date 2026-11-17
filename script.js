const islands = {
  '珊瑚花園': {
    habitat: '熱帶珊瑚礁', count: '12 種生物',
    intro: '溫暖淺海中的珊瑚礁，是無數海洋生物的家。跟著礁魚穿過珊瑚枝椏，認識這座色彩繽紛、彼此依存的水下城市。',
    animals: [
      { id:'clownfish', name:'小丑魚', latin:'Amphiprion ocellaris', emoji:'🐠', intro:'橘白相間的小丑魚，常與海葵共享棲地。', habitat:'印度洋至西太平洋的珊瑚礁', diet:'藻類、浮游生物與小型甲殼類', detail:'小丑魚會在海葵觸手間尋找庇護。牠們身上的黏液能降低被海葵刺細胞攻擊的機會，海葵也能從魚帶來的食物碎屑獲得養分。牠們生活在小型群體中，最大的個體通常是雌魚。', status:'目前未列為受威脅物種；珊瑚礁退化仍會影響棲地。' },
      { id:'seahorse', name:'海馬', latin:'Hippocampus spp.', emoji:'🦄', intro:'擅長偽裝的魚類，會用尾巴纏住海草或珊瑚。', habitat:'海草床、紅樹林與珊瑚礁', diet:'小型甲殼類與浮游動物', detail:'海馬用背鰭推進、用胸鰭轉向，游泳速度不快，因此常靠偽裝避開掠食者。牠們會以長吻吸入微小獵物。繁殖時由雄海馬在育兒囊中孵育胚胎，是海洋裡少見由雄性懷孕的例子。', status:'部分海馬物種受棲地流失與水族貿易壓力影響。' },
      { id:'coral', name:'鹿角珊瑚', latin:'Acropora spp.', emoji:'🪸', intro:'由許多微小珊瑚蟲組成，能建造珊瑚礁骨架。', habitat:'陽光充足、清澈的熱帶淺海', diet:'珊瑚蟲捕捉浮游生物，也依靠共生藻', detail:'鹿角珊瑚的枝狀群體提供魚類與無脊椎動物躲藏和覓食的空間。珊瑚蟲體內的共生藻利用陽光製造養分，珊瑚則提供庇護。海水升溫可能造成珊瑚白化，長期壓力會使群體死亡。', status:'多種造礁珊瑚面臨海水升溫、酸化與珊瑚礁破壞的威脅。' }
    ]
  },
  '藍潮海灣': {
    habitat:'海草床與沿岸淺海', count:'8 種生物',
    intro:'海草床像海底草原，為幼魚提供藏身處，也能固定海床、儲存碳。沿著海草葉片，尋找海龜與海灣居民的蹤跡。',
    animals:[
      {id:'turtle',name:'綠蠵龜',latin:'Chelonia mydas',emoji:'🐢',intro:'成年後以海草和藻類為主食的遷徙海龜。',habitat:'熱帶與亞熱帶海域、海草床及珊瑚礁',diet:'成年個體主要吃海草和藻類；幼體食性較廣',detail:'綠蠵龜會在覓食地與出生附近的沙灘之間長途遷徙。牠們反覆啃食海草能幫助海草床保持更新。雌龜會上岸挖掘沙坑產卵，幼龜孵化後自行爬向海洋。',status:'全球族群受誤捕、海岸開發、塑膠污染和氣候變遷等影響。'},
      {id:'dugong',name:'儒艮',latin:'Dugong dugon',emoji:'🦭',intro:'溫和的海洋哺乳類，主要在海草床覓食。',habitat:'印度洋至西太平洋的淺海海草床',diet:'海草',detail:'儒艮以嘴唇拔取海床上的海草，覓食後常留下彎曲的草痕。牠們繁殖速度慢、幼獸照護時間長，因此族群恢復不快。健康的海草床是儒艮重要的食物來源。',status:'許多地區族群受到海草床流失、漁網誤捕與船隻碰撞威脅。'},
      {id:'seahorsebay',name:'葉海龍',latin:'Phycodurus eques',emoji:'🌿',intro:'身上長有葉片狀附肢，外型與海藻融為一體。',habitat:'澳洲南部海岸的海草床與海藻林',diet:'浮游甲殼類與小型蝦類',detail:'葉海龍是海馬的近親，身上的葉狀突起主要用來偽裝，不負責游泳。牠靠背鰭緩慢推進，長吻則用來吸食微小獵物。雄性會攜帶受精卵，直到幼體孵化。',status:'沿岸棲地破壞和污染可能影響局部族群。'}
    ]
  },
  '極光冰原': {
    habitat:'南極海域', count:'6 種生物',
    intro:'南極海水冰冷，卻孕育了以磷蝦為核心的豐富食物網。從海冰邊緣觀察企鵝、海豹與牠們仰賴的海洋生命。',
    animals:[
      {id:'emperor',name:'皇帝企鵝',latin:'Aptenodytes forsteri',emoji:'🐧',intro:'體型最大的企鵝，能在南極嚴寒中繁殖。',habitat:'南極海岸與周邊海域',diet:'魚類、磷蝦與頭足類',detail:'皇帝企鵝在冬季繁殖，雄鳥會把單顆蛋放在腳背上並用育兒皺褶保暖。牠們是熟練的潛水者，能在海中追捕魚和磷蝦。海冰變化會影響繁殖地與覓食路線。',status:'海冰縮減與氣候變遷可能改變繁殖及覓食條件。'},
      {id:'leopardseal',name:'豹海豹',latin:'Hydrurga leptonyx',emoji:'🦭',intro:'南極食物網中的大型掠食者，游泳敏捷。',habitat:'南極周邊海域與浮冰',diet:'磷蝦、魚、企鵝及其他海豹幼獸',detail:'豹海豹有斑點皮毛和強壯的下顎，能在冰緣附近伏擊獵物。牠們的食性會隨年齡和地區改變，幼體常以磷蝦為食，成年個體也會捕食企鵝。',status:'目前主要受到南極海冰與食物網變化的長期影響。'},
      {id:'krill',name:'南極磷蝦',latin:'Euphausia superba',emoji:'🦐',intro:'小型甲殼類，卻是許多南極動物的重要食物。',habitat:'南大洋，常聚集在海冰下方',diet:'浮游植物與冰藻',detail:'南極磷蝦會形成大型群聚，支撐鯨、海豹、企鵝和魚類等動物。冬季海冰下的藻類是重要食源。磷蝦數量與分布受海冰、海水溫度及漁業管理影響。',status:'氣候變遷與集中捕撈可能改變磷蝦族群及食物網。'}
    ]
  },
  '紅樹林秘境': {
    habitat:'熱帶潮間帶紅樹林', count:'9 種生物',
    intro:'紅樹林交錯的根系能緩衝海浪、穩定泥灘，也成為許多幼魚和甲殼類的育幼場。退潮時，泥灘上的小居民開始活動。',
    animals:[
      {id:'mudskipper',name:'彈塗魚',latin:'Periophthalmus spp.',emoji:'🐟',intro:'能在潮間帶泥灘上活動的魚類。',habitat:'紅樹林泥灘與潮間帶',diet:'小型甲殼類、昆蟲及其他底棲小動物',detail:'彈塗魚以胸鰭支撐身體，在泥灘上跳躍或爬行。牠們能把水分保留在鰓腔中，也能透過皮膚和口腔表面吸收氧氣，因此可在潮退時短暫離開水面。',status:'紅樹林與潮間帶遭填築、污染時，棲地會受到影響。'},
      {id:'fiddler',name:'招潮蟹',latin:'Uca spp.',emoji:'🦀',intro:'雄蟹有一隻特別大的螯，會用揮螯動作求偶。',habitat:'紅樹林與河口潮間帶泥灘',diet:'泥沙中的藻類、細菌與有機碎屑',detail:'招潮蟹在泥灘挖洞避開高溫和乾燥，也在洞口附近刮取食物。雄蟹通常有一大一小兩隻螯，大螯會用來展示和互動，小螯則負責取食。退潮時常可看到牠們成群活動。',status:'局部族群會受海岸開發、污染與潮間帶棲地消失影響。'},
      {id:'archerfish',name:'射水魚',latin:'Toxotes jaculatrix',emoji:'🐠',intro:'會噴水擊落水面上方小昆蟲的沿岸魚類。',habitat:'紅樹林溪流、河口與半鹹水域',diet:'昆蟲、蜘蛛及其他小型動物',detail:'射水魚會把嘴伸出水面，快速噴出水柱擊落枝葉上的昆蟲。牠們需要估算光線折射造成的位置偏差，才能準確命中獵物，因此常被用來觀察魚類的視覺與學習能力。',status:'河口污染和紅樹林流失會減少其可用棲地。'}
    ]
  },
  '月光深海': {
    habitat:'深海與海底平原', count:'11 種生物',
    intro:'陽光無法抵達的深海，環境寒冷、壓力巨大。許多動物以發光、靈敏感官或緩慢代謝適應黑暗世界。',
    animals:[
      {id:'angler',name:'鮟鱇魚',latin:'Lophiiformes',emoji:'🐟',intro:'部分深海種類會用發光的誘餌吸引獵物。',habitat:'不同種類分布於深海或較淺海域',diet:'魚類與甲殼類等小型動物',detail:'深海鮟鱇魚頭部常有可移動的背鰭棘，末端形成像釣竿一樣的誘餌。某些種類的誘餌能發光，吸引好奇的獵物靠近。鮟鱇魚類的外型和生活方式多樣，並非所有種類都生活在深海。',status:'深海資料仍有限；深海拖網、採礦與氣候變化是需要關注的壓力。'},
      {id:'dumbo',name:'小飛象章魚',latin:'Grimpoteuthis spp.',emoji:'🐙',intro:'頭部兩側有耳狀鰭，能在深海中拍動前進。',habitat:'深海海底，已知分布於多個大洋',diet:'底棲小型甲殼類、蠕蟲與軟體動物',detail:'小飛象章魚利用耳狀鰭在水中緩慢拍動，也能張開腕足在海底移動。牠們生活在極深的海域，沒有墨囊，遇到威脅時可能改變顏色或收縮腕足。',status:'深海觀察與研究資料有限，棲地受到干擾的影響仍待了解。'},
      {id:'isopod',name:'巨型等足目',latin:'Bathynomus giganteus',emoji:'🪲',intro:'深海甲殼類，外型像放大版的陸生鼠婦。',habitat:'大西洋、太平洋與印度洋的深海海底',diet:'海底落下的動物屍體與有機碎屑',detail:'巨型等足目屬於甲殼類，並非昆蟲。牠們生活在海底，能利用堅硬的外骨骼保護身體，也能在食物稀少時長時間不進食。海面落下的有機物是深海食物網的重要來源。',status:'深海底棲生物研究有限，深海捕撈與海床擾動值得持續監測。'}
    ]
  }
};

const panel = document.querySelector('#panel');
const overlay = document.querySelector('#overlay');
const title = document.querySelector('#panelTitle');
const body = document.querySelector('#panelBody');
const toast = document.querySelector('#toast');
let cart = 0;
let position = { x: 50, y: 48 };

function openPanel(name, content) { title.textContent = name; body.innerHTML = content; panel.classList.add('open'); overlay.classList.add('show'); }
function closePanel() { panel.classList.remove('open'); overlay.classList.remove('show'); }
function say(message) { toast.textContent = message; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2300); }
function renderIsland(name) {
  const island = islands[name];
  if (!island) return;
  const animals = island.animals.map(animal => `<button class="animal-card" data-animal="${animal.id}"><span class="animal-emoji" aria-hidden="true">${animal.emoji}</span><span><strong>${animal.name}</strong><small><em>${animal.latin}</em><br>${animal.intro}</small></span><span class="animal-arrow" aria-hidden="true">›</span></button>`).join('');
  openPanel(name, `<span class="tag">ISLAND ECOLOGY · ${island.habitat}</span><p class="animal-intro">${island.intro}</p><div class="card"><strong>棲地觀察</strong><small>${island.habitat}｜島上收錄 ${island.count}</small></div><strong>認識島上動物</strong><small style="display:block;color:var(--muted);margin-top:6px">選擇一種生物，閱讀牠的生活故事。</small><div class="animal-grid">${animals}</div><button class="primary" data-visit="${name}">前往這座島　→</button>`);
}
function renderAnimal(animalId, islandName) {
  const animal = islands[islandName]?.animals.find(item => item.id === animalId);
  if (!animal) return;
  openPanel(animal.name, `<button class="text-button" data-back-island="${islandName}">← 返回${islandName}</button><div class="animal-detail-hero"><span class="animal-detail-emoji" aria-hidden="true">${animal.emoji}</span><div><h3>${animal.name}</h3><em>${animal.latin}</em></div></div><span class="tag">ANIMAL FIELD GUIDE · 動物觀察誌</span><p>${animal.detail}</p><div class="animal-facts"><div class="animal-fact"><span>棲息環境</span><strong>${animal.habitat}</strong></div><div class="animal-fact"><span>主要食物</span><strong>${animal.diet}</strong></div></div><div class="card"><strong>保育觀察</strong><small>${animal.status}</small></div>`);
}

document.querySelector('#closePanel').addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.querySelectorAll('.island').forEach(element => element.addEventListener('click', () => renderIsland(element.dataset.name)));
body.addEventListener('click', event => {
  const animalButton = event.target.closest('[data-animal]');
  const backButton = event.target.closest('[data-back-island]');
  const visitButton = event.target.closest('[data-visit]');
  if (animalButton) renderAnimal(animalButton.dataset.animal, title.textContent);
  if (backButton) renderIsland(backButton.dataset.backIsland);
  if (visitButton) { const name = visitButton.dataset.visit; closePanel(); say(`已前往${name}，自由漫遊開始！`); }
});

document.querySelector('#memberBtn').addEventListener('click', () => openPanel('加入島民', `<span class="tag">YOUR OCEAN ID</span><p>建立免費會員，保存探索足跡、裝扮角色，和朋友一起漫遊海洋。</p><input class="input" placeholder="電子郵件" type="email"><input class="input" placeholder="設定密碼" type="password"><button class="primary" id="memberSubmit">建立會員 / 登入</button><div class="card"><small>會員功能預覽：角色收藏・探索成就・好友名單</small></div>`));
document.querySelector('#shopBtn').addEventListener('click', () => openShop());
function openShop() { openPanel('海洋小舖', `<span class="tag">ISLAND SHOP · 海洋小舖</span><p>用探索點數收藏喜愛的海洋夥伴與島嶼裝飾。</p><div class="card product"><div class="pic">🐢</div><div><strong>小海龜夥伴</strong><div class="price">120 海星點數</div></div><button data-add="小海龜夥伴">收藏</button></div><div class="card product"><div class="pic">🪸</div><div><strong>珊瑚礁造景</strong><div class="price">80 海星點數</div></div><button data-add="珊瑚礁造景">收藏</button></div><div class="card product"><div class="pic">🫧</div><div><strong>泡泡尾跡</strong><div class="price">60 海星點數</div></div><button data-add="泡泡尾跡">收藏</button></div><button class="primary" id="collectionButton">查看收藏清單（${cart}）</button>`); }
body.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  if (addButton) { cart++; document.querySelector('#cartCount').textContent = `(${cart})`; say(`${addButton.dataset.add}已加入收藏`); }
  if (event.target.closest('#collectionButton')) say(`已收藏 ${cart} 件商品`);
  if (event.target.closest('#memberSubmit')) say('會員功能示意：串接登入服務後即可啟用');
});

document.querySelector('#chatBtn').addEventListener('click', () => {
  openPanel('島民聊天室', `<div class="chatlog" id="chatlog"><div class="bubblemsg"><small>🐙 海草阿哲</small><br>有人要一起去看極光冰原嗎？</div><div class="bubblemsg"><small>🐬 潮汐小米</small><br>剛剛在珊瑚花園遇到小丑魚了！</div><div class="bubblemsg mine">嗨！我剛來，正在找路～</div></div><form class="chatinput" id="chatForm"><input class="input" placeholder="傳送訊息…" aria-label="傳送訊息"><button aria-label="送出訊息">➤</button></form>`);
  document.querySelector('#chatForm').addEventListener('submit', event => { event.preventDefault(); const input = event.currentTarget.querySelector('input'); if (!input.value.trim()) return; const message = document.createElement('div'); message.className = 'bubblemsg mine'; message.textContent = input.value.trim(); document.querySelector('#chatlog').append(message); input.value = ''; document.querySelector('#chatlog').scrollTop = 9999; });
});
function move(dx, dy) { position.x = Math.max(12, Math.min(88, position.x + dx)); position.y = Math.max(20, Math.min(79, position.y + dy)); const walker = document.querySelector('#walker'); walker.style.left = `${position.x}%`; walker.style.top = `${position.y}%`; }
document.querySelectorAll('[data-move]').forEach(button => button.addEventListener('click', () => { const direction = button.dataset.move; move(direction === 'left' ? -4 : direction === 'right' ? 4 : 0, direction === 'up' ? -4 : direction === 'down' ? 4 : 0); }));
document.addEventListener('keydown', event => { if (['ArrowLeft','a','A'].includes(event.key)) move(-3, 0); if (['ArrowRight','d','D'].includes(event.key)) move(3, 0); if (['ArrowUp','w','W'].includes(event.key)) move(0, -3); if (['ArrowDown','s','S'].includes(event.key)) move(0, 3); if (event.key === 'Escape') closePanel(); });
let touchStart = null;
document.querySelector('.ocean').addEventListener('touchstart', event => { touchStart = event.touches[0]; }, { passive: true });
document.querySelector('.ocean').addEventListener('touchend', event => { if (!touchStart) return; const touch = event.changedTouches[0]; const dx = touch.clientX - touchStart.clientX; const dy = touch.clientY - touchStart.clientY; if (Math.max(Math.abs(dx), Math.abs(dy)) > 35) move(Math.sign(dx) * 4, Math.sign(dy) * 4); touchStart = null; }, { passive: true });
document.querySelector('#startBtn').addEventListener('click', () => { move(0, 6); say('使用方向鍵、WASD 或滑動畫面，開始探索！'); });
document.querySelector('#online').textContent = 120 + Math.floor(Math.random() * 35);
