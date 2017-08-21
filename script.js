AFRAME.registerComponent('object-info-on-click', {
    schema: {
        color: {
            default: '#333'
        }
    },
    init: function () {
        var data = this.data; // Component property values.

        var el = this.el; // Reference to the component's entity.
        var defaultColor = el.getAttribute('material').color;

        var blueButton = $('#blue_btn');
        var greenButton = $('#green_btn');
        var orangeButton = $('#orange_btn');

        var OBJid = el.getAttribute('src');
        var OBJidString = OBJid.substr(1);

        el.addEventListener('click', function () {
            el.setAttribute('color', data.color);

            console.log(OBJid.substr(1));
            //alert(el.getAttribute('src'));

            // $(".words").text(OBJid.substr(1));

            // $(".words").text($(objInfo["obj-5"].cost));

            $(".popup_1").text(objInfo[OBJidString].name);
            $(".popup_2").text("$" + objInfo[OBJidString].cost);
            $(".popup_3").text(objInfo[OBJidString].material);
            $(".popup_4").text(objInfo[OBJidString].dimensions);

            // $(".popup").append("<div class='text'><p>This is the object <strong>" + objInfo[OBJidString].name + "</strong> and the cost assigned on the object is $<strong>" + objInfo[OBJidString].cost + "</strong></p></div>");

        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);

        });

        blueButton.on('click', function () {
            el.setAttribute('color', '#035E7B');
        });
        
        greenButton.on('click', function () {
            el.setAttribute('color', '#78C091');
        });
        
        orangeButton.on('click', function () {
            el.setAttribute('color', '#FFBA49');
        });

    }
});