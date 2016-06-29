$(document).ready(function(){

	$('#textBox').keypress(function(e){		
		if(e.keyCode==13) {
			$('#init').click();
		}
	});
	
	$('#init').click(function(){			
		var userSearch = document.getElementsByTagName('input')[0].value;
		getApi(userSearch);
	});

	function getApi(userSearch) {
		var titles = [];
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
					$('#link').append("<a href="+urlOut+" target='_blank'><div class='well'>-"+titles[i]+"-</div></a>");
				}

				$('body').animate({
					'margin-top': '2%'
				}, 300);

				$('.well').animate({
					'height': '+=10px',
					'width': '+=10%'
				}, 300);
			}
		});
	}
	$("#fit").fitText(1);
	$('body').css('backgroundColor', 'rgb(' + rgbVal() + ',' + rgbVal() + ',' + rgbVal() + ')');
	function rgbVal() {
		return Math.floor(Math.random() * (255 - 1) + 1);
	}
});