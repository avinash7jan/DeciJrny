$(document).ready(function(){
	$('.fifth_row .right_text1').hide();	
	/*==========Button1 start here===========*/
	$('.but1').on("click",function(){
		$(this).addClass('activeBlue');
		$('.second_row').css("visibility", "visible");
		$('.but2,.but3').removeClass("bot_color").prop('disabled', true);
		//$('.but2').prop('disabled', true);
		$('.but16').addClass('btn_red');
		
		$('.start_but').removeClass('start');
	//	$('.but20').removeClass('end_but');
		$(".right_cont").show();
		$(".right_cont .select_text").append("Second row selected");
		
		$('.fst_row .right_text1').hide();
		
		{/*=====Button 4 Start Here==========*/}
		
		$(".but4").on("click",function(){
			$(this).addClass('activeBlue');
			$('.third_row').css("visibility", "visible");
			$('.second_row .right_text1').hide();
			$('.but3,.but5').removeClass("bot_color").prop('disabled', true);
			$('.but18').addClass('btn_red');
			//$(".right_cont .select_text").text().replace("contains","Third row selected");
			
			$(".right_cont .select_text").text("Third row selected"); 
			

			//$(this).text().replace("contains", "hello everyone");
			
			$(".but6").on("click",function(){
				
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				 $('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				
				
				$('.but7,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but17').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			$(".but7").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				 $('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				
				$('.but6,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
					});
					
				});
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
				});
			});
			
			$(".but8").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but9,.but10,.but12,.but13,.but14').removeClass("bot_color").prop('disabled', true);
				$('.but15,.but16,.but18').addClass('btn_red');
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			$(".but9").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
					});
					
				});
				
				$(".but14").on("click",function(){
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
				});
			});
			
			$(".but10").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but9,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18,.but16').addClass('btn_red');
				$('.but15').addClass('btn_yellow');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15').removeClass('btn_yellow');
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').removeClass('btn_yellow');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
					});
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			
			$(".start_but").on("click",function(){
				window.location.reload();
			});
			
			
		});
		{/*=====Button 4 End Here==========*/}
		
		
		
		{/*=====Button 5 Start Here==========*/}
		
		$(".but5").on("click",function(){
			$(this).addClass('activeBlue');
			$('.third_row').css("visibility", "visible");
			$('.second_row .right_text1').hide(); 
			$(".right_cont .select_text").text("Third row selected");
			$('.but3,.but4,.but6').removeClass("bot_color").prop('disabled', true);
			
			
			
			$(".but7").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
					});
				});
				
				$(".but14").on("click",function(){
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(this).addClass('activeBlue');
					$('.but19,.but18,.but17').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
				});
			});
			
			$(".but8").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide(); 
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but9,.but10,.but12,.but13,.but14').removeClass("bot_color").prop('disabled', true);
				$('.but15,.but16').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			$(".but9").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but10').removeClass("bot_color").prop('disabled', true);
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but13,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but11').addClass("bot_color").prop('disabled', false);
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17,.but18').addClass('btn_red');
						$('.but13').removeClass("bot_color").prop('disabled', true);
					});
					
					$(".but13").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17,.but15,.but16').addClass('btn_red');
						$('.but11,.but14').removeClass("bot_color").prop('disabled', true);
					});
					
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
				
				$(".but13").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17,.but15,.but16').addClass('btn_red');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but18,.but17').addClass('btn_red');
					$('.but11,.but12,.but13').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
				});
			});
			
			$(".but10").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but9').removeClass("bot_color").prop('disabled', true);
				$('.but16').addClass('btn_red');
				$('.but15').addClass('btn_yellow');
				
				
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').removeClass('btn_yellow');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
						$('.but13').removeClass("bot_color").prop('disabled', true);
						$('.but18').removeClass('btn_red');
					});
				});
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14,.but13').removeClass("bot_color").prop('disabled', true);
					$('.but15').removeClass('btn_yellow');
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but13").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red').removeClass('btn_yellow');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12,.but13').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			
			$(".start_but").on("click",function(){
				window.location.reload();
			});
			
			
		});
		{/*Button5 End Here*/}
	
	});
	/*============================================================
	==========================Button1 End Here====================	
	=============================================================*/
	
	/*======Button2 start here===========*/
	
	$('.but2').on("click",function(){
		$(this).addClass('activeBlue');
		$('.second_row').css("visibility", "visible");
		$('.but1').removeClass("bot_color");
		$('.but1').prop('disabled', true);
		
		$('.start_but').removeClass('start');
		//$('.but20').removeClass('end_but');
		$(".right_cont").show();
		$(".right_cont .select_text").append("Second row selected");
		$('.fst_row .right_text1').hide();
		
		/*==========Button3 start here==========*/
		$(".but3").on("click",function(){
			$(this).addClass('activeBlue');
			//$('.third_row').css("visibility", "visible");
			$('.but4,.but5').removeClass("bot_color").prop('disabled', true);
		//	$('.start_but').removeClass('start');
			$('.but20').removeClass('end_but');
			$('.but15,.but17,.but18,.but19').addClass('btn_red');
			
			
			
		});
		/*==========Button3 end here===============*/
		
		
		
		/*======Button4 start here===========*/
		$(".but4").on("click",function(){
			$(this).addClass('activeBlue');
			$('.third_row').css("visibility", "visible");
			$('.second_row .right_text1').hide();
			$(".right_cont .select_text").text("Third row selected");
			$('.but3,.but5').removeClass("bot_color").prop('disabled', true);
			$('.but18').addClass('btn_red');
			
			
			$(".but6").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but7,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but17').addClass('btn_red');
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but7").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18').addClass('btn_red');
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but11').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
					});
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but8").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but9,.but10,.but12,.but13,.but14').removeClass("bot_color").prop('disabled', true);
				$('.but15,.but16,.but18').addClass('btn_red');
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15,.but17').addClass('btn_red');
					$('.fifth_row .right_text1').show();
					$('.fourth_row .right_text1').hide();
				});
			});
			
			$(".but9").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');				
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
					});
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but10").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but9,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but18,.but16').addClass('btn_red');
				$('.but15').addClass('btn_yellow');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15').removeClass('btn_yellow');
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').removeClass('btn_yellow');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
					});
				});
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
		});
		/*======Button4 End Here===========*/
		
		{/*=====Button 5 Start Here==========*/}
		
		$(".but5").on("click",function(){
			$(this).addClass('activeBlue');
			$('.third_row').css("visibility", "visible");
			$('.second_row .right_text1').hide();
			$(".right_cont .select_text").text("Third row selected");
			$('.but3,.but4').removeClass("bot_color").prop('disabled', true);
			
			$(".but6").on("click",function(){
			//	$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but7,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				$('.but17,.but18').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$('.but19').addClass('btn_red');
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but7").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but8,.but9,.but10,.but13').removeClass("bot_color").prop('disabled', true);
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
					});
				});
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					$('.but19,.but18,.but17').addClass('btn_red');
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but8").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but9,.but10,.but12,.but13,.but14').removeClass("bot_color").prop('disabled', true);
				$('.but15,.but16').addClass('btn_red');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
			$(".but9").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but10,.but11').removeClass("bot_color").prop('disabled', true);
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but17').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
					});
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').addClass('btn_red');
					$('.but11').addClass("bot_color").prop('disabled', false);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17,.but18').addClass('btn_red');
						$('.but13').removeClass("bot_color").prop('disabled', true);
					});
					
					$(".but13").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17,.but15,.but16').addClass('btn_red');
						$('.but11,.but14').removeClass("bot_color").prop('disabled', true);
					});
					
					$(".but14").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19,.but17').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
				
				$(".but13").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17,.but15,.but16').addClass('btn_red');
					$('.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but18,.but17').addClass('btn_red');
					$('.but13').removeClass("bot_color").prop('disabled', true);
					$('.but11').addClass("bot_color").prop('disabled', false);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but12").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but19').addClass('btn_red');
						$('.but11').removeClass("bot_color").prop('disabled', true);
					});
				});
			});
			
			$(".but10").on("click",function(){
				//$('.start_but').removeClass('start');
				$('.but20').removeClass('end_but');
				$(this).addClass('activeBlue');
				$('.fourth_row').css("visibility", "visible");
				$('.third_row .right_text1').hide();
				$(".right_cont .select_text").text("Fourth row selected");
				$('.but6,.but7,.but8,.but9').removeClass("bot_color").prop('disabled', true);
				$('.but16').addClass('btn_red');
				$('.but15').addClass('btn_yellow');
				
				$(".but11").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but12,.but14,.but13').removeClass("bot_color").prop('disabled', true);
					$('.but15').removeClass('btn_yellow');
					$('.but15,.but17,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but12").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but15').removeClass('btn_yellow');
					$('.but15').addClass('btn_red');
					$('.but14').removeClass("bot_color").prop('disabled', true);
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
					
					$(".but11").on("click",function(){
						$(this).addClass('activeBlue');
						$('.but17').addClass('btn_red');
						$('.but13').removeClass("bot_color").prop('disabled', true);
						$('.but18').addClass('btn_red');
					});
				});
				
				$(".but13").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12,.but14').removeClass("bot_color").prop('disabled', true);
					$('.but15').addClass('btn_red').removeClass('btn_yellow');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
				
				$(".but14").on("click",function(){
					$(this).addClass('activeBlue');
					$('.but19,.but17').addClass('btn_red');
					$('.but11,.but12,.but13').removeClass("bot_color").prop('disabled', true);
					$('.but15,.but18').addClass('btn_red');
					$('.fourth_row .right_text1').hide();
					$('.fifth_row .right_text1').show();
				});
			});
			
		});
		{/*========Button5 End Here============*/}
		
			
	
	});
	$(".start_but").on("click",function(){
		window.location.reload();
	});
	
	$(".but20").on("click",function(){
		$(".right_cont").hide();
		$('.top_content').hide();
		$('.top_content1').show();
		$(this).hide();
	});
});
