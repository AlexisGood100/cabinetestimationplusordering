function makeMainChoices(){
    let main = document.createElement('main');
    main.classList.add('main-section')
    console.log(main)
    let h1_main = document.createElement('h1');
    h1_main.innerText = 'Extra Work Section'
    main.appendChild(h1_main);
    return main; // Return the created main element
}