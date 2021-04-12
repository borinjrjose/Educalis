window.addEventListener("load", function(e) {
    document.querySelectorAll("form[data-localstorage='true']").forEach(function(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            let dictionary={};
            let elements=form.elements;
            for(i=0; i<elements.length; i++){
                if(elements[i].tagName === "BUTTON") continue;
                dictionary[elements[i].name]=elements[i].value;
            }

            let dictionaryList=JSON.parse(window.localStorage.getItem(form.name));
            if(dictionaryList===null) dictionaryList=[];

            dictionaryList.push(dictionary);

            window.localStorage.setItem(form.name, JSON.stringify(dictionaryList));

            window.location.href=form.action;
        });
    });
});