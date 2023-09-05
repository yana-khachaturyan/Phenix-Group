$( document ).ready(function() {
    $("form button").on("click", function (event) {
        event.preventDefault();
        window.history.back();
        var datastring = $("form").serializeArray();
    
        var data = {};
        $(datastring).each(function(index, obj){
            if (obj.value) {
                data[obj.name] = obj.value;
            }
        });
        
        const lidName = $('.block01 h1').text();
        
        if(data.phone.length === 16) {
            jQuery.ajax({
                url: `https://feniks-group.bitrix24.ru/rest/1/z9ukjd2p2mcvzr1x/crm.lead.add.json?FIELDS[TITLE]=${lidName}&FIELDS[NAME]=${data.name ? data.name : 'Имя не указано'}&FIELDS[EMAIL][0][VALUE_TYPE]=WORK&FIELDS[PHONE][0][VALUE]=${data.phone}&FIELDS[PHONE][0][VALUE_TYPE]=WORK&UF_CRM_1669230130=TEST`,
                type: 'GET',
                async: true
            }).done(function() {
                jQuery('.md-close').click();
                jQuery('.sps').click();
                $("form").find("input[type=text]").val("")
            });
        } else {
            alert("sdsd")
        }
    })
});
