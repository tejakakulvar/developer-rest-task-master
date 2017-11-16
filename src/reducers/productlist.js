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
              sincedate: 'since: '+date,
              summary: 'It is a long established fact that a reader will be distracted by the readable content of a page  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\',making',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aidus PageMaker including versions of Lorem Ipsum',
              imageurl:'http://www.sumi.com.pl/wp-content/uploads/Rurka-intubacyjna-do-mikrochirurgii-krtani.jpg'
        },
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date,
              summary: 'It is a long established fact that a reader will be distracted by the readable content of a page  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\',making',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aidus PageMaker including versions of Lorem Ipsum',
              imageurl:'http://www.sumi.com.pl/wp-content/uploads/Rurka-intubacyjna-do-mikrochirurgii-krtani.jpg'
        }
      ],
      chemistry = [
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date,
              summary: 'It is a long established fact that a reader will be distracted by the readable content of a page  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\',making',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aidus PageMaker including versions of Lorem Ipsum',
              imageurl:'http://www.sumi.com.pl/wp-content/uploads/Rurka-intubacyjna-do-mikrochirurgii-krtani.jpg'
        }
      ],
      microbiology = [
        {
              productname: 'My Company Another Product',
              productdescriptionshort: 'Stylet, Tracheal Tube',
              sincedate: 'since: '+date,
              summary: 'It is a long established fact that a reader will be distracted by the readable content of a page  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\',making',
              description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aidus PageMaker including versions of Lorem Ipsum',
              imageurl:'http://www.sumi.com.pl/wp-content/uploads/Rurka-intubacyjna-do-mikrochirurgii-krtani.jpg'
        }
      ]
    ]

    return productlist;
};


// Takes care of changing the application state
export default productlist;
