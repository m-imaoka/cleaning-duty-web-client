import m from "mithril";

var EmployeeForm = {
	//controller
	controller: function() {
	},

	//view
	view: function(ctrl) {
		return m("form", [
            m("p"),
            m("label", [m("input", { type: "text", name: "name"}), "Name"]),
            m("label", [m("input", { type: "radio", name: "sex", value: "1" }), "Men"]),
            m("label", [m("input", { type: "radio", name: "sex", value: "2" }), "Women"]),
            m("label", [m("input", { type: "radio", name: "sex", value: "3" }), "Seshimo"])
        ]);
	}
};


//初期化
m.mount(document.getElementById("content"), EmployeeForm);