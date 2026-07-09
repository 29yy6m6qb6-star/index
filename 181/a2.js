const adjective2 = [
  { word: "relaxed", meaning: "くつろいでいる", pos: "形容詞", example: "I felt relaxed after the bath.", example_jp: "私はお風呂のあとくつろいだ気分でした。" },
  { word: "relaxing", meaning: "くつろがせる", pos: "形容詞", example: "This music is relaxing.", example_jp: "この音楽は心を落ち着かせます。" },

  { word: "depressed", meaning: "落ち込んでいる", pos: "形容詞", example: "He felt depressed after the game.", example_jp: "彼は試合のあと落ち込んでいました。" },
  { word: "depressing", meaning: "気が滅入る", pos: "形容詞", example: "It was a depressing story.", example_jp: "それは気が滅入る話でした。" },

  { word: "thrilled", meaning: "とても興奮している", pos: "形容詞", example: "She was thrilled to meet the singer.", example_jp: "彼女はその歌手に会えてとても興奮していました。" },
  { word: "thrilling", meaning: "スリル満点の", pos: "形容詞", example: "It was a thrilling movie.", example_jp: "それはスリル満点の映画でした。" },

  { word: "terrified", meaning: "とてもおびえている", pos: "形容詞", example: "The boy was terrified of the dark.", example_jp: "その少年は暗闇をとても怖がっていました。" },
  { word: "terrifying", meaning: "とても恐ろしい", pos: "形容詞", example: "It was a terrifying experience.", example_jp: "それはとても恐ろしい体験でした。" },

  { word: "exhausted", meaning: "へとへとに疲れている", pos: "形容詞", example: "I was exhausted after practice.", example_jp: "私は練習のあとへとへとでした。" },
  { word: "exhausting", meaning: "へとへとにさせる", pos: "形容詞", example: "The work was exhausting.", example_jp: "その仕事はへとへとになるものでした。" },

  { word: "confused", meaning: "混乱している", pos: "形容詞", example: "She looked confused by the question.", example_jp: "彼女はその質問に混乱しているようでした。" },
  { word: "confusing", meaning: "わかりにくい、混乱させる", pos: "形容詞", example: "This rule is confusing.", example_jp: "このルールはわかりにくいです。" },

  { word: "ashamed", meaning: "恥ずかしく思っている", pos: "形容詞", example: "He felt ashamed of his mistake.", example_jp: "彼は自分の間違いを恥ずかしく思いました。" },
  { word: "shaming", meaning: "恥をかかせる", pos: "形容詞", example: "His words were shaming to others.", example_jp: "彼の言葉は他人に恥をかかせるものでした。" },

  { word: "delighted", meaning: "大喜びしている", pos: "形容詞", example: "We were delighted with the gift.", example_jp: "私たちはその贈り物をとても喜びました。" },
  { word: "delighting", meaning: "喜ばせる", pos: "形容詞", example: "The show was delighting the audience.", example_jp: "そのショーは観客を喜ばせていました。" },

  { word: "discouraged", meaning: "落胆している", pos: "形容詞", example: "She felt discouraged after failing the test.", example_jp: "彼女はテストに失敗して落胆しました。" },
  { word: "discouraging", meaning: "やる気をなくさせる", pos: "形容詞", example: "The result was discouraging.", example_jp: "その結果はやる気をなくさせるものでした。" },

  { word: "offended", meaning: "気分を害した", pos: "形容詞", example: "He was offended by the joke.", example_jp: "彼はその冗談に気分を害しました。" },
  { word: "offending", meaning: "不快にさせる", pos: "形容詞", example: "That comment was offending to many people.", example_jp: "その発言は多くの人を不快にさせるものでした。" },

  { word: "moved", meaning: "感動している", pos: "形容詞", example: "I was deeply moved by the speech.", example_jp: "私はそのスピーチに深く感動しました。" },
  { word: "moving", meaning: "感動的な", pos: "形容詞", example: "It was a moving story.", example_jp: "それは感動的な話でした。" },

  { word: "astonished", meaning: "非常に驚いている", pos: "形容詞", example: "They were astonished by the result.", example_jp: "彼らはその結果に非常に驚きました。" },
  { word: "astonishing", meaning: "驚くべき", pos: "形容詞", example: "It was an astonishing discovery.", example_jp: "それは驚くべき発見でした." },

  { word: "disturbed", meaning: "心を乱されている", pos: "形容詞", example: "She felt disturbed by the news.", example_jp: "彼女はその知らせに心を乱されました。" },
  { word: "disturbing", meaning: "不穏な、不安にさせる", pos: "形容詞", example: "It was a disturbing image.", example_jp: "それは不穏な画像でした。" },

  { word: "encouraged", meaning: "勇気づけられた", pos: "形容詞", example: "I felt encouraged by his words.", example_jp: "私は彼の言葉に勇気づけられました。" },
  { word: "encouraging", meaning: "励みになる", pos: "形容詞", example: "The results are encouraging.", example_jp: "その結果は励みになります。" },

  { word: "fascinated", meaning: "魅了されている", pos: "形容詞", example: "She is fascinated by space.", example_jp: "彼女は宇宙に魅了されています。" },
  { word: "fascinating", meaning: "魅力的な", pos: "形容詞", example: "This book is fascinating.", example_jp: "この本はとても魅力的です." },

  { word: "inspired", meaning: "刺激を受けた、やる気になった", pos: "形容詞", example: "I felt inspired by her speech.", example_jp: "私は彼女のスピーチに刺激を受けました。" },
  { word: "inspiring", meaning: "人を奮い立たせる", pos: "形容詞", example: "He gave an inspiring talk.", example_jp: "彼は人を奮い立たせる話をしました。" },

  { word: "disgusted", meaning: "うんざりした、嫌悪している", pos: "形容詞", example: "She was disgusted by the smell.", example_jp: "彼女はそのにおいにうんざりしました。" },
  { word: "disgusting", meaning: "気持ち悪い、不快な", pos: "形容詞", example: "The food looked disgusting.", example_jp: "その食べ物は気持ち悪そうに見えました。" },

  { word: "convinced", meaning: "確信している", pos: "形容詞", example: "I am convinced that he is right.", example_jp: "私は彼が正しいと確信しています。" },
  { word: "convincing", meaning: "説得力のある", pos: "形容詞", example: "Her explanation was convincing.", example_jp: "彼女の説明は説得力がありました。" },

  { word: "overwhelmed", meaning: "圧倒されている", pos: "形容詞", example: "He was overwhelmed by the amount of work.", example_jp: "彼は仕事の量に圧倒されていました。" },
  { word: "overwhelming", meaning: "圧倒的な", pos: "形容詞", example: "The support was overwhelming.", example_jp: "その支援は圧倒的でした。" },

  { word: "frustrated", meaning: "いらだっている", pos: "形容詞", example: "She felt frustrated with herself.", example_jp: "彼女は自分自身にいらだちを感じました。" },
  { word: "frustrating", meaning: "いらだたせる", pos: "形容詞", example: "It was a frustrating experience.", example_jp: "それはいらだたしい経験でした。" },

  { word: "motivated", meaning: "やる気になっている", pos: "形容詞", example: "I feel motivated to study harder.", example_jp: "私はもっと一生懸命勉強するやる気になっています。" },
  { word: "motivating", meaning: "やる気を起こさせる", pos: "形容詞", example: "Her advice was very motivating.", example_jp: "彼女の助言はとてもやる気を起こさせるものでした。" },

  { word: "discouraged", meaning: "落胆している", pos: "形容詞", example: "He felt discouraged after losing the game.", example_jp: "彼は試合に負けて落胆しました。" },
  { word: "discouraging", meaning: "やる気をなくさせる", pos: "形容詞", example: "The news was discouraging.", example_jp: "その知らせはやる気をなくさせるものでした。" },

  { word: "terrified", meaning: "とてもおびえている", pos: "形容詞", example: "The girl was terrified of spiders.", example_jp: "その少女はクモをとても怖がっていました。" },
  { word: "terrifying", meaning: "とても恐ろしい", pos: "形容詞", example: "It was a terrifying dream.", example_jp: "それはとても恐ろしい夢でした。" },

  { word: "amused", meaning: "おもしろがっている", pos: "形容詞", example: "We were amused by his story.", example_jp: "私たちは彼の話をおもしろがりました。" },
  { word: "amusing", meaning: "おもしろい", pos: "形容詞", example: "It was an amusing story.", example_jp: "それはおもしろい話でした。" },

  { word: "touched", meaning: "心を打たれた", pos: "形容詞", example: "She was touched by their kindness.", example_jp: "彼女は彼らの親切に心を打たれました。" },
  { word: "touching", meaning: "感動的な", pos: "形容詞", example: "It was a touching scene.", example_jp: "それは感動的な場面でした." },
];