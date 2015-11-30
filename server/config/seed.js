/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Contact = require('../api/contact/contact.model');


Contact.find({}).remove(function() {
  Contact.create({
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com'
    },
    {
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    },
    {
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    });
});