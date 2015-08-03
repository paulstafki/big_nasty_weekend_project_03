$(document).ready(function (){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);
            $.each(data, function() {
                $('.cohortDiv').append('<div class="personDiv"></div>');
                var short = $('.cohortDiv').children().last();
                short.append('<h2>' + this.name + ';</h2>');
                short.append('<hr>');
                short.append('<p>About me: ' + this.desc + '</p>');
                short.append('<hr>');
                short.append('<p>Shoutout: ' + this.thanks + '</p>');
            });
            $('.personDiv:first').addClass("shown-person");//will execute after the each loop
        }
    });
//still need to inquire about trying to make a container fluid, whilst containing an 'absolute' div
    $("body").on('click', '.oneway', function() {                            //first world problems
        console.log("oneway clicked!");
        var currentPerson = $('.shown-person');
        var nextPerson = currentPerson.next();
        if(nextPerson.length === 0) {
            nextPerson = $('.personDiv').first();
        }
        currentPerson.fadeOut(400).removeClass('shown-person');
        nextPerson.fadeIn(1000).addClass('shown-person');
    });


    $("body").on('click', '.otherway', function() {
        console.log("otherway clicked!");
        var currentPerson = $('.shown-person');
        var nextPerson = currentPerson.prev();
        if(nextPerson.length === 0) {
            nextPerson = $('.personDiv').last();
        }
        currentPerson.fadeOut(400).removeClass('shown-person');
        nextPerson.fadeIn(1000).addClass('shown-person');
    });
});
