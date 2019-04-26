var Dashboard = function () {
	var global = {
		tooltipOptions: {
			placement: "right" },

		menuClass: ".c-menu" };


	var menuChangeActive = function menuChangeActive(el) {
		var hasSubmenu = $(el).hasClass("has-submenu");
		$(global.menuClass + " .is-active").removeClass("is-active");
		$(el).addClass("is-active");

		// if (hasSubmenu) {
		// 	$(el).find("ul").slideDown();
		// }
	};

	var sidebarChangeWidth = function sidebarChangeWidth() {
		var $menuItemsTitle = $("li .menu-item__title");

		$("body").toggleClass("sidebar-is-reduced sidebar-is-expanded");
		$(".hamburger-toggle").toggleClass("is-opened");

		if ($("body").hasClass("sidebar-is-expanded")) {
			$('[data-toggle="tooltip"]').tooltip("destroy");
		} else {
			$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
		}

	};

	return {
		init: function init() {
			$(".js-hamburger").on("click", sidebarChangeWidth);

			$(".js-menu li").on("click", function (e) {
				menuChangeActive(e.currentTarget);
			});

			$('[data-toggle="tooltip"]').tooltip(global.tooltipOptions);
		} };

}();

Dashboard.init();

// menu
$(".c-menu__item a").on('click', function(e){
    e.preventDefault();

  target = $(this).attr('href');

  $('.l-main').not(target).hide();

  $(target).fadeIn(600);
});


$('.has-dropdown').on('click', function(e){
	e.preventDefault();
	var dropdown = $(this).find('.c-dropdown');
	if(dropdown.css('display') === 'none'){
		dropdown.css('top', '50px');
		dropdown.fadeIn(300);
	}
	else if(dropdown.css('display') === 'block'){
		dropdown.fadeOut(300);
		dropdown.css('top', '0px');
	};
});

$('.toggle').on('click', function(){
	$('#chat').toggleClass('active');
});
// calendar
var $calendar = $("#calendar");
$calendar.fullCalendar({
            header: {
                left: ' today,prev,next',
								center:'title',
                right: 'month,agendaWeek,agendaDay '
            },
            weekends: true,
            allDaySlot: true,
						editable:true,
            droppable: true, /* 允許拖入 */
            eventAfterAllRender:function(view){
                var header =  $calendar.find(".fc-header");
                // trigger current view
                header.find('.fc-header-right').find('.fc-button').off('mouseup').on('mouseup', function(){
                    if(!$(this).hasClass('fc-button-agendaView')){
                        $calendar.data("view", '');
                    }
                });

                //用來辨別是否在agendaView，是則重繪，否則移除
                if( $calendar.data("view") != 'agendaView' ){
                    header.find(".fc-button-agendaView").removeClass('fc-state-active active');
                    $("#agendaView").remove();

                }else{
                    renderAgendaView();
                }



            },
            eventRender: function(event, e){

                currentView = $('#calendar').fullCalendar('getView').name; /* 用來偵測哪個view進行什麼樣的處理用 */
            },dayClick: function(date, jsEvent, view) {
              /* 點選日期觸發 */


            },
            eventClick: function(calEvent, jsEvent, view) {
                console.log("===== eventClick =====");
                console.log(calEvent);


            }
});

    var headerRight = $calendar.find(".fc-header").find(".fc-header-right");

    var agendaBtn = headerRight.find(".fc-corner-right").removeClass('fc-corner-right')
                    .clone().addClass('fc-corner-right fc-button-agendaView').removeClass('fc-button-agendaDay').text("agenda");

    agendaBtn.on('click', function(){
      renderAgendaView();
    });

    headerRight.find(".fc-header-space").before(agendaBtn);

// test event data
var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();

var newEvent = {
  title: 'NEW EVENT',
  start: new Date(y, m, d, 10),
  end: new Date(y, m, d, 15),
  editable: true
};

// add event to calendar
var event = $('#calendar').fullCalendar( 'renderEvent', newEvent , 'stick');



function renderAgendaView(){

  if($calendar.fullCalendar('getView') != 'agendaView'){
    // 複製原本的month為agendaView ，這樣可解決切換為agenda View時 month 無法點之問題
    $calendar.fullCalendar( 'changeView', 'month' );
    var newView = $calendar.fullCalendar('getView');
    newView.name = 'agendaView';

    $calendar.fullCalendar( 'changeView', 'agendaView' );
  }

  // get current events in memory
  var events = $calendar.fullCalendar( 'clientEvents' );

  // get current date
  var currentDate = $calendar.fullCalendar( 'getDate' );

  $calendar.find(".fc-header").find(".fc-button-agendaView").siblings().removeClass('fc-state-active').end().addClass('fc-state-active');

  $calendar.data("view", 'agendaView');
  var agendaViewHtml = document.createElement('div');
  agendaViewHtml.setAttribute("id", "agendaView");
  var contents = "<table>" +
      "<thead><tr>" +
      "<th class='fc-widget-header fc-agendaView-event-start'>DateStart</th>" +
      "<th class='fc-widget-header fc-agendaView-event-end'>DateEnd</th>" +
      "<th class='fc-widget-header fc-agendaView-event-title'>Event</th>" +
      "</tr></thead>" +
      "<tbody>";

  for (key in events) {
    //  detect month range
    var monthRange = moment().range(moment(currentDate).startOf('month'), moment(currentDate).endOf('month'));
    var eventStart = moment(events[key].start).format("YYYY/MM/DD-H:mm:ss");
    var eventEnd = moment(events[key].end).format("YYYY/MM/DD-H:mm:ss");
    if(monthRange.contains(events[key].start) && monthRange.contains(events[key].end)){
      var eventTitle = events[key].title;
      contents += '<tr>' +
        '<td class="fc-widget-content">' + eventStart + '</td>' +
        '<td class="fc-widget-content">' + eventEnd + '</td>' +
        '<td class="fc-widget-content">' + eventTitle + '</td>' +
        '</tr>';

    }
  }
  contents += "</tbody></table>";
  agendaViewHtml.innerHTML = contents;
  $calendar.find(".fc-content").html(agendaViewHtml);

  // console.log(events);
}
$(document).ready(function() {

  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");

  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };

  $(document).on("click", ".login__submit", function(e) {
    if (animating) return;
    animating = true;
    var that = this;
    ripple($(that), e);
    $(that).addClass("processing");
    setTimeout(function() {
      $(that).addClass("success");
      setTimeout(function() {
        $app.show();
        $app.css("top");
        $app.addClass("active");
      }, submitPhase2 - 70);
      setTimeout(function() {
        $login.hide();
        $login.addClass("inactive");
        animating = false;
        $(that).removeClass("success processing");
      }, submitPhase2);
    }, submitPhase1);
  });

  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });
});

// Lang Select
		$('.lang-select label').click(function() {
		var learnSelect = $(this).parent().parent();
		var menu = learnSelect.find('.select-box');
		if (learnSelect.hasClass('active')) {
			learnSelect.removeClass('active');
			menu.fadeOut(300);
		}
		else {
			$('.select-box').fadeOut(300);
			$('.lang-select').removeClass('active');
			learnSelect.addClass('active');
			menu.fadeIn(300);
		}
	});

	$('body').click(function(event) {
		if (!$(event.target).closest('.lang-select').length) {
			$('.select-box').fadeOut(300);
			$('.lang-select').removeClass('active');
		}
	});

	$('.select-box a').on('click',function(e) {
        e.preventDefault();
		var selected_value = $(this).text();
		var pass_value = $(this).attr('data-filter-value');
		$('#hello-updates').val(pass_value);
		var learn_select = $(this).parent().parent().parent();
		var select_box = $(this).parent().parent();
		if (!($(this).hasClass('default-select'))) {
			learn_select.addClass('selected-active').removeClass('active');
			select_box.find('a').removeClass('selected');
			$(this).addClass('selected');
		}
		else {
			select_box.find('a').removeClass('selected');
			learn_select.removeClass('selected-active').removeClass('active');
			selected_value = '';
		}

		learn_select.find('.select-box').hide();
		learn_select.find('.selected-value').text(selected_value);
	});
