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
        let inputOneCountry = $("#oneCountry").val();
        console.log(inputOneCountry);
        if (inputOneCountry.length === 0) {
            getAllCountries();
        } else {
            getOneCountry(inputOneCountry);
        }
    })
})


let endPoint = "";
function getOneCountry(countryName) {
    if ($("#countryName").is(":checked")) {
    endPoint = 'https://restcountries.com/v3.1/name/' 
    } else if ($("#countryCapital").is(":checked")) {
    endPoint = 'https://restcountries.com/v3.1/capital/'
    }
    $.ajax({
        url: `${endPoint}${countryName}`,
        success: function(data, statuts, response) {
            console.log("data", data);
            let dataOneCountry = `<li> ${data[0].name.common} - ${data[0].capital} - ${data[0].region} </li>`
            $("#countryList").html(dataOneCountry)
        }
    })
}

$(() => {
    $("#countryName").click(() => {
        getOneCountry();
    })
})

function capitalCountrySearch () {
    
}