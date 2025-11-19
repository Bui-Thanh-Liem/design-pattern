/**
 * Structural pattern
 * Đơn giản hoá khi sử dụng (mặc dù cho rất nhiều thao tác bên trong tính năng)
 */

class Discount {
  calc(price) {
    return price - price * 0.3;
  }
}

class VAT {
  calc(price) {
    return price * 0.2;
  }
}

class Shipping {
  calc(price) {
    return price * 0.1;
  }
}

class Shop {
  constructor() {
    this.vat = new VAT();
    this.discount = new Discount();
    this.shipping = new Shipping();
  }

  calc(price) {
    let _price = price;

    console.log("origin price :::", _price);

    _price = this.discount.calc(price);
    console.log("done discount :::", _price);

    _price += this.vat.calc(price);
    console.log("done vat :::", _price);

    _price += this.shipping.calc(price);
    console.log("done shipping :::", _price);

    return _price;
  }
}

const shop = new Shop();
console.log(`Total :::`, shop.calc(100000));
