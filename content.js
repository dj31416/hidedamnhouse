
   
function  hideDamnHouse(){

		//alert('hide');
		var hide = {
			1:'淡水',
			2:'三重',
			3:'林口',
			4:'汐止',
			5:'新莊',
			6:'鶯歌',
			7:'三芝',
			8:'五股',
		};


		$("p").each(function(){

			for(a in hide){
				if($(this).html().indexOf(hide[a])>=0){
					//$(this).parent().parent().hide();
					$(this).parent().parent().html("地區");
			
				}
			}

		});
		
		$(".layout").each(function(){
		
			if($(this).html().indexOf('2房')>=0  || $(this).html().indexOf('1衛')>=0 ){
				
					$(this).parent().parent().parent().html("太小");
			
			}
			if($(this).html().indexOf('1房')>=0  || $(this).html().indexOf('0房')>=0 ){
				
					$(this).parent().parent().parent().html("太小");
			
			}
		
		});
		
		
		
		

}

//只能用訊息傳遞的方式 告訴他說該隱藏了 damn
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	hideDamnHouse();
  });
