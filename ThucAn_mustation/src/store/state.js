const state = {
    //Nơi lưu trữ các trạng thái của ứng dụng
    status: 'Lean Vuex in Vue3',
    products: [
        {
            id: 1,
            name: 'Pork Sandwich',
            image: require('@/assets/food_menu/single_food_1.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 20,
            quantity:4
        },
        {
            id: 2,
            name: 'Roasted Marrow',
            image: require('@/assets/food_menu/single_food_2.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 60,
            quantity:4
        },
        {
            id: 3,
            name: 'Summer Cooking',
            image: require('@/assets/food_menu/single_food_3.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 90,
        },
        {
            id: 4,
            name: 'Easter Delight',
            image: require('@/assets/food_menu/single_food_4.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 140,
            quantity:4
        },
        {
            id: 5,
            name: 'Tiener Schnitze',
            image: require('@/assets/food_menu/single_food_5.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 20,
            quantity:4
        },
        {
            id: 6,
            name: 'Chicken Roast',
            image: require('@/assets/food_menu/single_food_6.png'),
            description: 'They are wherein heaven seed hath nothing',
            price: 940,
            quantity:4
        },
    ],

    // products: [],
    cart: [],
    searchValue: '',
}

export default state
