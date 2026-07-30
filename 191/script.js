/* ==========================================
   百ます計算 印刷用
   script.js（1/3）

   A4 2問表示対応
========================================== */


/* =========================
   初期設定
========================= */

document
.getElementById("createBtn")
.addEventListener("click", generateSheets);


// 初回表示
generateSheets();



/* =========================
   問題全体生成
========================= */

function generateSheets(){

    const pages =
        document.getElementById("pages");

    pages.innerHTML = "";


    const mode =
        document.getElementById("mode").value;


    const count =
        Number(
            document.getElementById("count").value
        );


    /*
       A4 1枚に2問配置

       例：
       10問 → A4 5枚
       20問 → A4 10枚
       50問 → A4 25枚
    */


    for(let i = 1; i <= count; i += 2){


        const paper =
            document.createElement("div");


        paper.className = "paper";



        // 上側の問題

        paper.appendChild(
            createSheet(
                i,
                mode
            )
        );



        // 下側の問題

        if(i + 1 <= count){

            paper.appendChild(
                createSheet(
                    i + 1,
                    mode
                )
            );

        }


        pages.appendChild(paper);

    }

}



/* =========================
   1問作成
========================= */


function createSheet(no, mode){


    const page =
        document.createElement("div");


    page.className = "page";



    /*
       数字をランダム作成
    */


    const top =
        shuffle(
            [...Array(10)]
            .map(
                (_,i)=>i+1
            )
        );


    const left =
        shuffle(
            [...Array(10)]
            .map(
                (_,i)=>i+1
            )
        );



    const title =
        document.createElement("div");


    title.className = "title";


    title.textContent =
        "百ます計算 " +
        getModeName(mode) ;
      


    page.appendChild(title);



    const info =
        document.createElement("div");


    info.className = "info";


    info.innerHTML = `

        <div>
        名前 <span></span>
        </div>

        <div>
        日付 <span></span>
        </div>

        <div>
        時間 <span></span>
        </div>

    `;


    page.appendChild(info);



    page.appendChild(
        createTable(
            mode,
            top,
            left
        )
    );



    return page;

}



/* =========================
   計算名表示
========================= */


function getModeName(mode){

    if(mode === "+"){
        return "足し算";
    }

    if(mode === "-"){
        return "引き算";
    }

    if(mode === "*"){
        return "掛け算";
    }


    return "";

}

/* ==========================================
   百ます計算 印刷用
   script.js（2/3）

   表生成・計算処理
========================================== */


/* =========================
   百ます表作成
========================= */

function createTable(mode, top, left){


    const table =
        document.createElement("table");



    /*
       上段（横数字）
    */

    let tr =
        document.createElement("tr");


    let corner =
        document.createElement("th");


    corner.className = "corner";


    tr.appendChild(corner);



    for(let x = 0; x < 10; x++){


        let th =
            document.createElement("th");


        th.textContent =
            top[x];


        tr.appendChild(th);

    }


    table.appendChild(tr);



    /*
       本体100マス
    */


    for(let y = 0; y < 10; y++){


        tr =
            document.createElement("tr");



        // 左側数字

        let th =
            document.createElement("th");


        th.textContent =
            left[y];


        tr.appendChild(th);



        // 空欄マス

        for(let x = 0; x < 10; x++){


            let td =
                document.createElement("td");


            td.innerHTML =
                "&nbsp;";


            tr.appendChild(td);


        }


        table.appendChild(tr);


    }



    return table;

}



/* =========================
   計算確認用
   （解答生成用）
========================= */


function calcAnswer(a,b,mode){


    switch(mode){


        case "+":

            return a+b;



        case "-":

            return a-b;



        case "*":

            return a*b;



        default:

            return "";

    }

}



/* =========================
   解答表作成用
   将来の解答印刷対応
========================= */


function createAnswerTable(mode, top, left){


    const table =
        document.createElement("table");



    let tr =
        document.createElement("tr");



    let corner =
        document.createElement("th");


    corner.className =
        "corner";


    tr.appendChild(corner);



    for(let x=0;x<10;x++){


        let th =
            document.createElement("th");


        th.textContent =
            top[x];


        tr.appendChild(th);


    }


    table.appendChild(tr);



    for(let y=0;y<10;y++){


        tr =
            document.createElement("tr");



        let th =
            document.createElement("th");


        th.textContent =
            left[y];


        tr.appendChild(th);



        for(let x=0;x<10;x++){


            let td =
                document.createElement("td");



            td.textContent =
                calcAnswer(
                    left[y],
                    top[x],
                    mode
                );



            tr.appendChild(td);


        }


        table.appendChild(tr);


    }



    return table;

}

/* ==========================================
   百ます計算 印刷用
   script.js（3/3）

   補助処理・完成部分
========================================== */


/* =========================
   配列シャッフル
========================= */

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}



/* =========================
   印刷前確認
========================= */


window.addEventListener(
    "beforeprint",
    function(){

        console.log(
            "百ます計算 印刷開始"
        );

    }
);



/* =========================
   印刷終了
========================= */


window.addEventListener(
    "afterprint",
    function(){

        console.log(
            "印刷終了"
        );

    }
);



/* =========================
   画面サイズ調整
========================= */


function resizeCheck(){

    const width =
        window.innerWidth;


    if(width < 600){

        document.body.classList.add(
            "small-screen"
        );

    }else{

        document.body.classList.remove(
            "small-screen"
        );

    }

}


window.addEventListener(
    "resize",
    resizeCheck
);


resizeCheck();



/* =========================
   キーボードショートカット
========================= */


document.addEventListener(
    "keydown",
    function(e){


        // Ctrl + P
        // 印刷

        if(
            e.ctrlKey &&
            e.key === "p"
        ){

            window.print();

        }


    }
);
