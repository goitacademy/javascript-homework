const counterValue = {
    
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
     
    },
};

const refs = {
    clickIncrement: document.querySelector ('[data-action="increment"]'),
    clickDecrement: document.querySelector ('[data-action="decrement"]'),
    valueEl: document.querySelector ('[id="value"]'),

    };
    
refs.clickIncrement.addEventListener ('click', onClickIncrement);
function onClickIncrement(){
    counterValue.increment();
    refs.valueEl.textContent = counterValue.value;
}
refs.clickDecrement.addEventListener('click', onClickDecrement);
function onClickDecrement(){
    counterValue.decrement();
    refs.valueEl.textContent = counterValue.value;
}