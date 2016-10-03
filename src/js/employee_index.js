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
          return [m("table", [
            m("thead", m("tr", [m("th", "名前"), m("th", "性別")])),
            m("tbody", ctrl.employees().map((employee) => {
              return m("tr", [
                m("td", employee.name),
                m("td", employee.sex),
                m("td", m("a", { onclick: () => { m.route("/" + employee.id + "/edit") } }, "edit")),
                m("td", m("button", { onclick: () => { m.request({ method: "DELETE", url: "http://192.168.56.10:3000/employees/" + employee.id }) } }, "削除"))
	      ]);
            }))
          ]), m("a", {href: "/form",  config: m.route}, "新規作成")];
	}
};


module.exports = EmployeeIndex;
