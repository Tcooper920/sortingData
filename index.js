// "Database" of employees
const employeeList = 
{"employees":[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Bob", "email":"bob32@gmail.com", "service":"Bathroom, HVAC, Kitchen"},  
    {"name":"Jai", "email":"jai87@gmail.com", "service":"Bathroom, Kitchen"},
    {"name":"Thomas", "email":"thomas@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Matt", "email":"matt@gmail.com", "service":"Bathroom, HVAC, Kitchen"},
    {"name":"Justin", "email":"justin79@gmail.com", "service":"Bathroom"},
    {"name":"Mac", "email":"mac12@gmail.com", "service":"Bathroom"},
    {"name":"Katie", "email":"C-katie@gmail.com", "service":"Bathroom"},
    {"name":"Rich", "email":"rich70@gmail.com", "service":"Bathroom"},  
    {"name":"Aaron", "email":"Baaron@gmail.com", "service":"Bathroom"}, 
    {"name":"Charlie", "email":"charlie@gmail.com", "service":"HVAC, Kitchen"}, 
    {"name":"Zack", "email":"Azack21@gmail.com", "service":"HVAC, Kitchen"}, 
    {"name":"Timmy", "email":"Timmy@gmail.com", "service":"Kitchen"}, 
    {"name":"Jessica", "email":"jess@gmail.com", "service":"HVAC, Kitchen"}, 
    {"name":"Tim", "email":"Timmy@gmail.com", "service":"Kitchen"}, 
]};

const employeeListContainer = document.getElementById("employee-list-container");
const searchBar = document.getElementById("search-bar");
const alphabeticalByNameRadioButton = document.getElementById("alphabetical-name");
const alphabeticalByEmailRadioButton = document.getElementById("alphabetical-email");
const serviceRadioButton = document.getElementsByClassName("service");

// Print employees to page
const printEmployeesToPage = (employeeListArray) => {
    employeeListContainer.innerHTML = "";
	employeeListArray.forEach((element) => {
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<p class="employee-container"><strong>Name:</strong> ${element.name}<br>
                            <strong>Email:</strong> ${element.email}<br>
                            <strong>Services Provided:</strong> ${element.service}<p>`;
		employeeListContainer.append(newDiv);
	});
}

printEmployeesToPage(employeeList.employees);

// Filter by search bar value and print to page
searchBar.addEventListener("keyup", (e) => {
    employeeListContainer.innerHTML = "";
    const searchString = e.target.value;
    const filteredData = employeeList.employees.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(searchString.toLowerCase()) || 
            employee.email.toLowerCase().includes(searchString.toLowerCase())
        )
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

// Filter by Service
document.addEventListener("click", (e) => {
    if (e.target.name === "service") {
        employeeListContainer.innerHTML = "";
        const searchString = e.target.value;
        const filteredByServiceData = employeeList.employees.filter((employee) => {
            return (
                employee.service.includes(searchString)
            )
        });
        printEmployeesToPage(filteredByServiceData);
    }
});