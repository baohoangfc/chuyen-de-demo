var initialState = [
    {
        id : 1,
        name : "Iphone 6",
        price : 20,
        status : true
    },
    {
        id : 2,
        name : "Iphone 7",
        price : 30,
        status : false
    },
    {
        id : 3,
        name : "Iphone 8",
        price : 20,
        status : true
    },
    {
        id : 4,
        name : "Iphone X",
        price : 650,
        status : false
    },
    {
        id : 5,
        name : "Iphone XS MAX",
        price : 1000,
        status : true
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;