const getters = {
    
    
    filterProduct(state){
        let searchString = state.searchValue;
		let articles_arr = state.products;
        if (!searchString) {
            return articles_arr
        } else {
            const filterName = articles_arr.filter(item =>
                item.name
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
            )
            if (filterName.length == 0) {
                return articles_arr.filter(
                    item => item.price == searchString
                )
            } else {
               // console.log(filterName)
                return filterName
            }
        }
    },
    subTotal(state) {
        return state.cart.reduce((total, item) => {
            return total + item.price * item.quantily
        }, 0)
    },
    
}

export default getters
