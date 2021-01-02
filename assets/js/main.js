//Building a To Do List App.

const btnAdd = document.querySelector('#btnAdd');
const inputTarefa = document.querySelector('.inputTarefa');
const list = document.querySelector('.list');

createLi = () => {
    const li = document.createElement('li');
    return li;
}

createTarefa = (text) => {
    const li = createLi();
    li.innerText = text;
    list.appendChild(li)
    cleanInput();
    createBtnDone(li);
    createBtnApaga(li);
}

cleanInput = () => {
    inputTarefa.value = '';
    inputTarefa.focus();
}

createBtnApaga = (li) => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-times"></i>';
    li.appendChild(btn);
    apaga(btn);
}

createBtnDone = (li) => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    li.appendChild(btn);
    done(btn);
}

apaga = (btn) => {
    btn.addEventListener('click',function(){
        btn.parentElement.remove();
        btn.parentElement.classList.remove('done')
    })
}

done = (btn) => {
    btn.addEventListener('click',function(){
        btn.parentElement.classList.add('done')
    })
}

btnAdd.addEventListener('click',function(){
    if(!inputTarefa.value) return;
    createTarefa(inputTarefa.value);

})

inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        createTarefa(inputTarefa.value);
        
    }
})


