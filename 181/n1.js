const noun1 = [

{ word: "book", meaning: "本", pos: "名詞", forms: [
  { name: "単数形", word: "book", ex: "This book is interesting.", jp: "この本はおもしろいです。" },
  { name: "複数形", word: "books", ex: "These books are interesting.", jp: "これらの本はおもしろいです。" }
] },

{ word: "pen", meaning: "ペン", pos: "名詞", forms: [
  { name: "単数形", word: "pen", ex: "I have a pen.", jp: "私はペンを1本持っています。" },
  { name: "複数形", word: "pens", ex: "I have many pens.", jp: "私はたくさんのペンを持っています。" }
] },

{ word: "desk", meaning: "机", pos: "名詞", forms: [
  { name: "単数形", word: "desk", ex: "The desk is clean.", jp: "その机はきれいです。" },
  { name: "複数形", word: "desks", ex: "The desks are clean.", jp: "それらの机はきれいです。" }
] },

{ word: "chair", meaning: "いす", pos: "名詞", forms: [
  { name: "単数形", word: "chair", ex: "This chair is comfortable.", jp: "このいすは座り心地がよいです。" },
  { name: "複数形", word: "chairs", ex: "These chairs are comfortable.", jp: "これらのいすは座り心地がよいです." }
] },

{ word: "table", meaning: "テーブル", pos: "名詞", forms: [
  { name: "単数形", word: "table", ex: "The table is round.", jp: "そのテーブルは丸いです。" },
  { name: "複数形", word: "tables", ex: "The tables are round.", jp: "それらのテーブルは丸いです。" }
] },

{ word: "bag", meaning: "かばん", pos: "名詞", forms: [
  { name: "単数形", word: "bag", ex: "My bag is heavy.", jp: "私のかばんは重いです。" },
  { name: "複数形", word: "bags", ex: "Their bags are heavy.", jp: "彼らのかばんは重いです。" }
] },

{ word: "box", meaning: "箱", pos: "名詞", forms: [
  { name: "単数形", word: "box", ex: "The box is on the floor.", jp: "その箱は床の上にあります。" },
  { name: "複数形", word: "boxes", ex: "The boxes are on the floor.", jp: "それらの箱は床の上にあります。" }
] },

{ word: "watch", meaning: "腕時計", pos: "名詞", forms: [
  { name: "単数形", word: "watch", ex: "This watch is expensive.", jp: "この腕時計は高価です。" },
  { name: "複数形", word: "watches", ex: "These watches are expensive.", jp: "これらの腕時計は高価です。" }
] },

{ word: "dish", meaning: "皿", pos: "名詞", forms: [
  { name: "単数形", word: "dish", ex: "The dish is dirty.", jp: "その皿は汚れています。" },
  { name: "複数形", word: "dishes", ex: "The dishes are dirty.", jp: "それらの皿は汚れています。" }
] },

{ word: "bus", meaning: "バス", pos: "名詞", forms: [
  { name: "単数形", word: "bus", ex: "The bus is late.", jp: "そのバスは遅れています。" },
  { name: "複数形", word: "buses", ex: "The buses are late.", jp: "それらのバスは遅れています。" }
] },

{ word: "city", meaning: "都市", pos: "名詞", forms: [
  { name: "単数形", word: "city", ex: "This city is beautiful.", jp: "この都市は美しいです。" },
  { name: "複数形", word: "cities", ex: "These cities are beautiful.", jp: "これらの都市は美しいです。" }
] },

{ word: "baby", meaning: "赤ちゃん", pos: "名詞", forms: [
  { name: "単数形", word: "baby", ex: "The baby is sleeping.", jp: "その赤ちゃんは眠っています。" },
  { name: "複数形", word: "babies", ex: "The babies are sleeping.", jp: "その赤ちゃんたちは眠っています。" }
] },

{ word: "toy", meaning: "おもちゃ", pos: "名詞", forms: [
  { name: "単数形", word: "toy", ex: "This toy is cute.", jp: "このおもちゃはかわいいです。" },
  { name: "複数形", word: "toys", ex: "These toys are cute.", jp: "これらのおもちゃはかわいいです。" }
] },

{ word: "key", meaning: "鍵", pos: "名詞", forms: [
  { name: "単数形", word: "key", ex: "I found a key.", jp: "私は鍵を1つ見つけました。" },
  { name: "複数形", word: "keys", ex: "I found some keys.", jp: "私はいくつか鍵を見つけました。" }
] },

{ word: "leaf", meaning: "葉", pos: "名詞", forms: [
  { name: "単数形", word: "leaf", ex: "A leaf fell from the tree.", jp: "葉が1枚木から落ちました。" },
  { name: "複数形", word: "leaves", ex: "Leaves fell from the tree.", jp: "葉が木から落ちました。" }
] },

{ word: "knife", meaning: "ナイフ", pos: "名詞", forms: [
  { name: "単数形", word: "knife", ex: "The knife is sharp.", jp: "そのナイフは鋭いです。" },
  { name: "複数形", word: "knives", ex: "The knives are sharp.", jp: "それらのナイフは鋭いです。" }
] },

{ word: "child", meaning: "子ども", pos: "名詞", forms: [
  { name: "単数形", word: "child", ex: "The child is playing outside.", jp: "その子どもは外で遊んでいます。" },
  { name: "複数形", word: "children", ex: "The children are playing outside.", jp: "その子どもたちは外で遊んでいます。" }
] },

{ word: "man", meaning: "男性", pos: "名詞", forms: [
  { name: "単数形", word: "man", ex: "The man is my teacher.", jp: "その男性は私の先生です。" },
  { name: "複数形", word: "men", ex: "The men are my teachers.", jp: "その男性たちは私の先生です。" }
] },

{ word: "woman", meaning: "女性", pos: "名詞", forms: [
  { name: "単数形", word: "woman", ex: "The woman is kind.", jp: "その女性は親切です。" },
  { name: "複数形", word: "women", ex: "The women are kind.", jp: "その女性たちは親切です。" }
] },

{ word: "person", meaning: "人", pos: "名詞", forms: [
  { name: "単数形", word: "person", ex: "One person is waiting outside.", jp: "1人の人が外で待っています。" },
  { name: "複数形", word: "people", ex: "Many people are waiting outside.", jp: "多くの人が外で待っています。" }
] },

{ word: "student", meaning: "学生", pos: "名詞", forms: [
  { name: "単数形", word: "student", ex: "The student is reading a book.", jp: "その学生は本を読んでいます。" },
  { name: "複数形", word: "students", ex: "The students are reading books.", jp: "その学生たちは本を読んでいます。" }
] },

{ word: "teacher", meaning: "先生", pos: "名詞", forms: [
  { name: "単数形", word: "teacher", ex: "The teacher is in the classroom.", jp: "その先生は教室にいます。" },
  { name: "複数形", word: "teachers", ex: "The teachers are in the classroom.", jp: "その先生たちは教室にいます。" }
] },

{ word: "doctor", meaning: "医者", pos: "名詞", forms: [
  { name: "単数形", word: "doctor", ex: "The doctor is very busy today.", jp: "その医者は今日はとても忙しいです。" },
  { name: "複数形", word: "doctors", ex: "The doctors are very busy today.", jp: "その医者たちは今日はとても忙しいです。" }
] },

{ word: "nurse", meaning: "看護師", pos: "名詞", forms: [
  { name: "単数形", word: "nurse", ex: "The nurse helped the patient.", jp: "その看護師は患者を助けました。" },
  { name: "複数形", word: "nurses", ex: "The nurses helped the patients.", jp: "その看護師たちは患者たちを助けました。" }
] },

{ word: "driver", meaning: "運転手", pos: "名詞", forms: [
  { name: "単数形", word: "driver", ex: "The driver stopped the bus.", jp: "その運転手はバスを止めました。" },
  { name: "複数形", word: "drivers", ex: "The drivers stopped the buses.", jp: "その運転手たちはバスを止めました。" }
] },

{ word: "farmer", meaning: "農家", pos: "名詞", forms: [
  { name: "単数形", word: "farmer", ex: "The farmer grows rice.", jp: "その農家は米を育てています。" },
  { name: "複数形", word: "farmers", ex: "The farmers grow rice.", jp: "その農家の人たちは米を育てています。" }
] },

{ word: "cook", meaning: "料理人", pos: "名詞", forms: [
  { name: "単数形", word: "cook", ex: "The cook made a delicious meal.", jp: "その料理人はおいしい食事を作りました。" },
  { name: "複数形", word: "cooks", ex: "The cooks made delicious meals.", jp: "その料理人たちはおいしい食事を作りました。" }
] },

{ word: "artist", meaning: "芸術家", pos: "名詞", forms: [
  { name: "単数形", word: "artist", ex: "The artist painted a picture.", jp: "その芸術家は絵を描きました。" },
  { name: "複数形", word: "artists", ex: "The artists painted pictures.", jp: "その芸術家たちは絵を描きました。" }
] },

{ word: "writer", meaning: "作家", pos: "名詞", forms: [
  { name: "単数形", word: "writer", ex: "The writer published a new novel.", jp: "その作家は新しい小説を出版しました。" },
  { name: "複数形", word: "writers", ex: "The writers published new novels.", jp: "その作家たちは新しい小説を出版しました。" }
] },

{ word: "player", meaning: "選手", pos: "名詞", forms: [
  { name: "単数形", word: "player", ex: "The player scored a goal.", jp: "その選手はゴールを決めました。" },
  { name: "複数形", word: "players", ex: "The players scored many goals.", jp: "その選手たちはたくさんゴールを決めました。" }
] },

{ word: "friend", meaning: "友だち", pos: "名詞", forms: [
  { name: "単数形", word: "friend", ex: "My friend lives in Osaka.", jp: "私の友だちは大阪に住んでいます。" },
  { name: "複数形", word: "friends", ex: "My friends live in Osaka.", jp: "私の友だちは大阪に住んでいます。" }
] },

{ word: "neighbor", meaning: "近所の人", pos: "名詞", forms: [
  { name: "単数形", word: "neighbor", ex: "My neighbor is very kind.", jp: "私の近所の人はとても親切です。" },
  { name: "複数形", word: "neighbors", ex: "My neighbors are very kind.", jp: "私の近所の人たちはとても親切です。" }
] },

{ word: "customer", meaning: "客", pos: "名詞", forms: [
  { name: "単数形", word: "customer", ex: "The customer asked a question.", jp: "その客は質問をしました。" },
  { name: "複数形", word: "customers", ex: "The customers asked many questions.", jp: "その客たちはたくさん質問をしました。" }
] },

{ word: "guest", meaning: "客、招待客", pos: "名詞", forms: [
  { name: "単数形", word: "guest", ex: "The guest arrived early.", jp: "そのお客さんは早く到着しました。" },
  { name: "複数形", word: "guests", ex: "The guests arrived early.", jp: "そのお客さんたちは早く到着しました。" }
] },

{ word: "visitor", meaning: "訪問者", pos: "名詞", forms: [
  { name: "単数形", word: "visitor", ex: "A visitor came to the office.", jp: "1人の訪問者が会社に来ました。" },
  { name: "複数形", word: "visitors", ex: "Many visitors came to the office.", jp: "多くの訪問者が会社に来ました。" }
] },

{ word: "baby", meaning: "赤ちゃん", pos: "名詞", forms: [
  { name: "単数形", word: "baby", ex: "The baby is smiling.", jp: "その赤ちゃんはほほえんでいます。" },
  { name: "複数形", word: "babies", ex: "The babies are smiling.", jp: "その赤ちゃんたちはほほえんでいます。" }
] },

{ word: "boy", meaning: "男の子", pos: "名詞", forms: [
  { name: "単数形", word: "boy", ex: "The boy is running in the park.", jp: "その男の子は公園で走っています。" },
  { name: "複数形", word: "boys", ex: "The boys are running in the park.", jp: "その男の子たちは公園で走っています。" }
] },

{ word: "girl", meaning: "女の子", pos: "名詞", forms: [
  { name: "単数形", word: "girl", ex: "The girl is singing a song.", jp: "その女の子は歌を歌っています。" },
  { name: "複数形", word: "girls", ex: "The girls are singing songs.", jp: "その女の子たちは歌を歌っています。" }
] },

{ word: "parent", meaning: "親", pos: "名詞", forms: [
  { name: "単数形", word: "parent", ex: "The parent came to the school.", jp: "その親は学校に来ました。" },
  { name: "複数形", word: "parents", ex: "The parents came to the school.", jp: "その親たちは学校に来ました。" }
] },

{ word: "family", meaning: "家族", pos: "名詞", forms: [
  { name: "単数形", word: "family", ex: "My family is very large.", jp: "私の家族はとても大きいです。" },
  { name: "複数形", word: "families", ex: "Many families live in this town.", jp: "多くの家族がこの町に住んでいます。" }
] },

{ word: "father", meaning: "父", pos: "名詞", forms: [
  { name: "単数形", word: "father", ex: "My father works in Tokyo.", jp: "私の父は東京で働いています。" },
  { name: "複数形", word: "fathers", ex: "Many fathers joined the event.", jp: "多くの父親たちがその行事に参加しました。" }
] },

{ word: "mother", meaning: "母", pos: "名詞", forms: [
  { name: "単数形", word: "mother", ex: "My mother is cooking dinner.", jp: "私の母は夕食を作っています。" },
  { name: "複数形", word: "mothers", ex: "The mothers are talking in the park.", jp: "その母親たちは公園で話しています。" }
] },

{ word: "brother", meaning: "兄、弟", pos: "名詞", forms: [
  { name: "単数形", word: "brother", ex: "My brother plays soccer.", jp: "私の兄（弟）はサッカーをします。" },
  { name: "複数形", word: "brothers", ex: "The brothers play soccer together.", jp: "その兄弟は一緒にサッカーをします。" }
] },

{ word: "sister", meaning: "姉、妹", pos: "名詞", forms: [
  { name: "単数形", word: "sister", ex: "My sister likes music.", jp: "私の姉（妹）は音楽が好きです。" },
  { name: "複数形", word: "sisters", ex: "The sisters like music.", jp: "その姉妹は音楽が好きです。" }
] },

{ word: "son", meaning: "息子", pos: "名詞", forms: [
  { name: "単数形", word: "son", ex: "Their son is very cheerful.", jp: "彼らの息子はとても元気です。" },
  { name: "複数形", word: "sons", ex: "Their sons are very cheerful.", jp: "彼らの息子たちはとても元気です。" }
] },

{ word: "daughter", meaning: "娘", pos: "名詞", forms: [
  { name: "単数形", word: "daughter", ex: "Her daughter is studying English.", jp: "彼女の娘は英語を勉強しています。" },
  { name: "複数形", word: "daughters", ex: "Her daughters are studying English.", jp: "彼女の娘たちは英語を勉強しています。" }
] },

{ word: "uncle", meaning: "おじ", pos: "名詞", forms: [
  { name: "単数形", word: "uncle", ex: "My uncle lives in Kyoto.", jp: "私のおじは京都に住んでいます。" },
  { name: "複数形", word: "uncles", ex: "My uncles live in Kyoto.", jp: "私のおじたちは京都に住んでいます。" }
] },

{ word: "aunt", meaning: "おば", pos: "名詞", forms: [
  { name: "単数形", word: "aunt", ex: "My aunt sent me a gift.", jp: "私のおばは私に贈り物を送ってくれました。" },
  { name: "複数形", word: "aunts", ex: "My aunts sent me gifts.", jp: "私のおばたちは私に贈り物を送ってくれました。" }
] },

{ word: "cousin", meaning: "いとこ", pos: "名詞", forms: [
  { name: "単数形", word: "cousin", ex: "My cousin visits us every summer.", jp: "私のいとこは毎年夏に私たちを訪ねます。" },
  { name: "複数形", word: "cousins", ex: "My cousins visit us every summer.", jp: "私のいとこたちは毎年夏に私たちを訪ねます。" }
] },

{ word: "grandfather", meaning: "祖父", pos: "名詞", forms: [
  { name: "単数形", word: "grandfather", ex: "My grandfather tells interesting stories.", jp: "私の祖父はおもしろい話をしてくれます。" },
  { name: "複数形", word: "grandfathers", ex: "The grandfathers sat on the bench.", jp: "その祖父たちはベンチに座っていました。" }
] },

{ word: "grandmother", meaning: "祖母", pos: "名詞", forms: [
  { name: "単数形", word: "grandmother", ex: "My grandmother bakes delicious cookies.", jp: "私の祖母はおいしいクッキーを焼きます。" },
  { name: "複数形", word: "grandmothers", ex: "The grandmothers were very kind.", jp: "その祖母たちはとても親切でした。" }
] },

{ word: "husband", meaning: "夫", pos: "名詞", forms: [
  { name: "単数形", word: "husband", ex: "Her husband works at a bank.", jp: "彼女の夫は銀行で働いています。" },
  { name: "複数形", word: "husbands", ex: "The husbands prepared dinner.", jp: "その夫たちは夕食を準備しました。" }
] },

{ word: "wife", meaning: "妻", pos: "名詞", forms: [
  { name: "単数形", word: "wife", ex: "His wife is a doctor.", jp: "彼の妻は医者です。" },
  { name: "複数形", word: "wives", ex: "The wives joined the meeting.", jp: "その妻たちは会合に参加しました。" }
] },

{ word: "couple", meaning: "夫婦、カップル", pos: "名詞", forms: [
  { name: "単数形", word: "couple", ex: "The couple walked by the river.", jp: "その夫婦は川のそばを歩きました。" },
  { name: "複数形", word: "couples", ex: "Many couples visited the park.", jp: "多くのカップルがその公園を訪れました。" }
] },

{ word: "baby", meaning: "赤ちゃん", pos: "名詞", forms: [
  { name: "単数形", word: "baby", ex: "The baby is sleeping quietly.", jp: "その赤ちゃんは静かに眠っています。" },
  { name: "複数形", word: "babies", ex: "The babies are sleeping quietly.", jp: "その赤ちゃんたちは静かに眠っています。" }
] },

{ word: "child", meaning: "子ども", pos: "名詞", forms: [
  { name: "単数形", word: "child", ex: "The child is drawing a picture.", jp: "その子どもは絵を描いています。" },
  { name: "複数形", word: "children", ex: "The children are drawing pictures.", jp: "その子どもたちは絵を描いています。" }
] },

{ word: "teenager", meaning: "10代の若者", pos: "名詞", forms: [
  { name: "単数形", word: "teenager", ex: "The teenager uses a smartphone a lot.", jp: "その10代の若者はスマートフォンをよく使います。" },
  { name: "複数形", word: "teenagers", ex: "The teenagers use smartphones a lot.", jp: "その10代の若者たちはスマートフォンをよく使います。" }
] },

{ word: "adult", meaning: "大人", pos: "名詞", forms: [
  { name: "単数形", word: "adult", ex: "An adult must buy a ticket.", jp: "大人はチケットを買わなければなりません。" },
  { name: "複数形", word: "adults", ex: "Adults must buy tickets.", jp: "大人たちはチケットを買わなければなりません。" }
] },

{ word: "friend", meaning: "友だち", pos: "名詞", forms: [
  { name: "単数形", word: "friend", ex: "My friend called me last night.", jp: "私の友だちは昨夜私に電話しました。" },
  { name: "複数形", word: "friends", ex: "My friends called me last night.", jp: "私の友だちは昨夜私に電話しました。" }
] },

{ word: "neighbor", meaning: "近所の人", pos: "名詞", forms: [
  { name: "単数形", word: "neighbor", ex: "My neighbor has a cute dog.", jp: "私の近所の人はかわいい犬を飼っています。" },
  { name: "複数形", word: "neighbors", ex: "My neighbors have cute dogs.", jp: "私の近所の人たちはかわいい犬を飼っています。" }
] },

{ word: "father", meaning: "父", pos: "名詞", forms: [
  { name: "単数形", word: "father", ex: "My father works in Tokyo.", jp: "私の父は東京で働いています。" },
  { name: "複数形", word: "fathers", ex: "Many fathers joined the event.", jp: "多くの父親たちがその行事に参加しました。" }
] },

{ word: "mother", meaning: "母", pos: "名詞", forms: [
  { name: "単数形", word: "mother", ex: "My mother is cooking dinner.", jp: "私の母は夕食を作っています。" },
  { name: "複数形", word: "mothers", ex: "The mothers are talking in the park.", jp: "その母親たちは公園で話しています。" }
] },

{ word: "brother", meaning: "兄、弟", pos: "名詞", forms: [
  { name: "単数形", word: "brother", ex: "My brother plays soccer.", jp: "私の兄（弟）はサッカーをします。" },
  { name: "複数形", word: "brothers", ex: "The brothers play soccer together.", jp: "その兄弟は一緒にサッカーをします。" }
] },

{ word: "sister", meaning: "姉、妹", pos: "名詞", forms: [
  { name: "単数形", word: "sister", ex: "My sister likes music.", jp: "私の姉（妹）は音楽が好きです。" },
  { name: "複数形", word: "sisters", ex: "The sisters like music.", jp: "その姉妹は音楽が好きです。" }
] },

{ word: "son", meaning: "息子", pos: "名詞", forms: [
  { name: "単数形", word: "son", ex: "Their son is very cheerful.", jp: "彼らの息子はとても元気です。" },
  { name: "複数形", word: "sons", ex: "Their sons are very cheerful.", jp: "彼らの息子たちはとても元気です。" }
] },

{ word: "daughter", meaning: "娘", pos: "名詞", forms: [
  { name: "単数形", word: "daughter", ex: "Her daughter is studying English.", jp: "彼女の娘は英語を勉強しています。" },
  { name: "複数形", word: "daughters", ex: "Her daughters are studying English.", jp: "彼女の娘たちは英語を勉強しています。" }
] },

{ word: "uncle", meaning: "おじ", pos: "名詞", forms: [
  { name: "単数形", word: "uncle", ex: "My uncle lives in Kyoto.", jp: "私のおじは京都に住んでいます。" },
  { name: "複数形", word: "uncles", ex: "My uncles live in Kyoto.", jp: "私のおじたちは京都に住んでいます。" }
] },

{ word: "aunt", meaning: "おば", pos: "名詞", forms: [
  { name: "単数形", word: "aunt", ex: "My aunt sent me a gift.", jp: "私のおばは私に贈り物を送ってくれました。" },
  { name: "複数形", word: "aunts", ex: "My aunts sent me gifts.", jp: "私のおばたちは私に贈り物を送ってくれました。" }
] },

{ word: "cousin", meaning: "いとこ", pos: "名詞", forms: [
  { name: "単数形", word: "cousin", ex: "My cousin visits us every summer.", jp: "私のいとこは毎年夏に私たちを訪ねます。" },
  { name: "複数形", word: "cousins", ex: "My cousins visit us every summer.", jp: "私のいとこたちは毎年夏に私たちを訪ねます。" }
] },

{ word: "grandfather", meaning: "祖父", pos: "名詞", forms: [
  { name: "単数形", word: "grandfather", ex: "My grandfather tells interesting stories.", jp: "私の祖父はおもしろい話をしてくれます。" },
  { name: "複数形", word: "grandfathers", ex: "The grandfathers sat on the bench.", jp: "その祖父たちはベンチに座っていました。" }
] },

{ word: "grandmother", meaning: "祖母", pos: "名詞", forms: [
  { name: "単数形", word: "grandmother", ex: "My grandmother bakes delicious cookies.", jp: "私の祖母はおいしいクッキーを焼きます。" },
  { name: "複数形", word: "grandmothers", ex: "The grandmothers were very kind.", jp: "その祖母たちはとても親切でした。" }
] },

{ word: "husband", meaning: "夫", pos: "名詞", forms: [
  { name: "単数形", word: "husband", ex: "Her husband works at a bank.", jp: "彼女の夫は銀行で働いています。" },
  { name: "複数形", word: "husbands", ex: "The husbands prepared dinner.", jp: "その夫たちは夕食を準備しました。" }
] },

{ word: "wife", meaning: "妻", pos: "名詞", forms: [
  { name: "単数形", word: "wife", ex: "His wife is a doctor.", jp: "彼の妻は医者です。" },
  { name: "複数形", word: "wives", ex: "The wives joined the meeting.", jp: "その妻たちは会合に参加しました。" }
] },

{ word: "couple", meaning: "夫婦、カップル", pos: "名詞", forms: [
  { name: "単数形", word: "couple", ex: "The couple walked by the river.", jp: "その夫婦は川のそばを歩きました。" },
  { name: "複数形", word: "couples", ex: "Many couples visited the park.", jp: "多くのカップルがその公園を訪れました。" }
] },

{ word: "baby", meaning: "赤ちゃん", pos: "名詞", forms: [
  { name: "単数形", word: "baby", ex: "The baby is sleeping quietly.", jp: "その赤ちゃんは静かに眠っています。" },
  { name: "複数形", word: "babies", ex: "The babies are sleeping quietly.", jp: "その赤ちゃんたちは静かに眠っています。" }
] },

{ word: "child", meaning: "子ども", pos: "名詞", forms: [
  { name: "単数形", word: "child", ex: "The child is drawing a picture.", jp: "その子どもは絵を描いています。" },
  { name: "複数形", word: "children", ex: "The children are drawing pictures.", jp: "その子どもたちは絵を描いています。" }
] },

{ word: "teenager", meaning: "10代の若者", pos: "名詞", forms: [
  { name: "単数形", word: "teenager", ex: "The teenager uses a smartphone a lot.", jp: "その10代の若者はスマートフォンをよく使います。" },
  { name: "複数形", word: "teenagers", ex: "The teenagers use smartphones a lot.", jp: "その10代の若者たちはスマートフォンをよく使います。" }
] },

{ word: "adult", meaning: "大人", pos: "名詞", forms: [
  { name: "単数形", word: "adult", ex: "An adult must buy a ticket.", jp: "大人はチケットを買わなければなりません。" },
  { name: "複数形", word: "adults", ex: "Adults must buy tickets.", jp: "大人たちはチケットを買わなければなりません。" }
] },

{ word: "friend", meaning: "友だち", pos: "名詞", forms: [
  { name: "単数形", word: "friend", ex: "My friend called me last night.", jp: "私の友だちは昨夜私に電話しました。" },
  { name: "複数形", word: "friends", ex: "My friends called me last night.", jp: "私の友だちは昨夜私に電話しました。" }
] },

{ word: "neighbor", meaning: "近所の人", pos: "名詞", forms: [
  { name: "単数形", word: "neighbor", ex: "My neighbor has a cute dog.", jp: "私の近所の人はかわいい犬を飼っています。" },
  { name: "複数形", word: "neighbors", ex: "My neighbors have cute dogs.", jp: "私の近所の人たちはかわいい犬を飼っています。" }
] },

{ word: "school", meaning: "学校", pos: "名詞", forms: [
  { name: "単数形", word: "school", ex: "The school is near my house.", jp: "その学校は私の家の近くにあります。" },
  { name: "複数形", word: "schools", ex: "There are many schools in this city.", jp: "この町にはたくさんの学校があります。" }
] },

{ word: "class", meaning: "授業、クラス", pos: "名詞", forms: [
  { name: "単数形", word: "class", ex: "My class starts at nine.", jp: "私の授業は9時に始まります。" },
  { name: "複数形", word: "classes", ex: "Her classes are very interesting.", jp: "彼女の授業はとてもおもしろいです。" }
] },

{ word: "lesson", meaning: "授業、レッスン", pos: "名詞", forms: [
  { name: "単数形", word: "lesson", ex: "Today's lesson was easy.", jp: "今日の授業は簡単でした。" },
  { name: "複数形", word: "lessons", ex: "English lessons are fun.", jp: "英語の授業は楽しいです。" }
] },

{ word: "subject", meaning: "教科", pos: "名詞", forms: [
  { name: "単数形", word: "subject", ex: "Math is my favorite subject.", jp: "数学は私の好きな教科です。" },
  { name: "複数形", word: "subjects", ex: "We study many subjects at school.", jp: "私たちは学校で多くの教科を勉強します。" }
] },

{ word: "student", meaning: "学生、生徒", pos: "名詞", forms: [
  { name: "単数形", word: "student", ex: "The student asked a question.", jp: "その生徒は質問をしました。" },
  { name: "複数形", word: "students", ex: "The students asked many questions.", jp: "その生徒たちはたくさん質問をしました。" }
] },

{ word: "teacher", meaning: "先生", pos: "名詞", forms: [
  { name: "単数形", word: "teacher", ex: "The teacher wrote on the board.", jp: "その先生は黒板に書きました。" },
  { name: "複数形", word: "teachers", ex: "The teachers are in the office.", jp: "その先生たちは職員室にいます。" }
] },

{ word: "classroom", meaning: "教室", pos: "名詞", forms: [
  { name: "単数形", word: "classroom", ex: "The classroom is clean.", jp: "その教室はきれいです。" },
  { name: "複数形", word: "classrooms", ex: "The classrooms are clean.", jp: "その教室はきれいです。" }
] },

{ word: "desk", meaning: "机", pos: "名詞", forms: [
  { name: "単数形", word: "desk", ex: "My desk is by the window.", jp: "私の机は窓のそばにあります。" },
  { name: "複数形", word: "desks", ex: "The desks are arranged in rows.", jp: "机は列に並べられています。" }
] },

{ word: "chair", meaning: "いす", pos: "名詞", forms: [
  { name: "単数形", word: "chair", ex: "This chair is broken.", jp: "このいすは壊れています。" },
  { name: "複数形", word: "chairs", ex: "These chairs are new.", jp: "これらのいすは新しいです。" }
] },

{ word: "book", meaning: "本", pos: "名詞", forms: [
  { name: "単数形", word: "book", ex: "This book is useful.", jp: "この本は役に立ちます。" },
  { name: "複数形", word: "books", ex: "These books are useful.", jp: "これらの本は役に立ちます。" }
] },

{ word: "notebook", meaning: "ノート", pos: "名詞", forms: [
  { name: "単数形", word: "notebook", ex: "I bought a new notebook.", jp: "私は新しいノートを買いました。" },
  { name: "複数形", word: "notebooks", ex: "I bought two notebooks.", jp: "私はノートを2冊買いました。" }
] },

{ word: "dictionary", meaning: "辞書", pos: "名詞", forms: [
  { name: "単数形", word: "dictionary", ex: "This dictionary is very helpful.", jp: "この辞書はとても役に立ちます。" },
  { name: "複数形", word: "dictionaries", ex: "These dictionaries are very helpful.", jp: "これらの辞書はとても役に立ちます。" }
] },

{ word: "question", meaning: "質問", pos: "名詞", forms: [
  { name: "単数形", word: "question", ex: "I have a question.", jp: "私は質問があります。" },
  { name: "複数形", word: "questions", ex: "We have many questions.", jp: "私たちにはたくさん質問があります。" }
] },

{ word: "answer", meaning: "答え", pos: "名詞", forms: [
  { name: "単数形", word: "answer", ex: "Her answer was correct.", jp: "彼女の答えは正しかったです。" },
  { name: "複数形", word: "answers", ex: "Their answers were correct.", jp: "彼らの答えは正しかったです。" }
] },

{ word: "test", meaning: "テスト", pos: "名詞", forms: [
  { name: "単数形", word: "test", ex: "The test was difficult.", jp: "そのテストは難しかったです。" },
  { name: "複数形", word: "tests", ex: "The tests were difficult.", jp: "それらのテストは難しかったです。" }
] },

{ word: "exam", meaning: "試験", pos: "名詞", forms: [
  { name: "単数形", word: "exam", ex: "The exam starts tomorrow.", jp: "その試験は明日始まります。" },
  { name: "複数形", word: "exams", ex: "The exams start tomorrow.", jp: "その試験は明日始まります。" }
] },

{ word: "grade", meaning: "成績、学年", pos: "名詞", forms: [
  { name: "単数形", word: "grade", ex: "I got a good grade.", jp: "私はよい成績を取りました。" },
  { name: "複数形", word: "grades", ex: "She always gets good grades.", jp: "彼女はいつもよい成績を取ります。" }
] },

{ word: "homework", meaning: "宿題", pos: "名詞", forms: [
  { name: "単数形", word: "homework", ex: "My homework is not finished.", jp: "私の宿題は終わっていません。" },
  { name: "複数形", word: "homework", ex: "We had a lot of homework this week.", jp: "私たちは今週たくさんの宿題がありました。" }
] },

{ word: "project", meaning: "課題、プロジェクト", pos: "名詞", forms: [
  { name: "単数形", word: "project", ex: "This project is important.", jp: "この課題は重要です。" },
  { name: "複数形", word: "projects", ex: "These projects are important.", jp: "これらの課題は重要です。" }
] },

{ word: "library", meaning: "図書館", pos: "名詞", forms: [
  { name: "単数形", word: "library", ex: "The library is quiet.", jp: "その図書館は静かです。" },
  { name: "複数形", word: "libraries", ex: "The city has several libraries.", jp: "その町にはいくつか図書館があります。" }
] },

{ word: "office", meaning: "事務所、オフィス", pos: "名詞", forms: [
  { name: "単数形", word: "office", ex: "The office is on the third floor.", jp: "その事務所は3階にあります。" },
  { name: "複数形", word: "offices", ex: "The company has offices in many cities.", jp: "その会社はいろいろな都市に事務所があります." }
] },

{ word: "company", meaning: "会社", pos: "名詞", forms: [
  { name: "単数形", word: "company", ex: "The company makes computers.", jp: "その会社はコンピューターを作っています。" },
  { name: "複数形", word: "companies", ex: "Many companies joined the event.", jp: "多くの会社がそのイベントに参加しました。" }
] },

{ word: "job", meaning: "仕事", pos: "名詞", forms: [
  { name: "単数形", word: "job", ex: "He found a new job.", jp: "彼は新しい仕事を見つけました。" },
  { name: "複数形", word: "jobs", ex: "There are many jobs in this city.", jp: "この町にはたくさんの仕事があります。" }
] },

{ word: "worker", meaning: "労働者、作業員", pos: "名詞", forms: [
  { name: "単数形", word: "worker", ex: "The worker fixed the machine.", jp: "その作業員は機械を修理しました。" },
  { name: "複数形", word: "workers", ex: "The workers fixed the machines.", jp: "その作業員たちは機械を修理しました。" }
] },

{ word: "manager", meaning: "管理者、部長", pos: "名詞", forms: [
  { name: "単数形", word: "manager", ex: "The manager called a meeting.", jp: "その部長は会議を開きました。" },
  { name: "複数形", word: "managers", ex: "The managers called meetings.", jp: "その管理者たちは会議を開きました。" }
] },

{ word: "boss", meaning: "上司", pos: "名詞", forms: [
  { name: "単数形", word: "boss", ex: "My boss is very strict.", jp: "私の上司はとても厳しいです。" },
  { name: "複数形", word: "bosses", ex: "Their bosses are very strict.", jp: "彼らの上司たちはとても厳しいです。" }
] },

{ word: "meeting", meaning: "会議", pos: "名詞", forms: [
  { name: "単数形", word: "meeting", ex: "The meeting starts at ten.", jp: "その会議は10時に始まります。" },
  { name: "複数形", word: "meetings", ex: "We have many meetings today.", jp: "私たちは今日たくさん会議があります。" }
] },

{ word: "report", meaning: "報告書", pos: "名詞", forms: [
  { name: "単数形", word: "report", ex: "I finished the report.", jp: "私はその報告書を仕上げました。" },
  { name: "複数形", word: "reports", ex: "She finished the reports.", jp: "彼女はそれらの報告書を仕上げました。" }
] },

{ word: "email", meaning: "メール", pos: "名詞", forms: [
  { name: "単数形", word: "email", ex: "I got an email from my teacher.", jp: "私は先生からメールをもらいました。" },
  { name: "複数形", word: "emails", ex: "I got many emails this morning.", jp: "私は今朝たくさんメールをもらいました。" }
] },

{ word: "message", meaning: "メッセージ", pos: "名詞", forms: [
  { name: "単数形", word: "message", ex: "I left a message for him.", jp: "私は彼に伝言を残しました。" },
  { name: "複数形", word: "messages", ex: "She left several messages.", jp: "彼女はいくつか伝言を残しました。" }
] },

{ word: "phone", meaning: "電話、電話機", pos: "名詞", forms: [
  { name: "単数形", word: "phone", ex: "My phone is on the desk.", jp: "私の電話は机の上にあります。" },
  { name: "複数形", word: "phones", ex: "The store sells many phones.", jp: "その店はいろいろな電話機を売っています。" }
] },

{ word: "computer", meaning: "コンピューター", pos: "名詞", forms: [
  { name: "単数形", word: "computer", ex: "This computer is very fast.", jp: "このコンピューターはとても速いです。" },
  { name: "複数形", word: "computers", ex: "These computers are very fast.", jp: "これらのコンピューターはとても速いです。" }
] },

{ word: "document", meaning: "書類、文書", pos: "名詞", forms: [
  { name: "単数形", word: "document", ex: "Please read this document.", jp: "この書類を読んでください。" },
  { name: "複数形", word: "documents", ex: "Please read these documents.", jp: "これらの書類を読んでください。" }
] },

{ word: "file", meaning: "ファイル、書類", pos: "名詞", forms: [
  { name: "単数形", word: "file", ex: "The file is on my computer.", jp: "そのファイルは私のコンピューターにあります。" },
  { name: "複数形", word: "files", ex: "The files are on my computer.", jp: "それらのファイルは私のコンピューターにあります。" }
] },

{ word: "desk", meaning: "机", pos: "名詞", forms: [
  { name: "単数形", word: "desk", ex: "His desk is always clean.", jp: "彼の机はいつもきれいです。" },
  { name: "複数形", word: "desks", ex: "Their desks are always clean.", jp: "彼らの机はいつもきれいです。" }
] },

{ word: "chair", meaning: "いす", pos: "名詞", forms: [
  { name: "単数形", word: "chair", ex: "This chair is comfortable.", jp: "このいすは座り心地がよいです。" },
  { name: "複数形", word: "chairs", ex: "These chairs are comfortable.", jp: "これらのいすは座り心地がよいです。" }
] },

{ word: "customer", meaning: "顧客", pos: "名詞", forms: [
  { name: "単数形", word: "customer", ex: "The customer asked for help.", jp: "その顧客は助けを求めました。" },
  { name: "複数形", word: "customers", ex: "The customers asked for help.", jp: "その顧客たちは助けを求めました。" }
] },

{ word: "client", meaning: "依頼人、取引先", pos: "名詞", forms: [
  { name: "単数形", word: "client", ex: "The client visited our office.", jp: "その取引先は私たちの事務所を訪れました。" },
  { name: "複数形", word: "clients", ex: "The clients visited our office.", jp: "その取引先の人たちは私たちの事務所を訪れました。" }
] },

{ word: "project", meaning: "企画、プロジェクト", pos: "名詞", forms: [
  { name: "単数形", word: "project", ex: "The project is almost finished.", jp: "そのプロジェクトはほとんど終わっています。" },
  { name: "複数形", word: "projects", ex: "The projects are almost finished.", jp: "それらのプロジェクトはほとんど終わっています。" }
] },

{ word: "schedule", meaning: "予定、スケジュール", pos: "名詞", forms: [
  { name: "単数形", word: "schedule", ex: "My schedule is full today.", jp: "私の今日の予定はいっぱいです。" },
  { name: "複数形", word: "schedules", ex: "Our schedules are full today.", jp: "私たちの今日の予定はいっぱいです。" }
] },

{ word: "school", meaning: "学校", pos: "名詞", forms: [
  { name: "単数形", word: "school", ex: "The school is near my house.", jp: "その学校は私の家の近くにあります。" },
  { name: "複数形", word: "schools", ex: "There are many schools in this city.", jp: "この町にはたくさんの学校があります。" }
] },

{ word: "class", meaning: "授業、クラス", pos: "名詞", forms: [
  { name: "単数形", word: "class", ex: "My class starts at nine.", jp: "私の授業は9時に始まります。" },
  { name: "複数形", word: "classes", ex: "Her classes are very interesting.", jp: "彼女の授業はとてもおもしろいです。" }
] },

{ word: "lesson", meaning: "授業、レッスン", pos: "名詞", forms: [
  { name: "単数形", word: "lesson", ex: "Today's lesson was easy.", jp: "今日の授業はやさしかったです。" },
  { name: "複数形", word: "lessons", ex: "I have piano lessons on Fridays.", jp: "私は金曜日にピアノのレッスンがあります。" }
] },

{ word: "subject", meaning: "教科", pos: "名詞", forms: [
  { name: "単数形", word: "subject", ex: "Math is my favorite subject.", jp: "数学は私の好きな教科です。" },
  { name: "複数形", word: "subjects", ex: "We study many subjects at school.", jp: "私たちは学校で多くの教科を勉強します。" }
] },

{ word: "test", meaning: "テスト", pos: "名詞", forms: [
  { name: "単数形", word: "test", ex: "I have a test tomorrow.", jp: "私は明日テストがあります。" },
  { name: "複数形", word: "tests", ex: "We had two tests this week.", jp: "私たちは今週2つテストがありました。" }
] },

{ word: "exam", meaning: "試験", pos: "名詞", forms: [
  { name: "単数形", word: "exam", ex: "The exam was difficult.", jp: "その試験は難しかったです。" },
  { name: "複数形", word: "exams", ex: "Final exams begin next month.", jp: "期末試験は来月始まります。" }
] },

{ word: "question", meaning: "質問、問題", pos: "名詞", forms: [
  { name: "単数形", word: "question", ex: "I have a question about this word.", jp: "私はこの単語について質問があります。" },
  { name: "複数形", word: "questions", ex: "The teacher answered all the questions.", jp: "先生はすべての質問に答えました。" }
] },

{ word: "answer", meaning: "答え", pos: "名詞", forms: [
  { name: "単数形", word: "answer", ex: "Your answer is correct.", jp: "あなたの答えは正しいです。" },
  { name: "複数形", word: "answers", ex: "Please check your answers.", jp: "あなたの答えを確認してください。" }
] },

{ word: "homework", meaning: "宿題", pos: "名詞", forms: [
  { name: "単数形", word: "homework", ex: "My homework is not finished yet.", jp: "私の宿題はまだ終わっていません。" },
  { name: "複数形", word: "homework", ex: "We had a lot of homework this week.", jp: "私たちは今週たくさん宿題がありました。" }
] },

{ word: "project", meaning: "課題、プロジェクト", pos: "名詞", forms: [
  { name: "単数形", word: "project", ex: "This project is about the environment.", jp: "この課題は環境についてです。" },
  { name: "複数形", word: "projects", ex: "The students presented their projects.", jp: "その生徒たちは自分たちの課題を発表しました。" }
] },

{ word: "library", meaning: "図書館", pos: "名詞", forms: [
  { name: "単数形", word: "library", ex: "The library is quiet.", jp: "その図書館は静かです。" },
  { name: "複数形", word: "libraries", ex: "There are two libraries in this town.", jp: "この町には図書館が2つあります。" }
] },

{ word: "dictionary", meaning: "辞書", pos: "名詞", forms: [
  { name: "単数形", word: "dictionary", ex: "I bought a new dictionary.", jp: "私は新しい辞書を買いました。" },
  { name: "複数形", word: "dictionaries", ex: "These dictionaries are useful.", jp: "これらの辞書は役に立ちます。" }
] },

{ word: "notebook", meaning: "ノート", pos: "名詞", forms: [
  { name: "単数形", word: "notebook", ex: "My notebook is on the desk.", jp: "私のノートは机の上にあります。" },
  { name: "複数形", word: "notebooks", ex: "Her notebooks are very neat.", jp: "彼女のノートはとてもきれいです。" }
] },

{ word: "paper", meaning: "紙", pos: "名詞", forms: [
  { name: "単数形", word: "paper", ex: "I need a piece of paper.", jp: "私は紙が1枚必要です。" },
  { name: "複数形", word: "papers", ex: "The papers are on the teacher's desk.", jp: "その紙は先生の机の上にあります。" }
] },

{ word: "pen", meaning: "ペン", pos: "名詞", forms: [
  { name: "単数形", word: "pen", ex: "This pen writes smoothly.", jp: "このペンはすらすら書けます。" },
  { name: "複数形", word: "pens", ex: "I have three pens in my bag.", jp: "私はかばんの中にペンを3本持っています。" }
] },

{ word: "pencil", meaning: "鉛筆", pos: "名詞", forms: [
  { name: "単数形", word: "pencil", ex: "The pencil is sharp.", jp: "その鉛筆はとがっています。" },
  { name: "複数形", word: "pencils", ex: "The pencils are in the box.", jp: "その鉛筆は箱の中にあります。" }
] },

{ word: "eraser", meaning: "消しゴム", pos: "名詞", forms: [
  { name: "単数形", word: "eraser", ex: "I need an eraser.", jp: "私は消しゴムが必要です。" },
  { name: "複数形", word: "erasers", ex: "These erasers are small.", jp: "これらの消しゴムは小さいです。" }
] },

{ word: "desk", meaning: "机", pos: "名詞", forms: [
  { name: "単数形", word: "desk", ex: "My desk is by the window.", jp: "私の机は窓のそばにあります。" },
  { name: "複数形", word: "desks", ex: "The desks are arranged in rows.", jp: "その机は列に並べられています。" }
] },

{ word: "chair", meaning: "いす", pos: "名詞", forms: [
  { name: "単数形", word: "chair", ex: "This chair is comfortable.", jp: "このいすは座り心地がよいです。" },
  { name: "複数形", word: "chairs", ex: "The chairs are blue.", jp: "そのいすは青いです。" }
] },

{ word: "student", meaning: "学生、生徒", pos: "名詞", forms: [
  { name: "単数形", word: "student", ex: "The student asked a question.", jp: "その生徒は質問をしました。" },
  { name: "複数形", word: "students", ex: "The students asked many questions.", jp: "その生徒たちはたくさん質問をしました。" }
] },

{ word: "office", meaning: "事務所、会社", pos: "名詞", forms: [
  { name: "単数形", word: "office", ex: "The office is on the third floor.", jp: "その事務所は3階にあります。" },
  { name: "複数形", word: "offices", ex: "The company has offices in many cities.", jp: "その会社は多くの都市に事務所があります。" }
] },

{ word: "company", meaning: "会社", pos: "名詞", forms: [
  { name: "単数形", word: "company", ex: "The company makes computers.", jp: "その会社はコンピューターを作っています。" },
  { name: "複数形", word: "companies", ex: "Many companies joined the event.", jp: "多くの会社がそのイベントに参加しました。" }
] },

{ word: "job", meaning: "仕事", pos: "名詞", forms: [
  { name: "単数形", word: "job", ex: "He found a new job.", jp: "彼は新しい仕事を見つけました。" },
  { name: "複数形", word: "jobs", ex: "There are many jobs in this city.", jp: "この町には多くの仕事があります。" }
] },

{ word: "worker", meaning: "労働者、作業員", pos: "名詞", forms: [
  { name: "単数形", word: "worker", ex: "The worker fixed the machine.", jp: "その作業員は機械を修理しました。" },
  { name: "複数形", word: "workers", ex: "The workers fixed the machines.", jp: "その作業員たちは機械を修理しました。" }
] },

{ word: "manager", meaning: "管理者、部長", pos: "名詞", forms: [
  { name: "単数形", word: "manager", ex: "The manager called a meeting.", jp: "その部長は会議を開きました。" },
  { name: "複数形", word: "managers", ex: "The managers discussed the plan.", jp: "その管理者たちは計画について話し合いました。" }
] },

{ word: "boss", meaning: "上司", pos: "名詞", forms: [
  { name: "単数形", word: "boss", ex: "My boss is very strict.", jp: "私の上司はとても厳しいです。" },
  { name: "複数形", word: "bosses", ex: "The bosses attended the meeting.", jp: "その上司たちは会議に出席しました。" }
] },

{ word: "employee", meaning: "従業員", pos: "名詞", forms: [
  { name: "単数形", word: "employee", ex: "The employee answered the phone.", jp: "その従業員は電話に出ました。" },
  { name: "複数形", word: "employees", ex: "The employees work very hard.", jp: "その従業員たちはとても一生懸命働きます。" }
] },

{ word: "meeting", meaning: "会議", pos: "名詞", forms: [
  { name: "単数形", word: "meeting", ex: "The meeting starts at ten.", jp: "その会議は10時に始まります。" },
  { name: "複数形", word: "meetings", ex: "We have many meetings this week.", jp: "私たちは今週たくさん会議があります。" }
] },

{ word: "report", meaning: "報告書", pos: "名詞", forms: [
  { name: "単数形", word: "report", ex: "I finished the report yesterday.", jp: "私は昨日その報告書を仕上げました。" },
  { name: "複数形", word: "reports", ex: "She checked all the reports.", jp: "彼女はすべての報告書を確認しました。" }
] },

{ word: "document", meaning: "書類、文書", pos: "名詞", forms: [
  { name: "単数形", word: "document", ex: "This document is important.", jp: "この書類は重要です。" },
  { name: "複数形", word: "documents", ex: "Please bring the documents tomorrow.", jp: "明日その書類を持ってきてください。" }
] },

{ word: "file", meaning: "ファイル、書類", pos: "名詞", forms: [
  { name: "単数形", word: "file", ex: "The file is on my computer.", jp: "そのファイルは私のコンピューターにあります。" },
  { name: "複数形", word: "files", ex: "The files are in this folder.", jp: "そのファイルはこのフォルダーの中にあります。" }
] },

{ word: "computer", meaning: "コンピューター", pos: "名詞", forms: [
  { name: "単数形", word: "computer", ex: "My computer is very fast.", jp: "私のコンピューターはとても速いです。" },
  { name: "複数形", word: "computers", ex: "The office bought new computers.", jp: "その会社は新しいコンピューターを買いました。" }
] },

{ word: "printer", meaning: "プリンター", pos: "名詞", forms: [
  { name: "単数形", word: "printer", ex: "The printer is out of paper.", jp: "そのプリンターは紙が切れています。" },
  { name: "複数形", word: "printers", ex: "The printers are in the next room.", jp: "そのプリンターは隣の部屋にあります。" }
] },

{ word: "phone", meaning: "電話", pos: "名詞", forms: [
  { name: "単数形", word: "phone", ex: "My phone rang during lunch.", jp: "私の電話は昼食中に鳴りました。" },
  { name: "複数形", word: "phones", ex: "All the phones were busy.", jp: "すべての電話が使用中でした。" }
] },

{ word: "email", meaning: "メール", pos: "名詞", forms: [
  { name: "単数形", word: "email", ex: "I got an email from my boss.", jp: "私は上司からメールを受け取りました。" },
  { name: "複数形", word: "emails", ex: "She answered all the emails.", jp: "彼女はすべてのメールに返信しました。" }
] },

{ word: "customer", meaning: "顧客", pos: "名詞", forms: [
  { name: "単数形", word: "customer", ex: "The customer asked for help.", jp: "その顧客は助けを求めました。" },
  { name: "複数形", word: "customers", ex: "The customers waited in line.", jp: "その顧客たちは列に並びました。" }
] },

{ word: "client", meaning: "依頼人、取引先", pos: "名詞", forms: [
  { name: "単数形", word: "client", ex: "The client liked our idea.", jp: "その取引先は私たちの案を気に入りました。" },
  { name: "複数形", word: "clients", ex: "We met several clients today.", jp: "私たちは今日数社の取引先に会いました。" }
] },

{ word: "project", meaning: "企画、プロジェクト", pos: "名詞", forms: [
  { name: "単数形", word: "project", ex: "This project is very important.", jp: "このプロジェクトはとても重要です。" },
  { name: "複数形", word: "projects", ex: "The team completed two projects.", jp: "そのチームは2つのプロジェクトを完了しました。" }
] },

{ word: "plan", meaning: "計画", pos: "名詞", forms: [
  { name: "単数形", word: "plan", ex: "The plan sounds good.", jp: "その計画はよさそうです。" },
  { name: "複数形", word: "plans", ex: "We discussed our future plans.", jp: "私たちは将来の計画について話し合いました。" }
] },

{ word: "schedule", meaning: "予定、スケジュール", pos: "名詞", forms: [
  { name: "単数形", word: "schedule", ex: "My schedule is full today.", jp: "私の今日の予定はいっぱいです。" },
  { name: "複数形", word: "schedules", ex: "Their schedules are different.", jp: "彼らの予定はそれぞれ違います。" }
] },

{ word: "house", meaning: "家", pos: "名詞", forms: [
  { name: "単数形", word: "house", ex: "Their house is very large.", jp: "彼らの家はとても大きいです。" },
  { name: "複数形", word: "houses", ex: "There are many houses on this street.", jp: "この通りにはたくさんの家があります。" }
] },

{ word: "room", meaning: "部屋", pos: "名詞", forms: [
  { name: "単数形", word: "room", ex: "My room is clean.", jp: "私の部屋はきれいです。" },
  { name: "複数形", word: "rooms", ex: "The hotel has many rooms.", jp: "そのホテルにはたくさんの部屋があります。" }
] },

{ word: "door", meaning: "ドア", pos: "名詞", forms: [
  { name: "単数形", word: "door", ex: "Please close the door.", jp: "ドアを閉めてください。" },
  { name: "複数形", word: "doors", ex: "All the doors were open.", jp: "すべてのドアが開いていました。" }
] },

{ word: "window", meaning: "窓", pos: "名詞", forms: [
  { name: "単数形", word: "window", ex: "The window is open.", jp: "その窓は開いています。" },
  { name: "複数形", word: "windows", ex: "The windows are very clean.", jp: "その窓はとてもきれいです。" }
] },

{ word: "wall", meaning: "壁", pos: "名詞", forms: [
  { name: "単数形", word: "wall", ex: "There is a picture on the wall.", jp: "壁に絵があります。" },
  { name: "複数形", word: "walls", ex: "The walls are painted white.", jp: "その壁は白く塗られています。" }
] },

{ word: "floor", meaning: "床、階", pos: "名詞", forms: [
  { name: "単数形", word: "floor", ex: "The floor is wet.", jp: "その床はぬれています。" },
  { name: "複数形", word: "floors", ex: "This building has five floors.", jp: "この建物は5階あります。" }
] },

{ word: "ceiling", meaning: "天井", pos: "名詞", forms: [
  { name: "単数形", word: "ceiling", ex: "The ceiling is very high.", jp: "その天井はとても高いです。" },
  { name: "複数形", word: "ceilings", ex: "The ceilings in old houses are beautiful.", jp: "古い家の天井は美しいです。" }
] },

{ word: "kitchen", meaning: "台所", pos: "名詞", forms: [
  { name: "単数形", word: "kitchen", ex: "My mother is in the kitchen.", jp: "私の母は台所にいます。" },
  { name: "複数形", word: "kitchens", ex: "The apartments have modern kitchens.", jp: "そのアパートには現代的な台所があります。" }
] },

{ word: "bathroom", meaning: "浴室、トイレ", pos: "名詞", forms: [
  { name: "単数形", word: "bathroom", ex: "The bathroom is upstairs.", jp: "その浴室は2階にあります。" },
  { name: "複数形", word: "bathrooms", ex: "The hotel has clean bathrooms.", jp: "そのホテルには清潔な浴室があります。" }
] },

{ word: "bedroom", meaning: "寝室", pos: "名詞", forms: [
  { name: "単数形", word: "bedroom", ex: "The bedroom is quiet.", jp: "その寝室は静かです。" },
  { name: "複数形", word: "bedrooms", ex: "The house has three bedrooms.", jp: "その家には寝室が3つあります。" }
] },

{ word: "living room", meaning: "居間", pos: "名詞", forms: [
  { name: "単数形", word: "living room", ex: "We watched TV in the living room.", jp: "私たちは居間でテレビを見ました。" },
  { name: "複数形", word: "living rooms", ex: "The houses have large living rooms.", jp: "その家々には広い居間があります。" }
] },

{ word: "garden", meaning: "庭", pos: "名詞", forms: [
  { name: "単数形", word: "garden", ex: "There are flowers in the garden.", jp: "庭に花があります。" },
  { name: "複数形", word: "gardens", ex: "The gardens are full of roses.", jp: "その庭はバラでいっぱいです。" }
] },

{ word: "garage", meaning: "車庫", pos: "名詞", forms: [
  { name: "単数形", word: "garage", ex: "The car is in the garage.", jp: "その車は車庫にあります。" },
  { name: "複数形", word: "garages", ex: "The houses have small garages.", jp: "その家々には小さな車庫があります。" }
] },

{ word: "roof", meaning: "屋根", pos: "名詞", forms: [
  { name: "単数形", word: "roof", ex: "Snow covered the roof.", jp: "雪が屋根をおおいました。" },
  { name: "複数形", word: "roofs", ex: "The roofs were covered with snow.", jp: "その屋根は雪でおおわれていました。" }
] },

{ word: "stairs", meaning: "階段", pos: "名詞", forms: [
  { name: "単数形", word: "stairs", ex: "The stairs are steep.", jp: "その階段は急です。" },
  { name: "複数形", word: "stairs", ex: "The stairs in old buildings are narrow.", jp: "古い建物の階段はせまいです。" }
] },

{ word: "elevator", meaning: "エレベーター", pos: "名詞", forms: [
  { name: "単数形", word: "elevator", ex: "The elevator is out of order.", jp: "そのエレベーターは故障しています。" },
  { name: "複数形", word: "elevators", ex: "The building has two elevators.", jp: "その建物にはエレベーターが2台あります。" }
] },

{ word: "lamp", meaning: "ランプ", pos: "名詞", forms: [
  { name: "単数形", word: "lamp", ex: "The lamp is on the desk.", jp: "そのランプは机の上にあります。" },
  { name: "複数形", word: "lamps", ex: "The lamps are very bright.", jp: "そのランプはとても明るいです。" }
] },

{ word: "sofa", meaning: "ソファ", pos: "名詞", forms: [
  { name: "単数形", word: "sofa", ex: "The sofa is very soft.", jp: "そのソファはとてもやわらかいです。" },
  { name: "複数形", word: "sofas", ex: "The store sells comfortable sofas.", jp: "その店は座り心地のよいソファを売っています。" }
] },

{ word: "bed", meaning: "ベッド", pos: "名詞", forms: [
  { name: "単数形", word: "bed", ex: "The bed is near the window.", jp: "そのベッドは窓の近くにあります。" },
  { name: "複数形", word: "beds", ex: "The room has two beds.", jp: "その部屋にはベッドが2台あります。" }
] },

{ word: "table", meaning: "テーブル", pos: "名詞", forms: [
  { name: "単数形", word: "table", ex: "The table is made of wood.", jp: "そのテーブルは木でできています。" },
  { name: "複数形", word: "tables", ex: "The restaurant has many tables.", jp: "そのレストランにはたくさんテーブルがあります。" }
] },

{ word: "cup", meaning: "カップ", pos: "名詞", forms: [
  { name: "単数形", word: "cup", ex: "There is a cup on the table.", jp: "テーブルの上にカップが1つあります。" },
  { name: "複数形", word: "cups", ex: "There are many cups in the kitchen.", jp: "台所にたくさんのカップがあります。" }
] },

{ word: "glass", meaning: "コップ、ガラス", pos: "名詞", forms: [
  { name: "単数形", word: "glass", ex: "The glass is full of water.", jp: "そのコップは水でいっぱいです。" },
  { name: "複数形", word: "glasses", ex: "The glasses are on the shelf.", jp: "そのコップは棚の上にあります。" }
] },

{ word: "plate", meaning: "皿", pos: "名詞", forms: [
  { name: "単数形", word: "plate", ex: "The plate is clean.", jp: "その皿はきれいです。" },
  { name: "複数形", word: "plates", ex: "The plates are in the cupboard.", jp: "その皿は食器棚の中にあります。" }
] },

{ word: "bowl", meaning: "ボウル、茶わん", pos: "名詞", forms: [
  { name: "単数形", word: "bowl", ex: "The bowl is on the counter.", jp: "そのボウルはカウンターの上にあります。" },
  { name: "複数形", word: "bowls", ex: "We bought new bowls yesterday.", jp: "私たちは昨日新しいボウルを買いました。" }
] },

{ word: "spoon", meaning: "スプーン", pos: "名詞", forms: [
  { name: "単数形", word: "spoon", ex: "I need a spoon for the soup.", jp: "私はスープ用にスプーンが必要です。" },
  { name: "複数形", word: "spoons", ex: "The spoons are in the drawer.", jp: "そのスプーンは引き出しの中にあります。" }
] },

{ word: "fork", meaning: "フォーク", pos: "名詞", forms: [
  { name: "単数形", word: "fork", ex: "This fork is made of silver.", jp: "このフォークは銀でできています。" },
  { name: "複数形", word: "forks", ex: "The forks are on the table.", jp: "そのフォークはテーブルの上にあります。" }
] },

{ word: "knife", meaning: "ナイフ", pos: "名詞", forms: [
  { name: "単数形", word: "knife", ex: "The knife is very sharp.", jp: "そのナイフはとても鋭いです。" },
  { name: "複数形", word: "knives", ex: "The knives are in the kitchen.", jp: "そのナイフは台所にあります。" }
] },

{ word: "pan", meaning: "フライパン", pos: "名詞", forms: [
  { name: "単数形", word: "pan", ex: "The pan is on the stove.", jp: "そのフライパンはコンロの上にあります。" },
  { name: "複数形", word: "pans", ex: "These pans are very useful.", jp: "これらのフライパンはとても便利です。" }
] },

{ word: "pot", meaning: "なべ", pos: "名詞", forms: [
  { name: "単数形", word: "pot", ex: "The pot is full of soup.", jp: "そのなべはスープでいっぱいです。" },
  { name: "複数形", word: "pots", ex: "The pots are hanging on the wall.", jp: "そのなべは壁にかけられています。" }
] },

{ word: "bottle", meaning: "びん、ボトル", pos: "名詞", forms: [
  { name: "単数形", word: "bottle", ex: "There is a bottle of juice in the fridge.", jp: "冷蔵庫にジュースのびんが1本あります。" },
  { name: "複数形", word: "bottles", ex: "The bottles are empty.", jp: "そのびんは空です。" }
] },

{ word: "box", meaning: "箱", pos: "名詞", forms: [
  { name: "単数形", word: "box", ex: "The box is under the table.", jp: "その箱はテーブルの下にあります。" },
  { name: "複数形", word: "boxes", ex: "The boxes are very heavy.", jp: "その箱はとても重いです。" }
] },

{ word: "bag", meaning: "袋、かばん", pos: "名詞", forms: [
  { name: "単数形", word: "bag", ex: "My bag is on the chair.", jp: "私のかばんはいすの上にあります。" },
  { name: "複数形", word: "bags", ex: "Their bags are by the door.", jp: "彼らのかばんはドアのそばにあります。" }
] },

{ word: "basket", meaning: "かご", pos: "名詞", forms: [
  { name: "単数形", word: "basket", ex: "The basket is full of fruit.", jp: "そのかごは果物でいっぱいです。" },
  { name: "複数形", word: "baskets", ex: "The baskets are made of wood.", jp: "そのかごは木でできています。" }
] },

{ word: "shelf", meaning: "棚", pos: "名詞", forms: [
  { name: "単数形", word: "shelf", ex: "The shelf is above the desk.", jp: "その棚は机の上にあります。" },
  { name: "複数形", word: "shelves", ex: "The shelves are full of books.", jp: "その棚は本でいっぱいです。" }
] },

{ word: "drawer", meaning: "引き出し", pos: "名詞", forms: [
  { name: "単数形", word: "drawer", ex: "The drawer is locked.", jp: "その引き出しは鍵がかかっています。" },
  { name: "複数形", word: "drawers", ex: "The drawers are full of papers.", jp: "その引き出しは紙でいっぱいです。" }
] },

{ word: "refrigerator", meaning: "冷蔵庫", pos: "名詞", forms: [
  { name: "単数形", word: "refrigerator", ex: "The refrigerator is new.", jp: "その冷蔵庫は新しいです。" },
  { name: "複数形", word: "refrigerators", ex: "The store sells large refrigerators.", jp: "その店は大きな冷蔵庫を売っています。" }
] },

{ word: "microwave", meaning: "電子レンジ", pos: "名詞", forms: [
  { name: "単数形", word: "microwave", ex: "The microwave is on the counter.", jp: "その電子レンジはカウンターの上にあります。" },
  { name: "複数形", word: "microwaves", ex: "These microwaves are easy to use.", jp: "これらの電子レンジは使いやすいです。" }
] },

{ word: "oven", meaning: "オーブン", pos: "名詞", forms: [
  { name: "単数形", word: "oven", ex: "The oven is very hot.", jp: "そのオーブンはとても熱いです。" },
  { name: "複数形", word: "ovens", ex: "The bakery uses large ovens.", jp: "そのパン屋は大きなオーブンを使っています。" }
] },

{ word: "stove", meaning: "こんろ", pos: "名詞", forms: [
  { name: "単数形", word: "stove", ex: "The stove is clean.", jp: "そのこんろはきれいです。" },
  { name: "複数形", word: "stoves", ex: "The camping store sells small stoves.", jp: "そのキャンプ用品店は小さなこんろを売っています。" }
] },

{ word: "kettle", meaning: "やかん", pos: "名詞", forms: [
  { name: "単数形", word: "kettle", ex: "The kettle is boiling.", jp: "そのやかんは沸いています。" },
  { name: "複数形", word: "kettles", ex: "The kettles are on sale today.", jp: "そのやかんは今日セールです。" }
] },

{ word: "apple", meaning: "りんご", pos: "名詞", forms: [
  { name: "単数形", word: "apple", ex: "I ate an apple after lunch.", jp: "私は昼食のあとにりんごを1個食べました。" },
  { name: "複数形", word: "apples", ex: "We bought some apples at the market.", jp: "私たちは市場でりんごをいくつか買いました。" }
] },

{ word: "orange", meaning: "オレンジ", pos: "名詞", forms: [
  { name: "単数形", word: "orange", ex: "The orange is sweet.", jp: "そのオレンジは甘いです。" },
  { name: "複数形", word: "oranges", ex: "The oranges are in the basket.", jp: "そのオレンジはかごの中にあります。" }
] },

{ word: "banana", meaning: "バナナ", pos: "名詞", forms: [
  { name: "単数形", word: "banana", ex: "She ate a banana for breakfast.", jp: "彼女は朝食にバナナを1本食べました。" },
  { name: "複数形", word: "bananas", ex: "The bananas are ripe.", jp: "そのバナナは熟しています。" }
] },

{ word: "grape", meaning: "ぶどう", pos: "名詞", forms: [
  { name: "単数形", word: "grape", ex: "This grape is very sweet.", jp: "このぶどうはとても甘いです。" },
  { name: "複数形", word: "grapes", ex: "The grapes were fresh.", jp: "そのぶどうは新鮮でした。" }
] },

{ word: "peach", meaning: "もも", pos: "名詞", forms: [
  { name: "単数形", word: "peach", ex: "The peach smells nice.", jp: "そのももはよい香りがします。" },
  { name: "複数形", word: "peaches", ex: "We picked peaches this morning.", jp: "私たちは今朝ももを収穫しました。" }
] },

{ word: "pear", meaning: "なし", pos: "名詞", forms: [
  { name: "単数形", word: "pear", ex: "I cut the pear into pieces.", jp: "私はなしを切り分けました。" },
  { name: "複数形", word: "pears", ex: "The pears are on the plate.", jp: "そのなしは皿の上にあります。" }
] },

{ word: "melon", meaning: "メロン", pos: "名詞", forms: [
  { name: "単数形", word: "melon", ex: "The melon was expensive.", jp: "そのメロンは高かったです。" },
  { name: "複数形", word: "melons", ex: "The store sells fresh melons.", jp: "その店は新鮮なメロンを売っています。" }
] },

{ word: "watermelon", meaning: "すいか", pos: "名詞", forms: [
  { name: "単数形", word: "watermelon", ex: "The watermelon is cold and sweet.", jp: "そのすいかは冷たくて甘いです。" },
  { name: "複数形", word: "watermelons", ex: "They bought two watermelons.", jp: "彼らはすいかを2個買いました。" }
] },

{ word: "strawberry", meaning: "いちご", pos: "名詞", forms: [
  { name: "単数形", word: "strawberry", ex: "This strawberry is delicious.", jp: "このいちごはおいしいです。" },
  { name: "複数形", word: "strawberries", ex: "The strawberries are very red.", jp: "そのいちごはとても赤いです。" }
] },

{ word: "cherry", meaning: "さくらんぼ", pos: "名詞", forms: [
  { name: "単数形", word: "cherry", ex: "There is a cherry on the cake.", jp: "ケーキの上にさくらんぼが1つあります。" },
  { name: "複数形", word: "cherries", ex: "The cherries are sweet and juicy.", jp: "そのさくらんぼは甘くてみずみずしいです。" }
] },

{ word: "lemon", meaning: "レモン", pos: "名詞", forms: [
  { name: "単数形", word: "lemon", ex: "The lemon tastes sour.", jp: "そのレモンはすっぱい味がします。" },
  { name: "複数形", word: "lemons", ex: "We need two lemons for this recipe.", jp: "このレシピにはレモンが2個必要です。" }
] },

{ word: "pineapple", meaning: "パイナップル", pos: "名詞", forms: [
  { name: "単数形", word: "pineapple", ex: "The pineapple is very juicy.", jp: "そのパイナップルはとてもジューシーです。" },
  { name: "複数形", word: "pineapples", ex: "The market sells fresh pineapples.", jp: "その市場は新鮮なパイナップルを売っています。" }
] },

{ word: "mango", meaning: "マンゴー", pos: "名詞", forms: [
  { name: "単数形", word: "mango", ex: "This mango is ripe.", jp: "このマンゴーは熟しています。" },
  { name: "複数形", word: "mangoes", ex: "The mangoes are from Thailand.", jp: "そのマンゴーはタイ産です。" }
] },

{ word: "kiwi", meaning: "キウイ", pos: "名詞", forms: [
  { name: "単数形", word: "kiwi", ex: "I ate a kiwi this morning.", jp: "私は今朝キウイを1個食べました。" },
  { name: "複数形", word: "kiwis", ex: "The kiwis are in the fridge.", jp: "そのキウイは冷蔵庫の中にあります。" }
] },

{ word: "plum", meaning: "すもも", pos: "名詞", forms: [
  { name: "単数形", word: "plum", ex: "The plum is a little sour.", jp: "そのすももは少しすっぱいです。" },
  { name: "複数形", word: "plums", ex: "The plums are on the table.", jp: "そのすももはテーブルの上にあります。" }
] },

{ word: "apricot", meaning: "あんず", pos: "名詞", forms: [
  { name: "単数形", word: "apricot", ex: "The apricot is soft and sweet.", jp: "そのあんずはやわらかくて甘いです。" },
  { name: "複数形", word: "apricots", ex: "We bought dried apricots.", jp: "私たちは干しあんずを買いました。" }
] },

{ word: "fig", meaning: "いちじく", pos: "名詞", forms: [
  { name: "単数形", word: "fig", ex: "The fig was very fresh.", jp: "そのいちじくはとても新鮮でした。" },
  { name: "複数形", word: "figs", ex: "The figs are in the bowl.", jp: "そのいちじくはボウルの中にあります。" }
] },

{ word: "coconut", meaning: "ココナッツ", pos: "名詞", forms: [
  { name: "単数形", word: "coconut", ex: "The coconut is hard to open.", jp: "そのココナッツは開けるのが難しいです。" },
  { name: "複数形", word: "coconuts", ex: "The shop sells fresh coconuts.", jp: "その店は新鮮なココナッツを売っています。" }
] },

{ word: "blueberry", meaning: "ブルーベリー", pos: "名詞", forms: [
  { name: "単数形", word: "blueberry", ex: "A blueberry fell on the floor.", jp: "ブルーベリーが1粒床に落ちました。" },
  { name: "複数形", word: "blueberries", ex: "The blueberries are used for the pie.", jp: "そのブルーベリーはパイに使われます。" }
] },

{ word: "raspberry", meaning: "ラズベリー", pos: "名詞", forms: [
  { name: "単数形", word: "raspberry", ex: "The raspberry has a strong flavor.", jp: "そのラズベリーは風味が強いです。" },
  { name: "複数形", word: "raspberries", ex: "She picked raspberries in the garden.", jp: "彼女は庭でラズベリーを摘みました。" }
] },

];