function getAllCountries() {
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        success: function(data, statuts, response) {
            console.log(data);
            let dataCountry = data.map((country) => {
                return `<li> ${country.name.common} </li>`
            })
            $("#countryList").html(dataCountry.join(""))
        }
    });
}
$(() => {
    $("#btnShowData").click(() => {
        getAllCountries();
    })
})

    