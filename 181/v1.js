const verb1 = [
  { word: "write", meaning: "書く", pos: "動詞", forms: [
    { name: "原形", word: "write", ex: "I can write a letter in English.", jp: "私は英語で手紙を書くことができます。" },
    { name: "現在形", word: "write / writes", ex: "He writes a blog every day.", jp: "彼は毎日ブログを書いています。" },
    { name: "過去形", word: "wrote", ex: "She wrote a book last year.", jp: "彼女は昨年、本を書きました。" },
    { name: "過去分詞", word: "written", ex: "This book was written by Ken.", jp: "この本はケンによって書かれました。" },
    { name: "現在分詞", word: "writing", ex: "I am writing an email now.", jp: "私は今、メールを書いているところです." }
  ] },

  { word: "go", meaning: "行く", pos: "動詞", forms: [
    { name: "原形", word: "go", ex: "You should go to bed early.", jp: "あなたは早く寝るべきです。" },
    { name: "現在形", word: "go / goes", ex: "She goes to school by bus.", jp: "彼女はバスで学校に通っています。" },
    { name: "過去形", word: "went", ex: "We went to Kyoto last weekend.", jp: "私たちは先週末に京都へ行きました。" },
    { name: "過去分詞", word: "gone", ex: "They have already gone home.", jp: "彼らはもう家に帰ってしまいました。" },
    { name: "現在分詞", word: "going", ex: "I am going to the supermarket now.", jp: "私は今スーパーマーケットに向かっています。" }
  ] },

  { word: "take", meaning: "取る、連れて行く、（写真を）撮る", pos: "動詞", forms: [
    { name: "原形", word: "take", ex: "Please take an umbrella with you.", jp: "傘を持っていってください。" },
    { name: "現在形", word: "take / takes", ex: "He takes a lot of photos.", jp: "彼はたくさんの写真を撮ります。" },
    { name: "過去形", word: "took", ex: "I took a taxi to the station yesterday.", jp: "私は昨日、駅までタクシーに乗りました。" },
    { name: "過去分詞", word: "taken", ex: "This photo was taken in Paris.", jp: "この写真はパリで撮影されました。" },
    { name: "現在分詞", word: "taking", ex: "She is taking a shower right now.", jp: "彼女はちょうど今シャワーを浴びています。" }
  ] },

  { word: "make", meaning: "作る", pos: "動詞", forms: [
    { name: "原形", word: "make", ex: "I want to make a big cake.", jp: "私は大きなケーキを作りたいです。" },
    { name: "現在形", word: "make / makes", ex: "My mother makes dinner for us every night.", jp: "母は毎晩私たちのために夕食を作ってくれます。" },
    { name: "過去形", word: "made", ex: "He made a wooden chair last week.", jp: "彼は先週、木製の椅子を作りました。" },
    { name: "過去分詞", word: "made", ex: "This watch was made in Japan.", jp: "この時計は日本で作られました。" },
    { name: "現在分詞", word: "making", ex: "They are making a new plan.", jp: "彼らは新しい計画を立てているところです。" }
  ] },

  { word: "have", meaning: "持っている、食べる、経験する", pos: "動詞", forms: [
    { name: "原形", word: "have", ex: "I want to have a pet dog.", jp: "私はペットの犬を飼いたいです。" },
    { name: "現在形", word: "have / has", ex: "She has two brothers.", jp: "彼女には2人の兄弟がいます。" },
    { name: "過去形", word: "had", ex: "We had a great time at the party.", jp: "私たちはパーティーで素晴らしい時間を過ごしました。" },
    { name: "過去分詞", word: "had", ex: "I have had a cold since Tuesday.", jp: "私は火曜日からずっと風邪をひいています。" },
    { name: "現在分詞", word: "having", ex: "They are having lunch right now.", jp: "彼らはちょうど今昼食を食べています。" }
  ] },

  { word: "run", meaning: "走る、経営する", pos: "動詞", forms: [
    { name: "原形", word: "run", ex: "Don't run in the hallway.", jp: "廊下を走ってはいけません。" },
    { name: "現在形", word: "run / runs", ex: "He runs five kilometers every morning.", jp: "彼は毎朝5キロ走っています。" },
    { name: "過去形", word: "ran", ex: "She ran fast to catch the train.", jp: "彼女は電車に間に合うように速く走りました。" },
    { name: "過去分詞", word: "run", ex: "He has run in three marathons.", jp: "彼はこれまでに3回マラソンを走ったことがあります。" },
    { name: "現在分詞", word: "running", ex: "Look at the running dog.", jp: "あの走っている犬を見てごらん。" }
  ] },

  { word: "speak", meaning: "話す", pos: "動詞", forms: [
    { name: "原形", word: "speak", ex: "Can you speak more slowly?", jp: "もっとゆっくり話していただけますか？" },
    { name: "現在形", word: "speak / speaks", ex: "My friend speaks three languages.", jp: "私の友人は3か国語を話します。" },
    { name: "過去形", word: "spoke", ex: "I spoke with the teacher after class.", jp: "私は放課後に先生と話しました。" },
    { name: "過去分詞", word: "spoken", ex: "English is spoken all over the world.", jp: "英語は世界中で話されています。" },
    { name: "現在分詞", word: "speaking", ex: "Who is speaking on the phone?", jp: "電話で話しているのは誰ですか？" }
  ] },

  { word: "see", meaning: "見る、会う、わかる", pos: "動詞", forms: [
    { name: "原形", word: "see", ex: "I hope to see you again soon.", jp: "またすぐにお会いできることを願っています。" },
    { name: "現在形", word: "see / sees", ex: "He sees his doctor once a month.", jp: "彼は月に1回医者に診てもらっています。" },
    { name: "過去形", word: "saw", ex: "I saw a beautiful rainbow this evening.", jp: "私は今日の夕方、美しい虹を見ました。" },
    { name: "過去分詞", word: "seen", ex: "Have you ever seen a koala?", jp: "これまでにコアラを見たことがありますか？" },
    { name: "現在分詞", word: "seeing", ex: "I am seeing my friends tomorrow.", jp: "私は明日、友人たちに会う予定です。" }
  ] },

  { word: "play", meaning: "遊ぶ、（スポーツ・楽器を）する", pos: "動詞", forms: [
    { name: "原形", word: "play", ex: "Let's play tennis after school.", jp: "放課後にテニスをしよう。" },
    { name: "現在形", word: "play / plays", ex: "She plays the piano very well.", jp: "彼女はピアノがとても上手です。" },
    { name: "過去形", word: "played", ex: "We played video games all day.", jp: "私たちは一日中テレビゲームをして遊びました。" },
    { name: "過去分詞", word: "played", ex: "The baseball game was played in the rain.", jp: "その野球の試合は雨の中で行われました。" },
    { name: "現在分詞", word: "playing", ex: "The children are playing in the park.", jp: "子供たちが公園で遊んでいます。" }
  ] },

  { word: "study", meaning: "勉強する", pos: "動詞", forms: [
    { name: "原形", word: "study", ex: "I must study for the test.", jp: "私はテストのために勉強しなければならない。" },
    { name: "現在形", word: "study / studies", ex: "Ken studies science every night.", jp: "ケンは毎晩、理科を勉強しています。" },
    { name: "過去形", word: "studied", ex: "She studied math for two hours.", jp: "彼女は数学を2時間勉強しました。" },
    { name: "過去分詞", word: "studied", ex: "I have studied French for three years.", jp: "私はフランス語を3年間勉強しています。" },
    { name: "現在分詞", word: "studying", ex: "They are studying in the library.", jp: "彼らは図書館で勉強しているところです。" }
  ] },

  { word: "watch", meaning: "（動いているものを）見る", pos: "動詞", forms: [
    { name: "原形", word: "watch", ex: "I like to watch movies.", jp: "私は映画を見るのが好きです。" },
    { name: "現在形", word: "watch / watches", ex: "My brother watches YouTube every day.", jp: "私の弟は毎日YouTubeを見ます。" },
    { name: "過去形", word: "watched", ex: "We watched a baseball game on TV.", jp: "私たちはテレビで野球の試合を見ました。" },
    { name: "過去分詞", word: "watched", ex: "The baby was watched by his grandmother.", jp: "赤ちゃんは祖母に見守られていました。" },
    { name: "現在分詞", word: "watching", ex: "What are you watching right now?", jp: "今、何を見ているのですか。" }
  ] },

  { word: "like", meaning: "好む、好きだ", pos: "動詞", forms: [
    { name: "原形", word: "like", ex: "I like Japanese food.", jp: "私は日本食が好きです。" },
    { name: "現在形", word: "like / likes", ex: "She likes cats more than dogs.", jp: "彼女は犬より猫が好きです。" },
    { name: "過去形", word: "liked", ex: "He liked this song when he was young.", jp: "彼は若い頃、この歌が好きでした。" },
    { name: "過去分詞", word: "liked", ex: "He is liked by everyone in class.", jp: "彼はクラスの全員から好かれています。" },
    { name: "現在分詞", word: "liking", ex: "I am liking my new school life.", jp: "新しい学校生活が気に入ってきています。" }
  ] },

  { word: "want", meaning: "欲しい、〜したい", pos: "動詞", forms: [
    { name: "原形", word: "want", ex: "I want a new computer.", jp: "私は新しいパソコンが欲しいです。" },
    { name: "現在形", word: "want / wants", ex: "He wants to buy a new car.", jp: "彼は新しい車を買いたがっています。" },
    { name: "過去形", word: "wanted", ex: "She wanted to see you yesterday.", jp: "彼女は昨日、あなたに会いたがっていました。" },
    { name: "過去分詞", word: "wanted", ex: "He is wanted by the police.", jp: "彼は警察に指名手配されています。" },
    { name: "現在分詞", word: "wanting", ex: "I've been wanting to try this restaurant.", jp: "ずっとこのレストランに行ってみたかったのです。" }
  ] },

  { word: "know", meaning: "知っている、知る", pos: "動詞", forms: [
    { name: "原形", word: "know", ex: "Do you know his phone number?", jp: "彼の電話番号を知っていますか。" },
    { name: "現在形", word: "know / knows", ex: "Everyone knows her name.", jp: "誰もが彼女の名前を知っています。" },
    { name: "過去形", word: "knew", ex: "I knew the answer to the question.", jp: "私はその質問の答えを知っていました。" },
    { name: "過去分詞", word: "known", ex: "Kyoto is known as an old city.", jp: "京都は古都として知られています。" },
    { name: "現在分詞", word: "knowing", ex: "Not knowing what to do, I stood there.", jp: "どうしていいか分からず、私はそこに立っていた。" }
  ] },

  { word: "eat", meaning: "食べる", pos: "動詞", forms: [
    { name: "原形", word: "eat", ex: "What do you want to eat?", jp: "あなたは何を食べたいですか。" },
    { name: "現在形", word: "eat / eats", ex: "He eats breakfast at seven.", jp: "彼は7時に朝食を食べます。" },
    { name: "過去形", word: "ate", ex: "I ate an apple this morning.", jp: "私は今朝、リンゴを食べました。" },
    { name: "過去分詞", word: "eaten", ex: "Have you ever eaten natto?", jp: "あなたは今までに納豆を食べたことがありますか。" },
    { name: "現在分詞", word: "eating", ex: "She is eating lunch right now.", jp: "彼女は今、昼食を食べています。" }
  ] },

  { word: "drink", meaning: "飲む", pos: "動詞", forms: [
    { name: "原形", word: "drink", ex: "You should drink more water.", jp: "もっと水を飲んだほうがいいですよ。" },
    { name: "現在形", word: "drink / drinks", ex: "He drinks coffee every morning.", jp: "彼は毎朝コーヒーを飲みます。" },
    { name: "過去形", word: "drank", ex: "We drank orange juice at the cafe.", jp: "私たちはカフェでオレンジジュースを飲みました。" },
    { name: "過去分詞", word: "drunk", ex: "The milk has been drunk by the cat.", jp: "その牛乳は猫に飲まれてしまいました。" },
    { name: "現在分詞", word: "drinking", ex: "They are drinking green tea.", jp: "彼らは緑茶を飲んでいます。" }
  ] },

  { word: "buy", meaning: "買う", pos: "動詞", forms: [
    { name: "原形", word: "buy", ex: "Where can I buy a ticket?", jp: "どこでチケットを買えますか。" },
    { name: "現在形", word: "buy / buys", ex: "My father buys a newspaper every day.", jp: "父は毎日新聞を買います。" },
    { name: "過去形", word: "bought", ex: "I bought a new shirt yesterday.", jp: "私は昨日、新しいシャツを買いました。" },
    { name: "過去分詞", word: "bought", ex: "This book was bought online.", jp: "この本はネットで買われました。" },
    { name: "現在分詞", word: "buying", ex: "She is buying groceries now.", jp: "彼女は今、食料品を買っています。" }
  ] },

  { word: "read", meaning: "読む", pos: "動詞", forms: [
    { name: "原形", word: "read", ex: "I like to read comic books.", jp: "私は漫画を読むのが好きです。" },
    { name: "現在形", word: "read / reads", ex: "He reads a book before bed.", jp: "彼は寝る前に本を読みます。" },
    { name: "過去形", word: "read", ex: "She read that novel last week.", jp: "彼女は先週その小説を読みました。" },
    { name: "過去分詞", word: "read", ex: "This poem is read by many people.", jp: "この詩は多くの人に読まれています。" },
    { name: "現在分詞", word: "reading", ex: "I am reading the newspaper now.", jp: "私は今、新聞を読んでいます。" }
  ] },
];