var generalhospital1=[];
var chemistry = [];
var microbiology = [];
const productlist = function() {
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var productlist = [
      generalhospital1 = [
        {
              productname: 'My Company Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date
        },
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date
        }
      ],
      chemistry = [
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date
        }
      ],
      microbiology = [
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date
        }
      ]
    ]

    return productlist;
};


// Takes care of changing the application state
export default productlist;
