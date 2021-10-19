// Seu código aqui!

const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!
function filterProducts (category){
  const result = [];
  for (let i = 0; i < products.length; i++){
   let check = products[i].tags.length; let lookingfor = 0;     
   while (lookingfor <= check){   
    if (products[i].tags[lookingfor] === category){
     result.push(products[i]);
     lookingfor++
    } else {lookingfor++}
   }
  }
  return result;   
};

filterProducts('apple');
console.log(filterProducts('apple'));