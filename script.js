const EMOJIS = {
  smileys: [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "🤣",
    "😂",
    "🙂",
    "🙃",
    "😉",
    "😊",
    "😇",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😗",
    "😚",
    "😙",
    "🥲",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "🤥",
    "😌",
    "😔",
    "😪",
    "🤤",
    "😴",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🥵",
    "🥶",
    "😵",
    "🤯",
    "🤠",
    "🥳",
    "🥸",
    "😎",
    "🤓",
    "🧐",
  ],
  animals: [
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐨",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
    "🐸",
    "🐵",
    "🙈",
    "🙉",
    "🙊",
    "🐒",
    "🐔",
    "🐧",
    "🐦",
    "🐤",
    "🐣",
    "🐥",
    "🦆",
    "🦅",
    "🦉",
    "🦇",
    "🐺",
    "🐗",
    "🐴",
    "🦄",
    "🐝",
    "🐛",
    "🦋",
    "🐌",
    "🐞",
    "🐜",
    "🦟",
    "🦗",
    "🕷️",
    "🕸️",
    "🦂",
    "🐢",
    "🐍",
    "🦎",
    "🦖",
    "🦕",
    "🐙",
    "🦑",
    "🦐",
    "🦞",
    "🦀",
    "🐡",
    "🐠",
    "🐟",
    "🐬",
    "🐳",
    "🐋",
    "🦈",
  ],
  food: [
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
    "🍆",
    "🥑",
    "🥦",
    "🥬",
    "🥒",
    "🌶️",
    "🫑",
    "🌽",
    "🥕",
    "🫒",
    "🧄",
    "🧅",
    "🥔",
    "🍠",
    "🥐",
    "🥯",
    "🍞",
    "🥖",
    "🥨",
    "🧀",
    "🥚",
    "🍳",
    "🧈",
    "🥞",
    "🧇",
    "🥓",
    "🥩",
    "🍗",
    "🍖",
    "🦴",
    "🌭",
    "🍔",
    "🍟",
    "🍕",
    "🫓",
    "🥪",
    "🥙",
    "🧆",
    "🌮",
    "🌯",
    "🫔",
    "🥗",
  ],
  activities: [
    "⚽",
    "🏀",
    "🏈",
    "⚾",
    "🥎",
    "🎾",
    "🏐",
    "🏉",
    "🥏",
    "🎱",
    "🪀",
    "🏓",
    "🏸",
    "🏒",
    "🏑",
    "🥍",
    "🏏",
    "🪃",
    "🥅",
    "⛳",
    "🪁",
    "🏹",
    "🎣",
    "🤿",
    "🥊",
    "🥋",
    "🎽",
    "🛹",
    "🛼",
    "🛷",
    "⛸️",
    "🥌",
    "🎿",
    "⛷️",
    "🏂",
    "🪂",
    "🏋️",
    "🤼",
    "🤸",
    "🤺",
    "🤾",
    "🏌️",
    "🏇",
    "🧘",
    "🏄",
    "🏊",
    "🤽",
    "🚣",
    "🧗",
    "🚵",
    "🚴",
    "🏆",
    "🥇",
    "🥈",
    "🥉",
    "🏅",
    "🎖️",
    "🏵️",
    "🎗️",
  ],
  objects: [
    "⌚",
    "📱",
    "💻",
    "⌨️",
    "🖥️",
    "🖨️",
    "🖱️",
    "🖲️",
    "🕹️",
    "🗜️",
    "💾",
    "💿",
    "📀",
    "📼",
    "📷",
    "📸",
    "📹",
    "🎥",
    "📞",
    "☎️",
    "📟",
    "📠",
    "📺",
    "📻",
    "🎙️",
    "🎚️",
    "🎛️",
    "🧭",
    "⏱️",
    "⏲️",
    "⏰",
    "🕰️",
    "⌛",
    "⏳",
    "📡",
    "🔋",
    "🔌",
    "💡",
    "🔦",
    "🕯️",
    "🪔",
    "🧯",
    "🛢️",
    "💸",
    "💵",
    "💴",
    "💶",
    "💷",
    "🪙",
    "💰",
    "💳",
    "💎",
    "⚖️",
    "🪜",
    "🧰",
    "🪛",
    "🔧",
    "🔨",
    "⚒️",
    "🛠️",
  ],
  symbols: [
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🖤",
    "🤍",
    "🤎",
    "💔",
    "❣️",
    "💕",
    "💞",
    "💓",
    "💗",
    "💖",
    "💘",
    "💝",
    "💟",
    "☮️",
    "✝️",
    "☪️",
    "🕉️",
    "☸️",
    "✡️",
    "🔯",
    "🕎",
    "☯️",
    "☦️",
    "🛐",
    "⛎",
    "♈",
    "♉",
    "♊",
    "♋",
    "♌",
    "♍",
    "♎",
    "♏",
    "♐",
    "♑",
    "♒",
    "♓",
    "🆔",
    "⚛️",
    "🉑",
    "☢️",
    "☣️",
    "📴",
    "📳",
    "🈶",
    "🈚",
    "🈸",
    "🈺",
    "🈷️",
    "✴️",
    "🆚",
    "💮",
    "🉐",
    "㊙️",
    "㊗️",
    "🈴",
    "🈵",
  ],
  nature: [
    "🌸",
    "🌺",
    "🌼",
    "🌻",
    "🌞",
    "🌝",
    "🌛",
    "🌜",
    "🌚",
    "🌕",
    "🌖",
    "🌗",
    "🌘",
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌙",
    "🌎",
    "🌍",
    "🌏",
    "🪐",
    "💫",
    "⭐",
    "🌟",
    "✨",
    "⚡",
    "☄️",
    "💥",
    "🔥",
    "🌪️",
    "🌈",
    "☀️",
    "🌤️",
    "⛅",
    "🌥️",
    "☁️",
    "🌦️",
    "🌧️",
    "⛈️",
    "🌩️",
    "🌨️",
    "❄️",
    "☃️",
    "⛄",
    "🌬️",
    "💨",
    "💧",
    "💦",
    "☔",
    "☂️",
    "🌊",
    "🌫️",
  ],
  travel: [
    "🚗",
    "🚕",
    "🚙",
    "🚌",
    "🚎",
    "🏎️",
    "🚓",
    "🚑",
    "🚒",
    "🚐",
    "🛻",
    "🚚",
    "🚛",
    "🚜",
    "🦯",
    "🦽",
    "🦼",
    "🛴",
    "🚲",
    "🛵",
    "🏍️",
    "🛺",
    "🚨",
    "🚔",
    "🚍",
    "🚘",
    "🚖",
    "🚡",
    "🚠",
    "🚟",
    "🚃",
    "🚋",
    "🚞",
    "🚝",
    "🚄",
    "🚅",
    "🚈",
    "🚂",
    "🚆",
    "🚇",
    "🚊",
    "🚉",
    "✈️",
    "🛫",
    "🛬",
    "🛩️",
    "💺",
    "🛰️",
    "🚀",
    "🛸",
    "🚁",
    "🛶",
    "⛵",
    "🚤",
    "🛥️",
    "🛳️",
    "⛴️",
    "🚢",
    "⚓",
    "⛽",
    "🚧",
    "🚦",
    "🚥",
    "🗺️",
  ],
};

// State
let state = {
  currentEmoji: "😀",
  decoration: "",
  text: "",
  bgColor: "#FFE8F0",
  textColor: "#2D1B3D",
  rotation: 0,
  size: 10,
  filter: "none",
  savedEmojis: [],
};

// DOM Elements
const elements = {
  mainEmoji: document.getElementById("mainEmoji"),
  canvasArea: document.getElementById("canvasArea"),
  categorySelect: document.getElementById("categorySelect"),
  emojiGrid: document.getElementById("emojiGrid"),
  bgColorInput: document.getElementById("bgColorInput"),
  rotationSlider: document.getElementById("rotationSlider"),
  rotationValue: document.getElementById("rotationValue"),
  sizeSlider: document.getElementById("sizeSlider"),
  sizeValue: document.getElementById("sizeValue"),
  filterSelect: document.getElementById("filterSelect"),
  saveBtn: document.getElementById("saveBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  randomBtn: document.getElementById("randomBtn"),
  resetBtn: document.getElementById("resetBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importBtn: document.getElementById("importBtn"),
  clearAllBtn: document.getElementById("clearAllBtn"),
  galleryGrid: document.getElementById("galleryGrid"),
};

// Initialize
function init() {
  loadSavedEmojis();
  loadCategory("smileys");
  setupEventListeners();
  updateDisplay();
  renderGallery();
}

// Load saved emojis from localStorage
function loadSavedEmojis() {
  const saved = localStorage.getItem("savedEmojis");
  if (saved) {
    try {
      state.savedEmojis = JSON.parse(saved);
    } catch (e) {
      state.savedEmojis = [];
    }
  }
}

// Save to localStorage
function saveToStorage() {
  localStorage.setItem("savedEmojis", JSON.stringify(state.savedEmojis));
}

// Load emoji category
function loadCategory(category) {
  const emojis = EMOJIS[category] || EMOJIS.smileys;
  elements.emojiGrid.innerHTML = "";

  emojis.forEach((emoji) => {
    const div = document.createElement("div");
    div.className = "emoji-item";
    div.textContent = emoji;
    if (emoji === state.currentEmoji) {
      div.classList.add("selected");
    }
    div.onclick = () => selectEmoji(emoji);
    elements.emojiGrid.appendChild(div);
  });
}

// Select emoji
function selectEmoji(emoji) {
  state.currentEmoji = emoji;
  document.querySelectorAll(".emoji-item").forEach((el) => {
    el.classList.remove("selected");
    if (el.textContent === emoji) {
      el.classList.add("selected");
    }
  });
  updateDisplay();
}

// Update display
function updateDisplay() {
  const displayText =
    state.decoration +
    state.currentEmoji +
    (state.text ? " " + state.text : "");
  elements.mainEmoji.textContent = displayText;
  elements.mainEmoji.style.fontSize = state.size + "rem";
  elements.mainEmoji.style.transform = `rotate(${state.rotation}deg)`;
  elements.mainEmoji.style.filter = state.filter;

  elements.canvasArea.style.background = `linear-gradient(135deg, ${state.bgColor}, ${adjustColor(state.bgColor, 20)})`;
}

// Adjust color
function adjustColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

// Setup event listeners
function setupEventListeners() {
  // Category
  elements.categorySelect.onchange = (e) => {
    loadCategory(e.target.value);
  };

  // Colors
  elements.bgColorInput.oninput = (e) => {
    state.bgColor = e.target.value;
    updateDisplay();
  };


  // Rotation
  elements.rotationSlider.oninput = (e) => {
    state.rotation = parseInt(e.target.value);
    elements.rotationValue.textContent = state.rotation + "°";
    updateDisplay();
  };

  // Size
  elements.sizeSlider.oninput = (e) => {
    state.size = parseFloat(e.target.value);
    elements.sizeValue.textContent = state.size;
    updateDisplay();
  };

  // Filter
  elements.filterSelect.onchange = (e) => {
    state.filter = e.target.value;
    updateDisplay();
  };

  // Decoration buttons
  document.querySelectorAll(".decoration-btn").forEach((btn) => {
    btn.onclick = function () {
      const decoration = this.dataset.decoration;
      if (state.decoration === decoration) {
        state.decoration = "";
        this.classList.remove("active");
      } else {
        document
          .querySelectorAll(".decoration-btn")
          .forEach((b) => b.classList.remove("active"));
        state.decoration = decoration;
        this.classList.add("active");
      }
      updateDisplay();
    };
  });

  // Buttons
  elements.saveBtn.onclick = saveEmoji;
  elements.downloadBtn.onclick = downloadEmoji;
  elements.randomBtn.onclick = randomEmoji;
  elements.resetBtn.onclick = resetEmoji;
  elements.exportBtn.onclick = exportEmojis;
  elements.importBtn.onclick = importEmojis;
  elements.clearAllBtn.onclick = clearAll;
}

// Save emoji
function saveEmoji() {
  const emojiData = {
    emoji: state.currentEmoji,
    decoration: state.decoration,
    text: state.text,
    bgColor: state.bgColor,
    textColor: state.textColor,
    rotation: state.rotation,
    size: state.size,
    filter: state.filter,
    timestamp: Date.now(),
  };

  state.savedEmojis.unshift(emojiData);
  if (state.savedEmojis.length > 100) {
    state.savedEmojis = state.savedEmojis.slice(0, 100);
  }

  saveToStorage();
  renderGallery();
  showMessage("✅ Saqlandi!");
}

// Download emoji
function downloadEmoji() {
  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 1000;
  const ctx = canvas.getContext("2d");

  // Background
  const gradient = ctx.createLinearGradient(0, 0, 1000, 1000);
  gradient.addColorStop(0, state.bgColor);
  gradient.addColorStop(1, adjustColor(state.bgColor, 20));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1000, 1000);

  // Emoji
  ctx.save();
  ctx.translate(500, 450);
  ctx.rotate((state.rotation * Math.PI) / 180);
  ctx.font = `${state.size * 50}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(state.decoration + state.currentEmoji, 0, 0);
  ctx.restore();

  // Text
  if (state.text) {
    ctx.font = "bold 80px Arial";
    ctx.fillStyle = state.textColor;
    ctx.textAlign = "center";
    ctx.fillText(state.text, 500, 750);
  }

  const link = document.createElement("a");
  link.download = `emoji-${Date.now()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();

  showMessage("⬇️ Yuklab olindi!");
}

// Random emoji
function randomEmoji() {
  const categories = Object.keys(EMOJIS);
  const randomCat = categories[Math.floor(Math.random() * categories.length)];
  const emojis = EMOJIS[randomCat];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  elements.categorySelect.value = randomCat;
  loadCategory(randomCat);
  selectEmoji(randomEmoji);
  showMessage("🎲 Tasodifiy emoji!");
}

// Reset
function resetEmoji() {
  state = {
    currentEmoji: "😀",
    decoration: "",
    text: "",
    bgColor: "#FFE8F0",
    textColor: "#2D1B3D",
    rotation: 0,
    size: 10,
    filter: "none",
    savedEmojis: state.savedEmojis,
  };

  elements.textInput.value = "";
  elements.bgColorInput.value = "#FFE8F0";
  elements.textColorInput.value = "#2D1B3D";
  elements.rotationSlider.value = 0;
  elements.rotationValue.textContent = "0°";
  elements.sizeSlider.value = 10;
  elements.sizeValue.textContent = "5";
  elements.filterSelect.value = "none";
  elements.categorySelect.value = "smileys";

  document
    .querySelectorAll(".decoration-btn")
    .forEach((b) => b.classList.remove("active"));

  loadCategory("smileys");
  updateDisplay();
  showMessage("🔄 Reset qilindi!");
}

// Render gallery
function renderGallery() {
  if (state.savedEmojis.length === 0) {
    elements.galleryGrid.innerHTML = `
                    <div class="empty-state">
                        Hali emoji yaratilmagan 🎨<br>
                        Yuqorida emoji yarating va saqlang!
                    </div>
                `;
    return;
  }

  elements.galleryGrid.innerHTML = "";
  state.savedEmojis.forEach((data, index) => {
    const div = document.createElement("div");
    div.className = "saved-item";
    div.style.background = `linear-gradient(135deg, ${data.bgColor}, ${adjustColor(data.bgColor, 20)})`;

    div.innerHTML = `
                    <div class="emoji" style="transform: rotate(${data.rotation}deg); filter: ${data.filter};">${data.decoration}${data.emoji}</div>
                    ${data.text ? `<div class="text" style="color: ${data.textColor};">${data.text}</div>` : ""}
                    <button class="delete-btn" onclick="deleteEmoji(${index})">×</button>
                `;

    div.onclick = (e) => {
      if (!e.target.classList.contains("delete-btn")) {
        loadEmojiData(data);
      }
    };

    elements.galleryGrid.appendChild(div);
  });
}

// Load emoji data
function loadEmojiData(data) {
  state.currentEmoji = data.emoji;
  state.decoration = data.decoration;
  state.text = data.text;
  state.bgColor = data.bgColor;
  state.textColor = data.textColor;
  state.rotation = data.rotation;
  state.size = data.size;
  state.filter = data.filter;

  elements.textInput.value = data.text;
  elements.bgColorInput.value = data.bgColor;
  elements.textColorInput.value = data.textColor;
  elements.rotationSlider.value = data.rotation;
  elements.rotationValue.textContent = data.rotation + "°";
  elements.sizeSlider.value = data.size;
  elements.sizeValue.textContent = data.size;
  elements.filterSelect.value = data.filter;

  updateDisplay();
  showMessage("📥 Yuklandi!");
}

// Delete emoji
window.deleteEmoji = function (index) {
  if (confirm("Bu emojini o'chirmoqchimisiz?")) {
    state.savedEmojis.splice(index, 1);
    saveToStorage();
    renderGallery();
    showMessage("🗑️ O'chirildi!");
  }
};

// Export emojis
function exportEmojis() {
  if (state.savedEmojis.length === 0) {
    showMessage("❌ Saqlangan emoji yo'q!");
    return;
  }

  const dataStr = JSON.stringify(state.savedEmojis, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `my-emojis-${Date.now()}.json`;
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
  showMessage("📦 Export qilindi!");
}

// Import emojis
function importEmojis() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          state.savedEmojis = [...imported, ...state.savedEmojis];
          if (state.savedEmojis.length > 100) {
            state.savedEmojis = state.savedEmojis.slice(0, 100);
          }
          saveToStorage();
          renderGallery();
          showMessage("📥 Import qilindi!");
        } else {
          showMessage("❌ Noto'g'ri fayl!");
        }
      } catch (err) {
        showMessage("❌ Import xatosi!");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// Clear all
function clearAll() {
  if (confirm("Barcha saqlangan emojilarni o'chirmoqchimisiz?")) {
    state.savedEmojis = [];
    saveToStorage();
    renderGallery();
    showMessage("🗑️ Hammasi o'chirildi!");
  }
}

// Show message
function showMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = text;
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.style.animation = "slideIn 0.3s ease reverse";
    setTimeout(() => msg.remove(), 300);
  }, 2000);
}

// Start
init();

// AI Emoji Generator
const aiPrompt = document.getElementById("aiPrompt");
const generateBtn = document.getElementById("generateBtn");
const aiResults = document.getElementById("aiResults");
const aiLoading = document.getElementById("aiLoading");

generateBtn.onclick = async function () {
  const prompt = aiPrompt.value.trim();
  if (!prompt) {
    showMessage("❌ Tavsif kiriting!");
    return;
  }

  aiLoading.style.display = "block";
  aiResults.innerHTML = "";
  generateBtn.disabled = true;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `Create a custom emoji based on this description: "${prompt}". 

You should create a creative emoji combination using existing emojis that represents this concept. Be creative and fun!

Respond ONLY with a JSON array of 6 different emoji combinations, like this:
[
  {"emoji": "🍉😢", "description": "Crying watermelon"},
  {"emoji": "🍉💧😭", "description": "Very sad watermelon with tears"},
  ...
]

Each combination should:
- Use 2-4 emojis combined
- Be creative and represent the concept
- Include a brief description

Return ONLY the JSON array, no other text.`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.content && data.content[0] && data.content[0].text) {
      let jsonText = data.content[0].text.trim();
      // Remove markdown code blocks if present
      jsonText = jsonText.replace(/```json\n?/g, "").replace(/```\n?/g, "");

      const results = JSON.parse(jsonText);

      aiLoading.style.display = "none";
      aiResults.innerHTML = "";

      if (Array.isArray(results) && results.length > 0) {
        results.forEach((item) => {
          const div = document.createElement("div");
          div.className = "ai-result-item";
          div.style.cssText = `
                                background: linear-gradient(135deg, #FFF9E6, #FFE8F0);
                                border-radius: 15px;
                                padding: 1.5rem;
                                text-align: center;
                                cursor: pointer;
                                transition: all 0.3s ease;
                                border: 3px solid transparent;
                            `;

          div.innerHTML = `
                                <div style="font-size: 4rem; margin-bottom: 0.5rem;">${item.emoji}</div>
                                <div style="font-size: 0.9rem; color: var(--accent); font-weight: 600;">${item.description}</div>
                            `;

          div.onmouseover = function () {
            this.style.transform = "scale(1.05) translateY(-5px)";
            this.style.borderColor = "var(--primary)";
            this.style.boxShadow = "0 10px 30px rgba(255, 107, 157, 0.3)";
          };

          div.onmouseout = function () {
            this.style.transform = "";
            this.style.borderColor = "transparent";
            this.style.boxShadow = "";
          };

          div.onclick = function () {
            // Use the first emoji from the combination
            const firstEmoji = [...item.emoji][0];
            state.currentEmoji = item.emoji;
            state.decoration = "";
            state.text = item.description;
            elements.textInput.value = item.description;
            updateDisplay();
            showMessage("✅ Emoji yuklandi!");
            window.scrollTo({ top: 0, behavior: "smooth" });
          };

          aiResults.appendChild(div);
        });

        showMessage("🎉 Emoji yaratildi!");
      } else {
        throw new Error("Invalid response format");
      }
    } else {
      throw new Error("No response from AI");
    }
  } catch (error) {
    console.error("AI Error:", error);
    aiLoading.style.display = "none";

    // Fallback: create emojis locally without API
    aiResults.innerHTML = "";
    const fallbackEmojis = createFallbackEmojis(prompt);

    fallbackEmojis.forEach((item) => {
      const div = document.createElement("div");
      div.style.cssText = `
                        background: linear-gradient(135deg, #FFF9E6, #FFE8F0);
                        border-radius: 15px;
                        padding: 1.5rem;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    `;

      div.innerHTML = `
                        <div style="font-size: 4rem; margin-bottom: 0.5rem;">${item.emoji}</div>
                        <div style="font-size: 0.9rem; color: var(--accent); font-weight: 600;">${item.description}</div>
                    `;

      div.onclick = function () {
        state.currentEmoji = item.emoji;
        updateDisplay();
        showMessage("✅ Emoji yuklandi!");
      };

      aiResults.appendChild(div);
    });

    showMessage("🎨 Emoji yaratildi!");
  } finally {
    generateBtn.disabled = false;
  }
};

// Fallback emoji creator (when API fails)
function createFallbackEmojis(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  const emojiCombos = [];

  // Predefined combinations based on common requests
  const patterns = {
    cry: ["😢", "😭", "💧"],
    sad: ["😢", "😔", "💔"],
    happy: ["😊", "😄", "🎉"],
    love: ["❤️", "💕", "😍"],
    cool: ["😎", "🆒", "⭐"],
    fire: ["🔥", "🌟", "✨"],
    cat: ["🐱", "😺", "🐈"],
    dog: ["🐶", "🐕", "🦴"],
    pizza: ["🍕", "😋", "🤤"],
    watermelon: ["🍉", "🍈", "🍇"],
    burger: ["🍔", "🍟", "🌭"],
    music: ["🎵", "🎶", "🎸"],
    party: ["🎉", "🎊", "🥳"],
    star: ["⭐", "🌟", "✨"],
    heart: ["❤️", "💖", "💝"],
    laugh: ["😂", "🤣", "😆", "😹", "😸"],
    angry: ["😡", "🤬", "👿", "💢"],
    surprised: ["😲", "😯", "😳", "🤯"],
    tired: ["😴", "🥱", "😪", "😓"],
    sick: ["🤒", "🤕", "🤢", "🤮"],
    drink: ["🥤", "🍹", "🍸", "🍺", "🍷"],
    icecream: ["🍦", "🍨", "🍧"],
    donut: ["🍩", "🍪", "🧁"],
    coffee: ["☕", "🍵", "🫖"],
    sun: ["🌞", "☀️", "🌅", "🌄"],
    moon: ["🌙", "🌕", "🌑", "🌒", "🌔"],
    cloud: ["☁️", "🌤️", "🌥️", "⛅", "🌦️"],
    snow: ["❄️", "☃️", "⛄"],
    rain: ["🌧️", "💧", "🌂", "☔"],
    thunder: ["⚡", "🌩️", "⛈️"],
    gift: ["🎁", "🎀", "🛍️"],
    balloon: ["🎈", "🎉", "🎊"],
    crown: ["👑", "💍", "🎩"],
    gem: ["💎", "🔮", "🪩"],
    trophy: ["🏆", "🥇", "🥈", "🥉"],
    car: ["🚗", "🚕", "🏎️", "🚓"],
    plane: ["✈️", "🛫", "🛬", "🛩️"],
    boat: ["⛴️", "🛥️", "🚤", "🛳️"],
    tree: ["🌳", "🌲", "🌴", "🎄"],
    flower: ["🌹", "🌻", "🌸", "🌼", "💐"],
    leaf: ["🍂", "🍁", "🍃", "🌿"],
    paw: ["🐾", "🦴", "🐕‍🦺"],
    balloon_party: ["🎈", "🎉", "🎊", "🥳"],
  };

  // Find matching patterns
  const baseEmojis = [];
  const modifiers = [];

  for (const [key, emojis] of Object.entries(patterns)) {
    if (lowerPrompt.includes(key)) {
      if (baseEmojis.length === 0) {
        baseEmojis.push(...emojis);
      } else {
        modifiers.push(...emojis);
      }
    }
  }

  // If no patterns found, use generic happy emojis
  if (baseEmojis.length === 0) {
    baseEmojis.push("😊", "🎨", "✨");
  }

  // Create 6 combinations
  for (let i = 0; i < 6; i++) {
    let combo = "";
    let desc = prompt;

    if (i === 0) {
      combo = baseEmojis[0] || "😊";
    } else if (i === 1 && baseEmojis[1]) {
      combo = baseEmojis[0] + baseEmojis[1];
    } else if (i === 2 && modifiers[0]) {
      combo = baseEmojis[0] + modifiers[0];
    } else if (i === 3 && baseEmojis[2]) {
      combo = baseEmojis[0] + baseEmojis[2] + (modifiers[0] || "");
    } else if (i === 4 && modifiers[1]) {
      combo = modifiers[0] + baseEmojis[0] + modifiers[1];
    } else {
      // Random combination
      const all = [...baseEmojis, ...modifiers];
      combo = all[Math.floor(Math.random() * all.length)] || "😊";
    }

    emojiCombos.push({
      emoji: combo,
      description: `${desc} v${i + 1}`,
    });
  }

  return emojiCombos;
}

// Allow Enter key to generate
aiPrompt.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateBtn.click();
  }
});
