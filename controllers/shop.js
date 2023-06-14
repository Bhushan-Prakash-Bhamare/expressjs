const Product = require('../models/product');
const cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then((products)=> {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>console.log(err));
  
};


exports.getProduct=(req, res, next) => {
  const prodId=req.params.productId;
  Product.findByPk(prodId)
  .then(prod=>{
    res.render('shop/product-detail',{
    product:prod,
    pageTitle:"Product details",
    path:'/products'
    }); 
  }) 
  .catch(err=>console.log(err));    
  };



exports.getIndex = (req, res, next) => {
  Product.findAll().then((rows)=> {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=>console.log(err));
};

exports.getCart = (req, res, next) => {
  cart.getCart(cart=>{
    Product.fetchAll(products=>{
      const cartProducts=[];
      for(let product of products)
      {
        const cartProductData=cart.products.find(p=>p.id===product.id);
        if(cartProductData){
          cartProducts.push({productData:product, qty:cartProductData.qty})
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products:cartProducts
      });
    });
  });  
};

exports.postCart=(req,res,next)=>{
  const prodId=req.body.productId;
  Product.findById(prodId,(product)=>{
    cart.addProduct(prodId,product.price);
  })
  res.redirect('/cart');
}

exports.postCartDeleteProduct=(req, res, next) => {
  const prodId=req.body.productId;
  Product.findById(prodId,product=>{
    cart.deleteProduct(prodId,product.price);
    res.redirect('/cart');
  })
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
