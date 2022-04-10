    const goods = [
        { title: 'Shirt', price: 150, img: "img1" },
        { title: 'Socks', price: 50, img: "img2" },
        { title: 'Jacket', price: 350, img: "img3" },
        { title: 'Shoes', price: 250, img: "img4" },
        ];
        const header = document.querySelector('header');
        const btn = document.querySelector ('.cart-button');
        header.style.border = "1px solid black";
        header.style.height = "50px";
        btn.style.margin = "10px";
        btn.style.border = "none";
        header.style.backgroundColor = "grey"; 
        btn.style.backgroundColor = "orange"; 
        const renderGoodsItem = (title='Здесь Товар', price='Здесь цена', img='Здесь картинка') => {
            
        return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><img src=${img}.jpg width="100"></div>`;
        };
        const renderGoodsList = (list) => {
           
        let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
        
        const listGoods = document.querySelector('.goods-list');

      
        
        listGoods.innerHTML = goodsList.join('');
        listGoods.style.display = "flex";
        
        listGoods.style.marginTop = "10px";
        const listItem = document.querySelectorAll ('.goods-item');
        listGoods.style.justifyContent = "center";
        listGoods.style.flexWrap = "wrap";
        listGoods.style.Width = "150px";
        listItem.forEach(element => {
            
        //    console.dir(listGoods);
            element.style.textAlign = "center";
            element.style.border = "1px solid black";
            element.style.padding = "100px";
            element.style.marginLeft = "10px";
            element.style.marginTop = "10px";
        });
        
        
        }
        renderGoodsList(goods);