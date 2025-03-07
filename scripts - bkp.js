"use strict";

// TABELA DE VALORES
var Net15 = 4.50; 
var Net30 = 5.50;
var Net60 = 6.50;
var IPBValue = 1;
var ColorValue = 3;
var ScanValue = 2;

// HORA GLOBAL PARA COMPARACAO
var Hour;
var Minute;
var Second;

// HORA INICIAL - BOTAO START
var IHN1;
var IMN1;
var ISN1;

// HORA FINAL COMPARADOR BOTAO STOP
var FHN1;
var FMN1;
var FSN1;

// 0 Parado ---- 1 Rodando ----- 2 Pausado
var StatusN1 = 0;
var ServicesN1 = 0;
var OtherN1 = 0;
var NetMValueN1 = 0;
var NetHValueN1 = 0;
var FinalValueN1 = 0;

var PBN1 = 0;
var ColorN1 = 0;
var ScanN1 = 0;

// TICK INFINITO PARA ATUALIZAR OS NETS
setInterval(() => { Timer(); }, 100);

function Timer() {
  var N1 = new Date(); 

  Hour = N1.getHours();
  Minute = N1.getMinutes();
  Second = N1.getSeconds();
  console.log("AGORA É " + Hour + ' : ' + Minute + ' : ' + Second);

  if (StatusN1 == 1) {
    FHN1 = Hour - IHN1;
    FMN1 = Minute - IMN1;
    FSN1 = Second - ISN1;

    if (FSN1 < 0 ){
      FSN1 = FSN1 + 60;
    }

    if (FHN1 > 0 && FMN1 >= 0) {
      NetHValueN1 = Net60 * FHN1;
    } else {
      // document.getElementById('f_hour_net01').innerText = 0;
      if (FHN1 > 0 && FMN1 < 0) {
        FHN1 = FHN1 - 1;
      }
    }

    // se for negativo o Minuto, vai transformar em positivo 
    if (FMN1 < 0) {
      FMN1 = FMN1 + 60;
    }

    // Ifs para valor de net  
    if (FMN1 <= 15) {
      NetMValueN1 = Net15;
    }
    if (FMN1 <= 30 && FMN1 > 15) {
      NetMValueN1 = Net30;
    }
    if (FMN1 <=59 && FMN1 > 30) {
      NetMValueN1 = Net60;
    }
    document.getElementById('f_hour_net01').innerText = FHN1;
    document.getElementById('f_minute_net01').innerText = FMN1;
    document.getElementById('f_second_net01').innerText = FSN1;

    RefreshValue();
  }
}



function StartN1() {
  var N1 = new Date(); 
  RefreshValue();
  
  IHN1 = N1.getHours();
  IMN1 = N1.getMinutes();
  ISN1 = N1.getSeconds();

  document.getElementById('i_hour_net01').innerText = IHN1;
  document.getElementById('i_minute_net01').innerText = IMN1;
  document.getElementById('i_second_net01').innerText = ISN1;

  StatusN1 = 1;    
  document.getElementById("btn-start-n1").style.visibility = "hidden";
  document.getElementById("btn-stop-n1").style.visibility = "visible";
}

// #btn-start-n1
// #btn-stop-n1 
// #btn-reset-n1

function StopN1() {
  var N1 = new Date(); 
  FHN1 = N1.getHours();
  FMN1 = N1.getMinutes();
  FSN1 = N1.getSeconds();
  StatusN1 = 0;
  console.log("Cronometro parado = " + StatusN1); 
  // FinalValueN1 = NetMValueN1 + FinalValueN1;

  StatusN1 = 2;    
  document.getElementById("btn-stop-n1").style.visibility = "hidden";
  document.getElementById("btn-reset-n1").style.visibility = "visible";
}

function ResetN1(){
  StatusN1 = 0;    
  document.getElementById("btn-reset-n1").style.visibility = "hidden";
  document.getElementById("btn-start-n1").style.visibility = "visible";

  FinalValueN1 = 0;
  ServicesN1 = 0;
  FinalValueN1 = 0;
  NetMValueN1 = 0;
  NetHValueN1 = 0;
  OtherN1 = 0;
  IHN1 = 0;
  IMN1 = 0;
  ISN1 = 0;
  FHN1 = 0;
  FMN1 = 0;
  FSN1 = 0;
  PBN1 = 0;
  ColorN1 = 0;
  ScanN1 = 0;
  document.getElementById('i_hour_net01').innerText = IHN1;
  document.getElementById('i_minute_net01').innerText = IMN1;
  document.getElementById('i_second_net01').innerText = ISN1;

  document.getElementById('f_hour_net01').innerText = FHN1;
  document.getElementById('f_minute_net01').innerText = FMN1;
  document.getElementById('f_second_net01').innerText = FSN1;
  RefreshValue()
}

function RefreshValue(){
  FinalValueN1=0;
  OtherN1 = (PBN1 * IPBValue) + (ColorN1 * ColorValue) + (ScanN1 * ScanValue);

  FinalValueN1 = ServicesN1 + FinalValueN1 + NetMValueN1 + NetHValueN1 + OtherN1;
  document.getElementById('final-value-N1').innerText = ("R$ " + FinalValueN1);
  document.getElementById('PBN1').innerText = PBN1;
  document.getElementById('ColorN1').innerText = ColorN1;
  document.getElementById('ScanN1').innerText = ScanN1;
}

function  PBN1add(){
  PBN1 = PBN1 + 1;
  RefreshValue();
}

function PBN1remove(){
  if (PBN1 > 0) {
    PBN1 = PBN1 - 1;
    RefreshValue();
  } else {}
}

function  ColorN1add(){
  ColorN1 = ColorN1 + 1;
  RefreshValue();
}

function ColorN1remove(){
  if (ColorN1 > 0) {
    ColorN1 = ColorN1 - 1;
    RefreshValue();
  } else {}
}

function  ScanN1add(){
  ScanN1 = ScanN1 + 1;
  RefreshValue();
}

function ScanN1remove(){
  if (ScanN1 > 0) {
  ScanN1 = ScanN1 - 1;
  RefreshValue();
  } else {}
}






