const body = document.querySelector('body')
let html_Header = makeHeader();
body.appendChild(html_Header);
let newMainwForm = makeMain();
let form = makeForm()

body.appendChild(form)
body.appendChild(newMainwForm)