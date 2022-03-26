export const product = {
  name: 'Fall Limited Edition Sneakers',
  supplier: 'Sneaker Company',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 125,
  originalPrice: '$250.00',
  discount: '50%',
  salePrice: '$125.00',
}

export const images = [1, 2, 3, 4].map(
  (index) => `/images/image-product-${index}.jpg`
)

export const thumbs = [1, 2, 3, 4].map(
  (index) => `/images/image-product-${index}-thumbnail.jpg`
)
