
class GoodsItem {
  constructor (title, price) {
    this.title = title;
    this.price = price;
  }

  render () {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div> 
    `
  }
}

class GoodsList {
  constructor () {
    this.goods = [];
  }

  fetchGoods () {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }

  render () {
    let listHtml = '';

    this.goods.forEach( good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render(); 
    });

    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  totalPrice () {
    return this.goods.reduce((sum, product) => sum += product.price, 0);
  }
}

class GoodsCartList {
  constructor () {
    this.goodsItems = [];
  }

  /* 
  Предпологаемые методы класса корзины

  addGood ( good - здесь мы будем получать товар) {
    goods.push(good)
  } 
  */

  // Нужен метод, который будет генерировать список продуктов с разметкой для 
  // вставки в html

  // randomHtml () {

  //   let goodsCartHtmlList = [];
  //   this.goodsItems.forEach(goodItem => {
  //   const goodCartItem = new  
  //     goodsCartHtmlList.push(g)
  //   })
  // } 
}

class GoodsCartItem extends GoodsItem {
  constructor (title, price) {
    super(title, price);

    // Предполагаю что у элемента корзины будут примерно вот такие свойства:
    // Кол-во, изначально равное нулю
    this.productCount = 0;

    // Цена указанная за несколько штук одной позиции товара
    this.totalPrice = this.price * this.productCount;
  }

  // Из методов думаю должно быть примерно следующее:
  // метод который будет срабатывать при добавлении товара в корзину
  updateProductCount () {
    this.productCount++;
  }

  // И метод который будет генерировать html код для вставки на html страницу
  // Пока оставлю его закоментированным
  // randomHtml
}

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.totalPrice());
