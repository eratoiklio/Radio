require('../scss/style.scss');

$(()=>{
    console.log("script loaded");
    const stations = $(".shortcut");
    let currentStation;
    stations.each(function(index, element) {
        $(element).on('click',function() {

            console.log($(this).parent());
            if (currentStation != undefined) {
                currentStation.addClass("hidden");
            }
            currentStation = $(this).parent().find(".extended");
            const name = $(this).parent().find(".stationName").innerText;
            currentStation.removeClass("hidden");
            $(".currentStationName").innerText=name;
        })
    });

    //power
    $(".power").on('click',function()
    {
        console.log("power");
    })
    //arrow
    $(".arrow").on('click',function()
    {
        console.log("arrow");
    })
    //plus
    $(".plus").each(function(index, element) {
        $(element).on('click',function() {
            console.log("plus");
});});
//     //minus
    $(".minus").each(function(index, element) {
        $(element).on('click ', function() {
            console.log("minus");
});});
});
