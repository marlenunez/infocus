//v.1.04 Marleny Nunez
/*
First try at putting infocus in the big screen

To be run from the browser javascript console.
1. Open the Infocus gallery.
2. Run this code from the console.
*/

var s = "";

//Las fotos de 1280
var imgs = $('.if1280 .ifImg');
var total_fotos = imgs.length;

//Los captions de las fotos de 1280
var captions = $('.if1280 .imgCap');

//Otras variables
var current_img;
var current_cap;
var k = 0;

//Eliminar unos cuantos elementos no deseados
$('div.dek script').remove();
$('.if1280 .imgCap a, .if1280 .imgCap span').remove();

s += '<html>\n';
s += '<head>\n';
s += '<title>' + document.title + '</title>\n';
s += '<style type="text/css">\n';
s += 'body { background: #282828; color: #FFEEAA; font-family: helvetica,arial; font-size: 36px; font-weight: bold;}\n';
s += 'h2 { font-size: 18px; margin: 0; padding: 30px; position: absolute; right: 0; bottom: 0; text-shadow: 2px 2px 3px #000000; opacity: 0.1;}\n';
s += '#container { width: 1200px; margin: 0 auto;}\n';
s += 'h1, div.date, p.intro { font-size: 32px; line-height: 42px; padding: 0 30px;}\n';
s += 'p.intro { color: #f6f6f6;}\n';
s += 'p.caption { top: 0; display: block; margin: 0; padding: 30px; position: absolute; text-shadow: 2px 2px 3px #000000;}\n';
s += 'p.caption:hover { opacity: 1; transition-property: opacity; transition-duration: 1s;}\n';
s += 'h2:hover { opacity: 1; transition-property: opacity; transition-duration: 1s;}\n';
s += 'nobr { font-size: 14px; color: #f6f6f6; font-style: italic; text-shadow: none; }\n';
s += '</style>\n';
s += '</head>\n';
s += '<body>\n';

s += '<div id="container">\n';
s += '<div id="items">\n';

//Extraemos el titulo
s += '<div class="item">\n';
s += '<h1>' + $('h1').html() + '</h1>\n';

//Extraemos la fecha
s += '<div class="date">' + $('div.toolsTop span.date').text().replace(' | ', '') + '</div>\n';

//Extraemos el texto introductorio, borrando los span y anchors de la copia
//s += '<p>' + $('div.dek p').clone().children().remove().end().text() + '</p>\n\n';
s += '<p class="intro">' + $('div.dek p').text() + '</p>' + '\n\n';
s += '</div>\n';

for (var i = 0, j = imgs.length; i < j; i++) {
  current_img = imgs[i];
  current_cap = captions[i];

    if(current_img.width < 1280 && current_img.width > 1024){
        k++;
        s += '<div class="item">\n';
        s += '<h2>Photo ' + k + ' of ' + total_fotos + '</h2>\n';
        s += '<div class="photo">';
        s += '<img src="' + current_img.src + '" width="' + current_img.width + '" height="' + current_img.height + '" alt="" />';
        s += '</div>\n';
        s += '<p class="caption">' + $(current_cap).html() + '</p>\n</div>' + '\n\n';
    }
}

s += '</div>\n';
s += '</div>\n';

s += '</body>\n';
s += '</html>\n';

//console.log(s);
//Insertamos el HTML
document.open;
document.write(s);
document.close;

//Cargamos jQuery y el jQuery Cycle plugin
var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);

var script2 = document.createElement("script");
  script2.setAttribute("src", "http://www.marlenynunez.com/files/infocus/jquery.cycle.all.js");
  script2.addEventListener('load', function() {
    var script2 = document.createElement("script");
    document.body.appendChild(script2);
    $('#items').cycle({ fx: 'scrollUp', timeout: 6000, delay:  -2000, fit: true, height: 700, width: 1200 });
  }, false);
  document.body.appendChild(script2);
