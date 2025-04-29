fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o header:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));

fetch('calculator_power.html')
.then(response => response.text())
.then(data => {
    document.getElementById('calculadora-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));

fetch('calculator_savings.html')
.then(response => response.text())
.then(data => {
    document.getElementById('calculadora2-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));

fetch('about.html')
.then(response => response.text())
.then(data => {
    document.getElementById('sobre-container').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar o footer:', error));



