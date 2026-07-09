/* ==========================================================================
   メイン処理ロジック
   ========================================================================== */

// HTML内の要素を取得
const list = document.getElementById("list");
const search = document.getElementById("search");

// 🔄 別ファイルにある各データを自動で1つに合体
const allData = [...vData, ...article, ...nData, ...aData];

// 重複データをまとめて1つに補完する処理
const merged = {};
allData.forEach(item => {
  const key = item.word.trim() + "_" + (item.pos || "") + "_" + (item.meaning || "");

  if (!merged[key]) {
    merged[key] = { ...item };
  } else {
    if (!merged[key].meaning && item.meaning) {
      merged[key].meaning = item.meaning;
    }

    // forms が片方にしかない場合は補完
    if (!merged[key].forms && item.forms) {
      merged[key].forms = item.forms;
    }

    // example が片方にしかない場合は補完
    if (!merged[key].example && item.example) {
      merged[key].example = item.example;
    }

    if (!merged[key].example_jp && item.example_jp) {
      merged[key].example_jp = item.example_jp;
    }
  }
});

// 補完が終わった最終データ
const wordData = Object.values(merged);

// 🖥️ 画面に単語カードの一覧を表示する関数
function display(items) {
  list.innerHTML = items.map((w, i) => `
    <div class="card" onclick="showPopup(${i})"
      style="border-left: 5px solid ${getColor(w.pos)}">
      <div class="word">${w.word}</div>
      <p>意味: ${w.meaning || ""}</p>
      <p>品詞: ${w.pos || ""}</p>
    </div>
  `).join("");

  window.currentItems = items;
}

// 🔍 1つの単語データが検索キーワードに一致するか判定する関数
function matchesKeyword(w, keyword) {
  if (!keyword) return true;

  const lowerKeyword = keyword.toLowerCase();

  // 基本情報を検索
  const basicMatch =
    (w.word || "").toLowerCase().includes(lowerKeyword) ||
    (w.meaning || "").toLowerCase().includes(lowerKeyword) ||
    (w.pos || "").toLowerCase().includes(lowerKeyword) ||
    (w.example || "").toLowerCase().includes(lowerKeyword) ||
    (w.example_jp || "").toLowerCase().includes(lowerKeyword);

  if (basicMatch) return true;

  // 動詞の活用形データを検索
  if (Array.isArray(w.forms)) {
    const formsMatch = w.forms.some(f =>
      (f.name || "").toLowerCase().includes(lowerKeyword) ||
      (f.word || "").toLowerCase().includes(lowerKeyword) ||
      (f.ex || "").toLowerCase().includes(lowerKeyword) ||
      (f.jp || "").toLowerCase().includes(lowerKeyword)
    );

    if (formsMatch) return true;
  }

  return false;
}

// 🔍 検索入力欄に文字が打ち込まれた時の処理
search.addEventListener("input", () => {
  const keyword = search.value.trim();

  const filtered = wordData.filter(w => matchesKeyword(w, keyword));

  display(filtered);
});

// アプリ起動時に一番最初に行う表示処理
display(wordData);

// 🎨 品詞の種類に応じてカードの左線の色を決定する関数
function getColor(pos) {
  if (!pos) return "#4CAF50";

  if (pos === "動詞") return "#2196F3";         // 青
  if (pos === "名詞") return "#FF9800";         // オレンジ
  if (pos === "冠詞") return "#3F51B5";         // インディゴ（紺）

  if (pos.includes("形容詞")) return "#9C27B0"; // 紫
  if (pos.includes("副詞")) return "#009688";   // ティール（青緑）
  if (pos.includes("前置詞")) return "#795548"; // 茶
  if (pos.includes("接続詞")) return "#607D8B"; // ブルーグレー
  if (pos.includes("助動詞")) return "#E91E63"; // ピンク

  return "#4CAF50";
}

// ポップアップ制御用要素の取得
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.getElementById("close");

// 👆 カードタップ時にポップアップを開く関数
function showPopup(index) {
  const w = window.currentItems[index];

  // forms データがある場合は品詞に関係なく表を表示
  if (Array.isArray(w.forms) && w.forms.length > 0) {
    let tableRows = w.forms.map(f => `
      <tr>
        <td>
          <strong class="form-word">${f.word || ""}</strong><br>
          <small>${f.name || ""}</small>
        </td>
        <td>
          <div class="ex-en">${f.ex || ""}</div>
          <div class="ex-jp">${f.jp || ""}</div>
        </td>
      </tr>
    `).join("");

    popupBody.innerHTML = `
      <h2>${w.word}（品詞: ${w.pos || ""}）</h2>
      <p>基本の意味: ${w.meaning || ""}</p>
      <hr>
      <table class="forms-table">
        <thead>
          <tr>
            <th style="width: 30%;">単語</th>
            <th style="width: 70%;">例文と訳</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  } else {
    let exampleHtml = "";
    if (w.example) {
      exampleHtml = `
        <div class="normal-example-area">
          <p class="ex-en">例文: ${w.example}</p>
          <p class="ex-jp">訳: ${w.example_jp || ""}</p>
        </div>
      `;
    }

    popupBody.innerHTML = `
      <h2>${w.word}（品詞: ${w.pos || ""}）</h2>
      <p>意味: ${w.meaning || ""}</p>
      <hr>
      ${exampleHtml}
    `;
  }

  popup.style.display = "block";
}

// ×ボタンで非表示
closeBtn.onclick = () => popup.style.display = "none";

// 外側タップで非表示
window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};