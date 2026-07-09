const adjective1 = [
  { word: "interested", meaning: "興味がある", pos: "形容詞", example: "I am interested in music.", example_jp: "私は音楽に興味があります。" },
  { word: "interesting", meaning: "興味深い、おもしろい", pos: "形容詞", example: "This book is very interesting.", example_jp: "この本はとてもおもしろいです。" },

  { word: "excited", meaning: "わくわくしている", pos: "形容詞", example: "She is excited about the trip.", example_jp: "彼女はその旅行にわくわくしています。" },
  { word: "exciting", meaning: "わくわくさせる", pos: "形容詞", example: "The game was exciting.", example_jp: "その試合はわくわくするものでした。" },

  { word: "bored", meaning: "退屈している", pos: "形容詞", example: "I was bored during the class.", example_jp: "私は授業中退屈していました。" },
  { word: "boring", meaning: "退屈な", pos: "形容詞", example: "The movie was boring.", example_jp: "その映画は退屈でした。" },

  { word: "surprised", meaning: "驚いている", pos: "形容詞", example: "We were surprised at the news.", example_jp: "私たちはその知らせに驚きました。" },
  { word: "surprising", meaning: "驚くべき", pos: "形容詞", example: "It was a surprising result.", example_jp: "それは驚くべき結果でした。" },

  { word: "tired", meaning: "疲れている", pos: "形容詞", example: "I am very tired today.", example_jp: "私は今日とても疲れています。" },
  { word: "tiring", meaning: "疲れさせる", pos: "形容詞", example: "The work was tiring.", example_jp: "その仕事は疲れるものでした。" },

  { word: "worried", meaning: "心配している", pos: "形容詞", example: "She is worried about her son.", example_jp: "彼女は息子のことを心配しています。" },
  { word: "worrying", meaning: "心配させる", pos: "形容詞", example: "The situation is worrying.", example_jp: "その状況は心配です。" },

  { word: "pleased", meaning: "うれしい、満足している", pos: "形容詞", example: "I am pleased with the result.", example_jp: "私はその結果に満足しています。" },
  { word: "pleasing", meaning: "人を喜ばせる、感じのよい", pos: "形容詞", example: "The design is pleasing to the eye.", example_jp: "そのデザインは見た目に心地よいです。" },

  { word: "amazed", meaning: "びっくりしている", pos: "形容詞", example: "They were amazed by her voice.", example_jp: "彼らは彼女の声に驚きました。" },
  { word: "amazing", meaning: "驚くほどすばらしい", pos: "形容詞", example: "It was an amazing performance.", example_jp: "それは驚くほどすばらしい演技でした。" },

  { word: "confused", meaning: "混乱している", pos: "形容詞", example: "He looked confused.", example_jp: "彼は困惑しているように見えました。" },
  { word: "confusing", meaning: "わかりにくい、混乱させる", pos: "形容詞", example: "This question is confusing.", example_jp: "この問題はわかりにくいです。" },

  { word: "satisfied", meaning: "満足している", pos: "形容詞", example: "We are satisfied with the service.", example_jp: "私たちはそのサービスに満足しています。" },
  { word: "satisfying", meaning: "満足させる", pos: "形容詞", example: "It was a satisfying meal.", example_jp: "それは満足できる食事でした。" },

  { word: "disappointed", meaning: "がっかりしている", pos: "形容詞", example: "I was disappointed with the result.", example_jp: "私はその結果にがっかりしました。" },
  { word: "disappointing", meaning: "がっかりさせる", pos: "形容詞", example: "The game was disappointing.", example_jp: "その試合はがっかりするものでした。" },

  { word: "embarrassed", meaning: "恥ずかしい思いをしている", pos: "形容詞", example: "She felt embarrassed in front of everyone.", example_jp: "彼女はみんなの前で恥ずかしい思いをしました。" },
  { word: "embarrassing", meaning: "恥ずかしい", pos: "形容詞", example: "It was an embarrassing mistake.", example_jp: "それは恥ずかしい間違いでした。" },

  { word: "frightened", meaning: "おびえている", pos: "形容詞", example: "The child was frightened by the noise.", example_jp: "その子どもは物音におびえました。" },
  { word: "frightening", meaning: "恐ろしい", pos: "形容詞", example: "It was a frightening story.", example_jp: "それは恐ろしい話でした。" },

  { word: "shocked", meaning: "ショックを受けている", pos: "形容詞", example: "We were shocked by the news.", example_jp: "私たちはその知らせにショックを受けました。" },
  { word: "shocking", meaning: "衝撃的な", pos: "形容詞", example: "It was a shocking event.", example_jp: "それは衝撃的な出来事でした。" },

  { word: "annoyed", meaning: "いらいらしている", pos: "形容詞", example: "He was annoyed by the noise.", example_jp: "彼はその騒音にいらいらしていました。" },
  { word: "annoying", meaning: "いらいらさせる", pos: "形容詞", example: "This sound is annoying.", example_jp: "この音はいらいらします。" },

  { word: "confused", meaning: "混乱している", pos: "形容詞", example: "I felt confused by the question.", example_jp: "私はその質問に混乱しました。" },
  { word: "confusing", meaning: "わかりにくい、混乱させる", pos: "形容詞", example: "The instructions were confusing.", example_jp: "その説明はわかりにくかったです。" },

  { word: "excited", meaning: "わくわくしている", pos: "形容詞", example: "The children were excited about the trip.", example_jp: "子どもたちはその旅行にわくわくしていました。" },
  { word: "exciting", meaning: "わくわくさせる", pos: "形容詞", example: "It was an exciting game.", example_jp: "それはわくわくする試合でした。" },

  { word: "interested", meaning: "興味がある", pos: "形容詞", example: "He is interested in science.", example_jp: "彼は科学に興味があります。" },
  { word: "interesting", meaning: "興味深い、おもしろい", pos: "形容詞", example: "This story is very interesting.", example_jp: "この話はとてもおもしろいです。" },

  { word: "tired", meaning: "疲れている", pos: "形容詞", example: "I am tired after school.", example_jp: "私は放課後疲れています。" },
  { word: "tiring", meaning: "疲れさせる", pos: "形容詞", example: "The long walk was tiring.", example_jp: "その長い散歩は疲れるものでした。" },

  { word: "surprised", meaning: "驚いている", pos: "形容詞", example: "She was surprised at the answer.", example_jp: "彼女はその答えに驚きました。" },
  { word: "surprising", meaning: "驚くべき", pos: "形容詞", example: "It was a surprising decision.", example_jp: "それは驚くべき決定でした。" },

  { word: "worried", meaning: "心配している", pos: "形容詞", example: "He is worried about the test.", example_jp: "彼はそのテストを心配しています。" },
  { word: "worrying", meaning: "心配させる", pos: "形容詞", example: "The news is worrying.", example_jp: "その知らせは心配です。" },

  { word: "pleased", meaning: "うれしい、満足している", pos: "形容詞", example: "She was pleased with her score.", example_jp: "彼女は自分の点数に満足していました。" },
  { word: "pleasing", meaning: "人を喜ばせる、感じのよい", pos: "形容詞", example: "The color is pleasing to the eye.", example_jp: "その色は見ていて心地よいです。" },

  { word: "amazed", meaning: "びっくりしている", pos: "形容詞", example: "I was amazed by his skill.", example_jp: "私は彼の技術に驚きました。" },
  { word: "amazing", meaning: "驚くほどすばらしい", pos: "形容詞", example: "It was an amazing view.", example_jp: "それは驚くほどすばらしい景色でした。" },

  { word: "satisfied", meaning: "満足している", pos: "形容詞", example: "They were satisfied with the meal.", example_jp: "彼らはその食事に満足していました。" },
  { word: "satisfying", meaning: "満足させる", pos: "形容詞", example: "It was a satisfying result.", example_jp: "それは満足のいく結果でした。" },

  { word: "bored", meaning: "退屈している", pos: "形容詞", example: "I felt bored at home.", example_jp: "私は家で退屈していました。" },
  { word: "boring", meaning: "退屈な", pos: "形容詞", example: "The class was boring.", example_jp: "その授業は退屈でした。" },
];