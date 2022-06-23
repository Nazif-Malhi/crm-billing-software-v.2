// Data for Category

function createData(imagePath,	category,	parentCategory,	numOfPro,	stockQuantity, worth) {
    return { imagePath,	category,	parentCategory,	numOfPro,	stockQuantity, worth};
  }
  
export const rows = [
    createData('Cupcake', 305, 3.7, 305, 3.7, 305),
    createData('Donut', 452, 25.0,305, 3.7, 3.7, 305, 3.7,305, 3.7),
    createData('Eclair', 262, 16.0,305, 305, 3.7, 305, 3.7,305, 3.7),
    createData('Frozen yoghurt', 159,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
    createData('Gingerbread', 356, 16.0,305, 3.7, 305, 3.7, 305, 3.7,305),
    createData('Honeycomb', 408, 3.2,305, 3.7, 305, 3.7, 305, 3.7, 3.7),
    createData('Ice cream sandwich', 237, 9.0,305, 3.7,305, 305, 3.7, 305, 3.7),
    createData('Jelly Bean', 375, 0.0,305, 3.7, 305, 305, 3.7, 305, 3.7),
    createData('KitKat', 518, 26.0, 305, 3.7, 3.7, 305, 3.7, 305, 3.7),
    createData('Lollipop', 392, 0.2,305, 305, 3.7, 305, 3.7, 305, 3.7),
    createData('Marshmallow', 318, 0 , 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
    createData('Nougat', 360, 19.0, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
    createData('Oreo', 437, 18.0,305, 3.7, 3.7, 305, 3.7, 305, 3.7),
  ]
  // .sort((a, b) => (a.calories < b.calories ? -1 : 1));
  
  export const columnsHeader = [
    'Image',
    'Category',
    'Parent Category',
    'Number of Product',
    'Stock Quantity',
    'Worth (Price/Cost)'
]

// Data for Product

function createDataProduct(imagePath, name, code, brand, category, qty, unit, price, cost, worth) {
    return { imagePath, name, code, brand, category, qty, unit, price, cost, worth};
  }
  
  export const rowsProduct = [
    createDataProduct('Cupcake', 305, 3.7, 305, 3.7, 305,305, 3.7, 305, 3.7),
    createDataProduct('Donut', 452, 25.0,305, 3.7, 3.7, 305, 3.7,305, 3.7),
    createDataProduct('Eclair', 262, 16.0,305, 305, 3.7, 305, 3.7,305, 3.7),
    createDataProduct('Frozen yoghurt', 159,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
    createDataProduct('Gingerbread', 356, 16.0,305, 3.7, 305, 3.7, 305, 3.7,305),
    createDataProduct('Honeycomb', 408, 3.2,305, 3.7, 305, 3.7, 305, 3.7, 3.7),
    createDataProduct('Ice cream sandwich', 237, 9.0,305, 3.7,305, 305, 3.7, 305, 3.7),
    createDataProduct('Jelly Bean', 375, 0.0,305, 3.7, 305, 305, 3.7, 305, 3.7),
    createDataProduct('KitKat', 518, 26.0, 305, 3.7, 3.7, 305, 3.7, 305, 3.7),
    createDataProduct('Lollipop', 392, 0.2,305, 305, 3.7, 305, 3.7, 305, 3.7),
    createDataProduct('Marshmallow', 318, 0 , 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
    createDataProduct('Nougat', 360, 19.0, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
    createDataProduct('Oreo', 437, 18.0,305, 3.7, 3.7, 305, 3.7, 305, 3.7),
  ]
  // .sort((a, b) => (a.calories < b.calories ? -1 : 1));
  
  export const columnsHeaderProduct = [
    'Image',
    	'Name',
        	'Code',
            	'Brand',
                	'Category',
                    	'Quantity',
                        	'Unit',
                            	'Price',
                                	'Cost',
                                    	'Stock Worth (Price/Cost)'	
]
  