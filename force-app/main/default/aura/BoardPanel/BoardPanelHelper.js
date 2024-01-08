({
    addResultRecord: function (component, gameResult) {
        // Criar método apex que chama ação
        const action = component.get("c.addResult");
        const modeValue = component.get("v.selectedGameMode").toUpperCase();
        // Definir parâmetros
        action.setParams({
            result: gameResult.toUpperCase(),
            mode: modeValue
        });
        // Definir resposta do servidor através do callback
        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state !== "SUCCESS") {
                console.error("Error in save record.");
            }
        });
        // Chamar método apex por último
        $A.enqueueAction(action);
    },

    showToast: function (titleValue, msgValue, typeValue) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title: titleValue,
            message: msgValue,
            type: typeValue
        });
        toastEvent.fire();
    }
});
