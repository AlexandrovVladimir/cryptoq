$(document).ready(function (){
  $("#anchor").on('click', function (e){
  	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("html,body").offset().top
  	}, 750);
  });

  $('.tab-content-banners__info').on('click', function () {
    $(this).next().toggle();
    $(this).toggleClass('show');
  });

  $('.questions__text').on('click', function() {
    $(this).next().toggle();
  });

  $('.navbar-mobile').on('click', function() {
    $(this).closest('.navbar-mobile').find('.navbar-collapse').toggleClass('show');
  });


  $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
    _renderItem: function( ul, item ) {
      var li = $( "<li>" ),
          wrapper = $( "<div>", { text: item.label } );

      if ( item.disabled ) {
        li.addClass( "ui-state-disabled" );
      }

      $( "<span>", {
        style: item.element.attr( "data-style" ),
        "class": "ui-icon " + item.element.attr( "data-class" )
      })
          .appendTo( wrapper );

      return li.append( wrapper ).appendTo( ul );
    }
  });

  $( "#bitcoin-select" )
      .iconselectmenu()
      .iconselectmenu( "menuWidget" )
      .addClass( "ui-menu-icons customicons" );
});