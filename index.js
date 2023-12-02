// Quản lý tuyển sinh
/*
Đầu vào: điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, điểm ưu tiên theo khu vực, điểm ưu tiên theo đối tượng dự thi

Cách xử lý: điểm tổng kết = tổng điểm 3 môn thi của thí sinh + điểm ưu tiên, điểm ưu tiền = điểm ưu tiên theo khu vực + điêm ưu tiên theo đối tượng, so sánh điểm tổng kết với điểm chuẩn của hội đồng để xét thí sinh đậu hoặc rớt

Đầu ra: thí sinh đậu hoặc rớt, tổng điểm
*/

function sumScore(score1, score2, score3) {
  return score1 + score2 + score3;
}

function diemUuTien(area, object) {
  return area + object;
}

function scoreResult(diem, uuTien) {
  return diem + uuTien;
}

document.querySelector(".scoreBtn").onclick = function () {
  var result;
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var score1 = document.getElementById("score1").value * 1;
  var score2 = document.getElementById("score2").value * 1;
  var score3 = document.getElementById("score3").value * 1;
  var area = document.getElementById("area").value * 1;
  var object = document.getElementById("object").value * 1;
  var score4 = sumScore(score1, score2, score3);
  var score5 = diemUuTien(area, object);
  var finalScore = scoreResult(score4, score5);
  if(diemChuan > 0) {
    if (score1 > 0 && score2 > 0 && score3 > 0) {
      finalScore >= diemChuan
        ? (result = "ĐẬU")
        : (result = "RỚT");
    } else if (score1 < 0 || score2 < 0 || score3 < 0) {
      return alert('Điểm thi không hợp lệ! Vui lòng nhập lại')
    } else if (score1 == 0 || score2 == 0 || score3 == 0) {
      return document.querySelector(
        ".scoreResult"
      ).innerHTML = `Bạn đã RỚT do có điểm thi bằng 0`;
    } else {
      return alert('Điểm thi không hợp lệ! Vui lòng nhập lại')
    }
    document.querySelector(
      ".scoreResult"
    ).innerHTML = `Bạn đã ${result} <br /> Tổng số điểm bạn đạt được là ${finalScore}`;
  } else {
    alert('Điểm chuẩn không hợp lệ! Vui lòng nhập lại')
  }
};

// Tính tiền điện

/*
Đầu vào: họ tên, số Kw, giá tiền tương ứng với số Kw tiêu thụ

Cách xử lý: số tiền phải trả tương ứng với kW tiêu thụ xác định theo toán tử điều kiện

Đầu ra: họ tên và số tiền phải trả
*/
var money = 0;

// function kwMoney (Kw) {
//   var point = 50;
//   if (Kw <= point) {
//     return 500 ;
//   } else if (Kw > point && Kw <= (point + 50)) {
//     return 650 
//   } else if (Kw > (point + 50) && Kw <= (point + 100)) {
//     return 850 
//   } else if (Kw > (point + 100) && Kw <= (point + 150)) {
//     return  1100 
//   } else {
//     return 1300
//   }
// }

// function caculateElecMoney(Kw, Kwmoney) {
//   var point = 50;
//   if (Kw <= point) {
//     money = Kwmoney * Kw;
//   } else if (Kw > point && Kw <= (point + 50)) {
//     money = (Kwmoney - 150) * point + Kwmoney * (Kw - point);
//   } else if (Kw > (point + 50) && Kw <= (point + 100)) {
//     money = (Kwmoney -350) * point + (Kwmoney - 200) * point + Kwmoney * (Kw - (point + 50));
//   } else if (Kw > (point + 100) && Kw <= (point + 150)) {
//     money = (Kwmoney - 600) * point + (Kwmoney - 450) * point + (Kwmoney - 250) * (point + 50) + Kwmoney * (Kw - (point + 150));
//   } else {
//     money = (Kwmoney - 800) * point + (Kwmoney - 650) * point + (Kwmoney - 450) * (point + 50) + (Kwmoney - 200) * (point + 100) + Kwmoney * (Kw - (point + 300));
//   }
//   return money;
// }

function caculateElecMoney(Kw) {
  if (Kw <= 50) {
    money = 500 * Kw;
  } else if (Kw > 50 && Kw <= 100) {
    money = 500 * 50 + 650 * (Kw - 50);
  } else if (Kw > 100 && Kw <= 200) {
    money = 500 * 50 + 650 * 50 + 850 * (Kw - 100);
  } else if (Kw > 200 && Kw <= 350) {
    money = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (Kw - 200);
  } else {
    money = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (Kw - 350);
  }
  return money;
}

document.querySelector(".elecBtn").onclick = function () {
  var name = document.querySelector('input[name="elec"]').value;
  var Kw = document.getElementById("Kw").value * 1;
  // var moneyAvailable = kwMoney(Kw)
  // var result =  caculateElecMoney(Kw, moneyAvailable)

  if (Kw > 0) {
    document.querySelector(".elecResult").innerHTML =
      `Họ tên của bạn là ${name} <br /> Số tiền điện bạn cần phải thanh toán là ` +
      caculateElecMoney(Kw).toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    } else {
      alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }
};

// Thuế

/*
Đầu vào: họ tên, tổng thu nhập năm, số người phụ thuộc, thuế suất (%) theo thu nhập chịu thuế (triệu)

Cách xử lý: thuế thu nhập cá nhân = thu nhập chịu thuế(triệu) * thuế suất (%), thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc * 1.6tr 

Đầu ra: họ tên và thuế thu nhập cá nhân
*/
const MIL = 1000000;
const TAX = 5;
function salaryTax(salaryYear, person) {
  return salaryYear - 4 * MIL - person * 1.6 * MIL;
}

function caculateTaxMoney(money) {
  if (money <= 60 * MIL) {
    return (money * TAX) / 100;
  } else if (money > 60 * MIL && money <= 120 * MIL) {
    return (money * (TAX + 5)) / 100;
  } else if (money > 120 * MIL && money <= 210 * MIL) {
    return (money * (TAX + 10)) / 100;
  } else if (money > 210 * MIL && money <= 384 * MIL) {
    return (money * (TAX + 15)) / 100;
  } else if (money > 384 * MIL && money <= 624 * MIL) {
    return (money * (TAX + 20)) / 100;
  } else if (money > 624 * MIL && money <= 960 * MIL) {
    return (money * (TAX + 25)) / 100;
  } else {
    return (money * (TAX + 30)) / 100;
  }
}

document.querySelector(".taxBtn").onclick = function () {
  var name = document.querySelector('input[name="tax"]').value;
  var totalIncome =
    document.querySelector('input[name="totalIncome"]').value * 1;
  var person = document.querySelector('input[name="person"]').value * 1;
  var totalIncomeTax = salaryTax(totalIncome, person);
  var result = caculateTaxMoney(totalIncomeTax);
  if (person >= 0) {
    if (totalIncome <= 0 || totalIncomeTax <= 0) {
      alert("Số tiền thu nhập không hợp lệ! Vui lòng nhập lại");
    }
    else {
      document.querySelector(".taxResult").innerHTML =
      `Họ tên của bạn là ${name} <br > Thuế thu nhập của bạn là ` +
      result.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    }
  } else {
    alert('Số người không hợp lệ ! Vui lòng thử lại')
  }
};

// Tính tiền cáp

/*
Đầu vào: loại khách hàng, mã khách hàng, số kênh cao cấp, số kết nối tùy theo loại khách hàng, giá tiền phí xử lý hóa đơn, phí dịch vụ cơ bản và phí thuê kênh cao cấp

Cách xử lý: Tiền cáp của nhà dân = tiền phí xử lý hóa đơn nhà dân + 
phí dịch vụ cơ bản nhà dân + phí thuê kênh cao cấp nhà dân
Tiền cáp của doanh nghiệp = tiền phí xử lý hóa đơn doanh nghiệp + 
phí dịch vụ cơ bản doanh nghiệp + phí thuê kênh cao cấp doanh nghiệp

Đầu ra: mã khách hàng, tiền cáp
*/
var elementSelect = document.querySelector(".connectNumber");
var moneyCable = 0;
elementSelect.style.display = "none";

document.querySelector('select[name="customer"]').addEventListener("change", function () {
  var selectCustomer = document.querySelector('select[name="customer"]').value;
  selectCustomer === "company"
    ? (elementSelect.style.display = "block")
    : (elementSelect.style.display = "none");
}) 

function caculateCableMoney(customer, service, channel) {
  var billMoney;
  var serviceMoney;
  var channelMoney;
  switch (customer) {
    case "house":
      billMoney = 4.5
      serviceMoney = 20.5
      channelMoney = 7.5 
      moneyCable = billMoney + serviceMoney + channel * channelMoney;
      break;
    case "company":
      billMoney = 15
      channelMoney = 50 
      serviceMoney = 75
      if (service <= 10) {
        moneyCable = billMoney + serviceMoney + channel * channelMoney;
      } else {
        moneyCable = billMoney + serviceMoney + (service - 10) * 5 + channel * channelMoney;
      }
      break;
    default:
      return alert("Hãy chọn loại khách hàng");
  }
  return moneyCable;
}

// function caculateCableMoney(customer, service, channel) {
//   switch (customer) {
//     case "house":
//       moneyCable = 4.5 + 20.5 + channel * 7.5;
//       break;
//     case "company":
//       if (service <= 10) {
//         moneyCable = 15 + 75 + channel * 50;
//       } else {
//         moneyCable = 15 + 75 + (service - 10) * 5 + channel * 50;
//       }
//       break;
//     default:
//       return alert("Hãy chọn loại khách hàng");
//   }
  
//   return moneyCable;
// }

document.querySelector(".cableBtn").onclick = function () {
  var selectCustomer = document.querySelector('select[name="customer"]').value;
  var customerId = document.querySelector('input[name="customerId"]').value ;
  var connectNumber =
    document.querySelector('input[name="connectNumber"]').value * 1;
  var channel = document.querySelector('input[name="channel"]').value * 1;

  var result = caculateCableMoney(selectCustomer, connectNumber, channel);

  if (connectNumber >= 0 && channel >=0) {
    document.querySelector(".cableResult").innerHTML =
    `Mã khách hàng: ${customerId} <br> Tiền cáp của bạn là ` +
    result.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    alert("Số không hợp lệ ! Vui lòng thử lại");
  }
};
