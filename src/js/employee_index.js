import m from "mithril";

var Employee = {
        list: () => {
	  return m.request({ method: "GET", url: "http://192.168.56.10:3000/employees" });
        }
};


var EmployeeIndex = {
	//controller
	controller: function() {
          return {
            employees: Employee.list()
          };
        },

	//view
	view: function(ctrl) {
          return m("table", [
            m("thead", m("tr", [m("th", "名前"), m("th", "性別")])),
            m("tbody", ctrl.employees().map((employee) => {
              return m("tr", [m("td", employee.name), m("td", employee.sex)]);
            }))
          ]);
	}
};


module.exports = EmployeeIndex;
