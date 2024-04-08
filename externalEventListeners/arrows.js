document.querySelector('.arrow-additional-hardware').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.remove('hide');
    document.querySelector('.arrow-right').classList.remove('hide')
    document.querySelector('.arrow-left').classList.add('hide')
})
document.querySelector('.arrow-right').addEventListener('click', (e)=>{
    document.querySelector('.div-for-extra-hardware').classList.add('hide');
    document.querySelector('.arrow-right').classList.add('hide')
    document.querySelector('.arrow-left').classList.remove('hide')
})
