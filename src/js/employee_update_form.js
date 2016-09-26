import m from "mithril";
import Employee from "./models/employee";

var submit = function() {
	m.request({ method: "PATCH", url: "http://192.168.56.10:3000/employees/" + m.route.param("id"), data: { name: employee().name(), sex: employee().sex() } });
};

var employee;

var EmployeeUpdateForm = {
	//controller
	controller: function() {
          employee = Employee.get(m.route.param("id"));
	},

	//view
	view: function(ctrl) {
	  return m("div", [
            m("p"),
            m("label", [m("input", { type: "text", name: "name", onchange: m.withAttr("value", employee().name), value: employee().name()}), "Name"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", employee().sex), value: "1", checked: employee().sex() === "1" }), "Men"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", employee().sex), value: "2", checked: employee().sex() === "2" }), "Women"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", employee().sex), value: "3", checked: employee().sex() === "3" }), "Seshimo"]),
			m("button", { onclick: submit }, "ok")
        ]);
	}
};


module.exports = EmployeeUpdateForm;
