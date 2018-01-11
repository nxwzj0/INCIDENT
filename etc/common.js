//==================================================
// Aタグのhrefをラッピング
//==================================================
function onHrefLink(url) {
    // ロード中
    entryLoad();
    
    location.href = url;
}

////==================================================
// 画面ロード
//==================================================
function entryLoad() {

    if( !document.getElementById("loadSpinner") ) {
        $("#entryLoad").css("height", $(document).height());
        $("#entryLoad").css("width", $(document).width());
        $("#entryLoad").show();

        // 画像のwidth/heightの半分を引くとセンターに来る
        x = $(window).width() / 2 - 50;
        y = $(window).height() / 2 - 50;

        document.getElementById("entryLoad").innerHTML = "<div id='loadSpinner' style='margin-left: " + x + "px ; margin-top: " + y + "px;'><img src='./image/loading.gif' height='100' width='100' /></div>";
    }
}

function exitLoad() {
    $("#entryLoad").hide();
}