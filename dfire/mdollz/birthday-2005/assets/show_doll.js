(function(){


function elouai_init_global()
{
  var w = window;
  var nullvalue = null;
  
  if (w.elouai_sex == nullvalue) w.elouai_sex = "girl";
  if (w.elouai_background == nullvalue) w.elouai_background = "0000";
  if (w.elouai_elements == nullvalue) w.elouai_elements = "0000";
  if (w.elouai_wings == nullvalue) w.elouai_wings = "0000";
  if (w.elouai_base == nullvalue) w.elouai_base = "0001";
  
  if (w.elouai_boystockings == nullvalue) w.elouai_boystockings = "0000";
  if (w.elouai_boyshoes == nullvalue) w.elouai_boyshoes = "0000";
  if (w.elouai_boyskirt == nullvalue) w.elouai_boyskirt = "0000";
  if (w.elouai_boytop == nullvalue) w.elouai_boytop = "0000";
  if (w.elouai_boytwopiece == nullvalue) w.elouai_boytwopiece = "0000";
  if (w.elouai_boyfullbody == nullvalue) w.elouai_boyfullbody = "0000";
  
  if (w.elouai_girlstockings == nullvalue) w.elouai_girlstockings = "0000";
  if (w.elouai_girlshoes == nullvalue) w.elouai_girlshoes = "0000";
  if (w.elouai_girlskirt == nullvalue) w.elouai_girlskirt = "0000";
  if (w.elouai_girltop == nullvalue) w.elouai_girltop = "0000";
  if (w.elouai_girltwopiece == nullvalue) w.elouai_girltwopiece = "0000";
  if (w.elouai_girlfullbody == nullvalue) w.elouai_girlfullbody = "0000";
  
  if (w.elouai_head == nullvalue) w.elouai_head = "0000";
  if (w.elouai_mouth == nullvalue) w.elouai_mouth = "0000";
  if (w.elouai_nose == nullvalue) w.elouai_nose = "0000";
  if (w.elouai_eyebrows == nullvalue) w.elouai_eyebrows = "0000";
  if (w.elouai_eyes == nullvalue) w.elouai_eyes = "0000";
  if (w.elouai_face == nullvalue) w.elouai_face = "0000";
  if (w.elouai_makeup == nullvalue) w.elouai_makeup = "0000";
  if (w.elouai_earings == nullvalue) w.elouai_earings = "0000";
  if (w.elouai_glasses == nullvalue) w.elouai_glasses = "0000";
  if (w.elouai_hair == nullvalue) w.elouai_hair = "0000";
  if (w.elouai_scarf == nullvalue) w.elouai_scarf = "0000";
  if (w.elouai_hat == nullvalue) w.elouai_hat = "0000";
  if (w.elouai_accessory1 == nullvalue) w.elouai_accessory1 = "0000";
  if (w.elouai_pets1 == nullvalue) w.elouai_pets1 = "0000";
  if (w.elouai_pets2 == nullvalue) w.elouai_pets2 = "0000";
  if (w.elouai_accessory2 == nullvalue) w.elouai_accessory2 = "0000";
  if (w.elouai_cover == nullvalue) w.elouai_cover = "0000";
}

function elouai_write_iframe_boy() 
{
  var w = window;
  var d = document;
  d.write('<iframe' +
          ' name="show_animated_doll"' +
          ' width="150"' + 
          ' height="290"' + 
          ' frameborder="0"' + 
          ' src="http://elouai.com/doll-makers/new-dollmaker-linkdoll.php' + 
                '?sex=' + w.elouai_sex + 
                '&background=' + w.elouai_background +
                '&elements=' + w.elouai_elements +
                '&wings=' + w.elouai_wings +
                '&base=' + w.elouai_base +
                '&boystockings=' + w.elouai_boystockings +
                '&boyshoes=' + w.elouai_boyshoes +
                '&boyskirt=' + w.elouai_boyskirt +
                '&boytop=' + w.elouai_boytop +
                '&boytwopiece=' + w.elouai_boytwopiece +
                '&boyfullbody=' + w.elouai_boyfullbody +
                '&head=' + w.elouai_head +
                '&mouth=' + w.elouai_mouth +
                '&nose=' + w.elouai_nose +
                '&eyebrows=' + w.elouai_eyebrows +
                '&eyes=' + w.elouai_eyes +
                '&face=' + w.elouai_face +
                '&makeup=' + w.elouai_makeup +
                '&earings=' + w.elouai_earings +
                '&glasses=' + w.elouai_glasses +
                '&hair=' + w.elouai_hair +
                '&scarf=' + w.elouai_scarf +
                '&hat=' + w.elouai_hat +
                '&accessory1=' + w.elouai_accessory1 +
                '&pets1=' + w.elouai_pets1 +
                '&pets2=' + w.elouai_pets2 +
                '&accessory2=' + w.elouai_accessory2 +
                '&cover=' + w.elouai_cover + '"' +
          ' marginwidth="0"' +
          ' marginheight="0"' +
          ' vspace="0"' +
          ' hspace="0"' +
          ' allowtransparency="true"' +
          ' scrolling="no">');
  d.write('</iframe>');
}

function elouai_write_iframe_girl() 
{
  var w = window;
  var d = document;
  d.write('<iframe' +
          ' name="show_animated_doll"' +
          ' width="150"' + 
          ' height="290"' + 
          ' frameborder="0"' + 
          ' src="http://elouai.com/doll-makers/new-dollmaker-linkdoll.php' + 
                '?sex=' + w.elouai_sex + 
                '&background=' + w.elouai_background +
                '&elements=' + w.elouai_elements +
                '&wings=' + w.elouai_wings +
                '&base=' + w.elouai_base +
                '&girlstockings=' + w.elouai_girlstockings +
                '&girlshoes=' + w.elouai_girlshoes +
                '&girlskirt=' + w.elouai_girlskirt +
                '&girltop=' + w.elouai_girltop +
                '&girltwopiece=' + w.elouai_girltwopiece +
                '&girlfullbody=' + w.elouai_girlfullbody +
                '&head=' + w.elouai_head +
                '&mouth=' + w.elouai_mouth +
                '&nose=' + w.elouai_nose +
                '&eyebrows=' + w.elouai_eyebrows +
                '&eyes=' + w.elouai_eyes +
                '&face=' + w.elouai_face +
                '&makeup=' + w.elouai_makeup +
                '&earings=' + w.elouai_earings +
                '&glasses=' + w.elouai_glasses +
                '&hair=' + w.elouai_hair +
                '&scarf=' + w.elouai_scarf +
                '&hat=' + w.elouai_hat +
                '&accessory1=' + w.elouai_accessory1 +
                '&pets1=' + w.elouai_pets1 +
                '&pets2=' + w.elouai_pets2 +
                '&accessory2=' + w.elouai_accessory2 +
                '&cover=' + w.elouai_cover + '"' +
          ' marginwidth="0"' +
          ' marginheight="0"' +
          ' vspace="0"' +
          ' hspace="0"' +
          ' allowtransparency="true"' +
          ' scrolling="no">');
  d.write('</iframe>');
}

function elouai_write_iframe() 
{
  if (window.elouai_sex == 'boy') elouai_write_iframe_boy();
  else                            elouai_write_iframe_girl();
}


elouai_init_global();
elouai_write_iframe();
})()