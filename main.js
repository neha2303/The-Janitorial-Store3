$(document).ready(function(){
  $(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
  $(".navbar-light").addClass('nav-white');
  }
  else{
  $(".navbar-light").removeClass('nav-white');
  }
  })
  });

//animate js code
new WOW().init();

$('.reset').click(function(){
  new WOW().init();
});
/* ============= Custom Select Picker=========*/
$(document).ready(function () {
	'use strict';
	$("select").each(function () {
		'use strict';
		var $this = $(this),
			numberOfOptions = $(this).children("option").length;

		$this.addClass("select-hidden");
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text(
			$this
			.children("option")
			.eq(0)
			.text()
		);

		var $list = $("<ul />", {
			class: "select-options"
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this
					.children("option")
					.eq(i)
					.text(),
				rel: $this
					.children("option")
					.eq(i)
					.val()
			}).appendTo($list);
		}

		var $listItems = $list.children("li");

		$styledSelect.on('click' , function (e) {
			e.stopPropagation();
			$("div.select-styled.active")
				.not(this)
				.each(function () {
					$(this)
						.removeClass("active")
						.next("ul.select-options")
						.hide();
				});
			$(this)
				.toggleClass("active")
				.next("ul.select-options")
				.toggle();
		});

		$listItems.on('click' , function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass("active");
			$this.val($(this).attr("rel"));
			$list.hide();
			//console.log($this.val());
		});

		$(document).on('click' , function () {
			$styledSelect.removeClass("active");
			$list.hide();
		});
	});
});

$(".map-img").click(function(){
  $(".icon-box1").toggleClass("open");
});
$(".map-image").click(function(){
  $(".icon-box2").toggleClass("open");
});
$(".map-top").click(function(){
  $(".icon-box3").toggleClass("open");
});
$(".map-dote").click(function(){
  $(".icon-box4").toggleClass("open");
});
$(".map-dotes").click(function(){
  $(".icon-box5").toggleClass("open");
});


/* ============= Custom Select Picker=========*/
$("#single").select2({
	placeholder: "Select a programming language",
	allowClear: false
});