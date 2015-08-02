

$(document).ready(function (){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);
            $.each(data, function() {
                $('.cohortDiv').append('<div class="personDiv"></div>');
                var short = $('.cohortDiv').children().last();
                short.append('<h2>' + this.name + '</h2>');
                short.append('<p>About me: ' + this.desc + '</p>');
                short.append('<p>Shoutout: ' + this.thanks + '</p>');
            });
            $('.personDiv:first').addClass("shown-person");//will execute after the each loop
        }
    });

    $("body").on('click', '.oneway', function() {
        console.log("oneway clicked!");
        var currentPerson = $('.shown-person');
        var nextPerson = currentPerson.next();
        if(nextPerson.length === 0) {
            nextPerson = $('.personDiv').first();
        }
        currentPerson.fadeOut(1000).removeClass('shown-person');
        nextPerson.fadeIn(1000).addClass('shown-person');
    });


    $("body").on('click', '.otherway', function() {
        console.log("otherway clicked!");
        var currentPerson = $('.shown-person');
        var nextPerson = currentPerson.prev();
        if(nextPerson.length === 0) {
            nextPerson = $('.personDiv').last();
        }
        currentPerson.fadeOut(1000).removeClass('shown-person');
        nextPerson.fadeIn(1000).addClass('shown-person');
    });
});
