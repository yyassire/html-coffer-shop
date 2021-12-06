let navbar = document.querySelector('.navbar');
const moreBtn = document.querySelector(".more")
const about = document.querySelector(".about")
const item = document.getElementById("hide-item")
const submit = document.querySelector(".submit")


submit.addEventListener("click", () => {
        return alert("this functionality is not add yet")
    })
    // _______events______
moreBtn.addEventListener("click", (e) => {
        const text = moreBtn.textContent
        if (text === "learn more") {
            moreBtn.innerText = "show less";
            item.classList.remove("hide")
        } else {
            moreBtn.innerText = "learn more";
            item.classList.add("hide")

        }
    })
    // toggle menu
document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }
    // toggle search
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }
    // purchaged cart items
let cartItem = document.querySelector('.cart-items-container');
const cartIcon = document.querySelector("#cart-btn")
cartIcon.addEventListener("click", () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
})

document.querySelector('.cart-number').onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }
    //   scroll functionalities
window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }
    // dynamic menu loading
const products = [{
        name: "AFFOGATO",
        price: 19.99,
        previousPrice: 20.99,
        img: "images/menu-1.png"
    },
    {
        name: "AMERICANO",
        price: 16.99,
        previousPrice: 18.50,
        img: "images/menu-2.png"
    },
    {
        name: "CAFFÈ LATTE",
        price: 29.99,
        previousPrice: 30.00,
        img: "images/menu-3.png"
    },
    {
        name: "CAFFÈ MOCHA",
        price: 30.99,
        previousPrice: 50.50,
        img: "images/menu-4.png"
    },
    {
        name: "CAFÈ AU LAIT",
        price: 09.99,
        previousPrice: 10.00,
        img: "images/menu-5.png"
    },
    {
        name: "CAPPUCCINO",
        price: 22.00,
        previousPrice: 23.00,
        img: "images/menu-6.png"
    },
]
let addProducts = []
const cartContainer = document.querySelector(".box-container")
window.addEventListener('DOMContentLoaded', () => {
    loading(products);
    const carts = document.querySelectorAll(".box")
    addCart(carts);
});

// _____functionalities______

// added carts 
const purchagedCarts = (addProducts) => {
        const container = addProducts.map((item) => {
            return `
       <div class="cart-item">
                <span class="fas fa-times  delete"></span>
                <img src=${item.img} alt="">
                <div class="content">
                    <h3>c${item.name}</h3>
                    <div class="price">$ ${item.price}</div>
                </div>
            </div>
       `
        }).join("")

        return container
    }
    // load products
const loading = (products) => {
        const productsTag = products.map((product) => {
            return `
        <div class="box">
        <img src=${product.img} alt=${product.name}>
        <h3>${product.name}</h3>
        <div class="price">$ ${product.price} <span>${product.previousPrice}</span></div>
        <button type="button" class="btn">add to cart</button>
    </div>
        `
        }).join("")
        cartContainer.innerHTML = productsTag;

    }
    // remove item from cart
const removeItem = (btnDelete) => {
        return btnDelete.forEach((element, i) => {
            element.addEventListener("click", () => {
                const cart = addProducts[i]
                addProducts.splice(addProducts.indexOf(cart), 1)
                const tag = element.parentElement
                cartItem.removeChild(tag)
                document.querySelector(".cart-number").innerText = addProducts.length

            })
        });
    }
    // not finished alert
const notFinished = () => {
    return document.querySelector(".btn").addEventListener("click", () => {
        return alert("this functionality is not added yet")
    })
}


const addCart = (carts) => {
    carts.forEach((cart, i) => {
        return cart.addEventListener("click", () => {
            addProducts.push(products[i])
            document.querySelector(".cart-number").innerText = addProducts.length
            let cartItem = document.querySelector('.cart-items-container');
            const myButton = `
            <button type="button" class="btn">checkout now</button>

            `
            cartItem.innerHTML = purchagedCarts(addProducts) + myButton

            notFinished()
            const btnDelete = document.querySelectorAll(".delete")
            removeItem(btnDelete)
        })
    })
}