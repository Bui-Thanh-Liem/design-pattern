/**
 * Chuyển đổi các dạng dữ liệu khác nhau cho phù hợp với mô hình hiện tại
 * Trường hợp ứng dụng không có thanh toán qua momo chỉ có visa
 */

class Adapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment;
  }

  payWithVisa(visePayment) {
    // convert momo to visa
    const converted = this.convertToVisePayment(this.momoPayment);

    // make the payment using the visa
    visePayment.pay(converted);
  }

  convertToVisePayment(momoPayment) {
    // convert momo to visa
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expiryDate: momoPayment.expiryDate,
      amount: momoPayment.amount,
    };

    return visaPayment;
  }
}

class VisaPayment {
  pay(payment) {
    console.log(
      `Paying ${payment.amount} USD with Visa card ${payment.cardNumber}`
    );
  }
}

class MomoPayment {
  constructor({ cardNumber, expiryDate, amount }) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.amount = amount;
  }
}

// create a momo
const momoPayment = new MomoPayment({
  cardNumber: 123,
  expiryDate: "22/22",
  amount: 1_000_00,
});

// Convert momo to visa
const momoAdapter = new Adapter(momoPayment);

// create a visa
const visaPayment = new VisaPayment();

// 
momoAdapter.payWithVisa(visaPayment);
