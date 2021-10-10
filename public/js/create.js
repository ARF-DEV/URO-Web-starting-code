
//Menambahkan EventListener untuk Onclick Event
document.getElementById('btn-submit').addEventListener('click' , (event) => {

    const name = document.getElementById('name');
    const nim = document.getElementById('nim');
    const prodi = document.getElementById('prodi');
    const data = {name: name.value, nim: nim.value, prodi: prodi.value};
    console.log('P');

    //Mengirim POST request ke alamat api/add
    fetch('api/add', {
        method:"POST",
            headers:{
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(data),
        })
        .then( res => {
            if (res.ok)
            {
                console.log(`User Added`);
                name.value = '';
                nim.value = '';
                prodi.value = '';
            }
            else
            {
                console.log('ERROR failed to create');
            }
        });
    });