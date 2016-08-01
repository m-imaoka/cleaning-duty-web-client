import m from "mithril";
import EmployeeCreateForm from "./employee_create_form";
import EmployeeIndex from "./employee_index";

m.route(document.body, "/", {
  "/": EmployeeIndex,
  "/form": EmployeeCreateForm
});
