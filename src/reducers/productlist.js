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
              sincedate: date
        }
      ],
      chemistry = [
        {
              productname: 'My Company Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: date
        }
      ],
      microbiology = [
        {
              productname: 'My Company Product bio',
              productdescriptionshort: 'Stylet, Tracheal Tube bio',
              sincedate: date
        }
      ]
    ]

    return productlist;
};


// Takes care of changing the application state
export default productlist;
