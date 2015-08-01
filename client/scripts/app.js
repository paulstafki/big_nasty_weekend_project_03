

$(document).ready(function (){
    $.ajax({
        url: "/data",
        success: function(data){
            console.log(data);

            $.each(data, function() {
                $('.cohortDiv').append('<div class="personDiv"></div>');
                var short = $('.cohortDiv').children().last();
                short.append('<h2>Name: ' + this.name + '</h2>');
                short.append('<p>Name: ' + this.desc + '</p>');
                short.append('<p>Name: ' + this.thanks + '</p>');
            });
            $('.personDiv:first').addClass("active-slide");//will execute after the each loop
        }
    });
});
