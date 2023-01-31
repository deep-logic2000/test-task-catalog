const sizes = [
  { id: 1, label: 'XS', number: 44 },
  { id: 2, label: 'S', number: 46 },
  { id: 3, label: 'M', number: 48 },
  { id: 4, label: 'L', number: 50 },
  { id: 5, label: 'XL', number: 52 },
]

const products = [
  {
    id: 1,
    name: 'Футболка',
    colors: [
      {
        id: 1,
        name: 'черный',
        images: ['/images/1/black_01.png', '/images/1/black_02.png'],
        price: '123.00',
        description: 'Описание для "Футболка черный"',
        sizes: [1, 2, 3],
      },
      {
        id: 2,
        name: 'белый',
        images: ['/images/1/white_01.png', '/images/1/white_02.png'],
        price: '125.00',
        description: 'Описание для "Футболка белый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 3,
        name: 'серый',
        images: ['/images/1/gray_01.png', '/images/1/gray_02.png'],
        price: '120.00',
        description: 'Описание для "Футболка серый"',
        sizes: [],
      },
    ],
  },

  {
    id: 2,
    name: 'Майка',
    colors: [
      {
        id: 1,
        name: 'желтый',
        images: ['/images/2/yellow_01.png', '/images/2/yellow_02.png'],
        price: '88.00',
        description: 'Описание для "Майка желтый"',
        sizes: [1, 2, 3, 4, 5],
      },
      {
        id: 2,
        name: 'синий',
        images: ['/images/2/blue_01.png', '/images/2/blue_02.png'],
        price: '89.00',
        description: 'Описание для "Майка синий"',
        sizes: [2],
      },
      {
        id: 3,
        name: 'черный',
        images: ['/images/2/black_01.png', '/images/2/black_02.png'],
        price: '90.00',
        description: 'Описание для "Майка черный"',
        sizes: [],
      },
    ],
  },
]

export function getSizes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sizes), 250)
  })
}

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250)
  })
}

export function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id.toString() === id)
      if (product) {
        resolve(product)
      } else {
        reject(new Error('Product not found'))
      }
    }, 250)
  })
}
