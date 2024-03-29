AURA-BOARD

Choose a word from each tile until you find the suggested word at the top.
![image](https://github.com/GrasielaMach14/AURA-BOARD/assets/41588598/88ea049c-2d17-4e2d-a388-7709f2623d25)


🚀 Getting Started
You must install the package containing the custom object developed for this project and adjust the page to view the Aura components on your screen.

📋 Prerequisites
Log in with a Salesforce account.

🔧 Installation
- Install the Word Shuffle Custom Object:
			Go to the Install Package tab and add this ID: 04t8b000000uXXM
			Or follow this link: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t8b000000uXXM

- Next step:
		Download this repository to your machine and deploy it to your Org.

- Edit Page:
		Choose an App in Salesforce
		Go to the gear in the top right corner
		Click Edit Page
		Drag custom these components to the page:
			.BoardPanel
			.GameResult
		Save it

⚙️ Running the tests
A controller class "GameResultController" was developed to check the result of this game, whether the player won or lost. This system user is searched to find out who is playing.
This class is tested in "GameResultControllerTest".

🔩 Analyze end-to-end tests
The standard Salesforce class "UserInfo" is used to detect who is playing the game.
In the test class the user field is tested in the function and checks the return whether it matches the result or not.

🛠️ Built with
Aura - Framework 
Apex - Back-End
Javascript - Front-End

📌 Version
AURA-BOARD v1

✒️ Authors

Grasiela Machado - Initial Work - a developer
Grasiela Machado - Documentation

⌨️ com ❤️ por Grasiela Machado 😊




## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
#   A U R A - B O A R D 
 
 
