$(document).ready(function () {
	$("input[type=text]").on("keyup",function () {
	 option=false;
	 $("input[type=text]").each(function () {
	  if (!this.value) {
	   option=true;
	  }
	 });
	   $("input[type=submit]").attr("disabled",option);
	});
});
$('.Show').click(function() {
	$('#target').show(500);
	$('.Show').hide(0);
	$('.Hide').show(0);
  });
  $('.Hide').click(function() {
	$('#target').hide(500);
	$('.Show').show(0);
	$('.Hide').hide(0);
  });
  $('.toggle').click(function() {
	$('#target').toggle('slow');
  });
