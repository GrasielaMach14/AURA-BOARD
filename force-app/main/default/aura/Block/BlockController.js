({
    blockClickHandler: function (component, event, helper) {
        const open = component.get("v.open");
        if (open === false) {
            component.set("v.open", true);
            // Pegar o valor do Label
            const label = component.get("v.label");
            // Disparar o evento do bloco
            let compEvent = component.getEvent("onclick");
            compEvent.setParams({ value: label });
            compEvent.fire();
        }
    },
    scriptsLoaded: function (component, event, helper) {
        const divElement = component.getElement(".board-block");
        fitText(divElement);
    }
});
