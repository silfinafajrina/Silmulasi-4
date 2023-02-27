const persegipanjangForm = document.getElementById("persegipanjangForm");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const tampil = document.getElementById("tampilContainer");

const hasilpersegipanjang = JSON.parse(localStorage.getItem("persegipanjang")) || [];

const addPersegipanjang = (panjang, lebar, hasil ) =>{
    hasilpersegipanjang.push({
        panjang,
        lebar,
        hasil
    });

    localStorage.setItem("persegipanjang", JSON.stringify(hasilpersegipanjang));

    return{panjang, lebar, hasil};

}

const buatPersegipanjang = ({panjang, lebar, hasil}) => {

    const divPersegipanjang = document.createElement("div");
    const panjang1 = document.createElement("p");
    const lebar1 = document.createElement("p");
    const hasil1 = document.createElement("h2");
    const hr = document.createElement("hr")

    panjang1.innerHTML ="panjang : " + panjang;
    lebar1.innerHTML = "lebar : " + lebar;
    hasil1.innerHTML = "Luas persegipanjang : " + hasil;

    divPersegipanjang.append(panjang1, lebar1, hasil1, hr);
    tampil.appendChild(divPersegipanjang);

};
 
hasilpersegipanjang.forEach(buatPersegipanjang);

persegipanjangForm.onsubmit = e => {
    e.preventDefault();

    const vPanjang = panjang. value;
    const vLebar = lebar.value;
    const Luas = (vPanjang*vLebar);

    const persegipanjangBaru = addPersegipanjang(
        vPanjang,
        vLebar,
        Luas
    );
    buatPersegipanjang(persegipanjangBaru);

    panjang.value = "";
    lebar.value = "";


};
