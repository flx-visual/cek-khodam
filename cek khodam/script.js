document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        addKhodamToTable(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'BADUT TERSAKITI', image: 'assets/BADUT TERSAKITI.jpg'},
    {name: 'EL MANUK', image: 'assets/EL MANUK.jpg'},
    {name: 'HARIMAU SIGMA', image: 'assets/HARIMAU SIGMA.jpg'},
    {name: 'IKAN LELE', image: 'assets/IKAN LELE.jpg'},
    {name: 'ROGER SUMATERA', image: 'assets/SUMATRA.jpg'},
    {name: 'THANOS RACING', image: 'assets/THANOS RACING.jpg'},
    {name: 'AGUNG JAMSUT', image: 'assets/AGUNG.jpg'},
    {name: 'DEWA GACOR', Video: 'assets/raja slot.jp'}
];

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

function getKhodamByName(name) {
    const index = Math.abs(hashCode(name)) % khodams.length;
    return khodams[index];
}

function addKhodamToTable(name) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const khodam = getKhodamByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = khodam.image;
    image.alt = khodam.name;
    image.style.width = '250px';
    imageCell.appendChild(image);

    const khodamNameCell = document.createElement('td');
    khodamNameCell.textContent = khodam.name;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(khodamNameCell);
    tableBody.insertBefore(row, tableBody.firstChild);
}