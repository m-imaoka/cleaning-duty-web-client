import m from "mithril";
import EmployeeCreateForm from "./employee_create_form";
import EmployeeIndex from "./employee_index";
import EmployeeUpdateForm from "./employee_update_form";

m.route(document.body, "/", {
  "/": EmployeeIndex,
  "/form": EmployeeCreateForm,
  "/:id/edit" : EmployeeUpdateForm
});
