document.querySelector(".btn").onclick = function(){
    let p = document.querySelector(".text-prize")
    let usercode = document.querySelector(".input").value
    let code = "hp2023"
    if(usercode === code){
        p.innerHTML = "Мама, поздравляю тебя с 2023 годом и дарю тебе к мини подарку дополнительных 25 евро с моего счёта!)"

    }
    else{
        p.classList.add("no")
        p.innerHTML = "Неверный код"
    }
}