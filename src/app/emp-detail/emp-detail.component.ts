import { Component, OnInit, Input } from "@angular/core";
import { Emp } from "../emp";
import { EmpService } from "../emp.service";
import { MessageService } from "../message.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-emp-detail",
  templateUrl: "./emp-detail.component.html",
  styleUrls: ["./emp-detail.component.css"]
})
export class EmpDetailComponent implements OnInit {
  emp: Emp;

  constructor(
    private empService: EmpService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getEmp();
  }
  save(sueldoP: string): void {
    const doc = {
      id: this.emp.id,
      nombre: this.emp.nombre,
      sueldo: parseInt(sueldoP)    
    };
    this.empService
      .updateEmp(doc)
      .subscribe(() => this.goBack());
  }
  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.messageService.add(`EmpleadosComponent: Selected emp id=${id}`);
    this.empService.getEmp(id).subscribe(emp => {
      const empTmp: any = emp;
      this.emp = empTmp;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
