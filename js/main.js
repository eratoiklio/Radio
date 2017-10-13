require('../scss/style.scss');
import stationsName from "../stationsName.js"
$(() => {

    const tab = $(stationsName);
    // console.log(tab);
    $(tab).each(function(index, element) {

        const newParticStat = $("<div class='particularStation'>");
        const newExtend = $("<div class='extended hidden'>");
        const newMinus = $("<div class='minus'>");

        const newStationImage = $("<div class='stationImage'>")
        if(element.image.url!=""){
            newStationImage.css( "background", "url("+element.image.url+")" );
        }        
        else {
            newStationImage.css( "background", "url(./img/default.jpg)" );
        }
        const newPlus = $("<div class='plus'>");
        const newShortcut = $("<div class='shortcut'>");
        const newStationName = $("<div class='stationName'>").text(element.name);
        const newfm = $("<div class='fm'>").text(element.categories[0].ancestry);
        newParticStat.data("stream", element.streams.stream);
        newExtend.prepend(newMinus);
        newExtend.append(newStationImage);
        newExtend.append(newPlus);
        newShortcut.prepend(newStationName);
        newShortcut.append(newfm);
        newParticStat.prepend(newExtend);
        newParticStat.append(newShortcut);
        $(".main").append(newParticStat);
        console.log(newParticStat.data("stream"));
    });

    // console.log(check);
    const stations = $(".shortcut");
    let currentStation;
    stations.each(function(index, element) {
        $(element).on('click', function() {

            if (currentStation != undefined) {
                currentStation.addClass("hidden");
            }
            const parent = $(this).parent();
            console.log(parent);
            currentStation = parent.find(".extended");
            const name = parent.find(".stationName").text();
            currentStation.removeClass("hidden");
             const container =$(".main");
             container.animate({
                 scrollTop: $(parent).offset().top - container.offset().top + container.scrollTop()-$(parent).height()/2
             });

            $(".currentStationName").text(name);
        })
    });

    //power
    $(".power").on('click', function() {
        console.log("power");
    })
    //arrow
    $(".arrow").on('click', function() {
        console.log("arrow");
    })
    //plus
    $(".plus").each(function(index, element) {
        $(element).on('click', function() {
            console.log("plus");
        });
    });
    //     //minus
    $(".minus").each(function(index, element) {
        $(element).on('click ', function() {
            console.log("minus");
        });
    });
});
// API key	dc3f71b3f47195847cbaa3eb74c1ed72
// Shared secret	a4e06367e623252ab0431d2439f75662
