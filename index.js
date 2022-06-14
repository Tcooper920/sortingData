// "Database" of employees
const employeeList = 
{"employees":[  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"},
    {"name":"Thomas", "email":"thomas@gmail.com"},
    {"name":"Matt", "email":"matt@gmail.com"},
    {"name":"Justin", "email":"justin79@gmail.com"},
    {"name":"Mac", "email":"mac12@gmail.com"},
    {"name":"Katie", "email":"C-katie@gmail.com"},
    {"name":"Rich", "email":"rich70@gmail.com"},  
    {"name":"Aaron", "email":"Baaron@gmail.com"}, 
    {"name":"Charlie", "email":"charlie@gmail.com"}, 
    {"name":"Zack", "email":"Azack21@gmail.com"}, 
    {"name":"Timmy", "email":"Timmy@gmail.com"}, 
    {"name":"Jessica", "email":"jess@gmail.com"}, 
    {"name":"Tim", "email":"Timmy@gmail.com"}, 
]};

const employeeListContainer = document.getElementById("employee-list-container");
const searchBar = document.getElementById("search-bar");
const alphabeticalByNameRadioButton = document.getElementById("alphabetical-name");
const alphabeticalByEmailRadioButton = document.getElementById("alphabetical-email");

// Print employees to page
const printEmployeesToPage = () => {
    employeeListContainer.innerHTML = "";
	employeeList.employees.forEach(element => {
		const newDiv = document.createElement("div");
		newDiv.innerHTML = `<p><strong>Name:</strong> ${element.name}<br><strong>Email:</strong> ${element.email}<p>`;
		employeeListContainer.append(newDiv);
	});
}

printEmployeesToPage();

// Filter by search bar value and print to page
searchBar.addEventListener("keyup", (e) => {
    employeeListContainer.innerHTML = "";
    const searchString = e.target.value;
    const filterData = employeeList.employees.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(searchString.toLowerCase()) || 
            employee.email.toLowerCase().includes(searchString.toLowerCase())
        );
    }).forEach((result) => {
        const newDiv = document.createElement("div");
		newDiv.innerHTML = `<p><strong>Name:</strong> ${result.name}<br><strong>Email:</strong> ${result.email}<p>`;
		employeeListContainer.append(newDiv);
    });
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
        printEmployeesToPage();
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
        printEmployeesToPage();
    }
});