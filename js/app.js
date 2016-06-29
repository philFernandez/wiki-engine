$(document).ready(function(){

	$('#textBox').keypress(function(e){		
		if(e.keyCode==13) {
			$('#init').click();
		}
	});
	var titles = [];
	$('#init').click(function(){
		var userSearch = document.getElementsByTagName('input')[0].value;
		getApi(userSearch);
	});

	function getApi(userSearch) {
		$.ajax({			
			url: 'https://en.wikipedia.org/w/api.php',
			jsonp: 'callback', 
			dataType: 'jsonp',
			data: {
				action: 'query',
				list: 'search',
				srsearch: userSearch,
				format: 'json'
			},
			xhrFields: { withCredentials: true },
			success: function(response) {
				if ($('#link').is(':parent')) {
					$('#link').empty();					
				}										
				for (var i = 0; i < 10; i++) {

					var urlOut = 'https://en.wikipedia.org/wiki/';
					titles[i] = response.query.search[i].title;
					urlOut += titles[i].replace(/\s/g, '%20');
					
					$('#link').append("<a href="+urlOut+" target='_blank'><div class='well'>"+titles[i]+"</div></a>");

				}
			}

		});

	}



	// $('.link').each(function(){
	// 	var url = 'https://en.wikipedia.org/wiki/';
	// 	url += titles[i].replace(/\s/g, '%20');			
	// 	$(this).wrap("<a href="+url+" target='_blank'><div class='well'>"+titles[i]+"</div></a>");
	// 	i++;
	// });

		
// $('.link').wrap("<a href='https://en.wikipedia.org/wiki/ The Things' target='_blank'><div class='well'>The Things</div></a>");


	$('body').css('backgroundColor', 'rgb(' + rgbVal() + ',' + rgbVal() + ',' + rgbVal() + ')');
	function rgbVal() {
		return Math.floor(Math.random() * (255 - 1) + 1);
	}



//https://en.wikipedia.org/wiki/Babe Ruth (band)





	

});