({
    startGame: function (component, event, helper) {
        //acess combobox with aura:id
        let gameModeComboBox = component.find("gameMode");
        //Catching the value inside the combobox
        let selectValue = gameModeComboBox.get("v.value");

        const selectMode = component.get("v.selectedGameMode");
        //Update the value inside the combobox
        component.set("v.selectedGameMode", selectValue);
        if (selectMode) {
            const boardComp = component.find("boardComp");
            // Chamar o Aura Method em Board
            boardComp.startGame();
        }
    },
    // Chame a função para o botão Reshuffle aqui para o componente pai
    reshuffleBoard: function (component, event, helper) {
        const boardComp = component.find("boardComp");
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);
    },
    // Use o campo do ResultApplicationEvent aqui na função para desabilitar o botão Reshuffle
    onResultHandler: function (component, event, helper) {
        const result = event.getParam("result");
        // Use o campo booleano em BoardPanel para bloquear o acesso ao botão Reshuffle
        if (result === "win") {
            component.set("v.reshuffleDisabled", true);
            helper.showToast("YOU WIN!", "Congratulations! UHUUUUU", "success");
        } else {
            component.set("v.reshuffleDisabled", false);
            helper.showToast("YOU LOSE!", "Click on reshuffle button to keep playing.", "error");
        }
        helper.addResultRecord(component, result);
    }
});
