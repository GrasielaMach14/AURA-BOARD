({
    doInit: function (component, event, helper) {
        console.log("Initialiation completed");
        const gameMode = component.get("v.mode");
        let column = 0;
        if (gameMode && gameMode === "hard") {
            column = 6;
        } else if (gameMode === "medium") {
            column = 4;
        } else {
            column = 3;
        }
        let blockSize = 12 / column;
        component.set("v.blockSize", blockSize);
        // build a list of 100 words
        const words = helper.getWords(column * column);
        component.set("v.words", words);
        // get win word
        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        // Resetar no novo modo do Game
        helper.resetBoard(component);
    },

    doRender: function (component, event, helper) {
        console.log("Render completed");
    },

    blockClickHandler: function (component, event, helper) {
        let clickCount = component.get("v.clickCount") + 1;
        // Pegar o valor do evento em BlockClickEvent
        const value = event.getParam("value");

        if (value === component.get("v.winWord")) {
            component.set("v.result", "You Win!");
            component.set("v.boardDisable", true);
            helper.disableBoard(component);
            // Chame a função para disparar o evento
            helper.fireResultEvent("win");
        } else if (clickCount === 3) {
            component.set("v.result", "You Lose!");
            component.set("v.boardDisable", true);
            helper.disableBoard(component);
            helper.fireResultEvent("lose");
        }
        //Configurar o clickCount()
        component.set("v.clickCount", clickCount);
    },
    // Use essa função pra ativar o botão Reshuffle no componente Board para remodelar a localização das palavars, depois chame este método no BoardPanel
    reshuffleBoard: function (component, event, helper) {
        const words = component.get("v.words");
        const randomizeWords = helper.randomizeArray(words);
        component.set("v.words", randomizeWords);
        helper.resetBoard(component);
    }
});
