const body = document.querySelector('body')
//returning the html from components
let html_Header = makeHeader();
let form = makeForm();
let newMain = makeMainChoices();
//appending the html components to the root (body in this case)
body.appendChild(html_Header);
body.appendChild(form);
body.appendChild(newMain);