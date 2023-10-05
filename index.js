//Thêm số
var numberArr = [];
document.getElementById("ketQua").onclick = function themso() {
  var number = document.getElementById("number").value * 1;
  numberArr.push(number);

  var inKetQua = (document.getElementById(
    "result"
  ).innerHTML = `Bạn đã nhập các số: ${numberArr}`);
  return numberArr;
};

//1. Tính tổng các số dương
document.getElementById("sumDuong").onclick = function sumDuong() {
  var sumDuong = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      sumDuong += numberArr[i];
    }
  }
  var inKetQua1 = (document.getElementById(
    "result1"
  ).innerHTML = `Tổng các số bạn nhập là: ${sumDuong}`);
};

//2. Đếm xem có bao nhiêu số dương trong mãn

document.getElementById("demDuong").onclick = function demDuong() {
  var dem = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      dem++;
    }
  }
  var inKetQua2 = (document.getElementById(
    "result2"
  ).innerHTML = `Có tất cả "${dem}" số dương`);
};

// 3. Tìm số nhỏ nhất trong mảng

document.getElementById("soNhoNhat").onclick = function soNhoNhat() {
  var soNhoNhat = numberArr[0];
  for (var i = 0; i < numberArr.length; i++) {
    if (soNhoNhat > numberArr[i]) {
      soNhoNhat = numberArr[i];
    }
  }
  var inKetQua3 = (document.getElementById(
    "result3"
  ).innerHTML = `Số nhỏ nhất là: ${soNhoNhat}`);
  return soNhoNhat;
};

//4. Tìm số dương nhỏ nhất trong mảng
document.getElementById("soDuongNhoNhat").onclick = function soDuongNhoNhat() {
  var soDuongNhoNhat = null;
  for (var i = 0; i < numberArr.length; i++) {
    if (
      numberArr[i] > 0 &&
      (soDuongNhoNhat === null || numberArr[i] < soDuongNhoNhat)
    ) {
      soDuongNhoNhat = numberArr[i];
    }
  }
  var inKetQua4 = (document.getElementById(
    "result4"
  ).innerHTML = `Số dương nhỏ nhất là: ${soDuongNhoNhat}`);
};

// 5. Tìm số chẵn cuối cùng trong mảng

document.getElementById("soChanCuoi").onclick = function soChanCuoi() {
  var soChanCuoi = -1;
  for (var i = 0; i < numberArr[i]; i++) {
    if (numberArr[i] % 2 == 0) {
      soChanCuoi = numberArr[i];
    }
  }
  var inKetQua5 = (document.getElementById(
    "result5"
  ).innerHTML = `Số chẵn cuối cùng là: ${soChanCuoi}`);
};

// 6. Đổi chỗ 2 giá trị trong mãng theo vị trí

document.getElementById("doiCho").onclick = function doiCho() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var bienTam = "";

  bienTam = numberArr[viTri1];
  numberArr[viTri1] = numberArr[viTri2];
  numberArr[viTri2] = bienTam;

  var inKetQua6 = (document.getElementById(
    "result6"
  ).innerHTML = `Mảng sau khi đổi là: ${numberArr}`);
};

// 7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("sapXep").onclick = function sapXep() {
  for (var i = 0; i < numberArr.length; i++) {
    for (var j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] > numberArr[j]) {
        var temp = numberArr[i];
        numberArr[i] = numberArr[j];
        numberArr[j] = temp;
      }
    }
  }
  var inKetQua7 = (document.getElementById(
    "result7"
  ).innerHTML = `Sắp xếp lại mãng theo thứ tự tăng dần: ${numberArr}`);
};

// 8. Tìm số nguyên tố đầu tiên trong mãng
document.getElementById("soNguyenTo").onclick = function soNguyenTo() {
  var soNguyenTo = -1;
  for (var j = 0; j < numberArr.length; j++) {
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(numberArr[j]); i++) {
      if (numberArr[j] % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && numberArr[j] > 1) {
      soNguyenTo = numberArr[j];
      break;
    }
  }
  if (soNguyenTo === -1) {
    soNguyenTo = "Không tìm thấy số nguyên tố nào";
  }
  var inKetQua8 = (document.getElementById(
    "result8"
  ).innerHTML = `Số nguyên tố đầu tiên:  ${soNguyenTo}`);
};

// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
//Thêm số thực

var numberArr2 = [];
document.getElementById("ketQua9").onclick = function themso() {
  var number2 = document.getElementById("number2").value * 1;
  numberArr2.push(number2);

  var inKetQuaThuc9 = (document.getElementById(
    "resultThuc9"
  ).innerHTML = `Bạn đã nhập các số: ${numberArr2}`);
  return numberArr2;
};

document.getElementById("soThuc").onclick = function soThuc() {
  var demThuc = 0;
  for (var i = 0; i < numberArr2.length; i++) {
    if (numberArr2[i] % 1 == 0) {
      demThuc++;
    }
  }
  var inKetQua9 = (document.getElementById(
    "result9"
  ).innerHTML = `Có tất cả "${demThuc}" số thực`);
};

// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
document.getElementById("soSanh").onclick = function soSanh() {
  var duong = 0;
  var am = 0;
  demAmDuong = "";
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      duong++;
    } else if (numberArr[i] < 0) {
      am++;
    }
    if (duong > am) demAmDuong = ">";
    if (duong < am) demAmDuong = "<";
    if (duong == am) demAmDuong = "=";
  }
  var inKetQua10 = (document.getElementById(
    "result10"
  ).innerHTML = `Số dương ${demAmDuong} Số âm`);
};
