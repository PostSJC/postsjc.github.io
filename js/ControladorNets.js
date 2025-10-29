"use strict";

// --------------------------------------------------------------------TABELA DE PREÇOS------------------------------------------------------
const ValueNet15 = 5;
const ValueNet30 = 6;
const ValueNet60 = 7;
const ValuePrint = 2;
const ValueColor = 3;
const ValueScan = 2;

// --------------------------------------------------------------------ARMAZENAMENTO NETS------------------------------------------------------
const data = [
  {
    id: 1,
    deviceName: "Net 01",
    initialHours: 0,
    initialMinutes: 0,
    initialSeconds: 0,
    finalHours: 0,
    finalMinutes: 0,
    finalSeconds: 0,
    status: 0,
    NofPrint: 0,
    NofColor: 0,
    NofScan: 0,
    NofAdd: 0,
    netFinalValue: 0,
    finalValue: 0,
  },{
    id: 2,
    deviceName: "Net 02",
    initialHours: 0,
    initialMinutes: 0,
    initialSeconds: 0,
    finalHours: 0,
    finalMinutes: 0,
    finalSeconds: 0,
    status: 0,
    NofPrint: 0,
    NofColor: 0,
    NofScan: 0,
    NofAdd: 0,
    netFinalValue: 0,
    finalValue: 0,
  },{
    id: 3,
    deviceName: "Net 03",
    initialHours: 0,
    initialMinutes: 0,
    initialSeconds: 0,
    finalHours: 0,
    finalMinutes: 0,
    finalSeconds: 0,
    status: 0,
    NofPrint: 0,
    NofColor: 0,
    NofScan: 0,
    NofAdd: 0,
    netFinalValue: 0,
    finalValue: 0,
  }
]

const UsageLog = [{
    origin: 0,
    arrivedHours: 0,
    arrivedMinutes: 0,
    closedHour: 0,
    closedMinutes: 0, 
    netValue: 0,
    finalValue: 0,
}]

// --------------------------------------------------------------------USER FUNCTIONS------------------------------------------------------

function getNets() {return data;}
function getNet(id) {return data.find((d) => d.id === id);}

setInterval(() => {Countdown()}, 200);

function Countdown(){
  Timer(1);
  Timer(2);
  Timer(3);
}

function calculateTimeDifference(startTimeStr, endTimeStr) {
  const now = new Date();
  const startParts = startTimeStr.split(':');
  const endParts = endTimeStr.split(':');

  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 
                            parseInt(startParts[0]), parseInt(startParts[1]));
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 
                          parseInt(endParts[0]), parseInt(endParts[1]));

  const diffMilliseconds = Math.abs(endDate.getTime() - startDate.getTime());
  const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  return { hours, minutes };
}

function Timer(NetID){
  const NetAcc = getNet(NetID);
  var N3 = new Date(); 
  const Hour = N3.getHours();
  const Minute = N3.getMinutes();
  const Second = N3.getSeconds();
  N3 = Hour + ":" + Minute;
  
  const time2 = NetAcc.initialHours + ":" + NetAcc.initialMinutes;
  const time1 = N3;
  const result = calculateTimeDifference(time1, time2);
  
//   var Hour = N3.getHours();
//   var Minute = N3.getMinutes();
//   var AddValue = document.getElementById('input_value-n' + NetID.toString()).value;

//   if (AddValue >= 0){
//     NetAcc.NofAdd = parseFloat(AddValue);
//     RefreshValue(NetID);
//     if (AddValue == ""){
//       NetAcc.NofAdd = 0;
//       RefreshValue(NetID);
//     }
//   }
//   else{
//     document.getElementById('input_value-n' + NetID.toString()).value = 0;
//     toastr.error('Este campo não aceita números negativos');
//   }

  if (NetAcc.status == 1){
    var hourCost = 0;
    var minutsCost = 0;
    NetAcc.finalHours = Hour - NetAcc.initialHours;
    NetAcc.finalMinutes = Minute - NetAcc.initialMinutes;
    NetAcc.finalSeconds = Second - NetAcc.initialSeconds;
    
    if (NetAcc.finalSeconds < 0 ){NetAcc.finalSeconds = NetAcc.finalSeconds + 60;};
    if (NetAcc.finalHours > 0 && NetAcc.finalMinutes >= 0) {hourCost = ValueNet60 * NetAcc.finalHours;}
    else{if (NetAcc.finalHours > 0 && NetAcc.finalMinutes < 0) {NetAcc.finalHours = NetAcc.finalHours - 1;}};
    if (NetAcc.finalMinutes < 0) {NetAcc.finalMinutes = NetAcc.finalMinutes + 60;}
    if (NetAcc.finalMinutes <= 15) {minutsCost = ValueNet15;};
    if (NetAcc.finalMinutes <= 30 && NetAcc.finalMinutes > 15) {minutsCost = ValueNet30;};
    if (NetAcc.finalMinutes <=59 && NetAcc.finalMinutes > 30) {minutsCost = ValueNet60;}   
    document.getElementById('f_hour_net0' + NetID.toString()).innerText   = (NetAcc.finalHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('f_minute_net0' + NetID.toString()).innerText = (NetAcc.finalMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('f_second_net0' + NetID.toString()).innerText = (NetAcc.finalSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    // NetAcc.NofAdd = document.getElementById('input_value-n' + NetID.toString()).value;
    var NofAdd = document.getElementById('input_value-n' + NetID.toString()).value;
    NetAcc.NofAdd = parseFloat(NofAdd);
    if(NofAdd == ""){
      NetAcc.NofAdd = 0;
      document.getElementById('input_value-n' + NetID.toString()).value = 0;
    }

    var SumServices = 
      (NetAcc.NofPrint * ValuePrint) + 
      (NetAcc.NofColor * ValueColor) + 
      (NetAcc.NofScan * ValueScan) +
      NetAcc.NofAdd
    ;
    NetAcc.netFinalValue = hourCost + minutsCost;
    NetAcc.finalValue = SumServices + NetAcc.netFinalValue;
    console.log(NetAcc.NofAdd);

    document.getElementById('final-value-N' + NetID.toString()).innerText = ("R$ " + 
      parseFloat(NetAcc.finalValue).toFixed(2)
    );
  }
}

function Start(NetID){
  var N1 = new Date(); 
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.initialHours= N1.getHours();
  NetAcc.initialMinutes= N1.getMinutes();
  NetAcc.initialSeconds= N1.getSeconds();
  
  RefreshValue(NetID);
  
  document.getElementById('i_hour_net0' + NetID.toString()).innerText = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById('i_minute_net0' + NetID.toString()).innerText = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById('i_second_net0' + NetID.toString()).innerText = (NetAcc.initialSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  
  NetAcc.status = 1;

  document.getElementById("btn-start-n" + NetID.toString()).style.visibility = "hidden";
  document.getElementById("btn-stop-n" + NetID.toString()).style.visibility = "visible";
  document.getElementById("running-clock_net0" + NetID.toString()).style.visibility = "visible";

  RegisterLog(NetID);
}

function RefreshValue(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  document.getElementById('PBN' + NetID.toString()).innerText = NetAcc.NofPrint;
  document.getElementById('ColorN' + NetID.toString()).innerText = NetAcc.NofColor;
  document.getElementById('ScanN' + NetID.toString()).innerText = NetAcc.NofScan;
  
  var SumServices = 
    (NetAcc.NofPrint * ValuePrint) + 
    (NetAcc.NofColor * ValueColor) + 
    (NetAcc.NofScan * ValueScan)
  ;
  NetAcc.finalValue = SumServices + NetAcc.NofAdd + NetAcc.netFinalValue;

  document.getElementById('final-value-N' + NetID.toString()).innerText = ("R$ " + 
    parseFloat(NetAcc.finalValue).toFixed(2)
  );
}

function Stop(NetID) {
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.status = 2;    
  document.getElementById("btn-stop-n" + NetID.toString()).style.visibility = "hidden";
  document.getElementById("btn-reset-n" + NetID.toString()).style.visibility = "visible";
  document.getElementById("btn-reset-n" + NetID.toString()).disabled = true;
  document.getElementById("btn-reset-n" + NetID.toString()).style.opacity = 0.5;
  toastr.success('Tempo do NET0' + NetID.toString() + '- Encerrado');
  document.getElementById("running-clock_net0" + NetID.toString()).style.visibility = "hidden";

  setTimeout(function(){ 
    document.getElementById("btn-reset-n" + NetID.toString()).style.opacity = 1;
    document.getElementById("btn-reset-n" + NetID.toString()).disabled = false;
  }, 2000);

  CloseLog(NetID);
}

function Reset(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.status = 0;   
  NetAcc.initialHours = 0;
  NetAcc.initialMinutes = 0;
  NetAcc.initialSeconds = 0;
  NetAcc.finalHours = 0;
  NetAcc.finalMinutes = 0;
  NetAcc.finalSeconds = 0;
  NetAcc.status = 0;
  NetAcc.NofPrint = 0;
  NetAcc.NofColor = 0;
  NetAcc.NofScan = 0;
  NetAcc.NofAdd = 0;
  NetAcc.netFinalValue = 0;
  NetAcc.finalValue = 0;

  document.getElementById('input_value-n' + NetID.toString()).value = 0;
  document.getElementById("btn-reset-n" + NetID.toString()).style.visibility = "hidden";
  document.getElementById("btn-start-n" + NetID.toString()).style.visibility = "visible";
  document.getElementById('i_hour_net0' + NetID.toString()).innerText = "00";
  document.getElementById('i_minute_net0' + NetID.toString()).innerText = "00";
  document.getElementById('i_second_net0' + NetID.toString()).innerText = "00";
  document.getElementById('f_hour_net0' + NetID.toString()).innerText = "00";
  document.getElementById('f_minute_net0' + NetID.toString()).innerText = "00";
  document.getElementById('f_second_net0' + NetID.toString()).innerText = "00";    
  document.getElementById('final-value-N' + NetID.toString()).innerText = ("R$ 0.00");
  RefreshValue(NetID);
}

function  PrintAdd(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.NofPrint = NetAcc.NofPrint + 1;
  RefreshValue(NetID);
}

function PrintRemove(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  if (NetAcc.NofPrint > 0) {
    NetAcc.NofPrint = NetAcc.NofPrint - 1;
    RefreshValue(NetID);
  } else {}
}

function  ColorAdd(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.NofColor = NetAcc.NofColor + 1;
  RefreshValue(NetID);
}

function ColorRemove(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  if (NetAcc.NofColor > 0) {
    NetAcc.NofColor = NetAcc.NofColor - 1;
    RefreshValue(NetID);
  } else {}
}

function  ScanAdd(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  NetAcc.NofScan = NetAcc.NofScan + 1;
  RefreshValue(NetID);
}

function ScanRemove(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  if (NetAcc.NofScan > 0) {
  NetAcc.NofScan = NetAcc.NofScan - 1;
  RefreshValue(NetID);
  } else {}
}

// --------------------------------------------------------------------MODAL NETS------------------------------------------------------

function OpenModalNet(NetID){

  document.getElementById("InitialListN" + NetID.toString()).innerHTML = '';
  document.getElementById("FinalListN" + NetID.toString()).innerHTML = '';
  document.getElementById("FinalListValueN" + NetID.toString()).innerHTML = '';

  const NetAcc = data.find(computer => computer.id === NetID);
  document.getElementById("ModalNet0" + NetID.toString()).style.display = "block";
  document.getElementById("NewHourN" + NetID.toString()).disabled = true;
  document.getElementById("NewMinuteN" + NetID.toString()).disabled = true;
  document.getElementById("SubmitNewHourN" + NetID.toString()).disabled = true;
  document.getElementById("SubmitNewHourN" + NetID.toString()).style.opacity = 0.5;
  document.getElementById("NewHourN" + NetID.toString()).value = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById("NewMinuteN" + NetID.toString()).value = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  if (NetAcc.status==1){
    document.getElementById("NewHourN" + NetID.toString()).disabled = false;
    document.getElementById("NewMinuteN" + NetID.toString()).disabled = false;
    document.getElementById("SubmitNewHourN" + NetID.toString()).disabled = false;
    document.getElementById("SubmitNewHourN" + NetID.toString()).style.opacity = 1;
  }

  for (let i = 0; i < UsageLog.length; i++) {
    if (UsageLog[i].origin == NetID) {
      var InitialList = document.getElementById('InitialListN'+ NetID.toString());
      var listItem = document.createElement('li');
      listItem.textContent = `Entrada: ${UsageLog[i].arrivedHours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${UsageLog[i].arrivedMinutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
      InitialList.appendChild(listItem);

      var FinalList = document.getElementById('FinalListN' + NetID.toString());
      var listItem2 = document.createElement('li');
      listItem2.textContent = `Saída: ${UsageLog[i].closedHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${UsageLog[i].closedMinutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;      
      FinalList.appendChild(listItem2);

      var FinalListValue = document.getElementById('FinalListValueN' + NetID.toString());
      var listItem3 = document.createElement('li');
      listItem3.textContent = `R$${parseFloat(UsageLog[i].finalValue).toFixed(2)}`;      
      FinalListValue.appendChild(listItem3);
    }
  }
}

function CloseModalNet(NetID){
  document.getElementById("ModalNet0" + NetID.toString()).style.display = "none";
}

window.onclick = function(event) {
  if (event.target == ModalNet01) {
    ModalNet01.style.display = "none";
  }
  if (event.target == ModalNet02) {
    ModalNet02.style.display = "none";
  }
  if (event.target == ModalNet03) {
    ModalNet03.style.display = "none";
  }
}

function ChangeHour(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  var NewHour , NewMinute;
  NewHour = document.getElementById("NewHourN" + NetID.toString()).value;
  NewMinute = document.getElementById("NewMinuteN" + NetID.toString()).value;
  var N3 = new Date(); 
  var ActualHour = N3.getHours();
  var ActualMinutes = N3.getMinutes();

  if( NewHour > 0 && NewHour < 24 && NewMinute >= 0 && NewMinute < 60 ){
    if( (ActualHour - NewHour) >= 0){
      if( (ActualHour - NewHour) == 0 && NewMinute < ActualMinutes){
        NetAcc.initialHours = parseInt(NewHour);
        NetAcc.initialMinutes = parseInt(NewMinute);
        document.getElementById('i_hour_net0' + NetID.toString()).innerText   = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById('i_minute_net0' + NetID.toString()).innerText = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        toastr.success('Tempo do NET0' + NetID.toString() + '- Atualizado');
        CloseModalNet(NetID)
      }
      if( (ActualHour - NewHour) == 0 && NewMinute > ActualMinutes){
        document.getElementById("NewHourN" + NetID.toString()).value = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById("NewMinuteN" + NetID.toString()).value = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        toastr.error('O tempo não pode ser maior que a hora atual');
      }
      else{
        NetAcc.initialHours = parseInt(NewHour);
        NetAcc.initialMinutes = parseInt(NewMinute);
        document.getElementById('i_hour_net0' + NetID.toString()).innerText   = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        document.getElementById('i_minute_net0' + NetID.toString()).innerText = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        toastr.success('Tempo do NET0' + NetID.toString() + '- Atualizado');
        CloseModalNet(NetID)
      }
    }else{
    document.getElementById("NewHourN" + NetID.toString()).value = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("NewMinuteN" + NetID.toString()).value = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    toastr.error('O tempo não pode ser maior que a hora atual');
    }
  }else{
    document.getElementById("NewHourN" + NetID.toString()).value = (NetAcc.initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("NewMinuteN" + NetID.toString()).value = (NetAcc.initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    toastr.error('Valor inserido invalido - Tente novamente');
  }
  for (let i = 0; i < UsageLog.length; i++) {
    if (UsageLog[i].origin == NetID && UsageLog[i].closedHour == 0) {
      UsageLog[i].arrivedHours = parseInt(NewHour);
      UsageLog[i].arrivedMinutes = parseInt(NewMinute);
      break;
    }
  }
}

function RegisterLog(NetID){
  const NetAcc = data.find(computer => computer.id === NetID);
  const Log = UsageLog.slice(0);
  Log.origin = NetID;
  Log.arrivedHours = NetAcc.initialHours;
  Log.arrivedMinutes = NetAcc.initialMinutes;
  Log.closedHour = 0;
  Log.closedMinutes = 0;
  Log.netValue = 0;
  Log.finalValue = 0;
  UsageLog.push(Log);
}

function CloseLog(NetID){
  for (let i = 0; i < UsageLog.length; i++) {
  if (UsageLog[i].origin == NetID && UsageLog[i].closedHour == 0) {
    const NetAcc = data.find(computer => computer.id === NetID);
    var N1 = new Date(); 
    UsageLog[i].closedHour = N1.getHours();
    UsageLog[i].closedMinutes = N1.getMinutes();
    UsageLog[i].netValue = NetAcc.netFinalValue;
    UsageLog[i].finalValue = NetAcc.finalValue;
    break;
    }
  }
}

// --------------------------------------------------------------------MODAL REARRANGE------------------------------------------------------
var modal = document.getElementById("RearrangeModal");
var btn = document.getElementById("OpenRearrangeModal");

function OpenModal(){
  modal.style.display = "block";
  RefreshModal();
}

function CloseModal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function RefreshModal(){
  for (let i = 1; i < data.length+1; i++) {   
    const NetAcc = data.find(computer => computer.id === i);
    document.getElementById("from-net0" + i.toString() + "-label").style.color = "#000000";
    document.getElementById("from-net0" + i.toString() ).disabled=false;
    document.getElementById("to-net0" + i.toString() + "-label").style.color = "#000000";
    document.getElementById("to-net0" + i.toString() ).disabled=false;

    if (NetAcc.status == 0 || NetAcc.status == 2){
      document.getElementById("from-net0" + i.toString() + "-label").style.color = "#0001022d";
      document.getElementById("from-net0" + i.toString() ).disabled=true;
    }

    if (NetAcc.status == 1 || NetAcc.status == 2){
      document.getElementById("to-net0" + i.toString() + "-label").style.color = "#0001022d";
      document.getElementById("to-net0" + i.toString() ).disabled=true;
    }
  }
}

function SubmitModal(){
  if (document.getElementById('from-net01').checked) {
    if (document.getElementById('to-net02').checked){
      ModalNetChageValues(0,1);
    }
    if (document.getElementById('to-net03').checked){
      ModalNetChageValues(0,2);
    }
  }
  if (document.getElementById('from-net02').checked) {
    if (document.getElementById('to-net01').checked){
      ModalNetChageValues(1,0);
    }
    if (document.getElementById('to-net03').checked){
      ModalNetChageValues(1,2);
    }
  }
  if (document.getElementById('from-net03').checked){
    if (document.getElementById('to-net01').checked){
      ModalNetChageValues(2,0);
    }
    if (document.getElementById('to-net02').checked){
      ModalNetChageValues(2,1);
    }
  }
  toastr.info('Troca efetuada com sucesso');
  CloseModal();
}

function ModalNetChageValues(NetFrom , NetTo){
    data[NetTo].initialHours = data[NetFrom].initialHours;
    data[NetTo].initialMinutes = data[NetFrom].initialMinutes;
    data[NetTo].initialSeconds = data[NetFrom].initialSeconds;
    data[NetTo].finalHours = data[NetFrom].finalHours;
    data[NetTo].finalMinutes = data[NetFrom].finalMinutes; 
    data[NetTo].finalSeconds = data[NetFrom].finalSeconds;
    data[NetTo].status = data[NetFrom].status;
    data[NetTo].NofPrint = data[NetFrom].NofPrint;
    data[NetTo].NofColor = data[NetFrom].NofColor;
    data[NetTo].NofScan = data[NetFrom].NofScan;
    data[NetTo].NofAdd = data[NetFrom].NofAdd;
    data[NetTo].netFinalValue = data[NetFrom].netFinalValue;
    data[NetTo].finalValue = data[NetFrom].finalValue;  
    data[NetTo].NofAdd = data[NetFrom].NofAdd;  
    NetFrom = NetFrom + 1;
    NetTo = NetTo + 1;
    ModalNetReset(NetFrom, NetTo);
}

function ModalNetReset(NetFrom , NetTo){
  for (let i = 0; i < UsageLog.length; i++) {
    if (UsageLog[i].origin == NetFrom && UsageLog[i].closedHour == 0) {
      UsageLog[i].origin = NetTo;
      break;
    }
  }
  document.getElementById('i_hour_net0' + NetTo.toString()).innerText = (data[(NetTo - 1)].initialHours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById('i_minute_net0' + NetTo.toString()).innerText = (data[(NetTo - 1)].initialMinutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById('i_second_net0' + NetTo.toString()).innerText = (data[(NetTo - 1)].initialSeconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  document.getElementById("btn-stop-n" + NetFrom.toString()).style.visibility = "hidden";
  document.getElementById("btn-start-n" + NetTo.toString()).style.visibility = "hidden";
  document.getElementById('input_value-n' + NetTo.toString()).value = (data[(NetTo - 1)].NofAdd);
  if(data[(NetTo-1)].status == 1){document.getElementById("btn-stop-n" + NetTo.toString()).style.visibility = "visible";}
  else{document.getElementById("btn-reset-n" + NetTo.toString()).style.visibility = "visible";}
  Reset(NetFrom);
  RefreshValue(NetTo);
}


// ToDo - Zerar seleção do modal rearrange


