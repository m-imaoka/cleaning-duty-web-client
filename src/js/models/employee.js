import m from "mithril";

class Employee {
  constructor(data) {
    this.name = m.prop(data.name);
    this.sex = m.prop(data.sex);
  };

  static get(id) { 
    return m.request({ method: "GET", url: "http://192.168.56.10:3000/employees/" + id, type: Employee });
  };
};

module.exports = Employee;
