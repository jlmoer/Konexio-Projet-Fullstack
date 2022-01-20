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

function getOneCountry() {
    $.ajax({
        url: 'https://restcountries.com/v3.1/all',
        success: function(data, statuts, response) {
            console.log(data);
            let dataOneCountry = data.map((country) => {
                return `<li> ${country.name[0].common} </li>`
            })
            $("#countryName").html(dataOneCountry[0].join(""))
        }
    })
}

    