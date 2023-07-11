function kirim(){
    var id_name = document.getElementById("name")
    var id_nim = document.getElementById("nim")
    var id_prodi = document.getElementById("prodi")
    var id_tampil = document.getElementById("tampil")
    id_tampil.innerText = id_name.value + ", " + id_nim.value +", " + id_prodi.value
}