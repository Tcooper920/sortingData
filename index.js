// "Database" of employees (Profit Centers)
const employeeList = 
{"employees":[  
    {"name":"Able", "email":"Able@gmail.com", "service":"Showroom", "website":"www.able.com"}, 
    {"name":"AllTex", "email":"Tex@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.AllTex.com"},  
    {"name":"Apex", "email":"Apex@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.apex.com"},  
    {"name":"The Bath Showcase", "email":"BathShowcase@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.bathshowcase.net"},  
    {"name":"Blodgett Supply", "email":"Blodgett@gmail.com", "service":"Bathroom, Kitchen", "website":"www.blodgettsupply.com"},  
    {"name":"Center State", "email":"CenterState@gmail.com", "service":"HVAC", "website":"www.centerstate.com"},  
    {"name":"Conestoga", "email":"Conestoga@gmail.com", "service":"HVAC, Kitchen", "website":"www.conestoga.net"},  
    {"name":"Covenant Plumbing Supply", "email":"Covenant@gmail.com", "service":"Bathroom, Kitchen", "website":"www.covenantsupply.com"},  
    {"name":"Cowan", "email":"Cowan@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.cowan.com"},  
    {"name":"Dahl", "email":"Dahl@gmail.com", "service":"Bathroom", "website":"www.dahl.com"},  
    {"name":"Decker", "email":"Decker@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.decker.com"},  
    {"name":"EPSCO", "email":"EPSCO@gmail.com", "service":"HVAC, Kitchen", "website":"www.epsco.com"},  
    {"name":"European", "email":"European@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.european.com"},  
    {"name":"Facets", "email":"Facets@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.facets.com"},  
    {"name":"GPS", "email":"Gloucester@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.gps.com"},  
    {"name":"Gorman Company", "email":"Gorman@gmail.com", "service":"Bathroom, HVAC", "website":"www.gormancompany.com"},  
    {"name":"Gorman Co.", "email":"GormanCo@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.gormanco.com"},  
    {"name":"H2O Kitchen & Bath", "email":"H2O@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.h2okitchenandbath.net"},  
    {"name":"Hajoca", "email":"Hajoca@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.hajoca.com"},  
    {"name":"Heieck Supply", "email":"Heieck@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.heiecksupply.com"},   
    {"name":"HJC", "email":"HainesJonesCadbury@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.hjc.com"},  
    {"name":"Hughes", "email":"Hughes@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.hughes.net"},  
    {"name":"Inland Supply", "email":"Inland@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.inlandsupply.com"},  
    {"name":"Modern Supply", "email":"MS@gmail.com", "service":"HVAC, Kitchen", "website":"www.ModernSupply.com"},
    {"name":"NB", "email":"NewBritain@gmail.com", "service":"Showroom", "website":"www.NewBritain.com"},  
    {"name":"Penstan", "email":"Penstan@gmail.com", "service":"Bathroom, HVAC, Kitchen, Showroom", "website":"www.Penstan.com"},  
    {"name":"Penstan HVAC", "email":"PHVAC@gmail.com", "service":"HVAC", "website":"www.PenstanHVAC.com"},  
    {"name":"RAM", "email":"RAM@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.RAM.com"},  
    {"name":"Richards", "email":"Richards@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.richards.com"},
    {"name":"Rohaco", "email":"Rohaco@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.rohaco.net"},
    {"name":"Sandale", "email":"Sandale@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.Sandale.com"},
    {"name":"Solutions", "email":"Solutions@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.Solutions.net"},
    {"name":"Weinstein", "email":"Wein@gmail.com", "service":"Showroom", "website":"www.weinstein.com"},
    {"name":"Weinstein Supply", "email":"WSupply@gmail.com", "service":"Bathroom, HVAC", "website":"www.WeinsteinSupply.com"},
    {"name":"Welker McKee", "email":"WM@gmail.com", "service":"Bathroom, HVAC, Kitchen", "website":"www.WelkerMcKee.com"},
]};

// Variables
const employeeListContainer = document.getElementById("employee-list-container");
const searchBar = document.getElementById("search-bar");
const alphabeticalByNameRadioButton = document.getElementById("alphabetical-name");
const alphabeticalByEmailRadioButton = document.getElementById("alphabetical-email");

// Print employees to page
const printEmployeesToPage = (employeeListArray) => {
    employeeListContainer.innerHTML = "";
	employeeListArray.forEach((element) => {
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<p class="employee-container"><strong class="container-labels">Name:</strong> ${element.name}<br>
                            <strong class="container-labels">Email:</strong> ${element.email}<br>
                            <strong class="container-labels">Services Provided:</strong> ${element.service}<br>
                            <strong class="container-labels">Website:</strong> <a href="#" target="_blank">${element.website}</a><p>`;
		employeeListContainer.append(newDiv);
	});
}

printEmployeesToPage(employeeList.employees);

// Filter by search bar value and print to page (in alphabetical order by name)
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const filteredData = employeeList.employees.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(searchString.toLowerCase()) || 
            employee.email.toLowerCase().includes(searchString.toLowerCase())
        )
    }).sort((a, b) => {
        let employeeNameA = a.name.toUpperCase();
        let employeeNameB = b.name.toUpperCase();
        return (employeeNameA < employeeNameB ) ? -1 : (employeeNameA > employeeNameB) ? 1 : 0;
    }); 
    printEmployeesToPage(filteredData);
});

// Sort Alphabetically by Name
alphabeticalByNameRadioButton.addEventListener("click", () => {
    if (alphabeticalByNameRadioButton.checked) {
        searchBar.value = "";
        employeeList.employees.sort((a, b) => {
            let employeeNameA = a.name.toUpperCase();
            let employeeNameB = b.name.toUpperCase();
            return (employeeNameA < employeeNameB ) ? -1 : (employeeNameA > employeeNameB) ? 1 : 0;
        }); 
        printEmployeesToPage(employeeList.employees);
    }
});

// Sort Alphabetically by Email
alphabeticalByEmailRadioButton.addEventListener("click", () => {
    if (alphabeticalByEmailRadioButton.checked) {
        searchBar.value = "";
        employeeList.employees.sort((a, b) => {
            let employeeEmailA = a.email.toUpperCase();
            let employeeEmailB = b.email.toUpperCase();
            return (employeeEmailA < employeeEmailB ) ? -1 : (employeeEmailA > employeeEmailB) ? 1 : 0;
        });
        printEmployeesToPage(employeeList.employees);
    }
});

// Filter by Service (in alphabetical order by name)
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("service")) {
        searchBar.value = "";
        const searchString = e.target.value;
        const filteredByServiceData = employeeList.employees.filter((employee) => {
            return (
                employee.service.includes(searchString)
            )
        }).sort((a, b) => {
            let employeeNameA = a.name.toUpperCase();
            let employeeNameB = b.name.toUpperCase();
            return (employeeNameA < employeeNameB ) ? -1 : (employeeNameA > employeeNameB) ? 1 : 0;
        }); 
        printEmployeesToPage(filteredByServiceData);
    }
});