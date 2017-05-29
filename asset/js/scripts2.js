	jQuery('#submit').click(function(){
		
		
		var fullname = $.trim($('#fullName').val()),
			phone = $.trim($('#phone').val()),
			companyname = $.trim($('#companyname').val()),
			email = $('#email').val();
					
		
		var errorsCounter = 0;
		
		$('.error').removeClass('error');
		
		
		if($('#validation').val() != ''){

		}else{
								
			if(fullname == ''){
				$('#fullName').addClass("error");
				errorsCounter++;
			}			
			
			if(phone != ''){
				
				if(!phone.replace(/ /g,"").replace(/\+/g, "").replace(/-/g, "").isNumber()){
					$('#phone').addClass("error");
					errorsCounter++;
				}
				else{ if(phone.length < 9){
					$('#phone').addClass("error");
					errorsCounter++;
				}}
			}else{
				$('#phone').addClass("error");
				errorsCounter++;	
			}
			
			if(email == ''){
				$('#email').addClass("error");
				errorsCounter++;
			}
			
			if(email != ''){
				
				if(!isValidEmailAddress(email)){
					$('#email').addClass("error");
					errorsCounter++;				
				}
			}
			
			
			if(errorsCounter == 0){
				
				saveData({	
					'fullname'			:	fullname, 
					'email'     		:	email, 
					'phone'				:	phone, 
					'companyname' 		:	companyname,
				});
			}
			
		}
	});

	var saveData  = function(params){
		
		var postParams = {	'method'			:	'saveData',
							'fullname'			:	params.fullname,
							'email'      		:	params.email, 
							'phone'				:	params.phone, 
							'companyname'		:	params.companyname, 
						};
						
		$.ajax({
			url: 'server/popupdatasave.php',
			dataType: "json",
			type: "post",
			data: postParams
		}).done(function(response){
			
			//console.log("send");
			
			 //window.location.href = 'tnx.html?Lead=true';
			$('.suceesMsg').show();
			$('#fullName').val("");
			$('#email').val("");
			$('#phone').val("");
			$('#companyname').val("");

			
		}).fail(function(){
			console.log('fail');
		});
	};

	String.prototype.isNumber = function(){return /^\d+$/.test(this);}
		
		
	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};

