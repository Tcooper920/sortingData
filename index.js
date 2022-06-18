// "Database" of employees (Profit Centers)
const employeeList = 
{"employees":[  
    {"name":"Able", "email":"Able@gmail.com", "service":"Bathroom"}, 
    {"name":"AllTex", "email":"Tex@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Apex", "email":"Apex@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"The Bath Showcase", "email":"BathShowcase@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Blodgett Supply", "email":"Blodgett@gmail.com", "service":"Bathroom, Kitchen"},  
    {"name":"Center State", "email":"CenterState@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Conestoga", "email":"Conestoga@gmail.com", "service":"HVAC, Kitchen"},  
    {"name":"Covenant Plumbing Supply", "email":"Covenant@gmail.com", "service":"Bathroom, Kitchen"},  
    {"name":"Cowan", "email":"Cowan@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Dahl", "email":"Dahl@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Decker", "email":"Decker@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"EPSCO", "email":"EPSCO@gmail.com", "service":"HVAC, Kitchen"},  
    {"name":"European", "email":"European@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Facets", "email":"Facets@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"GPS", "email":"Gloucester@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Gorman Company", "email":"Gorman@gmail.com", "service":"Bathroom, HVAC"},  
    {"name":"Gorman Co.", "email":"GormanCo@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"H2O Kitchen & Bath", "email":"H2O@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Hajoca", "email":"Hajoca@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Heieck Supply", "email":"Heieck@gmail.com", "service":"Bathroom, HVAC, Kitchen"},   
    {"name":"HJC", "email":"HainesJonesCadbury@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Hughes", "email":"Hughes@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Inland Supply", "email":"Inland@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Modern Supply", "email":"MS@gmail.com", "service":"HVAC, Kitchen"},
    {"name":"NB", "email":"NewBritain@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Penstan", "email":"Penstan@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Penstan HVAC", "email":"PHVAC@gmail.com", "service":"HVAC"},  
    {"name":"RAM", "email":"RAM@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Richards", "email":"Richards@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Rohaco", "email":"Rohaco@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Sandale", "email":"Sandale@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Solutions", "email":"Solutions@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Weinstein", "email":"Wein@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Weinstein Supply", "email":"WSupply@gmail.com", "service":"Bathroom, HVAC"},
    {"name":"Welker McKee", "email":"WM@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
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
                            <strong class="container-labels">Services Provided:</strong> ${element.service}<p>`;
		employeeListContainer.append(newDiv);
	});
}

printEmployeesToPage(employeeList.employees);

// Filter by search bar value and print to page (in alphabetical order by name)
searchBar.addEventListener("keyup", (e) => {
    employeeListContainer.innerHTML = "";
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
        employeeListContainer.innerHTML = "";
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