import m from "mithril";
import EmployeeForm from "./employee_form";
import EmployeeIndex from "./employee_index";

m.route(document.body, "/", {
  "/": EmployeeIndex,
  "/form": EmployeeForm
});
