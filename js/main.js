require('../scss/style.scss');
import stationsName from "../stationsName.js"
$(() => {
    const epsilon=0.000001;
        const tab = $(stationsName);
        var audio = new Audio();
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
        newParticStat.data("url", element.streams[0].stream);
        console.log( element.streams[0].stream);
        newExtend.prepend(newMinus);
        newExtend.append(newStationImage);
        newExtend.append(newPlus);
        newShortcut.prepend(newStationName);
        newShortcut.append(newfm);
        newParticStat.prepend(newExtend);
        newParticStat.append(newShortcut);
        $(".main").append(newParticStat);
    });

    const stations = $(".shortcut");
    let currentStation;
    stations.each(function(index, element) {
        $(element).on('click', function() {
            audio.pause();
            if (currentStation != undefined) {
                currentStation.addClass("hidden");
            }
            const parent = $(this).parent();
            currentStation = parent.find(".extended");
            const name = parent.find(".stationName").text();
            currentStation.removeClass("hidden");
             const container =$(".main");
             container.animate({
                 scrollTop: $(parent).offset().top - container.offset().top + container.scrollTop()-$(parent).height()/2
             });

             audio.src=parent.data("url");
             audio.play();
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
            if(audio.volume<1-epsilon)
            {
                audio.volume=audio.volume+0.1;
                console.log(audio.volume);
            }
        });
    });
    //     //minus
    $(".minus").each(function(index, element) {
        $(element).on('click ', function() {
            if(audio.volume-epsilon>0)
            {
                audio.volume=audio.volume-0.1;
                console.log(audio.volume);
            }
        });
    });

});
