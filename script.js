let liczba = 0;
let mnoznik = 1;
const guzik = document.getElementById("guzik");


function setWynik() {
    document.getElementById("wynik").textContent = liczba;
    document.getElementById("mnoznik").textContent = mnoznik;
}
setWynik();


function klik() {
    liczba += 1*mnoznik;
    liczba = Math.round(liczba * 10) / 10;
    mnoznik = Math.round(mnoznik * 10) / 10;


    if (liczba == 100) {
       mnoznik = 1.2;
    }

    if (liczba == 500.8) {
       mnoznik = 1.4;
    }

    if (liczba == 1000.6) {
       mnoznik = 1.6;
    }

    if (liczba == 2000.6) {
       mnoznik = 1.8;
    }

    if (liczba == 5001.2) {
       mnoznik = 2;
    }

    if (liczba == 10001.2) {
        mnoznik = 2.5;
    }

    if (liczba == 20001.2) {
       mnoznik = 3;
    }



    setWynik();

    
    guzik.classList.add('clicked');

    // Usuń klasę po 0.3s
    setTimeout(() => {
        guzik.classList.remove('clicked');
    }, 300);
};

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !spacePressed) {
        spacePressed = true; // zablokuj kolejne kliknięcia aż do puszczenia
        event.preventDefault();
        klik();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        spacePressed = false; // pozwól na kolejne kliknięcie
    }
});

document.addEventListener('keypress', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
    }
});


document.getElementById("guzik").addEventListener('click', klik)