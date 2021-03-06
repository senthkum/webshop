///<reference types='cypress'/>

import {Giftcard} from '../WebshopScripts/GiftcardCode'
import {Books} from '../WebshopScripts/BooksCode'
import {Computers} from '../WebshopScripts/ComputersCode'

describe('Demo-WebShop Suit', function()
{
    beforeEach(function GiftcardModule()
    {

        cy.fixture('WebshopDatatable/Giftcard').then(function(Giftcarddata)
        {
            this.gdata = Giftcarddata
        })

        cy.fixture('WebshopDatatable/BooksTestData').then(function(BooksData)
        {
            this.bdata = BooksData
        })

        cy.fixture('WebshopDatatable/ComputersTestData').then(function(ComputerData)
        {
            this.cdata = ComputerData
        })

    })

     it('GiftcardModule', function()
     {
         Giftcard.PurchaseGiftcards(this.gdata)
     })

    it('BooksModule', function()
    {  
        Books.PurchaseBooks(this.bdata)
    })

     it('ComputersModule', function()
     {
         Computers.PurchaseComputers(this.cdata)
     })

})
