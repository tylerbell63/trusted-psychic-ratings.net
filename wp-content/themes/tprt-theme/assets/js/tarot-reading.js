(() => {
  "use strict";

  const cards = [
    ["The Fool", "A fresh start invites curiosity. What would change if you met this moment without needing every answer first?", "Pause before leaping. Give the unknown a little structure."],
    ["The Magician", "You may already have more tools, skills, or support than you have been using. Name what is within reach.", "Focus your energy. One clear intention can be more useful than many plans."],
    ["The High Priestess", "Some parts of this question may need quiet before they become clear. Notice what you know but have not said aloud.", "Make room for reflection. You do not need to force an answer today."],
    ["The Empress", "Care, creativity, and steady attention can help an idea take root. What deserves more room to grow?", "Offer yourself the same patience you would offer someone you love."],
    ["The Emperor", "Boundaries and a reliable plan can make a difficult situation easier to hold. Where would a clear structure help?", "Leave a little room for others' needs and changing conditions."],
    ["The Hierophant", "A shared practice, mentor, or trusted source may offer useful perspective. Which guidance fits your own values?", "Keep your discernment. Tradition can inform a choice without making it for you."],
    ["The Lovers", "A meaningful choice may ask you to bring your values into alignment with your actions. What matters most here?", "Listen to your own needs as carefully as you listen to someone else's."],
    ["The Chariot", "Progress may come from choosing a direction and keeping your attention there. What can you move forward today?", "A pause to check your course is part of moving with intention."],
    ["Strength", "Gentleness and courage can belong in the same response. Where might patience create more room than force?", "Protect your energy while you show compassion."],
    ["The Hermit", "A little distance from outside noise may help you hear your own thinking. What do you notice when things grow quiet?", "Reflection can clarify a decision, but connection can help you carry it."],
    ["Wheel of Fortune", "Circumstances shift, sometimes beyond your control. Notice what is changing and what remains yours to choose.", "Stay flexible. A small adjustment may serve you better than resisting every turn."],
    ["Justice", "A fair view asks for the facts, the context, and your part in the situation. What would balance look like?", "Be honest with yourself while leaving room for nuance."],
    ["The Hanged Man", "A different angle could loosen a stuck pattern. What becomes visible if you stop trying to solve it the usual way?", "A pause can be active. Decide what you are waiting for and why."],
    ["Death", "An ending or transition can make space for something more fitting. What are you ready to stop carrying?", "Let change happen in steps. You do not need to rush the next beginning."],
    ["Temperance", "A steadier rhythm may come from combining approaches rather than choosing an extreme. What could be brought into balance?", "Give the process time. Small adjustments can add up."],
    ["The Devil", "A habit, fear, or expectation may have more influence than it deserves. Which part is a choice, and which part is a pattern?", "Approach this with kindness, not shame. Support can make change easier."],
    ["The Tower", "A disruption can reveal what was already unstable. What truth is asking to be acknowledged?", "Choose one grounded next step. You do not have to rebuild everything at once."],
    ["The Star", "Hope may return through a simple, restorative action. What would help you feel a little more like yourself?", "Keep expectations gentle. Recovery does not need to follow a perfect timeline."],
    ["The Moon", "Uncertainty can make every possibility feel louder. Separate what you know from what you fear or imagine.", "Wait for clearer information where you can. Trust can coexist with careful questions."],
    ["The Sun", "Warmth, openness, or a small success may be easier to see when you let yourself notice it. What is going well?", "Share the good feeling without expecting every question to be settled."],
    ["Judgement", "A moment of honest review may help you choose what comes next. What have you learned from the path so far?", "Make space for a fresh choice. Your past does not have to define the next one."],
    ["The World", "A cycle may be reaching a natural point of completion. What can you acknowledge before moving on?", "Celebrate the progress you made, even if the next chapter is still taking shape."]
  ];

  const titles = ["0 · The Fool", "I · The Magician", "II · The High Priestess", "III · The Empress", "IV · The Emperor", "V · The Hierophant", "VI · The Lovers", "VII · The Chariot", "VIII · Strength", "IX · The Hermit", "X · Wheel of Fortune", "XI · Justice", "XII · The Hanged Man", "XIII · Death", "XIV · Temperance", "XV · The Devil", "XVI · The Tower", "XVII · The Star", "XVIII · The Moon", "XIX · The Sun", "XX · Judgement", "XXI · The World"];
  const symbols = [
    '<circle cx="214" cy="102" r="25"/><path d="M208 98l6 4-7 3m-55 76 18-24 16 17 17-9 13 16m-64 0h73M183 153l-8-16 12 6m-13 40-12 25m39-25 9 25m-8-29 19-4"/><path d="M145 125l7 3-7 3"/>',
    '<path d="M150 102c23-28 52-28 76-4M160 112c18-15 37-15 55-2M173 121c11-6 22-6 33 0M150 177h76m-66 0 8-12h50l8 12M174 161l14-26 14 26m-14-26v-13m-39 8 9 8m59-8-9 8"/><circle cx="188" cy="127" r="5"/>',
    '<path d="M132 103v82m18-82v82m76-82v82m18-82v82M125 102h31m63 0h31M138 185h18m63 0h18"/><path d="M183 145a22 22 0 1 1 14 21 19 19 0 0 0 14-21 20 20 0 0 0-28-18"/><circle cx="187" cy="139" r="2"/><circle cx="202" cy="151" r="2"/>',
    '<path d="M122 184c20-2 27-26 43-31 18-6 32 16 49 10 13-5 19-23 39-23M135 166l-4-20 14 12m53-9-2-20 14 17m20 26 12-13"/><circle cx="175" cy="123" r="13"/><path d="M175 104v-9m-9 12-7-6m32 7 8-5m-30 64 6 24m14-24-1 24"/>',
    '<path d="M140 185h96m-81-2v-33l-18-16 29-29 29 29-17 16v33m4-47h44v47m-40-51 20-24 20 24m-76 51h73"/><path d="M180 121h12m-6-8v16m47 28 16 14-16 14"/>',
    '<path d="M138 185h101M148 181v-55h20v55m41 0v-55h20v55m-91-58 40-25 40 25zM177 142h22m-11-11v23m-8 31 8-10 8 10"/><circle cx="188" cy="109" r="4"/>',
    '<circle cx="188" cy="121" r="10"/><circle cx="157" cy="159" r="10"/><circle cx="219" cy="159" r="10"/><path d="M188 131l-24 20m34 0 21 8m-62 0-9 27m71-27 9 27m-53-2c0-14 7-22 13-22s13 8 13 22m-33 0h40M188 111V93m-6 6 6-7 6 7"/>',
    '<path d="M142 157h94l-14 30h-66zM151 156v-26l37-18 37 18v26m-56 0v-30m38 30v-30m-52 62h65M164 132h48"/><path d="M188 110c-10-19-28-10-24 4m48-4c10-19 28-10 24 4"/><circle cx="188" cy="94" r="10"/>',
    '<path d="M188 102c-25 0-38 22-30 42 6 12 17 17 30 17s24-5 30-17c8-20-5-42-30-42zM161 145l-14 17 17-2m48-15 14 17-17-2M160 177l-13 16m69-16 13 16m-41-31v28m-18 3h36"/><path d="M176 119c6-7 18-7 24 0m-21 20c5 5 13 5 18 0"/>',
    '<circle cx="188" cy="139" r="39"/><path d="M188 100v78m-39-39h78m-67-28 56 56m0-56-56 56M188 89v10m0 80v10m-50-50h10m80 0h10"/><path d="M188 120l18 19-18 19-18-19z"/><circle cx="188" cy="139" r="6"/>',
    '<circle cx="188" cy="139" r="39"/><path d="M188 100v78m-39-39h78m-67-28 56 56m0-56-56 56M188 89v10m0 80v10m-50-50h10m80 0h10"/><circle cx="188" cy="139" r="10"/><path d="M188 125v28m-14-14h28"/>',
    '<path d="M188 98v81m-27-63 54 51m-54 0 54-51M145 185h86m-55-8-13 20m26-20 13 20"/><path d="M176 104h24m-12-10v20m-42 18 12 5-12 5m84-10-12 5 12 5"/><circle cx="188" cy="139" r="7"/>',
    '<path d="M157 106l31 33-31 33m62-66-31 33 31 33M188 84v25m0 60v25M137 139h27m48 0h27"/><path d="M173 116c7-8 23-8 30 0v46c-7 8-23 8-30 0zM174 139h28"/><circle cx="188" cy="139" r="50"/>',
    '<path d="M143 177c15-27 17-48 45-49 28 1 30 22 45 49m-90 0h90m-77-49c0-17 14-30 32-30s32 13 32 30m-46 7 14-16 14 16m-30 16h32m-16-18v39"/><path d="M154 190c20 8 48 8 68 0"/>',
    '<path d="M154 104v75m68-75v75m-68-65c18 11 50 11 68 0m-68 27c18-11 50-11 68 0m-34-39v74m-23-55 23 19 23-19m-23 10-20 23m20-23 20 23"/><circle cx="188" cy="92" r="11"/>',
    '<path d="M154 104c0-13 10-23 22-23 5 0 9 2 12 5 3-3 7-5 12-5 12 0 22 10 22 23 0 34-34 55-34 55s-34-21-34-55zM188 145l-18 39h36z"/><circle cx="176" cy="112" r="3"/><circle cx="200" cy="112" r="3"/><path d="M166 189h44"/>',
    '<path d="M188 94v36m0 0-25 24m25-24 26 24m-26-24v50m-35-26v26m70-26v26m-78 9h86M147 160h15m52 0h15"/><path d="M163 143l-11-11m61 11 11-11M166 110l22-16 22 16"/><circle cx="188" cy="95" r="5"/>',
    '<circle cx="188" cy="139" r="39"/><circle cx="188" cy="139" r="28"/><path d="M188 100v11m0 56v11m-39-39h11m56 0h11m-66-27 8 8m39 39 8 8m0-55-8 8m-39 39-8 8m20-19 18-18m-18 0 18 18"/><path d="M180 88h16m-8-7v15"/>',
    '<path d="M188 102a25 25 0 1 1-21 12 22 22 0 0 0 31 27 24 24 0 0 0-10-39z"/><path d="M188 85v10m-34 2 7 8m54-8-7 8m-51 35 11-1m40 0 11 1"/><circle cx="216" cy="151" r="2"/><circle cx="153" cy="158" r="2"/><circle cx="202" cy="186" r="2"/>',
    '<circle cx="188" cy="139" r="33"/><path d="M188 91v14m0 68v14m-48-48h14m68 0h14m-82-34 10 10m48 48 10 10m0-68-10 10m-48 48-10 10"/><path d="M179 137l7 7 18-20m-16-37v-7m0 118v-7"/><circle cx="188" cy="139" r="45"/>',
    '<path d="M188 97c-18 24-29 36-29 53a29 29 0 0 0 58 0c0-17-11-29-29-53zM172 166c5 7 12 10 21 9m-5-78V84m-35 27-7-6m84 6 7-6"/><path d="M144 191h88"/><circle cx="157" cy="89" r="2"/><circle cx="221" cy="88" r="2"/>',
    '<path d="M157 178l31-53 31 53zM188 125V99m-21 80h42M149 102l8 8 8-8 8 8 8-8 8 8 8-8 8 8 8-8 8 8"/><path d="M188 82v10m-28 4 6 8m44-8-6 8m-49 50-12 9m90-9 12 9"/><circle cx="188" cy="116" r="5"/>',
    '<circle cx="188" cy="142" r="33"/><path d="M188 98c14 19 20 31 20 44s-6 25-20 44c-14-19-20-31-20-44s6-25 20-44zM146 142h84m-42-50v100"/><path d="M161 109c-9-11-16-9-19 1m73-1c9-11 16-9 19 1M151 177c-9 11-5 17 4 18m66-18c9 11 5 17-4 18"/><circle cx="188" cy="142" r="8"/>',
    '<path d="M188 91v32m0 0c-23-8-38 6-38 25 0 15 13 24 26 24h24c13 0 26-9 26-24 0-19-15-33-38-25zM176 173l-12 17m36-17 12 17m-24-18v20m-38 1h76"/><circle cx="177" cy="147" r="3"/><circle cx="199" cy="147" r="3"/><path d="M179 158c5 3 13 3 18 0"/>',
    '<path d="M188 88a51 51 0 1 0 0 102 51 51 0 0 0 0-102zm0 9v84m-42-42h84m-72-30 60 60m0-60-60 60"/><circle cx="188" cy="139" r="19"/><path d="M188 86V73m-41 26-10-10m92 10 10-10M137 139h-13m115 0h-13m-79 36-10 10m92-10 10 10"/>'
  ];
  const positions = ["What shaped this", "What asks attention", "A possible next step"];
  const roman = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
  const state = { deck: cards.map((_, i) => i), selected: [], revealed: false };
  const deck = document.getElementById("qa-deck");
  const status = document.getElementById("qa-status");
  const revealButton = document.getElementById("qa-reveal");
  const result = document.getElementById("qa-result");
  const question = document.getElementById("qa-question");

  function svgCard(index, back = false) {
    if (back) return '<svg viewBox="0 0 300 430" aria-hidden="true"><defs><pattern id="back-stars" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M16 5v22M5 16h22M8 8l16 16m0-16L8 24" stroke="#d5b678" stroke-width=".55" opacity=".46"/><circle cx="16" cy="16" r="2" fill="#d5b678" opacity=".7"/></pattern><linearGradient id="back-bg" x2=".8" y2="1"><stop stop-color="#554762"/><stop offset="1" stop-color="#1c1d30"/></linearGradient></defs><rect x="5" y="5" width="290" height="420" rx="5" fill="url(#back-bg)" stroke="#d5b678" stroke-width="2"/><rect x="14" y="14" width="272" height="402" rx="2" fill="url(#back-stars)" stroke="#d5b678" stroke-width="1"/><path d="M150 77 165 133 221 148 165 163 150 219 135 163 79 148 135 133z" fill="none" stroke="#e2c58d" stroke-width="2"/><circle cx="150" cy="148" r="34" fill="none" stroke="#e2c58d"/><circle cx="150" cy="148" r="7" fill="#e2c58d"/><text x="150" y="342" text-anchor="middle" fill="#e2c58d" font-family="Georgia,serif" font-size="22" letter-spacing="5">ARCANA</text></svg>';
    const [name] = cards[index];
    const grad = `card-gradient-${index}`;
    return `<svg viewBox="0 0 300 430" role="img" aria-label="${name}"><defs><linearGradient id="${grad}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#39334c"/><stop offset=".55" stop-color="#27283d"/><stop offset="1" stop-color="#191b2c"/></linearGradient><radialGradient id="glow-${index}"><stop stop-color="#c8a96b" stop-opacity=".22"/><stop offset="1" stop-color="#c8a96b" stop-opacity="0"/></radialGradient></defs><rect x="4" y="4" width="292" height="422" rx="4" fill="url(#${grad})" stroke="#d5b678" stroke-width="2"/><rect x="13" y="13" width="274" height="404" fill="none" stroke="#d5b678" stroke-opacity=".7"/><circle cx="150" cy="166" r="108" fill="url(#glow-${index})"/><circle cx="150" cy="164" r="77" fill="none" stroke="#d5b678" stroke-opacity=".35"/><path d="M150 60v15m0 182v15m-91-91h15m152 0h15M86 100l11 11m106 106 11 11m0-128-11 11M97 217l-11 11" stroke="#d5b678" stroke-opacity=".62"/><g fill="none" stroke="#e1c58d" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${symbols[index]}</g><path d="M33 300h234" stroke="#d5b678" stroke-opacity=".55"/><text x="150" y="43" text-anchor="middle" fill="#d5b678" font-family="system-ui,sans-serif" font-size="11" letter-spacing="4">${roman[index]}</text><text x="150" y="352" text-anchor="middle" fill="#efe3c8" font-family="Georgia,serif" font-size="${name.length > 16 ? 17 : 21}" letter-spacing="1">${name.toUpperCase()}</text><text x="150" y="379" text-anchor="middle" fill="#b6a47e" font-family="system-ui,sans-serif" font-size="8" letter-spacing="3">THE QUIET ARCANA</text><path d="M30 29h14M30 29v14m240-14h-14m14 0v14M30 401h14m-14 0v-14m240 14h-14m14 0v-14" fill="none" stroke="#d5b678" stroke-width="1.4"/></svg>`;
  }

  function renderDeck() {
    deck.innerHTML = "";
    state.deck.forEach(index => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "qa-deck-card";
      button.setAttribute("aria-label", `Choose card ${state.selected.length + 1} of 3`);
      button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span class="qa-deck-card__face"><span aria-hidden="true">✳</span></span>`;
      button.addEventListener("click", () => chooseCard(index, button));
      deck.appendChild(button);
    });
  }

  function chooseCard(index, button) {
    if (state.selected.length >= 3 || state.selected.includes(index)) return;
    state.selected.push(index);
    button.setAttribute("aria-pressed", "true");
    button.setAttribute("aria-label", `Selected ${cards[index][0]}`);
    document.querySelectorAll(".qa-spread__slot")[state.selected.length - 1].classList.add("is-filled");
    revealButton.disabled = state.selected.length !== 3;
    status.textContent = state.selected.length < 3 ? `${state.selected.length} of 3 cards chosen. Select ${3 - state.selected.length} more.` : "Your spread is ready. Reveal the cards when you feel ready.";
    button.disabled = true;
  }

  function shuffleDeck() {
    for (let i = state.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
    }
    status.textContent = "The deck is shuffled. Choose three cards.";
    renderDeck();
  }

  document.getElementById("qa-shuffle").addEventListener("click", shuffleDeck);
  document.getElementById("qa-cut").addEventListener("click", () => {
    const cut = 1 + Math.floor(Math.random() * (state.deck.length - 1));
    state.deck = state.deck.slice(cut).concat(state.deck.slice(0, cut));
    status.textContent = "The deck is cut. Choose three cards.";
    renderDeck();
  });
  question.addEventListener("input", () => { document.getElementById("qa-question-count").textContent = `${question.value.length} / 180`; });

  revealButton.addEventListener("click", () => {
    if (state.selected.length !== 3) return;
    state.revealed = true;
    const cleanQuestion = question.value.trim();
    document.getElementById("qa-result-question").textContent = cleanQuestion ? `Your question: “${cleanQuestion}”` : "A reading for the question you are holding.";
    const resultCards = document.getElementById("qa-result-cards");
    resultCards.innerHTML = "";
    state.selected.forEach((index, slot) => {
      const reversed = Math.random() < 0.28;
      const meaning = cards[index][reversed ? 2 : 1];
      const card = document.createElement("article");
      card.className = "qa-result-card";
      card.innerHTML = `<div class="qa-result-card__art${reversed ? " is-reversed" : ""}">${svgCard(index)}</div><p class="qa-result-card__position">${positions[slot]}</p><h3>${cards[index][0]}</h3><p class="qa-result-card__orientation">${reversed ? "A different angle" : "In focus"}</p><p class="qa-result-card__meaning">${meaning}</p>`;
      resultCards.appendChild(card);
    });
    result.hidden = false;
    revealButton.hidden = true;
    document.querySelector(".qa-reading__action > p").hidden = true;
    status.textContent = "Your reading is ready.";
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("qa-reset").addEventListener("click", () => {
    state.selected = [];
    state.revealed = false;
    result.hidden = true;
    revealButton.hidden = false;
    revealButton.disabled = true;
    document.querySelector(".qa-reading__action > p").hidden = false;
    document.querySelectorAll(".qa-spread__slot").forEach(slot => slot.classList.remove("is-filled"));
    question.value = "";
    document.getElementById("qa-question-count").textContent = "0 / 180";
    status.textContent = "Choose any three cards from the deck.";
    renderDeck();
    document.getElementById("qa-reading-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  renderDeck();
})();