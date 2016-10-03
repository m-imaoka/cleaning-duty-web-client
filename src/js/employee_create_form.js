import m from "mithril";

var Employee = {
	name: m.prop(),
	sex: m.prop()
};

var submit = function() {
	alert("submit");
	m.request({ method: "POST", url: "http://192.168.56.10:3000/employees", data: { name: Employee.name(), sex: Employee.sex() } });
};

var EmployeeCreateForm = {
	//controller
	controller: function() {
		Employee.name("aoki");
		Employee.sex("3");
	},

	//view
	view: function(ctrl) {
		return [m("div", [
            m("p"),
            m("label", [m("input", { type: "text", name: "name", onchange: m.withAttr("value", Employee.name), value: Employee.name()}), "Name"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", Employee.sex), value: "1", checked: Employee.sex() === "1" }), "Men"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", Employee.sex), value: "2", checked: Employee.sex() === "2" }), "Women"]),
            m("label", [m("input", { type: "radio", name: "sex", onchange: m.withAttr("value", Employee.sex), value: "3", checked: Employee.sex() === "3" }), "Seshimo"]),
			m("button", { onclick: submit }, "ok")
        ]),m("button", { onclick: () => {m.route("/");}}, "戻る")];
	}
};


module.exports = EmployeeCreateForm;
