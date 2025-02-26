const ProductList = ({ productArray }) => {
  return (
    <>
    {productArray.map((product)=>(
      <div className="productSection">
        <div className="productImgSection">
          <picture className="productImage">
            <source media="(max-width: 480)" srcSet={product.imgMobile}/>
            <source media="(min-width: 481)" srcSet={product.imgTablet}/>
            <source media="(min-width: 1024)" srcSet={product.imgDesktop}/>
            <img src={product.imgDesktop}/>
            {/* <img src={product.imgMobile}/> */}
          </picture>
          <button></button>
        </div>
        <p className="productType">{product.type}</p>
        <h3 className="productName">{product.name}</h3>
        <p className="productPrice">{product.price}</p>
      </div>
    ))}
    </>
  )
};

export default ProductList;
// mobile max 480px 
// tablet min 481px  max 1024px
// desktop min 1024 