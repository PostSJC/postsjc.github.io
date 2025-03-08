"use strict";

// ------------------------------------------------TABELA DE PREÇOS GERAL-------------------------------
var Net15 = 4.50; 
var Net30 = 5.50;
var Net60 = 6.50;
var IPBValue = 1;
var ColorValue = 3;
var ScanValue = 2;

// ------------------------------------------------TIMER COMUM PARA OS NETS-----------------------------------------------------
setInterval(() => { Timer(); }, 100);
function Timer() {
  
  // INICIO FUNCAO ATUALIZAR NET 01
  var N1 = new Date(); 
  Hour = N1.getHours();
  Minute = N1.getMinutes();
  Second = N1.getSeconds();

  if (StatusN1 == 1) {
    FHN1 = Hour - IHN1;
    FMN1 = Minute - IMN1;
    FSN1 = Second - ISN1;
    if (FSN1 < 0 ){FSN1 = FSN1 + 60;}
    if (FHN1 > 0 && FMN1 >= 0) {NetHValueN1 = Net60 * FHN1;} 
    else {
        if (FHN1 > 0 && FMN1 < 0) {
        FHN1 = FHN1 - 1;}}
    if (FMN1 < 0) {FMN1 = FMN1 + 60;}
    if (FMN1 <= 15) {NetMValueN1 = Net15;}
    if (FMN1 <= 30 && FMN1 > 15) {NetMValueN1 = Net30;}
    if (FMN1 <=59 && FMN1 > 30) {NetMValueN1 = Net60;}
    document.getElementById('f_hour_net01').innerText = FHN1;
    document.getElementById('f_minute_net01').innerText = FMN1;
    document.getElementById('f_second_net01').innerText = FSN1;
    RefreshValueN1();
  }

  // INICIO FUNCAO ATUALIZAR NET 02
  if (StatusN2 == 1) {
    FHN2 = Hour - IHN2;
    FMN2 = Minute - IMN2;
    FSN2 = Second - ISN2;
    if (FSN2 < 0 ){FSN2 = FSN2 + 60;}
    if (FHN2 > 0 && FMN2 >= 0) {NetHValueN2 = Net60 * FHN2;} 
    else {
        if (FHN2 > 0 && FMN2 < 0) {
        FHN2 = FHN2 - 1;}}
    if (FMN2 < 0) {FMN2 = FMN2 + 60;}
    if (FMN2 <= 15) {NetMValueN2 = Net15;}
    if (FMN2 <= 30 && FMN2 > 15) {NetMValueN2 = Net30;}
    if (FMN2 <=59 && FMN2 > 30) {NetMValueN2 = Net60;}
    document.getElementById('f_hour_net02').innerText = FHN2;
    document.getElementById('f_minute_net02').innerText = FMN2;
    document.getElementById('f_second_net02').innerText = FSN2;
    RefreshValueN2();
  }

   // INICIO FUNCAO ATUALIZAR NET 03
  if (StatusN3 == 1) {
    FHN3 = Hour - IHN3;
    FMN3 = Minute - IMN3;
    FSN3 = Second - ISN3;
    if (FSN3 < 0 ){FSN3 = FSN3 + 60;}
    if (FHN3 > 0 && FMN3 >= 0) {NetHValueN3 = Net60 * FHN3;} 
    else {
        if (FHN3 > 0 && FMN3 < 0) {
        FHN3 = FHN3 - 1;}}
    if (FMN3 < 0) {FMN3 = FMN3 + 60;}
    if (FMN3 <= 15) {NetMValueN3 = Net15;}
    if (FMN3 <= 30 && FMN3 > 15) {NetMValueN3 = Net30;}
    if (FMN3 <=59 && FMN3 > 30) {NetMValueN3 = Net60;}
    document.getElementById('f_hour_net03').innerText = FHN3;
    document.getElementById('f_minute_net03').innerText = FMN3;
    document.getElementById('f_second_net03').innerText = FSN3;
    RefreshValueN3();
  }
}

// --------------------------------------------------------------- NET 01-----------------------------------------------------
var Hour;
var Minute;
var Second;
var IHN1;
var IMN1;
var ISN1;
var FHN1;
var FMN1;
var FSN1;
var StatusN1 = 0;
var ServicesN1 = 0;
var OtherN1 = 0;
var NetMValueN1 = 0;
var NetHValueN1 = 0;
var FinalValueN1 = 0;
var PBN1 = 0;
var ColorN1 = 0;
var ScanN1 = 0;

function StartN1() {
  var N1 = new Date(); 
  RefreshValueN1();
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

function StopN1() {
  var N1 = new Date(); 
  FHN1 = N1.getHours();
  FMN1 = N1.getMinutes();
  FSN1 = N1.getSeconds();
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
  RefreshValueN1()
  // registerUsage()
}

function RefreshValueN1(){
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
  RefreshValueN1();
}

function PBN1remove(){
  if (PBN1 > 0) {
    PBN1 = PBN1 - 1;
    RefreshValueN1();
  } else {}
}

function  ColorN1add(){
  ColorN1 = ColorN1 + 1;
  RefreshValueN1();
}

function ColorN1remove(){
  if (ColorN1 > 0) {
    ColorN1 = ColorN1 - 1;
    RefreshValueN1();
  } else {}
}

function  ScanN1add(){
  ScanN1 = ScanN1 + 1;
  RefreshValueN1();
}

function ScanN1remove(){
  if (ScanN1 > 0) {
  ScanN1 = ScanN1 - 1;
  RefreshValueN1();
  } else {}
}

// --------------------------------------------------------------- NET 02-----------------------------------------------------
var IHN2;
var IMN2;
var ISN2;
var FHN2;
var FMN2;
var FSN2;
var StatusN2 = 0;
var ServicesN2 = 0;
var OtherN2 = 0;
var NetMValueN2 = 0;
var NetHValueN2 = 0;
var FinalValueN2 = 0;
var PBN2 = 0;
var ColorN2 = 0;
var ScanN2 = 0;

function StartN2() {
  var N2 = new Date(); 
  RefreshValueN2();
  IHN2 = N2.getHours();
  IMN2 = N2.getMinutes();
  ISN2 = N2.getSeconds();
  document.getElementById('i_hour_net02').innerText = IHN2;
  document.getElementById('i_minute_net02').innerText = IMN2;
  document.getElementById('i_second_net02').innerText = ISN2;
  StatusN2 = 1;    
  document.getElementById("btn-start-n2").style.visibility = "hidden";
  document.getElementById("btn-stop-n2").style.visibility = "visible";
}

function StopN2() {
  var N2 = new Date(); 
  FHN2 = N2.getHours();
  FMN2 = N2.getMinutes();
  FSN2 = N2.getSeconds();
  StatusN2 = 2;    
  document.getElementById("btn-stop-n2").style.visibility = "hidden";
  document.getElementById("btn-reset-n2").style.visibility = "visible";
}

function ResetN2(){
  StatusN2 = 0;    
  document.getElementById("btn-reset-n2").style.visibility = "hidden";
  document.getElementById("btn-start-n2").style.visibility = "visible";
  FinalValueN2 = 0;
  ServicesN2 = 0;
  FinalValueN2 = 0;
  NetMValueN2 = 0;
  NetHValueN2 = 0;
  OtherN2 = 0;
  IHN2 = 0;
  IMN2 = 0;
  ISN2 = 0;
  FHN2 = 0;
  FMN2 = 0;
  FSN2 = 0;
  PBN2 = 0;
  ColorN2 = 0;
  ScanN2 = 0;
  document.getElementById('i_hour_net02').innerText = IHN2;
  document.getElementById('i_minute_net02').innerText = IMN2;
  document.getElementById('i_second_net02').innerText = ISN2;
  document.getElementById('f_hour_net02').innerText = FHN2;
  document.getElementById('f_minute_net02').innerText = FMN2;
  document.getElementById('f_second_net02').innerText = FSN2;
  RefreshValueN2()
}

function RefreshValueN2(){
  FinalValueN2=0;
  OtherN2 = (PBN2 * IPBValue) + (ColorN2 * ColorValue) + (ScanN2 * ScanValue);
  FinalValueN2 = ServicesN2 + FinalValueN2 + NetMValueN2 + NetHValueN2 + OtherN2;
  document.getElementById('final-value-N2').innerText = ("R$ " + FinalValueN2);
  document.getElementById('PBN2').innerText = PBN2;
  document.getElementById('ColorN2').innerText = ColorN2;
  document.getElementById('ScanN2').innerText = ScanN2;
}

function  PBN2add(){
  PBN2 = PBN2 + 1;
  RefreshValueN2();
}

function PBN2remove(){
  if (PBN2 > 0) {
    PBN2 = PBN2 - 1;
    RefreshValueN2();
  }
}

function  ColorN2add(){
  ColorN2 = ColorN2 + 1;
  RefreshValueN2();
}

function ColorN2remove(){
  if (ColorN2 > 0) {
    ColorN2 = ColorN2 - 1;
    RefreshValueN2();
  }
}

function  ScanN2add(){
  ScanN2 = ScanN2 + 1;
  RefreshValueN2();
}

function ScanN2remove(){
  if (ScanN2 > 0) {
  ScanN2 = ScanN2 - 1;
  RefreshValueN2();
  }
}

// --------------------------------------------------------------- NET 03-----------------------------------------------------
var IHN3;
var IMN3;
var ISN3;
var FHN3;
var FMN3;
var FSN3;
var StatusN3 = 0;
var ServicesN3 = 0;
var OtherN3 = 0;
var NetMValueN3 = 0;
var NetHValueN3 = 0;
var FinalValueN3 = 0;
var PBN3 = 0;
var ColorN3 = 0;
var ScanN3 = 0;

function StartN3() {
  var N3 = new Date(); 
  RefreshValueN3();
  IHN3 = N3.getHours();
  IMN3 = N3.getMinutes();
  ISN3 = N3.getSeconds();
  document.getElementById('i_hour_net03').innerText = IHN3;
  document.getElementById('i_minute_net03').innerText = IMN3;
  document.getElementById('i_second_net03').innerText = ISN3;
  StatusN3 = 1;    
  document.getElementById("btn-start-n3").style.visibility = "hidden";
  document.getElementById("btn-stop-n3").style.visibility = "visible";
}

function StopN3() {
  var N3 = new Date(); 
  FHN3 = N3.getHours();
  FMN3 = N3.getMinutes();
  FSN3 = N3.getSeconds();
  StatusN3 = 2;    
  document.getElementById("btn-stop-n3").style.visibility = "hidden";
  document.getElementById("btn-reset-n3").style.visibility = "visible";
}

function ResetN3(){
  StatusN3 = 0;    
  document.getElementById("btn-reset-n3").style.visibility = "hidden";
  document.getElementById("btn-start-n3").style.visibility = "visible";
  FinalValueN3 = 0;
  ServicesN3 = 0;
  FinalValueN3 = 0;
  NetMValueN3 = 0;
  NetHValueN3 = 0;
  OtherN3 = 0;
  IHN3 = 0;
  IMN3 = 0;
  ISN3 = 0;
  FHN3 = 0;
  FMN3 = 0;
  FSN3 = 0;
  PBN3 = 0;
  ColorN3 = 0;
  ScanN3 = 0;
  document.getElementById('i_hour_net03').innerText = IHN3;
  document.getElementById('i_minute_net03').innerText = IMN3;
  document.getElementById('i_second_net03').innerText = ISN3;
  document.getElementById('f_hour_net03').innerText = FHN3;
  document.getElementById('f_minute_net03').innerText = FMN3;
  document.getElementById('f_second_net03').innerText = FSN3;
  RefreshValueN3()
}

function RefreshValueN3(){
  FinalValueN3=0;
  OtherN3 = (PBN3 * IPBValue) + (ColorN3 * ColorValue) + (ScanN3 * ScanValue);
  FinalValueN3 = ServicesN3 + FinalValueN3 + NetMValueN3 + NetHValueN3 + OtherN3;
  document.getElementById('final-value-N3').innerText = ("R$ " + FinalValueN3);
  document.getElementById('PBN3').innerText = PBN3;
  document.getElementById('ColorN3').innerText = ColorN3;
  document.getElementById('ScanN3').innerText = ScanN3;
}

function  PBN3add(){
  PBN3 = PBN3 + 1;
  RefreshValueN3();
}

function PBN3remove(){
  if (PBN3 > 0) {
    PBN3 = PBN3 - 1;
    RefreshValueN3();
  }
}

function  ColorN3add(){
  ColorN3 = ColorN3 + 1;
  RefreshValueN3();
}

function ColorN3remove(){
  if (ColorN3 > 0) {
    ColorN3 = ColorN3 - 1;
    RefreshValueN3();
  }
}

function  ScanN3add(){
  ScanN3 = ScanN3 + 1;
  RefreshValueN3();
}

function ScanN3remove(){
  if (ScanN3 > 0) {
  ScanN3 = ScanN3 - 1;
  RefreshValueN3();
  }
}

// --------------------------------------------------------------


function CloseModal(){
  // document.getElementById("modal").style.visibility = "hidden";
  document.getElementById("modal").style.display = "none";

  // FAZER O UNCHECK DE TODOS OS RADIAL BUTTONS
}

function OpenModal(){
  // document.getElementById("modal").style.visibility = "visible";
  document.getElementById("modal").style.display = "flex";
  RefreshModal();
}

function SubmitModal(){
  // DE NET01 PARA NET02
  if (document.getElementById('from-net01').checked) {
    if (document.getElementById('to-net02').checked){4
      IHN2 = IHN1;
      IMN2 = IMN1;
      ISN2 = ISN1;
      FHN2 = FHN1;
      FMN2 = FMN1;
      FSN2 = FSN1;
      StatusN2 = StatusN1;
      ServicesN2 = ServicesN1;
      OtherN2 = OtherN1;
      NetMValueN2 = NetMValueN1;
      NetHValueN2 = NetHValueN1;
      FinalValueN2 = FinalValueN1;
      PBN2 = PBN1;
      ColorN2 = ColorN1;
      ScanN2 = ScanN1;
      document.getElementById('i_hour_net02').innerText = IHN2;
      document.getElementById('i_minute_net02').innerText = IMN2;
      document.getElementById('i_second_net02').innerText = ISN2;
      // ResetN1();
      document.getElementById("btn-stop-n1").style.visibility = "hidden";
      document.getElementById("btn-start-n2").style.visibility = "hidden";
      if(StatusN2=1){
        document.getElementById("btn-stop-n2").style.visibility = "visible";
      }
      else{
        document.getElementById("btn-reset-n2").style.visibility = "visible";
      }
    }

  // DE NET01 PARA NET03
    if (document.getElementById('to-net03').checked){
      IHN3 = IHN1;
      IMN3 = IMN1;
      ISN3 = ISN1;
      FHN3 = FHN1;
      FMN3 = FMN1;
      FSN3 = FSN1;
      StatusN3 = StatusN1;
      ServicesN3 = ServicesN1;
      OtherN3 = OtherN1;
      NetMValueN3 = NetMValueN1;
      NetHValueN3 = NetHValueN1;
      FinalValueN2 = FinalValueN1;
      PBN3 = PBN1;
      ColorN3 = ColorN1;
      ScanN3 = ScanN1;
      document.getElementById('i_hour_net03').innerText = IHN3;
      document.getElementById('i_minute_net03').innerText = IMN3;
      document.getElementById('i_second_net03').innerText = ISN3;
      // ResetN1();
      document.getElementById("btn-stop-n1").style.visibility = "hidden";
      document.getElementById("btn-start-n3").style.visibility = "hidden";
      if(StatusN3=1){
        document.getElementById("btn-stop-n3").style.visibility = "visible";
      }
      else{
        document.getElementById("btn-reset-n3").style.visibility = "visible";
      }
    }
    ResetN1();
  }

  // DE NET02 PARA NET01
  if (document.getElementById('from-net02').checked) {
    if (document.getElementById('to-net01').checked){
      IHN1 = IHN2;
      IMN1 = IMN2;
      ISN1 = ISN2;
      FHN1 = FHN2;
      FMN1 = FMN2;
      FSN1 = FSN2;
      StatusN1 = StatusN2;
      ServicesN1 = ServicesN2;
      OtherN1 = OtherN2;
      NetMValueN1 = NetMValueN2;
      NetHValueN1 = NetHValueN2;
      FinalValueN1 = FinalValueN2;
      PBN1 = PBN2;
      ColorN1 = ColorN2;
      ScanN1 = ScanN2;
      document.getElementById('i_hour_net01').innerText = IHN1;
      document.getElementById('i_minute_net01').innerText = IMN1;
      document.getElementById('i_second_net01').innerText = ISN1;
      // ResetN2();
      document.getElementById("btn-stop-n2").style.visibility = "hidden";
      document.getElementById("btn-start-n1").style.visibility = "hidden";
      if(StatusN2=1){
        document.getElementById("btn-stop-n1").style.visibility = "visible";
      }
      else{
        document.getElementById("btn-reset-n2").style.visibility = "visible";
      }
    }

  // DE NET02 PARA NET03
    if (document.getElementById('to-net03').checked){
      console.log("De Net01 para Net02")
      IHN3 = IHN2;
      IMN3 = IMN2;
      ISN3 = ISN2;
      FHN3 = FHN2;
      FMN3 = FMN2;
      FSN3 = FSN2;
      StatusN3 = StatusN2;
      ServicesN3 = ServicesN2;
      OtherN3 = OtherN2;
      NetMValueN3 = NetMValueN2;
      NetHValueN3 = NetHValueN2;
      FinalValueN2 = FinalValueN2;
      PBN3 = PBN2;
      ColorN3 = ColorN2;
      ScanN3 = ScanN2;
      document.getElementById('i_hour_net03').innerText = IHN3;
      document.getElementById('i_minute_net03').innerText = IMN3;
      document.getElementById('i_second_net03').innerText = ISN3;
      // ResetN2();
      document.getElementById("btn-stop-n2").style.visibility = "hidden";
      document.getElementById("btn-start-n3").style.visibility = "hidden";
      if(StatusN3=1){
        document.getElementById("btn-stop-n3").style.visibility = "visible";
      }
      else{
        document.getElementById("btn-reset-n3").style.visibility = "visible";
      }
    }
    ResetN2();
  }

 // DE NET03 PARA NET01
  if (document.getElementById('from-net03').checked){
    if (document.getElementById('to-net01').checked){
      IHN1 = IHN3;
      IMN1 = IMN3;
      ISN1 = ISN3;
      FHN1 = FHN3;
      FMN1 = FMN3;
      FSN1 = FSN3;
      StatusN1 = StatusN3;
      ServicesN1 = ServicesN3;
      OtherN1 = OtherN3;
      NetMValueN1 = NetMValueN3;
      NetHValueN1 = NetHValueN3;
      FinalValueN1 = FinalValueN3;
      PBN1 = PBN3;
      ColorN1 = ColorN3;
      ScanN1 = ScanN3;
      document.getElementById('i_hour_net01').innerText = IHN1;
      document.getElementById('i_minute_net01').innerText = IMN1;
      document.getElementById('i_second_net01').innerText = ISN1;
      // ResetN3();
      document.getElementById("btn-stop-n3").style.visibility = "hidden";
      document.getElementById("btn-start-n1").style.visibility = "hidden";
      if(StatusN3=1){
        document.getElementById("btn-stop-n1").style.visibility = "visible";
      }
      else{
        document.getElementById("btn-reset-n1").style.visibility = "visible";
      }
    }

  // DE NET03 PARA NET02
    if (document.getElementById('from-net03').checked){
      if (document.getElementById('to-net02').checked){
        IHN2 = IHN3;
        IMN2 = IMN3;
        ISN2 = ISN3;
        FHN2 = FHN3;
        FMN2 = FMN3;
        FSN2 = FSN3;
        StatusN2 = StatusN3;
        ServicesN2 = ServicesN3;
        OtherN2 = OtherN3;
        NetMValueN2 = NetMValueN3;
        NetHValueN2 = NetHValueN3;
        FinalValueN2 = FinalValueN3;
        PBN2 = PBN3;
        ColorN2 = ColorN3;
        ScanN2 = ScanN3;
        ResetN3();
        document.getElementById('i_hour_net02').innerText = IHN2;
        document.getElementById('i_minute_net02').innerText = IMN2;
        document.getElementById('i_second_net02').innerText = ISN2;
        // ResetN3();
        document.getElementById("btn-stop-n3").style.visibility = "hidden";
        document.getElementById("btn-start-n2").style.visibility = "hidden";
        if(StatusN2=3){
          document.getElementById("btn-stop-n2").style.visibility = "visible";
        }
        else{
          document.getElementById("btn-reset-n2").style.visibility = "visible";
        }
      }
    }
    ResetN3();
  }
  CloseModal();
}

function RefreshModal(){
  if ( StatusN1 == 0){
    document.getElementById("from-net01-label").style.color = "#0001022d";
    document.getElementById("from-net01").disabled=true;
  }else{
    document.getElementById("from-net01-label").style.color = "#000000";
    document.getElementById("from-net01").disabled=false;
  }

  if ( StatusN2 == 0){
    document.getElementById("from-net02-label").style.color = "#0001022d";
    document.getElementById("from-net02").disabled=true;
  }else{
    document.getElementById("from-net02-label").style.color = "#000000";
    document.getElementById("from-net02").disabled=false;
  }

  if ( StatusN3 == 0){
    document.getElementById("from-net03-label").style.color = "#0001022d";
    document.getElementById("from-net03").disabled=true;
  }else{
    document.getElementById("from-net03-label").style.color = "#000000";
    document.getElementById("from-net03").disabled=false;
  }


  if ( StatusN1 == 1 || StatusN1 == 2){
    document.getElementById("to-net01-label").style.color = "#0001022d";
    document.getElementById("to-net01").disabled=true;
  }else{
    document.getElementById("to-net01-label").style.color = "#000000";
    document.getElementById("to-net01").disabled=false;
  }

  if ( StatusN2 == 1 || StatusN2 == 2){
    document.getElementById("to-net02-label").style.color = "#0001022d";
    document.getElementById("to-net02").disabled=true;
  }else{
    document.getElementById("to-net02-label").style.color = "#000000";
    document.getElementById("to-net02").disabled=false;
  }

  if ( StatusN3 == 1 || StatusN3 == 2){
    document.getElementById("to-net03-label").style.color = "#0001022d";
    document.getElementById("to-net03").disabled=true;
  }else{
    document.getElementById("to-net03-label").style.color = "#000000";
    document.getElementById("to-net03").disabled=false;
  }
}




{/* <button onclick="registerUsage()">Registrar Uso</button> */}

function registerUsage() {
  console.log("Registro acionado");
  // const computerId = document.getElementById('computerId').value;
  // const timeUsed = document.getElementById('timeUsed').value;
  // const timeUsed = document.getElementById('timeUsed').value;
  IHN1;
  IMN1;
  ISN1;
  FHN1;
  FMN1;
  FSN1;
  FinalValueN1;

  const usageList = document.getElementById('usageList');
  const listItem = document.createElement('li');
  // listItem.textContent = `Computador ID: ${computerId}, Tempo de Uso: ${timeUsed} minutos`;
  listItem.textContent = `Entrada: ${IHN1}:${IMN1}:${ISN1}`;
  usageList.appendChild(listItem);

  // document.getElementById('computerId').value = '';
  // document.getElementById('timeUsed').value = '';
}

