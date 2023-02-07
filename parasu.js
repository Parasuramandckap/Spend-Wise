let txt = document.getElementById("txt-input")
let amt = document.getElementById("amt-input")
let ul = document.getElementById("list")
let submit_btn = document.getElementById("submit-btn")
let income = document.getElementById("income")
//console.log(income)
let expense = document.getElementById("expenses")
let total = document.getElementById("total")
let submit = document.getElementById("submit-btn")
//console.log(submit)

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (txt.value !== "" && amt.value !== "" && !amt.value.includes("-")) {
        let create_li = document.createElement("li")
        create_li.classList.add("items")
        create_li.innerText = txt.value + amt.value
        create_li.style.color = "green"
        ul.appendChild(create_li)

        let delete_btn = document.createElement("button")
        delete_btn.classList.add("dlt-btn")
        delete_btn.innerText = "X"
        create_li.appendChild(delete_btn)



        total.innerText = Number(total.innerText) + Number(amt.value)
        income.innerText = Number(income.innerText) + Number(amt.value)


        delete_btn.addEventListener("click", (e) => {
            total.innerText = Number(total.innerText) + Number(amt.value)
            income.innerText = Number(income.innerText) + Number(amt.value)
            e.target.parentElement.remove()
        })

    }
    else if (txt.value !== "" && amt.value !== "") {
        let create_li = document.createElement("li")
        create_li.classList.add("items")
        create_li.innerText = txt.value + amt.value
        create_li.style.color = "red"
        ul.appendChild(create_li)

        let delete_btn = document.createElement("button")
        delete_btn.classList.add("dlt-btn")
        delete_btn.innerText = "X"
        create_li.appendChild(delete_btn)



        total.innerText = Number(total.innerText) + Number(amt.value)
        expense.innerText = Number(expense.innerText) + Number(amt.value)


        delete_btn.addEventListener("click", (e) => {
            total.innerText = Number(total.innerText)  - Number(amt.value)
            expense.innerText = Number(expense.innerText) - Number(amt.value)
            e.target.parentElement.remove()

        })


    }
    else {
        alert("can't be added empty value")
    }


})