
 //배열선언
var Years = new Array
    ("10년 전",
    "12년 전",
    "11년 전",
    "9년 전",
    "8년 전",
    "7년 전",
    "6년 전",
    "5년 전",
    "4년 전",
    "3년 전");


var pastYear = Math.floor(Math.random(0,1)*10);
var moveSpeed = [1,0];

//----------------12년 전 정치인


var clickThen = new Date();
var clickNow = new Date();
var bombNum = 0;
var pGameOver = 0;
var pNow = new Date();
var pThen = new Date();
var vector = 1;
var pScore = 0;


var bomb = new paper.Raster({
source : './data/bento.png',
position : view.center + [0,50],
visible : false
});
bomb.scale(0.1);


var badPerson = new paper.Raster({
source : './data/politician.png',
position : [view.center.x,200],
visible : false
});
badPerson.scale(0.1);

var pText = new PointText({
    point: [view.center.x, 400],
    content: 'The contents of the point text',
    fillColor: 'black',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    justification : 'center',
    visible : false,
    fontSize: 25
});


function personMove()
{
    
    if(vector==1){
        badPerson.position += [10,0];
        if(badPerson.bounds.right>view.size.width)
        {
            vector = 0;
        }}
    if(vector==0)
        {badPerson.position += [-10,0];
            if (badPerson.bounds.left<0) {
                vector = 1;
            }
        }
} 

var flyingBomb = new Array(3);
var BombSpeed = new Array(3);
flyingBomb[0]= new paper.Raster({
source : './data/bento.png',
position : view.center + [0,50],
visible : false
});
flyingBomb[0].scale(0.1);
BombSpeed[0]=[0,-5];
flyingBomb[1]= new paper.Raster({
source : './data/bento.png',
position : view.center + [0,50],
visible : false
});
flyingBomb[1].scale(0.1);
BombSpeed[1]=[0,-5];
flyingBomb[2]= new paper.Raster({
source : './data/bento.png',
position : view.center + [0,50],
visible : false
});
flyingBomb[2].scale(0.1);
BombSpeed[2]=[0,-5];

function SpeedCheck(This){
    var clickTime = clickNow - clickThen;
    if(clickTime<150)
    {BombSpeed[This] = [0,-10];}
    else if(150<=clickTime<500)
    {BombSpeed[This] = [0,-20];}
    else
    {BombSpeed[This] = [0,-60];}
}

function pOvercheck(){
    if(badPerson.contains(flyingBomb[0].position)){
    pGameOver += 1;
    badPerson.source = './data/politicianRed.png';
    }
    if (badPerson.contains(flyingBomb[1].position)) {
        pGameOver += 1;
    badPerson.source = './data/politicianRed.png';
    }
    if (badPerson.contains(flyingBomb[2].position)) {
        pGameOver += 1;
    badPerson.source = './data/politicianRed.png';
    }
 
}


function pPlay()
{
    if(pGameOver==0)
    {personMove();
    }
    if(pGameOver==1)
    {
    pNow = new Date();
    pText.visible = true;
    pScore = (pNow - pThen)/1000;
    pGameOver = 2;
    }
}

//----------------------11년 전

var textCount = 20;



var apple1 = new Array(textCount);
var bubble2 = new Array(textCount);
function makeApple()
{
    for (var i = 0; i < textCount; i++) {
        apple1[i]= new Raster({
            position: [50+(i*100*Math.random()), 50+(i*100*Math.random())],
            source : './data/apple.png'
        });
        apple1[i].scale((i+1)/textCount);
        apple1[i].insertBelow(text);
    
      bubble2[i]= new Raster({
            position: [50+(i*100*Math.random()), 50+(i*100*Math.random())],
            source : './data/bubble.png'
        });
        bubble2[i].scale((i+1)/textCount);
        bubble2[i].insertBelow(text);
        }
    
}

//------------------8년 전 이미지
var airplane = new Raster({
source : './data/airplane.png',
position : [0,view.center.y-120],
visible : false
});
airplane.scale(0.2);
//------------------------------
//------------------7년 전 모델워킹

var path = new Raster({
source : './data/model.png',
position : view.center+[0,-40],
visible : false
});
path.scale(0.3);

var path2 = new Raster({
source : './data/modelRed.png',
position : view.center+[0,-40],
visible : false
});
path2.scale(0.3);

var tri = new Raster({
source : './data/highheels.png',
position : view.center + [400,80],
visible : false
});
tri.scale(0.2);

var tri2 = new Raster({
source : './data/hanger.png',
position : view.center + [600,80],
visible : false
});
tri2.scale(0.2);

//------------------------
//5년전 뒤통수
var manHead1 = new Raster({
source : './data/back.png',
position : view.center-[0,100],
visible : false
});
manHead1.scale(0.15);

var manHead2 = new Raster({
source : './data/profile.png',
position : view.center-[0,100],
visible : false
});
manHead2.scale(0.15);

var manHead3 = new Raster({
source : './data/face.png',
position : view.center-[0,100],
visible : false
});
manHead3.scale(0.15);

var manHead4 = new Raster({
source : './data/redFace.png',
position : view.center-[0,100],
visible : false
});
manHead4.scale(0.15);

var bat = new Raster({
    source : './data/bat.png',
    position : view.center,
    rotation:40,
    visible : false
})
bat.scale(0.15)


var colorSelect = Math.floor(Math.random()*10);


var hitText = new PointText({
    point: view.center-[0,150],
    content: '게임 오버\n\n다시 시작하려면 클릭하세요!',
    fillColor: 'black',
    fontSize: 25,
    justification : 'center',
    visible : false
});


var timeStop1 = new Date();
var timeStop2 = new Date();
var timer = 0;


//----------------7년전 모델워킹 함수

function jump()
{
    path.tween({ 
            'position.y': view.center.y - 280
            }, 
        {
        easing: 'easeInOutCubic',
        duration: 200
        });
}
function jumpdown(){
    path.tween({ 
            'position.y': view.center.y-40
            }, 
        {
        easing: 'easeInOutCubic',
        duration: 300
        });
}

var gameOver = 0;
var Score = 0;
var then = new Date();
var now = new Date();

function overcheck(){
    if(path.contains(tri.position)){
    gameOver += 1;
    path.visible = false
    path2.visible = true;
    }
    if (path.contains(tri2.position)) {
        gameOver += 1;
        path.visible = false;
        path2.visible = true;;
    }
 
}


var clickText = new PointText({
        point: [view.center.x, 250],
        content: '게임을 다시 하시려면 저를 더블클릭하세요!',
        fillColor: 'black',
        fontSize: 25,
        justification : 'center',
        visible:false
});

var scoreText = new PointText({
        point: [view.center.x, 200],
        content: Score + '초 걸었습니다!',
        fillColor: 'black',
        fontSize: 25,
        justification : 'center',
        visible:false
    });

function Play()
{
    if(gameOver==0)
    {
    move(tri,[-7,0]);
    move(tri2,[-5,0]);
    }
    if(gameOver==1)
    {
    scoreText.visible = true;
    clickText.visible = true;
    now = new Date();
    Score = (now - then)/1000;
    gameOver = 2;
    }
}

//6년 전 학교 선택-----------------------------------
var building1 = new Raster({
source : './data/left.png',
position : view.center-[200,100],
visible : false
});
building1.scale(0.2);

var buildingRed = new Raster({
source : './data/red.png',
position : view.center-[200,100],
visible : false
});
buildingRed.scale(0.2);

var building2 = new Raster({
source : './data/right.png',
position : view.center+[200,-100],
visible : false
});
building2.scale(0.2);

var buildingBlue = new Raster({
source : './data/blue.png',
position : view.center+[200,-100],
visible : false
});
buildingBlue.scale(0.2);

//---------------9번 성지글



var textCount = 20;



var textNew1 = new Array(textCount);
var textNew2 = new Array(textCount);
function makeText()
{
    for (var i = 0; i < textCount; i++) {
        textNew1[i]= new PointText({
            point: [50+(i*100*Math.random()), 50+(i*100*Math.random())],
            content: '성지순례 왔습니다',
            fillColor: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 40,
        });
        textNew1[i].scale((i+1)/textCount);
        textNew1[i].opacity = 1-(i/textCount);
    
      textNew2[i]= new PointText({
            point: [50+(i*100*Math.random()), 50+(i*100*Math.random())],
            content: '소오름...',
            fillColor: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 45,
        });
        textNew2[i].scale((i+1)/textCount);
        textNew2[i].opacity =1-(i/textCount);
        }
    
}
//----4년전 시험문제
var sTest98 = new paper.Raster({
source : './data/98.png',
position : view.center + [0,-120],
visible : false
});
sTest98.scale(0.25);

var sTest100 = new paper.Raster({
source : './data/100.png',
position : view.center+ [0,-120],
visible : false
});
sTest100.scale(0.25);

//---디버그용-------------------------


//공통-------------------------
function move(This,moveSpeed)
{

    This.position += moveSpeed;
    if (This.bounds.left > view.size.width) {
            This.position.x = -view.bounds.x;
        }
    if (This.bounds.right < 0) {
        This.position.x = view.size.width;
    }
    if  (This.bounds.bottom < 0) {
            This.position.y = view.size.height;
        }
}


function printImage(){
var raster = new Raster({
    position : view.center - [0,120]
    });


   if(pastYear == 2)
    {
        raster.source = './data/skool.jpg';
    }
    if(pastYear == 3)
    {
        raster.source = './data/time.jpg';
    }
    if (pastYear==9) {
        raster.source = './data/internet.jpg'
    }
  

    raster.scale(0.2);
}

if(pastYear==0)
{
    var text = new PointText({
      point: view.center-[0,100],
      content : '클릭하여 비트코인을 불리세요!',
      justification: 'center' ,
      fillColor: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      });
}


  var text = new PointText({
      point: view.center - [0, 420],
      justification: 'center' ,
      fillColor: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      });
    text.content = Years[pastYear];

    var textStatement = new PointText({
    point: view.center + [0, 200],
    justification: 'center' ,
    fillColor: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    });


function printYear(){


    if(pastYear == 0)
    {
        textStatement.content = '10년 전에 떨어지게 된다면, 비트코인을 살 것이다.\n\n로또 번호는 기억하지 못하겠지만 비트코인 값이 오르는 것은 기억할 수 있으니까.\n\n비트코인을 사서 값이 충분히 오르면 되팔아 부자가 되고 싶다.';
    }
    else if(pastYear == 1)
    {
        textStatement.content = '12년 전에 떨어지게 된다면, 정치인을 암살할 것이다.\n\n락스 같은 독극물을 먹여도 좋고, 도시락 폭탄을 던질 수도 있겠다.'; 
    }
    else if(pastYear == 2)
    {
        textStatement.content = '11년 전에 떨어지게 된다면, 교복을 입고 데이트할 것이다.\n\n지금도 교복은 입을 수 있지만, 이벤트 성이 아닌 일상복으로써의 교복을 입고 데이트하고 싶다.\n\n그때만의 풋풋한 경험을 하고 싶다.';   
    }
    else if(pastYear == 3)
    {
        textStatement.content = '9년 전에 떨어지게 된다면, 시간을 충실히 보낼 것이다.\n\n공부도 열심히 하고, 그림도 열심히 그리고.\n\n그때 그러지 못했기 때문에 지금이 불만족스러운 것이라 생각한다.';
    }
    else if(pastYear == 4)
    {
        textStatement.content = '8년 전에 떨어지게 된다면 기술을 배워 해외로 이주하고 싶다.\n\n한국은 희망이 없다. 나라를 뜰 수 있게 기술을 배우고 싶다.';
    }
    else if(pastYear == 5)
    {
        textStatement.content = '7년 전에 떨어지게 된다면 모델 워킹 연습을 하고 싶다.\n\n내 키가 지금 180cm인데, 당시에는 키가 더 클 줄 알고 모델이 하고 싶었다.\n\n키가 더 자라지 않아서 관뒀는데, 그러지 않고 연습하고 싶다.';
    }
    else if(pastYear == 6)
    {
        textStatement.content = '6년 전에 떨어지게 된다면 다시 학교를 선택하고 싶다.\n\n돌고 돌아서 결국 오긴 했지만, 그때 이 학교를 선택했더라면 하는 아쉬움이 있다.';
    }
    else if(pastYear == 7)
    {
        textStatement.content = '5년 전에 떨어지게 된다면 싫어하는 친구 뒤통수를 때리고 싶다.\n\n아주 장렬하게 때려서 복수하고 싶다. 어차피 지금은 연락이 끊겼으니까 뒤탈이 없지 않을까.';
    }
    else if(pastYear == 8)
    {
        textStatement.content = '4년 전에 떨어지게 된다면 시험 점수를 만점 받고 싶다.\n\n그 때 아주 쉬운 문제를 실수로 틀려서 만점을 놓쳤다.\n\n다시 본다면 그런 실수는 안 할 텐데!';
    }
    else if(pastYear == 9)
    {
        textStatement.content = '3년 전에 떨어지게 된다면 인터넷에 성지글을 쓰고 싶다.\n\n3년 전으로 돌아가봤자 내 인생을 바꿀 수 있는 기회는 별로 없는 것 같다.\n\n예언글이라도 써서 사람들에게 관심 받고 싶다.';
    }

}



var button2 = new Raster({
    position : view.center + [0, 400],
    source : './data/button1.png'
    });
button2.scale(0.2);

//---------------------------------------
//main







//모델워킹 실행 함수
if(pastYear==1)
{
    bomb.visible = true;
    badPerson.visible = true;
}
if(pastYear==2){
    makeApple();
     for (var i = 0; i < textCount; i++){
            apple1[i].onMouseDown = function(event) {
        this.remove();
    }
            bubble2[i].onMouseDown = function(event) {
        this.remove();
    }
        }
}
if(pastYear==5){
    path.visible = true;
    tri.visible = true;
    tri2.visible = true;
}
if (pastYear==7) {
    bat.visible = true;
}
if(pastYear == 6){

    building1.visible = true;
    building2.visible = true;
}
if(pastYear == 8)
{
    sTest98.visible = true;
}
if(pastYear == 9)
{
    makeText();
}

//메인 함수
function onFrame(event){
   
    
    button2.rotation += 1;
    if (pastYear==1) {
        pPlay();
        pOvercheck();
        pText.content = pScore + '초 걸렸습니다! \n 다시 시작하려면 저를 누르세요!'
        flyingBomb[0].position += BombSpeed[0];
        flyingBomb[1].position += BombSpeed[1];
        flyingBomb[2].position += BombSpeed[2];
     }
     if (pastYear==2)
    {
          for (var i = 0; i < textCount; i++){
            move(apple1[i],[0,-0.2*(i+1)]);
            move(bubble2[i],[0,-0.2*(i+1)]);
        }
    }
    if(pastYear== 4){
    airplane.visible = true;
    move(airplane,[-4,0]); 
    }
    if(pastYear == 5)
    {
    overcheck()
    Play()
    scoreText.content = Score+'초 걸었습니다';
    };
    if(pastYear == 7)
    {
        timeStop2 = new Date();
        timer = timeStop2- timeStop1;
            if(timer > 500){
            timeStop1=new Date();
            colorSelect = Math.floor(Math.random()*10);
                if(colorSelect > 5)
                {   manHead1.visible=false;
                    manHead2.visible=true;
                    manHead3.visible=false;
                }
                else if(colorSelect>2)
                {   manHead1.visible=false;
                    manHead2.visible=false;
                    manHead3.visible=true;
                }
                else{
                    manHead1.visible=true;
                    manHead2.visible=false;
                    manHead3.visible=false;
                }
            }
    }
    if (pastYear==9)
    {
          for (var i = 0; i < textCount; i++){
            move(textNew1[i],[0,-0.2*(i+1)]);
            move(textNew2[i],[0,-0.2*(i+1)]);
        }
    }
    
}
onMouseMove = function(event) {
   if (pastYear == 1) {
    bomb.position = [event.point.x, view.center.y+50];
   }
    else if (pastYear==7) {
    bat.position = event.point+[30,30];
    }
}



function onMouseDown(event)
{
    if(pastYear == 0)
    {
        var coin = new Raster({
                source : './data/bitcoin1.png',
                position : event.point,
                visible : true
            });
        coin.scale(0.2);
        coin.insertBelow(text);
    }
    else if(pastYear == 1)
    {
        clickThen = new Date();
    }
    else if (pastYear ==5) 
    {
        jump();
        setTimeout(function(){jumpdown();}, 200);
    }
    else if(pastYear ==7){
    bat.rotate(-40);}
}

function onMouseUp(event){
    if(pastYear==1){
         clickNow = new Date();
       if(bombNum==0){
        flyingBomb[0].position=[event.point.x, view.center.y]
        flyingBomb[0].visible=true;
        SpeedCheck(0);
        bombNum = 1;
        }
        else if(bombNum==1){
        flyingBomb[1].position=[event.point.x, view.center.y]
        flyingBomb[1].visible=true;
        SpeedCheck(1);
        bombNum = 2;
        }
        else if(bombNum==2){
        flyingBomb[2].position=[event.point.x, view.center.y]
        flyingBomb[2].visible=true;
        SpeedCheck(2);
        bombNum = 0;
        }
    }
    else if (pastYear==7){bat.rotate(40);}
}
//12년 전 정치인 게임오버 출력함수

pText.onMouseEnter = function(event)
{
    pText.fillColor = 'red';
}
pText.onMouseLeave = function(event)
{
    pText.fillColor = 'black';
}
pText.onMouseDown = function(event)
{
pGameOver = 0;
pThen = new Date();
pScore = 0;
badPerson.source = './data/politician.png';
pText.visible = false;
}



//7년전 게임오버 출력함수

clickText.onMouseEnter = function(event)
{
    clickText.fillColor = 'red';
}
clickText.onMouseLeave = function(event)
{
    clickText.fillColor = 'black';
}
clickText.onMouseDown = function(event)
{
gameOver = 0;
then = new Date();
Score = 0;
path2.visible = false;
path.visible = true;
scoreText.visible = false;
clickText.visible = false;
}


//6년전 학교선택
building1.onMouseEnter = function(Event)
{
    buildingRed.visible = true;
}

buildingRed.onMouseLeave = function(Event)
{
    buildingRed.visible = false;
}

building2.onMouseEnter = function(Event)
{
    buildingBlue.visible = true;
}

buildingBlue.onMouseLeave = function(Event)
{
   buildingBlue.visible = false;
}

//4년전 시험지 바꾸기 출력함수

sTest98.onMouseDown = function(event)
{
    sTest100.visible = true;
}

//5년전 뒤통수 게임오버 출력함수

manHead3.onMouseDown = function(event)
{
    hitText.visible = true;
    manHead4.visible = true;
}

manHead4.onMouseDown = function(event){
    hitText.visible = false;
    manHead4.visible = false;
}

//버튼 새로고침 함수
button2.onMouseEnter = function(event){
    button2.source = './data/button2.png';
}

button2.onMouseLeave = function(event){
    button2.source = './data/button1.png';
}

button2.onMouseDown = function(event){
    location.href ="index.html";
}


printImage();
printYear();
