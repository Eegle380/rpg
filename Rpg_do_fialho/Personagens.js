$(function(){
 
  $("#tabela").hide();
  
 
 
 })
var enache={
    
    nome :'Enache',
    classe : 'Mestre',
    habilidade: 'Teletransporte',
    accuracy: 50,
    hist: '????????????????????????????????????????????????????????????????????????????????',
 };
 var sasaki={
    
  nome :'Sasaki',
  classe : 'Dano',
  HP: 50,
  habilidade: 'Ataque Fatal',
  atk: 15,
  def: 10,
  accuracy:50,
  str:100,

 /* itemA:'Pedaço de madeira',*/
  itemA:'--------',


  skill1n:'Soco',
  skill1s:10,
  skill1d:0,
 
  skill2n:'-------------',
  skill2s:0,
  skill2d:0,
  


  skill3n:'-------------',
  skill3s:0,
  skill3d:0,
 


  skill4n:'-------------',
  skill4s:0,
  skill4d:0,


  hist: '????????????????????????????????????????????????????????????????????????????????',
};
var igor={
    
  nome :'Igor',
  classe : 'Tanque',
  HP: 70,
  habilidade: 'Fúria de Gladiador',
  atk: 10,
  def: 20,
  str:90,
  accuracy: 50,
  
  skill1n:'Proteger',
  skill1s:30,
  skill1d:0,
  skill1a:10,
 
  skill2n:'-------------',
  skill2s:0,
  skill2d:0,
  skill2a:0,


  skill3n:'-------------',
  skill3s:0,
  skill3d:0,
  skill3a:0,


  skill4n:'-------------',
  skill4s:0,
  skill4d:0,
  skill4a:0,

  itemA:'--------',
  hist: '????????????????????????????????????????????????????????????????????????????????',
};
var sobreira={
    
  nome :'Sobreira',
  classe : 'Suporte',
  HP: 40,
  habilidade: 'Cuidados Especiais',
  atk: 7,
  def: 10,
  str:120,
  itemA:'--------',


  skill1n:'Primeiros socorros',
  skill1s:20,
  skill1c:20,
  skill1dpf:1,


  skill2n:'-------------',
  skill2s:0,
  skill2c:0,
  skill2dpf:0,


  skill3n:'-------------',
  skill3s:0,
  skill3c:0,
  skill3dpf:0,


  skill4n:'-------------',
  skill4s:0,
  skill4c:0,
  skill4dpf:0,

  accuracy:'60',
  itemA:'--------',
  hist: '????????????????????????????????????????????????????????????????????????????????',
};
var ique={
    
  nome :'Ique',
  classe : 'Flanco',
  HP: 50,
  habilidade: 'Tiro certeiro',
  atk: 12,
  def: 10,
  str:100,
  accuracy:'70',
  itemA:'--------', 


  skill1n:'Jogar Pedra',
  skill1s:5,
  skill1d:3,
 
  skill2n:'-------------',
  skill2s:0,
  skill2d:0,
  
  /*skill2n:'Pedaço de vidro',
  skill2s:0,
  skill2d:0,*/
  


  skill3n:'-------------',
  skill3s:0,
  skill3d:0,
 


  skill4n:'-------------',
  skill4s:0,
  skill4d:0,


  hist: '????????????????????????????????????????????????????????????????????????????????',
};





 /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/   /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  





/*alert(sobreira.skill1.fill(wdpf))*/
function buscar(){


 /* <---------------------------------------------->*/   
  var s = document.getElementById('pesquisa').value;
  var ts = s.toUpperCase();
 /* <---------------------------------------------->*/    
if ( ts == "ENACHE") {

    $("#tabela").show();
 /* <---------------------------------------------->*/   
    var i = document.getElementById("imgs");
    i.src = "Icons/Enache.png";
    i.style.width ="200px";
    i.style.height ="200px";
/*<------------------------------------------------>*/ 

    $("#nome").html(enache.nome );
    $("#classe").html(enache.classe);
    $("#habilidades").html(enache.habilidade);
    $('#hist').html(enache.hist);
  } 



  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  
  /* <---------------------------------------------->*/  


  if ( ts == "SASAKI") {

    $("#tabela").show();
 /* <---------------------------------------------->*/   
  var i = document.getElementById("imgs");
   i.src = "Icons/SasakiPixel.png";
   i.style.width ="300px";
   i.style.height ="200px";
  

   var c = document.getElementById("imgc");
   c.src = "Icons/dano.png";
   c.style.width ="50px";
   c.style.height ="50px";
/*<------------------------------------------------>*/ 

    $("#nome").html(sasaki.nome );
    $("#classe").html(sasaki.classe);
    $("#habilidades").html(sasaki.habilidade);
    $("#atk").html(sasaki.atk);
    $("#def").html(sasaki.def);
    $('#hist').html(sasaki.hist);
    $('#str').html(sasaki.str);
    $('#itema').html(sasaki.itemA);
    $('#hp').html(sasaki.HP);
    $("#hp").css("width","100%" );
    $('#acc').html(sasaki.accuracy);


    $("#extra").empty();
    $("#extra2").empty();
    $("#extra3").empty();
    $("#extra4").empty();

    $("#1skill").html(sasaki.skill1n);
    $("#gstr").html(sasaki.skill1s);
    $("#edano").html('Dano Extra: ' + sasaki.skill1d);
    
    $("#2skill").html(sasaki.skill2n);
    $("#gstr2").html(sasaki.skill2s);
    $("#edano2").html('Dano Extra: ' + sasaki.skill2d);
     
    $("#3skill").html(sasaki.skill3n);
    $("#gstr3").html(sasaki.skill3s);
    $("#edano3").html('Dano Extra: ' + sasaki.skill3d);

    $("#4skill").html(sasaki.skill4n);
    $("#gstr4").html(sasaki.skill4s);
    $("#edano4").html('Dano Extra: ' + sasaki.skill4d);
   
    

    

  } 

  

  
/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  


if ( ts == "IGOR") {

  $("#tabela").show();
/* <---------------------------------------------->*/   
  var i = document.getElementById("imgs");
  i.src = "Icons/Igor.png";
  i.style.width ="200px";
  i.style.height ="200px";

  var c = document.getElementById("imgc");
  c.src = "Icons/tanque.png";
  c.style.width ="50px";
  c.style.height ="50px";
/*<----------------------------------
/*<------------------------------------------------>*/ 

  $("#nome").html(igor.nome );
  $("#classe").html(igor.classe);
  $("#habilidades").html(igor.habilidade);
  $('#hist').html(igor.hist);
  $('#atk').html(igor.atk);
  $('#def').html(igor.def);
  $('#str').html(igor.str);
  $('#itema').html(igor.itemA);
  $('#hp').html(igor.HP);
  $("#hp").css("width","100%" );
  $('#acc').html(igor.accuracy);

    $("#1skill").html(igor.skill1n);
    $("#gstr").html(igor.skill1s);
    $("#edano").html('Dano Extra: ' + igor.skill1d);
    $("#extra").html('Proteção: ' +igor.skill1a);
    
  
    $("#2skill").html(igor.skill2n);
    $("#gstr2").html(igor.skill2s);
    $("#edano2").html('Dano Extra: ' +igor.skill2d);
    $("#extra2").html('Proteção: ' +igor.skill2a);
  
    $("#3skill").html(igor.skill3n);
    $("#gstr3").html(igor.skill3s);
    $("#edano3").html('Dano Extra: ' +igor.skill3d);
    $("#extra3").html('Proteção: ' +igor.skill3a);
  
    $("#4skill").html(igor.skill4n);
    $("#gstr4").html(igor.skill4s);
    $("#edano4").html('Dano Extra: ' +igor.skill4d);
    $("#extra4").html('Proteção: ' + igor.skill4a);
  
} 




/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  




if ( ts == "SOBREIRA") {

  $("#tabela").show();
/* <---------------------------------------------->*/   
  /*var i = document.getElementById("imgs");
  i.src = "Icons/Igor.png";
  i.style.width ="200px";
  i.style.height ="200px";*/


  var c = document.getElementById("imgc");
  c.src = "Icons/cura.png";
  c.style.width ="50px";
  c.style.height ="50px";
/*<------------------------------------------------>*/ 

  $("#nome").html(sobreira.nome );
  $("#classe").html(sobreira.classe);
  $("#habilidades").html(sobreira.habilidade);
  $("#habilidades").html(sobreira.habilidade);
  $("#atk").html(sobreira.atk);
  $("#def").html(sobreira.def);
  $('#hist').html(sobreira.hist);
  $('#str').html(sobreira.str);
  $('#itema').html(sobreira.itemA);
  $('#hp').html(sobreira.HP);
  $("#hp").css("width","100%" );
  $('#acc').html(sobreira.accuracy);

  
  $("#1skill").html(sobreira.skill1n);
  $("#gstr").html(sobreira.skill1s);
  $("#edano").html('Cura: '+sobreira.skill1c);
  $("#extra").html('DPF: '+ sobreira.skill1dpf);
  

  $("#2skill").html(sobreira.skill2n);
  $("#gstr2").html(sobreira.skill2s);
  $("#edano2").html('Cura: '+ sobreira.skill2c);
  $("#extra2").html('DPF: '+ sobreira.skill2dpf);

  $("#3skill").html(sobreira.skill3n);
  $("#gstr3").html(sobreira.skill3s);
  $("#edano3").html('Cura: '+ sobreira.skill3c);
  $("#extra3").html('DPF: ' + sobreira.skill3dpf);

  $("#4skill").html(sobreira.skill4n);
  $("#gstr4").html(sobreira.skill4s);
  $("#edano4").html('Cura: '+ sobreira.skill4c);
  $("#extra4").html('DPF: ' +  sobreira.skill4dpf);




  
}


/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  
/* <---------------------------------------------->*/  




if ( ts == "IQUE") {

  $("#tabela").show();
/* <---------------------------------------------->*/   
  var i = document.getElementById("imgs");
  i.src = "Icons/Igor.png";
  i.style.width ="200px";
  i.style.height ="200px";

  var c = document.getElementById("imgc");
  c.src = "Icons/flanco.png";
  c.style.width ="50px";
  c.style.height ="50px";

/*<------------------------------------------------>*/ 

  $("#nome").html(ique.nome );
  $("#classe").html(ique.classe);
  $("#habilidades").html(ique.habilidade);
  $("#atk").html(ique.atk);
  $("#def").html(ique.def);
  $('#str').html(ique.str);
  $('#hist').html(ique.hist);
  $('#itema').html(ique.itemA);
  $('#hp').html(ique.HP);
  $("#hp").css("width","100%" );
  $('#acc').html(ique.accuracy);

  $("#extra").empty();
  $("#extra2").empty();
  $("#extra3").empty();
  $("#extra4").empty();

  $("#1skill").html(ique.skill1n);
  $("#gstr").html(ique.skill1s);
  $("#edano").html('Dano Extra: ' + ique.skill1d);
  
  $("#2skill").html(ique.skill2n);
  $("#gstr2").html(ique.skill2s);
  $("#edano2").html('Dano Extra: ' + ique.skill2d);
   
  $("#3skill").html(ique.skill3n);
  $("#gstr3").html(ique.skill3s);
  $("#edano3").html('Dano Extra :' + ique.skill3d);

  $("#4skill").html(ique.skill4n);
  $("#gstr4").html(ique.skill4s);
  $("#edano4").html('Dano Extra: ' + ique.skill4d);






}





}
 



