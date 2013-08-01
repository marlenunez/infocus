// infocus.js
// 2013-07-31

// Copyright (c) 2013 Marleny Nunez (www.marlenynunez.com)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// The Software shall be used for Good, not Evil.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// First try at putting infocus in the big screen.

// To be run from the browser javascript console.
// 1. Open the Infocus gallery.
// 2. Run this code from the console.

var MN_infocus = (function () {
    'use strict';

  var html_code = "",

      gallery_images = $('.if1280 .ifImg'),
      gallery_captions = $('.if1280 .imgCap'),
      total_images = gallery_images.length,
      current_image,
      current_caption,
      i,
      j,
      k = 0;

// Remove a few unwanted elements
  $('div.dek script, .if1280 .imgCap a, .if1280 .imgCap span').remove();

// Create the new html code for the gallery
  html_code += '<style type="text/css">\n';
  html_code += 'body { background: #282828; color: #FFEEAA; font-family: helvetica,arial; font-size: 36px; font-weight: bold;}\n';
  html_code += 'div.gallery_date { font-size: 18px; margin: 0; padding: 30px; position: absolute; right: 0; bottom: 0; text-shadow: 2px 2px 3px #000; opacity: 0.1; z-index: 900;}\n';
  html_code += '#container { width: 1200px; margin: 0 auto;}\n';
  html_code += 'h1, div.date, p.intro { font-size: 32px; line-height: 42px; padding: 0 30px;}\n';
  html_code += 'p.intro { color: #f6f6f6;}\n';
  html_code += 'p.gallery_caption { font-size: 26px; line-height: 30px; top: 0; display: block; margin: 0; padding: 30px; position: absolute; text-shadow: 2px 2px 3px #000;}\n';
  html_code += 'p.gallery_caption:hover { opacity: 0; transition-property: opacity; transition-duration: 1s;}\n';
  html_code += 'div.gallery_date:hover { opacity: 1; transition-property: opacity; transition-duration: 1s;}\n';
  html_code += 'nobr { font-size: 14px; color: #f6f6f6; font-style: italic; text-shadow: none; }\n';
  html_code += 'div.photo img { border: medium none; max-width: 100%; padding: 0;}\n';
  html_code += '</style>\n';

  html_code += '<div id="container">\n';
  html_code += '<div id="items">\n';

// Extract the gallery title
  html_code += '<div class="item">\n';
  html_code += '<h1>' + $('h1').html() + '</h1>\n';

// Extract the gallery date
  html_code += '<div class="date">' + $('div.toolsTop span.date').text().replace(' | ', '') + '</div>\n';

// Extract the gallery introduction text, without the span and anchor tags
  html_code += '<p class="intro">' + $('div.dek p').text() + '</p>' + '\n\n';
  html_code += '</div>\n';

// Extract every photo and its caption
  for (i = 0, j = gallery_images.length; i < j; i++) {
    current_image = gallery_images[i];
    current_caption = gallery_captions[i];

      if(current_image.width < 1280 && current_image.width > 1024){
          k++;
          html_code += '<div class="item">\n';
          html_code += '<div class="gallery_date">Photo ' + k + ' of ' + total_images + '</div>\n';
          html_code += '<div class="photo">';
          html_code += '<img src="' + current_image.src + '" width="' + current_image.width + '" height="' + current_image.height + '" alt="" />';
          html_code += '</div>\n';
          html_code += '<p class="gallery_caption">' + $(current_caption).html() + '</p>\n</div>' + '\n\n';
      }
  }

  html_code += '</div>\n';
  html_code += '</div>\n';

// Write the new html gallery code
  $('body').html(html_code);

// Load the jQuery Cycle plugin
  var script = document.createElement("script");
    script.setAttribute("src", "http://www.marlenynunez.com/files/infocus/jquery.cycle.all.js");
    script.addEventListener('load', function() {
      var script = document.createElement("script");
      document.body.appendChild(script);
      $('#items').cycle({ fx: 'scrollUp', timeout: 12000, delay:  -2000, fit: true, height: 700, width: 1200 });
    }, false);
    document.body.appendChild(script);

}());