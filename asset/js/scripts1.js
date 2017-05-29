	jQuery('#cdn_submit').click(function(){		
		
		var cnd_FirstName = $.trim($('#cnd_FirstName').val()),
			cdn_message = $.trim($('#cdn_message').val()),
			cnd_email = $('#cnd_email').val();					
		
		var errorsCounter = 0;		
		$('.error').removeClass('error');		
		
		if($('#validation').val() != ''){
			
		}else{
								
			if(cnd_FirstName == ''){
				$('#cnd_FirstName').addClass("error");
				errorsCounter++;
			}			
			
			
			if(cnd_email == ''){
				$('#cnd_email').addClass("error");
				errorsCounter++;
			}
			
			if(cnd_email != ''){
				
				if(!isValidEmailAddress(cnd_email)){
					$('#cnd_email').addClass("error");
					errorsCounter++;				
				}
			}
			
			
			if(errorsCounter == 0){
				
				saveCtnData({	
					'cnd_FirstName'		:	cnd_FirstName, 
					'cnd_email'     	:	cnd_email, 
					'cdn_message' 		:	cdn_message,
				});
			}
			
		}
	});

	var saveCtnData  = function(params){
		
		var postParams = {	'method'			:	'saveCtnData',
							'cnd_FirstName'		:	params.cnd_FirstName,
							'cnd_email'      	:	params.cnd_email, 
							'cdn_message'		:	params.cdn_message, 
						};
						
		$.ajax({
			url: 'server/contactdatasave.php',
			dataType: "json",
			type: "post",
			data: postParams
		}).done(function(response){
			
			console.log("send");
			
			// window.location.href = 'tnx.html?Lead=true';
			
			$('.suceesMsg').show();
			$('#cnd_FirstName').val("");
			$('#cnd_email').val("");
			$('#cdn_message').val("");
			$('.close').click(function(){ $('.suceesMsg').hide(); });
			
		}).fail(function(){
			console.log('fail');
		});
	};

	String.prototype.isNumber = function(){return /^\d+$/.test(this);}
		
		
	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};

