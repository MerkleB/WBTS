/*Copyright 2013 Michael Gruben, Julian Babics, Benjamin Merkle

This file is part of Masterly Mate.

Masterly Mate is free software: you can redistribute it and/or modify it
under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

Masterly Mate is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Masterly Mate.  If not, see <http://www.gnu.org/licenses/>.

Diese Datei ist Teil von Masterly Mate.

Masterly Mate ist Freie Software: Sie können es unter den Bedingungen
der GNU Affero General Public License, wie von der Free Software
Foundation, Version 3 der Lizenz oder (nach Ihrer Option) jeder späteren
veröffentlichten Version, weiterverbreiten und/oder modifizieren.

Masterly Mate wird in der Hoffnung, dass es nützlich sein wird, aber
OHNE JEDE GEWÄHELEISTUNG, bereitgestellt; sogar ohne die implizite
Gewährleistung der MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN
ZWECK.
Siehe die GNU Affero General Public License für weitere Details.

Sie sollten eine Kopie der GNU Affero General Public License zusammen
mit Masterly Mate erhalten haben. Wenn nicht, siehe
<http://www.gnu.org/licenses/>.
*/	
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require jquery-ui

$(function()
{
	$(".lorem").lorem({ type: 'paragraphs',amount:'4',ptags:true}); 
	
	initMasterlyMateTables();
	initLoginModule();
	initLanguageSwitcherModule();
});

function initLoginModule()
{
	if(getUrlParams()["failed"] == "1")
	{
		$(".login").effect("shake", { times: 4, distance: 5 }, 500);
	}
}

function getUrlParams()
{
	var queryString = window.location.href.split("?")[1];
	var params = [];
	if(queryString)
	{
		var paramList = queryString.split("&");
		if(paramList)
		{
			$.each(paramList, function(index, value)
			{
				var param = value.split("=");
				if(param)
				{
					params[param[0]] = param[1];
				}
			});
		}
	}
	return params;
}

function initLanguageSwitcherModule()
{
	var languageCode = getCurrentLanguageCode();
	var languageSwitcher = $(".lang_switcher");
	$.each(languageSwitcher, function(index, switcher)
	{
		if(languageCode)
		{
			$.each(switcher.children, function(index, option)
			{
				var matched = option.value.match(languageCode);
				if(matched && matched.length > 0)
				{
					switcher.selectedIndex = index;
				}
			});
		}
		else
		{
			switcher.selectedIndex = 0;
		}
		
		switcher.onchange = function()
		{
			onLanguageChanged(this);
		};
	});
}

function getCurrentLanguageCode()
{
	var languageCodes = window.location.href.match(/\/(de|en)\/?/i);
	var languageCode = undefined;
	if(languageCodes && languageCodes.length > 0)
	{
		languageCode = languageCodes[0].replace(/\//g, "");
	}
	return languageCode;
}

function onLanguageChanged(switcher)
{
	var selectedValue = switcher.children[switcher.selectedIndex].value;
	window.location.href = (getCurrentLanguageCode()) ? window.location.href.replace(/\/(de|en)\/?/i, "/"+selectedValue+"/") : window.location.href + selectedValue + "/";
}

function initMasterlyMateTables()
{
	$(".mmTable tr:odd").addClass('odd');
	$(".mmTable tr:even").addClass('even');
}

// only for dummy text: Lorem Ipsum
(function($) {
	  $.fn.lorem = function(options) {
	  	$.fn.lorem.defaults = {
			type: 'paragraphs',
			amount: '3',
			ptags: true
		};
		var opts = $.extend({}, $.fn.lorem.defaults, options);
		var min_num = 1;  
		var max_num = 10; 
		var diff = max_num-min_num+1 ; 
		var howmany = opts.amount;
		var lorem = new Array(10);
		lorem[1] ="Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat."; 
		lorem[2] ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar."; 
		lorem[3] ="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna."; 
		lorem[4] ="Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem."; 
		lorem[5] ="In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu, urna. Nullam at arcu a est sollicitudin euismod. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nam sed tellus id magna elementum tincidunt."; 
		lorem[6] ="Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat."; 
		lorem[7] ="Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci."; 
		lorem[8] ="Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo."; 
		lorem[9] ="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus."; 
		lorem[10] ="Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu."; 
		function makeipsum(){
			var ipsum_text = "";
			for (var i = 0; i < howmany; i++){
				rnd_number=Math.floor(Math.random()*diff + min_num); 
			if(options.ptags==true){
				ipsum_text+="<p>";
			}
			ipsum_text+=lorem[rnd_number];
			if(opts.ptags==true){
				ipsum_text+="</p>";
			}
			ipsum_text+="\n\n";
			}
			switch(opts.type) {
				case "words":{
			      	var numOfWords = opts.amount;
					numOfWords = parseInt( numOfWords );
					var list = new Array();
					var wordList = new Array();
					wordList = ipsum_text.split( ' ' );
					var iParagraphCount = 0;
					var iWordCount = 0;
					while( list.length < numOfWords ) {
						if( iWordCount > wordList.length ) {
							iWordCount = 0;
			        		iParagraphCount++;
			      		  	if( iParagraphCount + 1 > lorem.length ) {
								iParagraphCount = 0;
							}
			        		wordList = lorem[ iParagraphCount ].split( ' ' );
			        		wordList[0] = "\n\n" + wordList[ 0 ];
						}
			       		list.push( wordList[ iWordCount ] );
			       		iWordCount++;
					}
					ipsum_text = list.join(' '); // changed
				break;
				}
				case 'characters':
				{
					var outputString = '';
				    var numOfChars = opts.amount;
				    numOfChars = parseInt( numOfChars );
				    var tempString = lorem.join( "\n\n" );
					while(outputString.length < numOfChars ){
							outputString += tempString;
					}
				    ipsum_text = outputString.substring(0, numOfChars );
				break;
				}
				case 'paragraphs':{
				///no action needed
				break;
				}
			}
			return ipsum_text;
		}


	return this.each(function() {
		  $this = $(this);
		  var markup = makeipsum();
		  $this.html(markup);
		  
		});
	  };

	})(jQuery);