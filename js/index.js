// output
var arrSoNhap =[];
 document.getElementById('btnThemSo').onclick = function() {
    // input
var soNhap = +document.getElementById('so-nhap').value;

// process
    arrSoNhap.push(soNhap)
        document.getElementById('hien-thi-so').innerHTML = arrSoNhap;
    
 }


//1.  tổng số dương
document.getElementById('btnTongSoDuong').onclick = function() {
    var tong=0;
    for(var index=0; index<arrSoNhap.length;index++) {       
        if(arrSoNhap[index]>0) {
            tong += arrSoNhap[index]
        }
    }
    document.getElementById('hien-thi-tong-so-duong').innerHTML = `Tổng số dương: ${tong}`;
}

//2. Đếm số dương
document.getElementById('btnDemSoDuong').onclick = function() {
    var demSoDuong=0;
    for(var index=0; index<arrSoNhap.length;index++) {       
        if(arrSoNhap[index]>0) {
            demSoDuong++
        }
    }
document.getElementById('hien-thi-so-luong-so-duong').innerHTML = `Số lượng số dương: ${demSoDuong} `;
}

//3. Tìm số nhỏ nhất
document.getElementById('btnTimSoNhoNhat').onclick = function() {
    var min = arrSoNhap[0];
    for(var index=1; index<arrSoNhap.length;index++) {       
        if(arrSoNhap[index]<min) {
            min= arrSoNhap[index]
        }
    }
    document.getElementById('tim-so-nho-nhat').innerHTML = `Số nhỏ nhất: ${min} `;
}

//4. Tìm số dương nhỏ nhất

document.getElementById('btnTimSoDuongNhoNhat').onclick = function() {
    // lọc ra mảng số dương
    var arrSoDuong = [];
    for(var index=0; index<arrSoNhap.length;index++) {       
        if(arrSoNhap[index]>0) {
            arrSoDuong.push(arrSoNhap[index])
        }
    }
    // tìm số dương min trong mảng số dương
    var soDuongMin = arrSoDuong[0]
    for(var index=1; index<arrSoDuong.length;index++) {       
        if(arrSoDuong[index]<soDuongMin) {
            soDuongMin = arrSoDuong[index]
        }
    }
    document.getElementById('hien-thi-so-duong-nho-nhat').innerHTML = `Số dương nhỏ nhất: ${soDuongMin} `;
}

//5. Tìm số chẳn cuối cùng

document.getElementById('btnTimSoChanCuoiCung').onclick = function() {
    // lọc ra mảng số chẳn
    var arrSoChan = [];
    for(var index=0;index<arrSoNhap.length;++index) {
        if(arrSoNhap[index] % 2===0){
            arrSoChan.push(arrSoNhap[index]);
        }
    } if(arrSoChan.length ===0){
        document.getElementById('hien-thi-so-chan-cuoi-cung').innerHTML =  `Mảng không có số chẵn `;
    } else {
        document.getElementById('hien-thi-so-chan-cuoi-cung').innerHTML =  `Số chẵn cuối cùng: ${arrSoChan[arrSoChan.length - 1]} `;
    }
    

}

//6.Đổi chỗ
document.getElementById('btnDoiCho').onclick = function() {
    var viTri1 = +document.getElementById('vi-tri-1').value;
    var viTri2 = +document.getElementById('vi-tri-2').value;
    var bienTamThoi =0;
    bienTamThoi = arrSoNhap[viTri1];
    arrSoNhap[viTri1] = arrSoNhap[viTri2];
    arrSoNhap[viTri2] = bienTamThoi;



    document.getElementById('hien-thi-doi-cho').innerHTML = `Mảng sau khi đổi: ${arrSoNhap} `;
}

//7.Sắp xếp tăng dần

document.getElementById('btnSapXepTangDan').onclick = function() {
    var arrSort = _.sortBy(arrSoNhap)
    
    document.getElementById('hien-thi-tang-dan').innerHTML = `Mảng sau khi sắp xếp: ${arrSort} ` ;
}


//8.Tìm Số Nguyên tố đầu tiên

document.getElementById('btnTimSoNguyenToDauTien').onclick = function(){
    var index = 0;
    
    var arrSoNguyenTo =[];
    for(index;index< arrSoNhap.length;index++){
        var x= arrSoNhap[index]
        var uoc = 0;
        for(var soChay = 0;soChay<=x;soChay++){
            if(arrSoNhap[index]%soChay===0){
                uoc+=1;
            }      
    }
    if(uoc===2){
        arrSoNguyenTo.push(arrSoNhap[index]);
    }
   }if(arrSoNguyenTo.length ===0) {
    document.getElementById('hien-thi-so-nguyen-to-dau-tien').innerHTML = `Mảng không có số nguyên tố `;
   }else {
       document.getElementById('hien-thi-so-nguyen-to-dau-tien').innerHTML = `Số nguyên tố đầu tiên: ${arrSoNguyenTo[0]} `;
   }
}

// 9. Đếm số lượng số nguyên

document.getElementById('btnDemSoNguyen').onclick = function(){
    var soLuongSoNguyen = 0;
    for(var index=0; index<arrSoNhap.length;index++) {
        if(Number.isInteger(arrSoNhap[index])){
            soLuongSoNguyen++;
        }
    }
    document.getElementById('hien-thi-dem-so-nguyen').innerHTML = `Số lượng số nguyên: ${soLuongSoNguyen} `;

}

// 10. So Sánh số âm- dương

document.getElementById('btnSoSanhAmDuong').onclick = function() {
    var soLuongSoDuong = 0;
    var soLuongSoAm = 0;
    for(var index=0; index<arrSoNhap.length;index++) {
        if(arrSoNhap[index] > 0 ) {
            soLuongSoDuong++
        }else if (arrSoNhap[index] < 0) {
            soLuongSoAm++
        }     
    }
    if(soLuongSoDuong >soLuongSoAm) {
        document.getElementById('hien-thi-so-sanh-am-duong').innerHTML = `Số dương > Số âm`;
    }if(soLuongSoDuong <soLuongSoAm) {
        document.getElementById('hien-thi-so-sanh-am-duong').innerHTML = `Số dương < Số âm`;
    }if(soLuongSoDuong ===soLuongSoAm) {
        document.getElementById('hien-thi-so-sanh-am-duong').innerHTML = `Số dương = Số âm`;

    }

    

}

