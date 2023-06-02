import "./category-item.styles.scss"

const CategoryItem = ({ category }) => {

    const {imageUrl, title } = category;


    return(
        <section className='category-container'>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </section> 
    )

}

export default CategoryItem;
