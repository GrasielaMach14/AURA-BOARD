@isTest
public with sharing class GameResultControllerTest {
    @isTest
    public static void getResultsTest() {
        //List<User> lstUser = [SELECT Id FROM User];

        List<Word_Shuffle__c> listWord = new List<Word_Shuffle__c>();
        listWord.add(new Word_Shuffle__c(Mode__c = 'EASY', Result__c = 'LOSE'));
        listWord.add(new Word_Shuffle__c(Mode__c = 'EASY', Result__c = 'WIN'));

        insert listWord;

        List<Word_Shuffle__c> records = [
            SELECT Id, Name, Mode__c, Result__c, CreatedById
            FROM Word_Shuffle__c
            WHERE CreatedById = :UserInfo.getUserId()
        ];

        GameResultController.getResults();

        System.assertEquals(UserInfo.getUserId(), records[0].CreatedById, 'Got the right user');

        System.debug('Aqui debug  - ' + records);
    }
}
