function getEle(ele) {
    return document.querySelector(ele);
}
var main = getEle("#main");
var winW = document.documentElement.clientWidth;
/*�豸�Ŀ�*/
var winH = document.documentElement.clientHeight;
/*�豸�ĸ�*/
var desW = 640;
var desH = 1008;
if (winW / winH <= desW / desH) {
    main.style.webkitTransform = "scale(" + winH / desH + ")";
} else {
    main.style.webkitTransform = "scale(" + winW / desW + ")";
}

var bell = getEle("#bell");
var say = getEle("#say");
var music = getEle("#music");

var num = 0;
function fnLoad() {
    var progress = getEle(".progress");
    var loading = getEle("#loading");
    var arr = ['phoneBg.jpg', 'cubeBg.jpg', ];
    for (var i = 0; i < arr.length; i++) {
        var oImg = new Image();//����һ��ͼƬʵ��
        oImg.src = "images/" + arr[i];
        oImg.onload = function () {
            num++;

            progress.style.width = num / arr.length * 100 + "%";

            if (num == arr.length && loading) {
                progress.addEventListener("webkitTransitionEnd", function () {

                    loading.style.webkitTransform="translate(0," + -desH + "px)";
                    fnOnePage.init();
                }, false)
            }
        }
    }
}
fnLoad();

var fnOnePage = {
    init: function () {


        this.onePage = getEle("#onePage");
        this.speaker = getEle(".speaker");
        var jl=getEle(".resume>.jl");
        jl.id="jl"                         //��������ҳ����id����������

        this.onePage.addEventListener("click", this.touch, false);
    },
    touch: function (e) {
        var target = e.target;
        var jl=getEle(".jl");
        var skill=getEle(".skill")
        if (target.className == "next") {//

            target.parentNode.style.webkitTransform = "translate(0," + -desH + "px)";

            fnOnePage.speaker.style.webkitTransform = "translate(0,0)";//������ص�һ��ʼ��λ��
            jl.id=""
            fnOnePage.addId();
        } else if (target.className == "next2") {//��һҳ
            fnOnePage.closePage()
            skill.id=""
        }else if(target.className == "pre"){//��һҳ

            var resume=getEle(".resume");
            resume.style.webkitTransform = "translate(0,0)";

            fnOnePage.speaker.style.webkitTransform = "translate(0,1008px)";
            jl.id="jl"
            removeId()
        }
    },

    closePage: function () {//��onePage���div�Ƶ�������
        this.onePage.style.webkitTransform = "translate(0," + -desH + "px)";
        //var that = this;
        window.setTimeout(function () {
            fnEvaluate();
        }, 1000)
    },


    addId:function(){
        var skill=getEle(".skill");
        skill.id="skill"
    }
}

document.onclick=function(e){
    e=e||window.event;
    var tar= e.target|| e.srcElement;
    var selfEvaluate = getEle(".selfEvaluate");
    var skill=getEle(".skill");
    var onePage=getEle("#onePage");
    var hobby=getEle(".hobby")

    if(tar.className==="pre1"){
        onePage.style.webkitTransform = "translate(0,0)";
        selfEvaluate.id="";
        skill.id="skill"
    }
    if(tar.className==="next3"){
        selfEvaluate.style.webkitTransform="translate(0,"+-desH+"px)"
        selfEvaluate.id="";
        window.setTimeout(function(){
            hobby.id="hobby"
        },500)
    }
    if(tar.className==="pre2"){
        selfEvaluate.style.webkitTransform="translate(0,0)"
        hobby.id="";
        selfEvaluate.id="selfEvaluate";
    }
};




function fnEvaluate() {
    var selfEvaluate = getEle(".selfEvaluate");
    selfEvaluate.id="selfEvaluate"
}
function removeId(){
    var selfEvaluate = getEle(".selfEvaluate");
    var skill=getEle(".skill");
    selfEvaluate.id="";
    skill.id=""

}
