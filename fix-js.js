var radios = document.querySelectorAll('#app #_builder-form .menu-field-wrap:nth-child(2) input[type=radio]');
    radios.forEach(radio => radio.addEventListener('change', () => {
        var selected_value = radio.value;
        if( selected_value < 4 ){
            Array.from(document.querySelectorAll("#app #_builder-form .menu-field-wrap"))
                .forEach(function(val) {
                    val.style.display = 'block';
            });
            document.querySelector('#app #_builder-form .menu-field-wrap:first-child').style.display = 'none';
            document.querySelector('#app #_builder-form .menu-field-wrap:nth-child(2)').style.display = 'none';
            document.querySelector('#app #_builder-form .menu-field-wrap:nth-last-child(2)').style.display = 'none';
        } else {
            Array.from(document.querySelectorAll("#app #_builder-form .menu-field-wrap"))
                .forEach(function(val) {
                    val.style.display = 'none';
            });
            document.querySelector('#app #_builder-form .menu-field-wrap:nth-last-child(2)').style.display = 'block';
        }
    }));
