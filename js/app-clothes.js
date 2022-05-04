$ = document.querySelector.bind(document)

womenClothes = [
    {
        id: 0,
        imageLink: './assets/img/product/dam lead.jpg',
        description: 'Đầm lead xòe sát nách, cổ tim lệch',
        discountPrice: 1080000,
        oldPrice: 1350000
    },
    {
        id: 1,
        imageLink: './assets/img/product/dam maxi dang dai.jpg',
        description: 'Đầm maxi dáng dài, đính hoa trang trí',
        discountPrice: 600000,
        oldPrice: 750000
    },
    {
        id: 2,
        imageLink: './assets/img/product/so mi co kieu Duc.jpg',
        description: 'Áo sơ mi cổ kiểu Đức, nẹp áo dập nhăn trang trí',
        discountPrice: 520000,
        oldPrice: 650000
    },
    {
        id: 3,
        imageLink: './assets/img/product/ao so mi hoa tiet hoa hong.jpg',
        description: 'Áo sơ mi họa tiết hoa hồng, cổ phối màu, buộc nơ',
        discountPrice: 585000,
        oldPrice: 650000
    },
    {
        id: 4,
        imageLink: './assets/img/product/dam xoe hoa tiet hoa hong.jpg',
        description: 'Đầm xòe họa tiết hoa hồng, cổ mở hình chữ V',
        discountPrice: 600000,
        oldPrice: 750000
    },
    {
        id: 5,
        imageLink: './assets/img/product/dam hoa tiet hoa xanh.jpg',
        description: 'Đầm họa tiết hoa xanh, xòe nơ, lệch cổ trang trí',
        discountPrice: 600000,
        oldPrice: 750000
    },
]
// Các biến
const new_ClothesList = $('.new-clothes-list')
var currentIndex = 0
var col1, col2, col3, col4 //4 biến này lưu trữ giá trị tương ứng 4 cột của new-clothes-list

const prev_NewClothes = $('.new-clothes__prev')
const next_NewClothes = $('.new-clothes__next')
const newProduct_Select = document.getElementsByClassName('new-product__select')
// Các phương thức
function add1unit(num) {
    if(num == womenClothes.length -1) {
        return 0;
    } else {
        return (num + 1)
    }
}

function minus1unit(num) {
    if(num == 0) {
        return (womenClothes.length - 1);
    } else {
        return (num - 1)
    }
}

//Hiển thị 4 cột của "Sản phẩm mới"
function showNewClothes(col1, col2, col3, col4) {
    var html = `
    <div class="col-md-3 new-clothes__product">
        <a href="" class="new-clothes__link">
            <img src="${womenClothes[col1].imageLink}" style="max-width: 100%;" alt="">
        </a>
        <div class="row new-clothes__options">
            <a class="col-md-6 options-details" href="">Xem chi tiết</a>
            <a class="col-md-6 options-buy-now" href="">Mua ngay</a>
        </div>
        <div class="new-clothes__sale-off">-20%</div>
        <div class="new-clothes__new-info">MỚI</div>
        <a href="" class="new-clothes__like-item">
            <i class="fa-regular fa-heart"></i>
        </a>
        <div class="new-clothes__info">${womenClothes[col1].description}</div>
        <div class="row new-clothes__price">
            <div class="col-md-6 new-clothes__discount">${womenClothes[col1].discountPrice}</div>
            <div class="col-md-6 new-clothes__old-price">${womenClothes[col1].oldPrice}</div>
        </div>
    </div>
    <div class="col-md-3 new-clothes__product">
        <a href="" class="new-clothes__link">
            <img src="${womenClothes[col2].imageLink}" style="max-width: 100%;" alt="">
        </a>
        <div class="row new-clothes__options">
            <a class="col-md-6 options-details" href="">Xem chi tiết</a>
            <a class="col-md-6 options-buy-now" href="">Mua ngay</a>
        </div>
        <div class="new-clothes__sale-off">-20%</div>
        <div class="new-clothes__new-info">MỚI</div>
        <a href="" class="new-clothes__like-item">
            <i class="fa-regular fa-heart"></i>
        </a>
        <div class="new-clothes__info">${womenClothes[col2].description}</div>
        <div class="row new-clothes__price">
            <div class="col-md-6 new-clothes__discount">${womenClothes[col2].discountPrice}</div>
            <div class="col-md-6 new-clothes__old-price">${womenClothes[col2].oldPrice}</div>
        </div>
    </div>
    <div class="col-md-3 new-clothes__product">
        <a href="" class="new-clothes__link">
            <img src="${womenClothes[col3].imageLink}" style="max-width: 100%;" alt="">
        </a>
        <div class="row new-clothes__options">
            <a class="col-md-6 options-details" href="">Xem chi tiết</a>
            <a class="col-md-6 options-buy-now" href="">Mua ngay</a>
        </div>
        <div class="new-clothes__sale-off">-20%</div>
        <div class="new-clothes__new-info">MỚI</div>
        <a href="" class="new-clothes__like-item">
            <i class="fa-regular fa-heart"></i>
        </a>
        <div class="new-clothes__info">${womenClothes[col3].description}</div>
        <div class="row new-clothes__price">
            <div class="col-md-6 new-clothes__discount">${womenClothes[col3].discountPrice}</div>
            <div class="col-md-6 new-clothes__old-price">${womenClothes[col3].oldPrice}</div>
        </div>
    </div>
    <div class="col-md-3 new-clothes__product">
        <a href="" class="new-clothes__link">
            <img src="${womenClothes[col4].imageLink}" style="max-width: 100%;" alt="">
        </a>
        <div class="row new-clothes__options">
            <a class="col-md-6 options-details" href="">Xem chi tiết</a>
            <a class="col-md-6 options-buy-now" href="">Mua ngay</a>
        </div>
        <div class="new-clothes__sale-off">-10%</div>
        <div class="new-clothes__new-info">MỚI</div>
        <a href="" class="new-clothes__like-item">
            <i class="fa-regular fa-heart"></i>
        </a>
        <div class="new-clothes__info">${womenClothes[col4].description}</div>
        <div class="row new-clothes__price">
            <div class="col-md-6 new-clothes__discount">${womenClothes[col4].discountPrice}</div>
            <div class="col-md-6 new-clothes__old-price">${womenClothes[col4].oldPrice}</div>
        </div>
    </div>
    `
    new_ClothesList.innerHTML = html  
}

//Hiển thị 4 cột của "Sản phẩm mới" khi click "next" ->
function nextNewClothes() {
    next_NewClothes.onclick = function() {
        col1 = add1unit(col1)
        col2 = add1unit(col1)
        col3 = add1unit(col2)
        col4 = add1unit(col3)
        showNewClothes(col1, col2, col3, col4)
    }
}

//Hiển thị 4 cột của "Sản phẩm mới" khi click "previous" <-
function prevNewClothes() {
    prev_NewClothes.onclick = function() {
        col1 = minus1unit(col1)
        col2 = add1unit(col1)
        col3 = add1unit(col2)
        col4 = add1unit(col3)
        showNewClothes(col1, col2, col3, col4)
    }
}


// CHƯƠNG TRÌNH CHÍNH

//Hiển thị 4 cột của Sản Phẩm Mới
col1 = currentIndex
col2 = add1unit(col1)
col3 = add1unit(col2)
col4 = add1unit(col3)
showNewClothes(col1, col2, col3, col4)
nextNewClothes()
prevNewClothes()

//Xử lý 4 tùy chọn: Tất cả, Nữ, Nam, HOT DEAL

// for(let i = 0; i < newProduct_Select.length; i++) {
//     newProduct_Select[i].classList.remove('active')
// }
// newProduct_Select[i].classList.add('active')


