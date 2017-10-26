$(document).ready(function(){
	//load preview.html
	$("#content").load("html/preview.html");
	//Footer
	$("#conFooter").load("html/footer.html");
	//make footer clickable
	$("#btnFooter").click(function(){
		//change button text
		var $this = $(this);
		if($("#conFooter").is(":hidden")){
			$this.text('Hide credits and legal disclosure / impressum');
			//show footer text
			$("#conFooter").toggle();
			//smooth scroll
			$('html,body').animate({scrollTop: $("#btnFooter").offset().top-40},600);
		} else {
			$this.text('View credits and legal disclosure / impressum');
			//smooth scroll
			let pos = $("#btnFooter").offset().top - $(window).height();
			$('html,body').animate({scrollTop: pos},600);
			//show footer text
			setTimeout(function(){
				$("#conFooter").toggle();
			},600);

		}

	});
	//Make name go back to homepage
	$("#name").click(function(){
		switchToPreview();
	});
	
	//stop focused color of button
	$("#btnFooter").mouseup(function(){
		$(this).blur();
	});
	
	//function to click email in header
	$("#mail").click(function(){
		$("#mailimg").toggle();
	});
	//function to click email in bio (old version bc of loaded content)
	$(document).on("click", "#bio-mail", function(){
		$("#bio-mailimg").toggle();
	});
	
	//button to output debug info
	$("#test").click(function(){

	});
});

//shows the preview pane and hides the last entry that is shown
function switchToPreview(){
	$("#content").load("html/preview.html");
	$('body,html').scrollTop(0);
}

//shows the <entry> entry and hides the preview
function showEntry(e){
	$("#content").load("html/"+e+".html");
	$('body,html').scrollTop(0);
}
