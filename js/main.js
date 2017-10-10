require('../scss/style.scss');

document.addEventListener('DOMContentLoaded', function() {
    console.log("script loaded");
    const stations = document.querySelectorAll(".particularStation");
    stations.forEach(function(element, index)
                     {
                    element.onclick=function()
                    {
                    //  this.style.visibility = "hidden";
                    console.log("hej");
                    }
      });

});
