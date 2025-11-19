/**
 *
 * Behavioral pattern
 * Thay vì sử code logic trong block của if thì ta tách logic ra từng func
 *
 */

// Giảm giá shopee ngày 11/11
function sale1111(originPrice) {
  return originPrice - originPrice * 0.4;
}

// Giảm giá shopee ngày 12/12
function sale1212(originPrice) {
  return originPrice - originPrice * 0.6;
}

// Tối ưu khi sử dụng nhiều if else => object
const funcs = {
  sale1111,
  sale1212,
};

function getPrice(originPrice, typePromotion) {
  try {
    const strategy = funcs[typePromotion];
    if (!strategy) throw new Error("Loại khuyến mãi không được hỗ trợ!");
    return strategy(originPrice);
  } catch (error) {
    console.log(error?.message);
    return 0;
  }
}

const price = getPrice(100000, "sale1s212");
console.log("price :::: ", price);
