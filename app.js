/*

 Dentro da Linha / Fora da Linha

 Argumento, Desenhos e Desenvolvimento por Felipe Veeck
 Programação por Pedro Rocha

 Brasil - 2019-2020

 */

//  VARIAVEIS

//Configuracao de Audio e Sons
let abertura;
let telaApp;
let isMobile = false;

var msnPlay = 0;
var somMsn;
var whats;
var somEscadas;
var somPorta;

var somMenu1;
var somMenu2;
var somCore;
var somDentro;
var somFora;

var somCaneta;
var somGoogle;
var somCoreLinhas;

var somHall2;
var somCaverna;
var somOracao;
var somJesus;

var somFogo;

var somSalaFinal;
var somRetornoBaile;


var rmenuX;
var rmenuY;
var rmenuS;

//Registro do tempo do programa
var segRegister;
var AppTSeg = 0;
//Registro do click
var last;
var mousePressedTrue = false;
var doubleClickTrue = false;

//Cursor / Seta do mouse
var seta;
var divisor = 40;
//Controlador de CENAS ou FASES.. mas não é um jogo
var cenaNum = 0;

//FADES In e Out
var fadeIn = false;
var fadeOut = false;
var fadeOpac = 255;
var fadeVel = 50;


//***CENAS ou FASES.. mas não é um jogo***
//Desktop
var desktop0;
var desktop1;
var desktop2;
var desktop3;
var msn0;
var msn1;
var msn2;

var seletorDesktop = 0;
var mouseNaBarra = false;
var iconeSelecionado = false;
var progSelecionado = false;
var msnSelecionado = false;
var barraSelecionada = false;
var progClicado = false;
var msnClicado = false;

//Inicializando
var init;

//Menu Principal
var menu1;
var menu1Frame;
var menuTimer = 0;

var mensagemMenu;
var mensagemFrame;
var mensagemAberta = false;
var mensagemFechada = false;

var menu2;
var menu2Click;

var core0;
var core5;
var core30;
var core50;
var core70;
var core85;
var core95;
var core100;

//Fora da Casa
var fora1;
var fora1Click;
var fora1msn;
var fora2;
var fora2Click;
var fora3porta;
var fora3Click;

var foraMSNclose = false;

var portaAbrindo;
var pAbre;
var somaXzoom = 0;
var somaYzoom = 0;
var Zoom = 2;

//Dentro da Casa
var hall1;
var hall2;
var hall3;
var Hall1;

var hall1Msn;
var hall1Seta;

var portaAbre1;
var phall1;
var portaAbre2;
var phall2;
var portaAbre3;
var phall3;

var porta1Aopen = false;
var porta2Aopen = false;
var porta3Aopen = false;

var p1Aabriu = false;
var p2Aabriu = false;
var p3Aabriu = false;

var porta1Bopen = false;
var porta2Bopen = false;
var porta3Bopen = false;

var p1Babriu = false;
var p2Babriu = false;
var p3Babriu = false;

var porta1A;
var porta2Aana;
var portaAna;
var porta2Adig;
var portaDig;
var porta2Atec;
var portaTec;
var porta3A;

var porta1Bcav;
var porta1Barv;

var porta2Bora;
var porta2Btra;

var porta3Bjes;
var porta3Bcru;

var p2A = 0;

var contador = 0;
var tituloHall2;

//Escada hall1
var escada1;
var subindo1;
var escada2;
var subindo2;

//OLHOS
var invisivel;
var inviClick;
var olhosMsn1;
var olhosMsn2;
var olhosMsn3;
var olhosFechados;
var palpebra;

//Escada hall2
var escada2andar;

//Whatsapp
var whatsBlock;
var whatsBlack;
var whatsFim;
var whatsIn;
var whatsGif;
var whatsPlaying = false;
var whatsPlayed = false;
var whatsY;
var whatsShow = false;
var whatsBlocked = true;
var whatsOpacite = 0;

//Sala Final
var portaJanela;
var portaJanelaAberta = false;

var portaJanelaPertin;
var portaJanelaPertin2;

//Retrospectiva e Animação final
var retrospectiva;
var retroCount = 0;
var giro1;
var giro2;
var subindoFim;
var descendoFim;
var retornoBranco;
var mensagemfinal;
var mensagemfinal2;
var mensagemfinal3;
var mensagemfinal4;
var mensagemfinal5;
var fundoFinal;
var fim;

//Linhas do Fundo fora da casa
var linhaSpace = 75;
var linhaAngulo = 5;
var linhaYA = 0;
var linhaYB = 0;
var pl;
var plInterval;
let p = 0;

function preload(){
  pl = document.querySelector('#porcento');

  somMsn = loadSound("data/sons/mp3/msn.mp3");
  whats = loadSound("data/sons/mp3/audio whatsapp.mp3");
  somEscadas = loadSound("data/sons/mp3/escadas.mp3");
  somPorta = loadSound("data/sons/mp3/porta-abrindo.mp3");

  somMenu1 = loadSound("data/sons/mp3/menu1.mp3");
  somMenu2 = loadSound("data/sons/mp3/menu2.mp3");
  somCore = loadSound("data/sons/mp3/coração-carregando.mp3");
  somDentro = loadSound("data/sons/mp3/lado-de-dentro.mp3");
  somFora  = loadSound("data/sons/mp3/lado-de-fora.mp3");

  somCaneta = loadSound("data/sons/mp3/caneta.mp3");
  somGoogle = loadSound("data/sons/mp3/google.mp3");
  somCoreLinhas = loadSound("data/sons/mp3/coração-linhas.mp3");

   somHall2 = loadSound("data/sons/mp3/hall2.mp3");
  somCaverna = loadSound("data/sons/mp3/caverna.mp3");
  somOracao = loadSound("data/sons/mp3/oração.mp3");
  somJesus = loadSound("data/sons/mp3/jesus.mp3");

  somFogo = loadSound("data/sons/mp3/fogo.mp3");

  somSalaFinal = loadSound("data/sons/mp3/som sala final.mp3");
  somRetornoBaile = loadSound("data/sons/mp3/retorno ao baile.mp3");

  //Inicializando

  console.log ("Iniciando Desktop");
  desktop0 = loadImage("data/desktop/desktop0.jpg");
  desktop1 = loadImage("data/desktop/desktop1.jpg");
  desktop2 = loadImage("data/desktop/desktop2.jpg");
  desktop3 = loadImage("data/desktop/desktop3.jpg");
  console.log ("Iniciando MSM Messenger");
  msn0 = loadImage("data/msn/msn00.jpg");
  msn1 = loadImage("data/msn/msn01.jpg");
  msn2 = loadImage("data/msn/msn02.jpg");
  console.log ("Iniciando Menus de Interface");
  init = new GifJpg("data/inicializando/", 4);

  menu1 = new GifJpg("data/menu1/", 14);
  menu1Frame = loadImage("data/menu1/00.jpg");
  menu2 = loadImage("data/menu2/Imagem (20).jpg");
  menu2Click = loadImage("data/menu2/menu clique.jpg");

  mensagemMenu = new GifJpg("data/mensagem/mensagem", 9);
  mensagemFrame = loadImage("data/mensagem/mensagem00.jpg");

  console.log ("Estabelecendo uma relação direta com o seu coração S2");

  core0 = new GifJpg("data/anima core/0/core", 8);
  core5 = new GifJpg("data/anima core/5/core", 8);
  core30 = new GifJpg("data/anima core/30/core", 8);
  core50 = new GifJpg("data/anima core/50/core", 8);
  core70 = new GifJpg("data/anima core/70/core", 8);
  core85 = new GifJpg("data/anima core/85/core", 8);
  core95 = new GifJpg("data/anima core/95/core", 8);
  core100 = new GifJpg("data/anima core/100/core", 8);
  fora1 = loadImage("data/lado de fora/imagem1.png");
  fora1Click = loadImage("data/lado de fora/imagem1-clique.png");
  fora1msn = loadImage("data/lado de fora/msn.png");
  fora2 = loadImage("data/lado de fora/imagem2.png");
  fora2Click = loadImage("data/lado de fora/imagem2-clique.png");
  fora3porta = loadImage("data/lado de fora/porta abrindo/imagem3 -porta1.jpg");
  fora3Click = loadImage("data/lado de fora/porta abrindo/imagem3-clique.png");
  portaAbrindo = new GifJpg("data/lado de fora/porta abrindo/imagem3 -abrindo", 3);
  pAbre = loadImage("data/lado de fora/porta abrindo/imagem3 -abrindo02.jpg");

  Hall1 = loadImage("data/hall 1/hall-00.jpg");
  hall2 = new GifJpg("data/hall 2/hall", 11);
  hall3 = new GifJpg("data/hall3/hall3-", 25);

  //Primeiro Andar
  hall1Msn = new GifJpg("data/hall 1/mensagem-escada", 3);
  hall1Seta = new GifJpg("data/hall 1/mensagem-escada", 2);

  portaAbre1 = new GifJpg("data/porta abrindo hall1/porta", 5);
  phall1 = loadImage("data/porta abrindo hall1/porta04.jpg");
  portaAbre2 = new GifJpg("data/porta abrindo hall2/porta", 5);
  phall2 = loadImage("data/porta abrindo hall2/porta04.jpg");
  portaAbre3 = new GifJpg("data/porta abrindo hall3/porta", 9);
  phall3 = loadImage("data/porta abrindo hall3/porta04.jpg");

  porta1A = new GifJpg("data/caneta/caneta", 8);

  porta2Aana = new GifJpg("data/animação google/analógico/google", 12);
  portaAna = loadImage("data/animação google/analógico/google11.jpg");
  porta2Adig = new GifJpg("data/animação google/digital/google", 10);
  portaDig = loadImage("data/animação google/digital/google09.jpg");
  porta2Atec = new GifJpg("data/animação google/tecnologia/google", 13);
  portaTec = loadImage("data/animação google/tecnologia/google12.jpg");

  porta3A = new GifJpg("data/coração linhas/", 20);

  escada1 = new GifJpg("data/escada 1o andar - lance 1/escada", 6);
  subindo1 = new GifJpg("data/escada 1o andar - lance 1/subindo", 3);
  escada2 = new GifJpg("data/escada 1o andar - lance 2/escada", 2);
  subindo2 = new GifPng("data/escada 1o andar - lance 2/subindo", 3);

  //Segundo Andar

  tituloHall2 = new GifPng("data/hall 2/segundo-andar-letreiro", 2);

  porta1Bcav = new GifJpg("data/caverna/caverna", 2);
  porta1Barv = new GifJpg("data/caverna/animação arvores/ani", 33);
  porta2Bora = new GifJpg("data/oração/", 8);
  porta2Btra = new GifJpg("data/oração/tralhas", 3);
  porta3Bjes = new GifPng("data/jesus/jzz", 2);
  porta3Bcru = new GifPng("data/jesus/animação cruz/", 83);

  portaAbre2 = new GifJpg("data/porta abrindo hall2/porta", 5);

  invisivel = new GifJpg("data/olhos/invisível", 2);
  inviClick = new GifJpg("data/olhos/invisível-clique", 2);
  olhosMsn1 = new GifJpg("data/olhos/olhos-mensagem1/olhosmensagem", 2);
  olhosMsn2 = new GifJpg("data/olhos/olhos-mensagem2/olhosmensagem", 2);
  olhosMsn3 = new GifJpg("data/olhos/olhos-mensagem3/olhosmensagem", 2);
  olhosFechados = new GifJpg("data/olhos/olhosfechados", 2);
  palpebra = new GifJpg("data/olhos/palpebra", 7);

  escada2andar = new GifJpg("data/escada 2o andar/escada", 4);

  whatsBlack = loadImage("data/whats/whats00.png");
  whatsBlock = loadImage("data/whats/whats01.png");
  whatsFim = loadImage("data/whats/whats57.png");
  whatsIn = loadImage("data/whats/whats02.png");
  whatsGif = new GifPngOff("data/whats/whats", 58, 2);

  portaJanela = loadImage("data/quarto com janela.png");
  portaJanelaPertin = loadImage("data/janela.png");
  portaJanelaPertin2 = loadImage("data/janela2.png");

  retrospectiva = new GifPng("data/retrospectiva/c/", 32);
  giro1 = new GifPng("data/giro/", 46);
  giro2 = new GifPng("data/giro2/", 37);

  subindoFim = new GifPng("data/subindo/", 75);
  descendoFim = new GifPng("data/descendo/", 64);

  retornoBranco = new GifPng("data/mensagemfinalbranco", 3);
  mensagemfinal = new GifPng("data/mensagemfinal1-", 11);
  mensagemfinal2 = new GifPng("data/mensagemfinal2-", 11);
  mensagemfinal3 = new GifPng("data/mensagemfinal3-", 11);

  mensagemfinal4 = new GifPng("data/portal fundo/mensagemfinal3/", 6);

  mensagemfinal5 = new GifPng("data/portal fundo/", 6);


  fundoFinal = new GifPng("data/fundo organico e metálico/", 69);
  console.log('fim do preload');
  plInterval = setInterval(()=>{
    p += random(2,6);
    pl.innerHTML = "Carregando..."+p+"%";
  }, 10000
  );
}

function setup(){
  clearInterval(plInterval);
  var cnv = createCanvas(windowWidth, windowHeight);

  cnv.style('display', 'block');
  cnv.parent('app-holder');
  whatsY = height;
  if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
    isMobile = true;
  }
  //Configuracoes do Programa
  abertura = document.querySelector('#abertura');
  telaApp = document.querySelector('#app-holder');
  abertura.style.display = 'block';
  frameRate(12);
  background(0);
  console.log ("Aplicativo Ativo");
  segRegister = 0;



  fim = createVideo("data/fim.mp4");
  fim.hide();

  console.log ("Pronto para Abrir o Portal");
}

function draw(){

  if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
  }

  background(0,0,0);
  console.log(mousePressedTrue+"   "+doubleClickTrue)
  //Configuracoes do Programa
  runningApp();
  if (millis()-last>500) {
    doubleClickTrue = false;
  }

  if (millis()-last>50) {
    mousePressedTrue = false;
  }

  imageMode(CENTER);

  //REGUA de Proporcao de Cenas
  var desk = pI(desktop0);
  var rdeskX = width/2-(desk.x/32.8);
  var rdeskY = (height/2)+(height/3.55);
  var rdeskS = desk.y/10;

  var menuDim = pI(menu1Frame);
  rmenuX = width/2-(menuDim.x/32.8);
  rmenuY = (height/2)+(height/3.55);
  rmenuS = menuDim.y/10;

  var mensDim = pI(mensagemFrame);
  var rmensX = width/2-(mensDim.x/32.8);
  var rmensY = (height/2)+(height/3.55);
  var rmensS = mensDim.y/10;



  //Selecao de cenas

  if (progClicado && cenaNum == 0) {
    cenaNum = 1;
    fadeIn = false;
    menuTimer = millis();
  }


  //Cenas

  switch(cenaNum) {
  case 0:
    //Desktop

    if (!iconeSelecionado) {
      image(desktop0, width/2, height/2, menuDim.x, menuDim.y);
    } else {
      if (progSelecionado) {
        msnSelecionado = false;
        barraSelecionada = false;
        image(desktop1, width/2, height/2, menuDim.x, menuDim.y);

        // if (keyIsPressed) {
        //   if (key == CODED) {
        //     if (keyCode == UP || keyCode == DOWN) {
        //       msnSelecionado = true;
        //     }
        //   } else if ( key == ENTER || key == RETURN) {
        //     progClicado = true;
        //   }
        // }
        if (doubleClickTrue && ((mouseX>rdeskX/11 && mouseX<rdeskX/11+rdeskS && mouseY>rdeskY/4.8 && mouseY < rdeskY/4.8+rdeskS)||
          (mouseX>rdeskX/30 && mouseX<rdeskX/30+rdeskS*2 && mouseY>rdeskY/3.5 && mouseY < rdeskY/3.5+rdeskS/1.4))) {
          progClicado = true;
        }
      } else if (msnSelecionado) {
        progSelecionado = false;
        barraSelecionada = false;
        image(desktop2, width/2, height/2, menuDim.x, menuDim.y);

        // if (keyIsPressed) {
        //   if (key == CODED) {
        //     if (keyCode == UP || keyCode == DOWN) {
        //       progSelecionado = true;
        //     }
        //   } else if ( key == ENTER || key == RETURN) {
        //     menuTimer = millis();
        //     msnClicado = true;
        //   }
        // }
        if (doubleClickTrue && ((mouseX>rdeskX/11 && mouseX<rdeskX/11+rdeskS && mouseY > rdeskY/22 && mouseY < rdeskY/22+rdeskS)||
          (mouseX>rdeskX/30 && mouseX<rdeskX/30+rdeskS*1.8 && mouseY > rdeskY/8 && mouseY < rdeskY/8+rdeskS/2.2))) {
          menuTimer = millis();
          msnClicado = true;
        }
      } else if (barraSelecionada) {
        image(desktop3, width/2, height/2, menuDim.x, menuDim.y);
        if (mouseX > rdeskX/100 && mouseX <rdeskX/100+rdeskS*3.25 &&
          mouseY > rdeskY/2.05 && mouseY < rdeskY/2.05+rdeskS*5.5) {
          mouseNaBarra = true;
        }
        if (!mouseNaBarra && mousePressedTrue) {
          barraSelecionada = false;
        }
      }
    }


    //Eventos do mouse
    if (mousePressedTrue) {
      if ((mouseX>rdeskX/11 && mouseX<rdeskX/11+rdeskS && mouseY>rdeskY/4.8 && mouseY < rdeskY/4.8+rdeskS)||
        (mouseX>rdeskX/30 && mouseX<rdeskX/30+rdeskS*2 && mouseY>rdeskY/3.5 && mouseY < rdeskY/3.5+rdeskS/1.4)) {

        iconeSelecionado = true;
        progSelecionado = true;
        barraSelecionada = false;
        msnSelecionado = false;
      } else if ((mouseX>rdeskX/11 && mouseX<rdeskX/11+rdeskS && mouseY > rdeskY/22 && mouseY < rdeskY/22+rdeskS)||
        (mouseX>rdeskX/30 && mouseX<rdeskX/30+rdeskS*1.8 && mouseY > rdeskY/8 && mouseY < rdeskY/8+rdeskS/2.2)) {
        iconeSelecionado = true;
        msnSelecionado = true;

        barraSelecionada = false;
        progSelecionado = false;
      } else if (mouseX > rdeskX/48 && mouseX < rdeskX/48+rdeskS*1.55 &&
        mouseY > rdeskY+(rdeskY/5) && mouseY < rdeskY+(rdeskY/5)+rdeskS/1.8) {
        iconeSelecionado = true;
        barraSelecionada = true;
        progSelecionado = false;
        msnSelecionado = false;
      } else {
        progSelecionado = false;
        msnSelecionado = false;
        iconeSelecionado = false;
      }
    }


    if (msnClicado) {
      image(msn0, width/2, height/2, menuDim.x, menuDim.y);
      if (millis() - menuTimer > 1800) {
        if (msnPlay == 0) {
          somMsn.play();
          msnPlay += 1;
        }
        image(msn1, width/2, height/2, menuDim.x, menuDim.y);
      }
      if (mousePressedTrue) {
        msnClicado = false;
        image(desktop0, width/2, height/2, menuDim.x, menuDim.y);
      }
    }

    if (!fadeIn) {
      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;

  case 1:
    if (millis() - menuTimer < 5000) {
      init.play(width/2, height/2, menuDim.x, menuDim.y);
    } else {
      cenaNum = 2;
    }

    break;

  case 2:
    //Menu Principal
    if (!somMenu1.isPlaying()) {
      somMenu1.loop();
    }

    msnPlay = 1;
    menu1.play(width/2, height/2, menuDim.x, menuDim.y);


    // Mensagem
    if (mensagemAberta) {
      if (mensagemMenu.frame == 7) {
        image(mensagemMenu.images[8], width/2, height/2, mensDim.x, mensDim.y);
        if (mousePressedTrue) {
          if (mouseX > rmenuX*1.58 && mouseY > rmenuY*0.18 && mouseX < rmenuX*1.58+rmenuS/2.1 && mouseY < rmenuY*0.18+rmenuS/2.1) {
            mensagemFechada = true;
            cenaNum = 3;
          }
        }
      } else {
        mensagemMenu.play(width/2, height/2, mensDim.x, mensDim.y);
      }
    }


    if (!fadeIn) {
      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 3:
    //Menu2
    somMenu1.stop();
    if (!somMenu2.isPlaying()) {
      somMenu2.loop();
    }

    image(menu2, width/2, height/2, menuDim.x, menuDim.y);
    if (mousePressedTrue) {
      menuTimer = millis();
      image(menu2Click, width/2, height/2, menuDim.x, menuDim.y);
    }
    break;


  case 4:
    somMenu2.stop();
    if (!somCore.isPlaying()) {
      somCore.loop();
    }

    background(0);
    imageMode(CENTER);
    frameRate(6);
    if (millis() - menuTimer < 8000) {
      core0.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 8000 && millis() - menuTimer < 16000) {
      core5.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 16000 && millis() - menuTimer < 19000) {
      core30.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 19000 && millis() - menuTimer < 22000) {
      core50.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 22000 && millis() - menuTimer < 25000) {
      core70.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 25000 && millis() - menuTimer < 28000) {
      core85.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 28000 && millis() - menuTimer < 31000) {
      core95.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 31000 && millis() - menuTimer < 35000) {
      core100.play(width/2, height/2, width, height);
    } else /*if (millis() - menuTimer > 35000)*/ {
      cenaNum = 5;
    }


    break;
  case 5:
    frameRate(12);
    somCore.stop();
    if (!somFora.isPlaying()) {
      somFora.loop();
    }

    background(0);
    linhasFora();
    if (millis() - menuTimer < 42000) {
      image(fora1, width/2, height/2, desk.x, desk.y);
    } else if (millis() - menuTimer > 3000 && !foraMSNclose) {
      if (msnPlay == 1) {
        somMsn.play();
        msnPlay += 1;
      }
      image(fora1msn, width/2, height/2, desk.x, desk.y);
    }
    if (mouseX > rmenuX*0.75 && mouseY > rmenuY*0.28 && mouseX < rmenuX*0.75+rmenuS/2.1 && mouseY < rmenuY*0.28+rmenuS/2.1) {
      if (mousePressedTrue) {
        foraMSNclose = true;
      }
    }
    if (foraMSNclose) {
      image(fora1, width/2, height/2, desk.x, desk.y);
    }
    if (mouseX > rmenuX*0.95 && mouseY > rmenuY*0.93 && mouseX < rmenuX*0.95+rmenuS && mouseY < rmenuY*0.93+rmenuS) {
      if (mousePressedTrue && foraMSNclose) {
        image(fora1Click, width/2, height/2, desk.x, desk.y);
        cenaNum = 6;
      }
    }


    //textSize(40);
    //strokeWeight(10);
    //stroke(255, 0, 21);
    //text(menuTimer, width/2, height/2);

    if (!fadeIn) {
      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 6:
    background(0);
    linhasFora();
    image(fora2, width/2, height/2, desk.x, desk.y);
    if (mouseX > rmenuX && mouseY > rmenuY*0.7 && mouseX < rmenuX+rmenuS*1.25 && mouseY < rmenuY*0.7+rmenuS) {
      if (mousePressedTrue) {
        image(fora2Click, width/2, height/2, desk.x, desk.y);
        cenaNum = 7;
      }
    }

    if (!fadeIn) {
      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 7:
    image(fora3porta, width/2, height/2, desk.x, desk.y);
    if (mouseX > rmenuX*1.3 && mouseY > rmenuY*0.55 && mouseX < rmenuX*1.3+rmenuS*0.75 && mouseY < rmenuY*0.55+rmenuS*0.75) {
      if (mousePressedTrue) {
        image(fora3Click, width/2, height/2, desk.x, desk.y);
        cenaNum = 8;
      }
    }

    if (!fadeIn) {
      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 8:
    if (!somPorta.isPlaying()) {
      somPorta.play();
    }
    portaAbrindo.play(width/2, height/2, desk.x, desk.y);
    if (portaAbrindo.frame == 2) {
      cenaNum = 9;
    }
    break;
  case 9:
    image(pAbre, width/2-(somaXzoom/10), height/2, desk.x+somaXzoom, desk.y+somaYzoom);

    break;
  case 10:
    somFora.stop();
    if (!somDentro.isPlaying()) {
      somDentro.loop();
    }
    image(Hall1, width/2, height/2, desk.x, desk.y);

    //RECT de TEsTE 1
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.4, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*0.4 && mouseY > rmenuY*0.4 && mouseX < rmenuX*0.4+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      //fill(30,250,30);
      //ellipse(width/6,height/2,200,200);
      if (mousePressedTrue && !porta2Aopen && !porta3Aopen) {
        porta1Aopen = true;
        p1Aabriu = true;
      }
    }
    //RECT de TEsTE 2
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.95, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*0.95 && mouseY > rmenuY*0.4 && mouseX < rmenuX*0.95+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      //fill(30,30,250);
      //ellipse(width/2,height/2,200,200);
      if (mousePressedTrue && !porta1Aopen && !porta3Aopen) {
        porta2Aopen = true;
        p2Aabriu = true;
      }
    }
    //RECT de TEsTE 3
    //fill(230, 30, 40, 120);
    //rect(rmenuX*1.51, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*1.51 && mouseY > rmenuY*0.4 && mouseX < rmenuX*1.51+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      //fill(250,30,30);
      //ellipse(width-width/6,height/2,200,200);
      if (mousePressedTrue && !porta1Aopen && !porta2Aopen) {
        porta3Aopen = true;
        p3Aabriu = true;
      }
    }

    //PORTA CANETA
    if (porta1Aopen) {

      porta1Afunc();
      //portaAbrindo1();
      somDentro.amp(0.0);
      if (!somCaneta.isPlaying()) {
        somCaneta.loop();
      }
      if (doubleClickTrue) {
        somCaneta.stop();
        somDentro.amp(1.0);
        porta1Aopen = !porta1Aopen;
      }
    } else {
      portaAbre1.frame = 0;
    }
    //PORTA GOOGLE
    if (porta2Aopen) {
      somDentro.amp(0.0);

      switch(p2A) {
      case 0 :
        if (!somGoogle.isPlaying()) {
          somGoogle.play();
        }
        porta2AAna();
        if (doubleClickTrue && porta2Aana.frame == 11) {
          somGoogle.stop();
          p2A +=1;
        }
        break;
      case 1 :
        if (!somGoogle.isPlaying()) {
          somGoogle.play();
        }
        porta2ADig();
        if (doubleClickTrue && porta2Adig.frame == 9) {
          somGoogle.stop();
          p2A +=1;
        }
        break;
      case 2 :
        if (!somGoogle.isPlaying()) {
          somGoogle.play();
        }
        porta2ATec();
        if (doubleClickTrue && porta2Atec.frame == 12) {
          somGoogle.stop();
          somDentro.amp(1.0);
          porta2Aopen = !porta2Aopen;
        }
        break;
      }
    } else {
      porta2Aana.frame = 0;
      porta2Adig.frame = 0;
      porta2Atec.frame = 0;
      portaAbre1.frame = 0;
      p2A = 0;
    }



    //PORTA CORACAO LINHAS
    if (porta3Aopen) {
      somDentro.amp(0.0);
      if (!somCoreLinhas.isPlaying()) {
        somCoreLinhas.loop();
      }
      porta3Afunc();
      if (doubleClickTrue) {
        somCoreLinhas.stop();
        somDentro.amp(1.0);
        porta3Aopen = !porta3Aopen;
      }
    } else {
      portaAbre1.frame = 0;
    }

    if (p1Aabriu && p2Aabriu && p3Aabriu && !porta1Aopen && !porta2Aopen && !porta3Aopen) {
      // mensagem para seta da escada -->
      if (msnPlay == 2) {
        somMsn.play();
        msnPlay += 1;
      }
      hall1Msn.play(width/2, height/2, width, height);
      if (mouseX > width-(width/3) && mousePressedTrue) {

        cenaNum = 11;
      }
    }

    if (!fadeIn) {

      fadeInFunc(255);
    } else {
      fadeOpac = 255;
    }
    break;
  case 11:
    menuTimer = millis();
    doubleClickTrue = false;
    cenaNum = 12;
    break;
  case 12:
    somDentro.stop();
    if (!somEscadas.isPlaying()) {
      somEscadas.loop();
    }
    //ESQUERDA
    subindo1.play(width/6, height/2, width/3, height);
    //CENTRO
    escada1.play(width/2, height/2, width/3, height);
    //DIREITA
    subindo1.play(width-(width/6), height/2, width/3, height);
    if (doubleClickTrue) {

      cenaNum = 13;
    }
    break;
  case 13:
    menuTimer = millis();
    cenaNum = 14;
    break;
  case 14:
    if (!mousePressedTrue) {
      //ESQUERDA
      subindo2.play(width/6, height/2, width/3, height);
      //CENTRO
      escada2.play(width/2, height/2, width/3, height);
      //DIREITA
      subindo2.play(width-(width/6), height/2, width/3, height);
    } else {
      cenaNum = 15;
    }

    break;
  case 15:
    somEscadas.stop();
    somDentro.stop();
    if (!somDentro.isPlaying()) {
      somHall2.loop();
    }
    contador+=1;

    if (contador > 5 && contador < 30) {
      hall2.play(width/2, height/2, desk.x, desk.y);
      tituloHall2.play(width/2, height/2, width*0.8, height*0.8);
    } else {
      hall2.play(width/2, height/2, desk.x, desk.y);
    }

    //RECT de TEsTE 1
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.4, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*0.4 && mouseY > rmenuY*0.4 && mouseX < rmenuX*0.4+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      if (mousePressedTrue && !porta2Bopen && !porta3Bopen) {
        porta1Bopen = true;
        p1Babriu = true;
      }
    }
    //RECT de TEsTE 2
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.95, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*0.95 && mouseY > rmenuY*0.4 && mouseX < rmenuX*0.95+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      if (mousePressedTrue && !porta1Bopen && !porta3Bopen) {
        porta2Bopen = true;
        p2Babriu = true;
      }
    }
    //RECT de TEsTE 3
    //fill(230, 30, 40, 120);
    //rect(rmenuX*1.51, rmenuY*0.4, rmenuS*2, rmenuS*2.8);
    if (mouseX > rmenuX*1.51 && mouseY > rmenuY*0.4 && mouseX < rmenuX*1.51+rmenuS*2 && mouseY < rmenuY*0.4+rmenuS*2.8) {
      if (mousePressedTrue && !porta1Bopen && !porta2Bopen) {
        porta3Bopen = true;
        p3Babriu = true;
      }
    }

    if (porta1Bopen) {
      somHall2.amp(0.0);
      if (!somCaverna.isPlaying()) {
        somCaverna.loop();
      }
      porta1B();
      if (doubleClickTrue) {
        somCaverna.stop();
        somHall2.amp(1.0);
        porta1Bopen = !porta1Bopen;
      }
    }
    if (porta2Bopen) {
      somHall2.amp(0.0);
      if (!somOracao.isPlaying()) {
        somOracao.loop();
      }
      porta2B();
      if (doubleClickTrue) {
        somOracao.stop();
        somHall2.amp(1.0);
        porta2Bopen = !porta2Bopen;
      }
    }
    if (porta3Bopen) {
      somHall2.amp(0.0);
      if (!somJesus.isPlaying()) {
        somJesus.loop();
      }
      porta3B();
      if (doubleClickTrue) {
        somJesus.stop();
        somHall2.amp(1.0);
        porta3Bopen = !porta3Bopen;
      }
    }

    if (p1Babriu && p2Babriu && p3Babriu && !porta1Bopen && !porta2Bopen && !porta3Bopen) {
      //escada <--

      doubleClickTrue = false;
      fadeIn = false;
      cenaNum = 16;
    }

    if (!fadeIn) {

      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 16:
    somHall2.stop();
    if (!somFogo.isPlaying()) {
      somFogo.loop();
    }
    if (mousePressedTrue) {
      inviClick.play(width/2, height/2, width, height);
    }
    invisivel.play(width/2, height/2, width, height);
    if (doubleClickTrue) {
      menuTimer = millis();
      cenaNum =  17;
    }
    if (!fadeIn) {

      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 17:

    if (millis() - menuTimer < 500) {
      olhosMsn1.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 500 && millis() - menuTimer < 8000) {
      olhosMsn2.play(width/2, height/2, width, height);
    } else if (millis() - menuTimer > 8000 && millis() - menuTimer < 16000) {
      olhosMsn3.play(width/2, height/2, width, height);
    } else {
      cenaNum =  18;
    }

    break;
  case 18:

    palpebra.play(width/2, height/2, width, height);

    if (palpebra.frame == 6) {
      cenaNum =  19;
    }

    break;

  case 19:

    olhosFechados.play(width/2, height/2, width, height);
    if (doubleClickTrue) {
      menuTimer = millis();
      cenaNum =  20;
    }

    if (!fadeIn) {

      fadeInFunc(0);
    } else {
      fadeOpac = 255;
    }
    break;
  case 20:
    somFogo.stop();
    if (!somEscadas.isPlaying()) {
      somEscadas.loop();
    }
    escada2andar.play(width/2, height/2, width, height);
    if (doubleClickTrue && (millis()-menuTimer) > 3000) {
      cenaNum = 21;
    }
    break;
  case 21:
    somEscadas.stop();

    if (mouseX > rmenuX*0.93 && mouseY > rmenuY*0.4 && mouseX < rmenuX*0.93+rmenuS*1.9 && mouseY < rmenuY*0.4+rmenuS*3.1) {
      if (mousePressedTrue) {
        // porta final
        if (whatsPlayed) {
          portaJanelaAberta = true;
          cenaNum = 22;
        } else {
          //whats aparece
          whatsShow = true;
        }
      }
    }
    if (whatsY == 0 && whatsShow && mouseX > rmenuX*0.89 && mouseY > rmenuY*0.38 && mouseX < rmenuX*0.89+rmenuS/4.9 && mouseY < rmenuY*0.38+rmenuS/3.4) {
      if (mousePressedTrue) {
        // Play no Whatsapp
        whatsPlaying = true;
        if (!whats.isPlaying()) {
          frameRate(12);
          whats.play();
        } else {
          frameRate(20);
        }
      }
    }

    hall3.play(width/2, height/2, width, height);

    //// RECT de TEsTE 2
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.93, rmenuY*0.4, rmenuS*1.9, rmenuS*3.1);

    if (!whatsPlaying) {

      image(whatsIn, width/2, height/2+whatsY, whatsBlack.width, whatsBlock.height);
      if (whatsBlocked) {
        image(whatsBlock, width/2, height/2+whatsY, whatsBlack.width, whatsBlock.height);
        tint(255, whatsOpacite);
        image(whatsBlack, width/2, height/2+whatsY, whatsBlack.width, whatsBlock.height);
        tint(255, 255);
      }
    } else {
      whatsGif.play(width/2, height/2, whatsBlack.width, whatsBlock.height);
      if (whatsGif.frame == 55) {
        whatsPlayed = true;
        whatsPlaying = false;
      }
    }
    if (whatsShow) {
      if (whatsOpacite < 255 && whatsY < 20) {
        whatsOpacite +=25;
      }
      if (whatsY > 0) {
        whatsY -= 40;
      } else {
        whatsY = 0;
      }
    } else {
      if (whatsOpacite > 0 && whatsY > 20) {
        whatsOpacite -=25;
      }
      if (whatsY < height) {
        whatsY += 40;
      } else {
        whatsY = height;
      }
    }
    if (mouseX > rmenuX*0.82 && mouseY > rmenuY*0.14 && mouseX < (rmenuX*0.82)+(rmenuS*4) && mouseY < (rmenuY*0.14)+(rmenuS*7.8)) {
    } else {
      if (whatsPlayed && mousePressedTrue && !whatsPlaying) {
        whatsShow = false;
      }
    }
    ////// RECT de TEsTE 2
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.82, rmenuY*0.14, rmenuS*4, rmenuS*7.8);

    break;

  case 22:

    if (!somSalaFinal.isPlaying()) {
      somSalaFinal.loop();
    }

    if (mouseX > rmenuX*0.84 && mouseY > rmenuY*0.22 && mouseX < rmenuX*0.84+rmenuS*3.6 && mouseY < rmenuY*0.22+rmenuS*2.6) {
      if (mousePressedTrue) {
        // porta final
        cenaNum = 23;
      }
    }

    background(0);
    linhasFora();

    image(portaJanela, width/2, height/2, width, height);

    ////// RECT de TEsTE 2
    //fill(230, 30, 40, 120);
    //rect(rmenuX*0.84, rmenuY*0.22, rmenuS*3.6, rmenuS*2.6);
    break;
  case 23:
    var xEsq = (width/2) - ((width/1.5)/2);
    var xDir = (width/2) + ((width/1.5)/2);
    var yUp = (height/2) - ((height*0.95)/2);
    var yDown = (height/2) + ((height*0.95)/2);

    if (
      mouseX > xEsq  &&
      mouseX < xDir &&
      mouseY > yUp &&
      mouseY < yDown
      ) {
      if (doubleClickTrue) {
        // porta final
        cenaNum = 24;
      }
    }

    background(0);
    linhasFora();
    image(portaJanelaPertin, width/2, height/2, width, height);
    break;
  case 24:
    if (mousePressedTrue) {
      cenaNum = 25;
    }
    background(0);
    linhasFora();
    image(portaJanelaPertin2, width/2, height/2, width, height);
    break;
  case 25:
    somSalaFinal.stop();
    if (!somRetornoBaile.isPlaying() && retroCount == 0) {
      somRetornoBaile.play();
    }
    background(0);
    linhasFora();
    //retrospectiva
    retrospectiva.play(width/2, height/2, width, height);
    if (retrospectiva.frame == 31) {
      retroCount += 1;
      if (retroCount >= 3) {
        cenaNum = 26;
      }
    }
    break;
  case 26:
    background(0);
    linhasFora();
    giro1.play(width/2, height/2, width, height);
    if (giro1.frame == 45) {
      cenaNum = 27;
    }
    break;
  case 27:

    background(0);
    linhasFora();

    giro2.play(width/2, height/2, width, height);
    if (giro2.frame == 36) {
      cenaNum = 28;
    }
    break;
  case 28:

    background(0);
    linhasFora();

    subindoFim.play(width/2, height/2, width, height);
    if (subindoFim.frame == 74) {
      cenaNum = 29;
    }
    break;
  case 29:

    background(0);
    linhasFora();

    descendoFim.play(width/2, height/2, width, height);
    if (descendoFim.frame == 63) {
      cenaNum = 30;
    }
    break;
  case 30:

    background(0);
    linhasFora();
    retornoBranco.play(width/2, height/2, width, height);
    if (retornoBranco.frame == 2) {
      cenaNum = 31;
    }
    break;
  case 31:
    background(0);
    linhasFora();
    mensagemfinal.play(width/2, height/2, width, height);
    if (mensagemfinal.frame == 10) {
      retroCount += 1;
      if (retroCount >= 9) {
        cenaNum = 32;
      }
    }
    break;
  case 32:
    background(0);
    linhasFora();
    mensagemfinal2.play(width/2, height/2, width, height);
    if (mensagemfinal2.frame == 10) {
      retroCount += 1;
      if (retroCount >= 15) {
        cenaNum = 33;
      }
    }
    break;
  case 33:
    background(0);
    linhasFora();
    retornoBranco.play(width/2, height/2, width, height);
    mensagemfinal3.play((width/2)-(rmenuX*0.09), (height/2)-(rmenuY*0.4), width/2, height/2);

    if (mensagemfinal3.frame == 10) {
      retroCount += 1;
      if (retroCount >= 22) {
        cenaNum = 34;
      }
    }
    break;
  case 34:
    background(0);
    linhasFora();

    mensagemfinal4.play(width/2, height/2, width, height);

    if (mensagemfinal4.frame == 5) {
      retroCount += 1;
      if (retroCount >= 30) {
        cenaNum = 35;
      }
    }
    break;
  case 35:
    background(0);
    linhasFora();

    mensagemfinal5.play(width/2, height/2, width, height);

    if (mensagemfinal5.frame == 5) {
      retroCount += 1;
      if (retroCount >= 38) {
        cenaNum = 36;
      }
    }
    break;
  case 36:
    fundoFinal.play(width/2, height/2, width, height);

    if (fundoFinal.frame == 68) {
      retroCount += 1;
      if (retroCount >= 40) {
        cenaNum = 37;
      }
    }
    break;
  case 37:
    somRetornoBaile.stop();

    if (isMobile) {
      screen.orientation.unlock();
    } else {
      fundoFinal.play(width/2, height/2, width, height);
    }

    if (retroCount == 40) {
      fullscreen(!(fullscreen()));
      fim.show();
      fim.loop();
      retroCount += 1;
    }

    if (fim.time() >= fim.duration()) {
      //exit();
    }

    break;
  }
  ////FIM DO SWITCH//////


  if (cenaNum == 9) {
    if (somaXzoom < 23100) {
      somaXzoom += desk.x/Zoom;
      somaYzoom += desk.y/Zoom;
    } else {
      fadeIn = false;
      cenaNum = 10;
    }
  }

  if (mouseX > rmenuX*1.1 && mouseY > rmenuY*0.85 && mouseX < rmenuX*1.1+rmenuS*4 && mouseY < rmenuY*0.85+rmenuS) {
    if (doubleClickTrue && cenaNum == 2) {
      mensagemAberta = true;
    }
  } else if (mouseX > rmenuX*0.88 && mouseY > rmenuY*0.62 && mouseX < rmenuX*0.88+rmenuS*3 && mouseY < rmenuY*0.62+rmenuS*1.2) {
    if (mousePressedTrue && cenaNum == 3) {
      menuTimer = millis();
      fadeIn = false;
      cenaNum = 4;
    }
  }
}

//************  PORTAS  *************

// primeiro andar

//Porta Abrindo hall 1
function portaAbrindo1() {
  frameRate(6);
  portaAbre1.play(width/2, height/2, width, height);
  //if(portaAbre1.frame == 5){
  //  frameRate(12);
  //  image(phall1,width/2, height/2, width, height);
  //} else {
  //  frameRate(6);
  //  portaAbre1.play(width/2, height/2, width, height);
  //}
}
function portaAbrindo2() {
  if (portaAbre2.frame == 5) {
    image(phall2, width/2, height/2, width, height);
  } else {
    portaAbre2.play(width/2, height/2, width, height);
  }
}
function portaAbrindo3() {
  if (portaAbre3.frame == 9) {
    image(phall3, width/2, height/2, width, height);
  } else {
    portaAbre3.play(width/2, height/2, width, height);
  }
}

//CANETA
function porta1Afunc() {
  //Caneta play
  if (porta1Aopen) {
    porta1A.play(width/2, height/2, width, height);
  }
}
//GOOGLE - ANALOGICO
function porta2AAna() {
  if (porta2Aana.frame == 11) {
    image(porta2Aana.images[11], width/2, height/2, width, height);
  } else {
    porta2Aana.play(width/2, height/2, width, height);
  }
}
//GOOGLE - DIGITAL
function porta2ADig() {
  if (porta2Adig.frame == 9) {
    image(porta2Adig.images[9], width/2, height/2, width, height);
  } else {
    porta2Adig.play(width/2, height/2, width, height);
  }
}
//GOOGLE TECNOLOGIA
function porta2ATec() {

  if (porta2Atec.frame == 12) {
    image(porta2Atec.images[12], width/2, height/2, width, height);
  } else {
    porta2Atec.play(width/2, height/2, width, height);
  }
}
//CORE LINHAS
function porta3Afunc() {
  //ESQUERDA
  porta3A.play(width/6, height/2, width/3, height);
  //CENTRO
  porta3A.play(width/2, height/2, width/3, height);
  //DIREITA
  porta3A.play(width-(width/6), height/2, width/3, height);
}
// segundo andar
function porta1B() {

  //ESQUERDA
  porta1Barv.play(width/6, height/2, width/3, height);
  //CENTRO
  porta1Bcav.play(width/2, height/2, width/3, height);
  //DIREITA
  porta1Barv.play(width-(width/6), height/2, width/3, height);
}
function porta2B() {
  //ESQUERDA
  porta2Btra.play(width/6, height/2, width/3, height);
  //CENTRO
  porta2Bora.play(width/2, height/2, width/3, height);
  //DIREITA
  porta2Btra.play(width-(width/6), height/2, width/3, height);
}
function porta3B() {
  //ESQUERDA
  porta3Bcru.play(width/6, height/2, width/3, height);
  //CENTRO
  porta3Bjes.play(width/2, height/2, width/3, height);
  //DIREITA
  porta3Bcru.play(width-(width/6), height/2, width/3, height);
}
function mouseClicked(evt) {
  //console.log(evt);
  mousePressedTrue = true;
  last = millis();
}

function mouseDragged() {

  if (whatsY == 0 && mouseX > rmenuX*0.82 && mouseY > rmenuY*0.14 && mouseX < (rmenuX*0.82)+(rmenuS*4) && mouseY < (rmenuY*0.14)+(rmenuS*7.8)) {
    whatsOpacite -= 30;
    if (whatsOpacite < 5) {
      whatsBlocked = false;
    }
  }
}

function doubleClicked(evt) {
  console.log(evt);
  doubleClickTrue = true;
}

function fadeInFunc(cor) {
  fill(cor, fadeOpac);
  noStroke();
  rect(0, 0, width, height);
  fadeOpac-=fadeVel;
  if (fadeOpac <= 0) {
    fadeOpac = 0;
    fadeIn = true;
  }
}

function fadeOut() {
  fill(0, fadeOpac);
  noStroke();
  rect(0, 0, width, height);
  fadeOpac+=fadeVel;
  if (fadeOpac >= 255) {
    fadeOpac = 255;
    fadeOut = true;
  }
}

function linhasFora() {
  stroke(255);
  strokeWeight(2);
  for (var i = 0; i < (width*linhaAngulo)/(linhaSpace); i++) {
    line(width/2+(i*(linhaSpace/linhaAngulo)), 0, width/2+(i*(linhaSpace)), height);
  }
  for (var i = 1; i < (width*linhaAngulo)/(linhaSpace); i++) {
    line(width/2-(i*(linhaSpace/linhaAngulo)), 0, width/2-(i*(linhaSpace)), height);
  }
  for (var y = 0; y < height; y+=linhaSpace) {


    var x = (y/linhaSpace);
    line(0-x, (linhaYB)+y, width+x, linhaYB+y);
  }
  if (linhaYA<-linhaSpace) {
    linhaYA = 0;
  }
  linhaYA-=2.5;
  if (linhaYB>linhaSpace) {
    linhaYB = 0;
  }
  linhaYB+=2.5;
}

var cenaNumSave = -1;

function runningApp() {
  AppTSeg = millis()/1000;
  if (cenaNumSave != cenaNum) {
    console.log("Cena Atual: " + cenaNum);
    cenaNumSave = cenaNum;

    if (AppTSeg != segRegister) {
      if (AppTSeg < 60) {
        console.log("Running App - " + int(AppTSeg) + " seg.");
      } else if (AppTSeg > 60 && AppTSeg < (60*60)) {
        console.log("Running App - " + int(AppTSeg/60) + " min. " + int(AppTSeg%60) + " seg.");
      } else if (AppTSeg > 60*60) {
        console.log("Running App - Por mais de uma hora!");
      }
      segRegister = AppTSeg;
    }
  }
}

function ready() {
  abertura.style.display = 'none';
  telaApp.style.display = 'block'
}
async function abrir() {
  await document.body.requestFullscreen();
  if (isMobile) {
    await screen.orientation.lock("landscape");
  }
  ready();
}
//IMAGEM PROPORCIONAL
function pI(img) {
  //Dimensões da Tela:
  var wScreen = width;
  var hScreen = height;
  //Dimensões das imagens: 3420 x 1820
  var w = img.width;
  var h = img.height;
  // se 3420 - x
  //    1829 - hScreen
  var newWidth = (w*hScreen)/h;
  var imgSize = createVector(newWidth, hScreen);
  return imgSize;
}

class GifJpg {
  constructor(imagePrefix, count) {
    this.imageCount = count;
    this.images = [];
    this.flipOn = false;
    this.frame = 0;
    for (var i = 0; i < this.imageCount; i++) {
      var fileName = imagePrefix + nf(i, 2)+".jpg";
      this.images[i] = loadImage(fileName);
    }
  }
  play(xpos, ypos, w, h) {
    this.frame = (this.frame+1) % this.imageCount;
    image(this.images[this.frame], xpos, ypos, w, h);
  }
}
class GifPng {
  constructor(imagePrefix, count) {
    this.imageCount = count;
    this.images = [];
    this.flipOn = false;
    this.frame = 0;
    for (var i = 0; i < this.imageCount; i++) {
      var fileName = imagePrefix + nf(i, 2)+".png";
      this.images [i] = loadImage(fileName);
    }
  }
  play(xpos, ypos, w, h) {
    this.frame = (this.frame+1) % this.imageCount;
    image(this.images[this.frame], xpos, ypos, w, h);
  }
}
class GifPngOff {
  constructor(imagePrefix, count) {
    this.offS = 2;
    this.imageCount = count;
    this.imageCount -= this.offS;
    this.images = [];
    this.flipOn = false;
    this.frame = 0;
    for (var i = 0; i < this.imageCount; i++) {
      var fileName = imagePrefix + nf(i+this.offS, 2)+".png";
      this.images [i] = loadImage(fileName);
    }
  }
  play(xpos, ypos, w, h) {
    this.frame = (this.frame+1) % this.imageCount;
    image(this.images[this.frame], xpos, ypos, w, h);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
