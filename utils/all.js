
const formatDate = date => {
    let dateObj = new Date(date);

    let day = dateObj.getDate().toString().padStart(2, '0');
    let month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Mois commence à 0
    let year = dateObj.getFullYear();
    return  `${day}-${month}-${year}`;
}

export default { formatDate }