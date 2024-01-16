import React from 'react'

const LearnMap2 = () => {
    let products = [
        {
            id: 1,
            title: "MacBook Pro",
            category: "Laptops",
            price: 100000.0,
            description: "A high-performance laptop.",
            manufactureDate: "2023-05-15T08:30:00",
            isAvailable: true,
        },
        {
            id: 2,
            title: "Nike",
            category: "Running Shoes",
            price: 5000,
            description: "Running shoes designed for speed and comfort.",
            manufactureDate: "2023-02-20T14:45:00",
            isAvailable: true,
        },
        {
            id: 3,
            title: "Python",
            category: "Books",
            price: 500,
            description: "A language for AI",
            manufactureDate: "1925-04-10T10:10:00",
            isAvailable: false,
        },
        {
            id: 4,
            title: "Javascript",
            category: "Books",
            price: 700,
            description: "A language for Browser",
            manufactureDate: "1995-12-04T12:00:00",
            isAvailable: false,
        },
        {
            id: 5,
            title: "Dell XPS",
            category: "Laptops",
            price: 120000.0,
            description: "An ultra-slim laptop with powerful performance.",
            manufactureDate: "2023-04-25T09:15:00",
            isAvailable: true,
        },

    ]
    let showProduct = () => {
        let list = products.filter(product => product.title).map((item, i) => {
            return (<div>
                {item.category}
            </div>)
        })
        return list
    }
    let showProduct2 = () => {
        let details = products.map((item, i) => {
            return (<div key={2}>
                The price of {item.title} is NRs.{item.price} and the category is{" "}{item.category}
            </div>)
        })
        return details
    }
    let showProduct3 = () => {
        let list = products.filter(product => product.price > 2000).map((item, i) => {
            return (<div>
                The price of {item.title} is NRs.{item.price} and the category is{" "}{item.category}
            </div>)
        })
        return list
    }
    let showProduct4 = () => {
        let category1 = products.filter(product => product.category === "Laptops").map((item, i) => {
            return (<div>
                {item.category}
            </div>)
        })
        return (
            <div key={3}>
                <h1>The products in our shop are:</h1>
                {showProduct()}
                <h1>The details about the product:</h1>
                {showProduct2()}
                <h1>The details about the product above Rs.2000:</h1>
                {showProduct3()}
                <ul>
                    Laptops
                    <li>{ }</li>
                </ul>
            </div>
        )
    }
}
    export default LearnMap2