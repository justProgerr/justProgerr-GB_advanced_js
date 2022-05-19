/* 
  Доброго времени суток).
  Ответ к заданию 3 (Почему появляются запятые после товаров).

  Наш список товаров генерируется из массива, в котором разделителем элементов
  является - ",". При выводе на страницу, наш массив преобруется в строку
  и при этом преобразовании, запятые тоже попадают в строку и соответственно 
  тоже выводятся на страницу.

  Для того, чтобы решить эту проблему, можно воспользоваться методом - "join"
  до перевода массива в строку.
  Метод "join" позволяет указать нужный символ разделителя. В нашем случае, мы 
  используем пустоту - ''.   
*/

const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

const renderGoodsItem = ((title = 'Товар', price = 'Цена') => 
  `
    <div class="goods-item">
      <h3>${title}</h3>
      <p>${price}</p>
    </div>
  `
);

const renderGoodsList = list => {
  let goodsList = list
  .map(( {title, price } = item ) => renderGoodsItem(title, price))
  .join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);