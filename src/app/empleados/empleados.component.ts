import { Component, OnInit } from "@angular/core";
import { Emp } from "../emp";
import { EmpService } from "../emp.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",
  styleUrls: ["./empleados.component.css"]
})
export class EmpleadosComponent implements OnInit {
  empleados: Emp[];
  empleadosApi = null;
  empTmp: any;

  constructor(
    private empService: EmpService,
    private messageService: MessageService
  ) {}


  getEmpleadosApi() {
    this.empService.getEmpleadosApi().subscribe(empleados => {
      this.empleadosApi = empleados;
      this.empleados = this.empleadosApi;
    });
  }

  delete(emp: Emp): void {
    this.empleados = this.empleados.filter(e => e !== emp);
    this.empService.deleteEmp(emp).subscribe();
  }

  add(nombreP: string, sueldoP: string, departamentoP: string, emailP: string, calleP: string, localidadP: string, fecha_nP: string, telefonoP: string, fecha_cP: string): void {
    const nombreV = nombreP.trim();
    const sueldoV = parseInt(sueldoP);
    const departamentoV = departamentoP.trim();
    const emailV = emailP.trim();
    const calleV = calleP.trim();
    const localidadV = localidadP.trim();
    const fecha_nV = new Date(fecha_nP);
    const telefonoV = parseInt(telefonoP);
    const fecha_cV = new Date(fecha_cP);

    if (!nombreP) {
      return;
    }
    const newDoc: any = {
      nombre: nombreV,
      sueldo: sueldoV,
      departamento: departamentoV,
      email: emailV,
      calle: calleV,
      localidad: localidadV,
      fecha_n: fecha_nV,
      telefono: telefonoV,
      fecha_c: fecha_cV
    };
    this.empService.addEmp(newDoc).subscribe(emp => {
      this.empTmp = emp;
      this.empleados.push(this.empTmp);
    });
  }

  ngOnInit() {
    this.getEmpleadosApi();
  }
}
