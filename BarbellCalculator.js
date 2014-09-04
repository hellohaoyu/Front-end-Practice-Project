  var bag15_used = 0;
  var bag10_used = 0;
  var bag5_used = 0;

  var ExternalBags = 4;
  var ExternalBagstag = 2;
  var Bag5 = 4;
  var Bag10 = 4;
  var Bag15 = 12;
  var Bags = 12;
  var BarWeight = 45;

  function SizeCalc() {

  reset();
  var weight = 0;

  weight = document.getElementById("Weight").value;

  weight = weight - BarWeight;
  if (weight > (15 * Bag15)) {
     alert("Oh, Let's get more bags!");       
     return false;
  } else if (weight < 0) {
      alert("Hey man! Don't kidding me!");
       return false;
    }

   while (weight >= 10) {
      if (weight >= 30 && bag15_used < Bag15) {
          weight = weight - 30;
          bag15_used++;
          continue;
      } else if (weight >= 20 && bag10_used < Bag10) {
              weight = weight - 20;
              bag10_used++;
              continue;
      } else if (weight >= 10 && bag5_used < Bag5) {
              weight =  weight - 10;
              bag5_used++;
              continue;
      } 
      else
      {
          alert("Unexpected error happens!");
          return false;
      }
    }  
  var svgid = '';
  for (i = 1; i <= Bags/2; i++) {
      svgid_1 = 'svg' + i;
      svgid_2 = 'svg' + (i+9);
      if (bag15_used >= i){
          changetext('15 LB', svgid_1);
          changetext('15 LB', svgid_2);
      } else if ((bag15_used + bag10_used) >= i && (bag15_used < i)) {
          changetext('10 LB', svgid_1);
          changetext('10 LB', svgid_2);
      } else if ((bag15_used + bag10_used + bag5_used) >= i && (bag15_used + bag10_used) < i) {
          changetext('5 LB', svgid_1);
          changetext('5 LB', svgid_2);
      } 
      else
      {
         blurRect(svgid_1);
         blurRect(svgid_2);        
      }
  }

}

function text_Init(){
    for (i = 1; i <= 18; i++) {
       svgid = 'svg' + i;
       createtext(svgid);
    }
}

function createtext(svgid){
    var textid = 'text' + svgid;
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '35');
    text.setAttribute('id', textid);
    text.setAttribute('y', '35');
    text.setAttribute('fill', 'black');
    text.setAttribute('font-size', '20'); 
    text.textContent = '';

    var svg = document.getElementById(svgid); 
    svg.appendChild(text); 
}

function changetext(value, svgid){
    var textid = 'text' + svgid;
    var text = document.getElementById(textid);
    text.textContent = value;

    var svg = document.getElementById(svgid); 
    svg.appendChild(text); 

}

function blurRect(svgid){
    document.getElementById(svgid).style.opacity= 0.2; 
}

function clearRect(svgid){
    document.getElementById(svgid).style.opacity= 1; 
}

function reset(){
     for (i = 1; i <= 18; i++) {
       svgid = 'svg' + i;
       changetext('', svgid);
       clearRect(svgid);
     }
    bag15_used = 0;
    bag10_used = 0;
    bag5_used = 0;
}


$(document).ready (function () {
    text_Init();
    hide_calculator();
    // show_calculator();
    setting();
    $("#Reset").click(reset);
    $("#Calculate").click(SizeCalc);
});

  // function show_calculator() {
  // var id='';
  // for (var i = 1; i <= ExternalBagstag; i++) {
  //     id = ".external" + i;
  //     // $(id).removeClass("rect_none");
  //     $(id).attr("class", "rect_obvious rect_none");
  //   }
  // }

  // function hide_calculator(){
  //    var id='';
  //    for (var i = 1; i < 9; i++) {
  //      id = ".external" + i;
  //      $(id).hide();
  //   }

  // }

  function setting(){

  // ExternalBags = document.getElementById("ExternalBags").value;
  var selIndex = document.getElementById("ExternalBags").selectedIndex;
  ExternalBags = 1*document.getElementById("ExternalBags").options[selIndex].innerHTML;
  ExternalBagstag = ExternalBags / 2;
  Bag5 = 1*ExternalBags;
  Bag10 = 1*ExternalBags;
  Bag15 = 3*ExternalBags;
  Bags = 3*ExternalBags;



  BarWeight = document.getElementById("BarWeight").value;

  hide_calculator();
  

}
function hide_calculator() {
   var id='';
   var style="rect_style"
   var color="rect_color_"
   if (ExternalBags == 2) {    
     for (var i = 1; i < 4; i++) {
          id = ".external" + i+" rect";
          $(id).attr("class","rect_obvious rect_none");
       };
     $(".external1 rect").attr("class","rect_obvious rect_color_1 rect_style");

  } else if (ExternalBags == 4) {
    for (var i = 1; i < 4; i++) {
          id = ".external" + i+" rect";
          $(id).attr("class","rect_obvious rect_none");
       };
    $(".external1 rect").attr("class","rect_obvious rect_color_1 rect_style");
    $(".external2 rect").attr("class","rect_obvious rect_color_2 rect_style");
   } else if (ExternalBags == 6){ 
    $(".external1 rect").attr("class","rect_obvious rect_color_1 rect_style");
    $(".external2 rect").attr("class","rect_obvious rect_color_2 rect_style");
    $(".external3 rect").attr("class","rect_obvious rect_color_3 rect_style");
   } else{
      alert("Unexpected error!");
   };
   
}