import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Emp } from "./emp";

@Injectable({
  providedIn: "root"
})
export class EmpService {
  private url = "https://5fe06a8704f0780017de8b2c.mockapi.io/empleados1";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getEmpleadosApi() {
    this.messageService.add("Cargamos los documentos");
    return this.http.get(this.url);
  }

  updateEmp(doc: any) {
    console.log("en update")
    console.log(doc)
    const urlId = `${this.url}/${doc.id}`;
    return this.http.put(urlId, doc);
  }

  deleteEmp(emp: Emp) {
    const urlId = `${this.url}/${emp.id}`;
    return this.http.delete(urlId);
  }
  addEmp(doc: any) {
    return this.http.post(this.url, doc);
  }

  getEmp(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.get(url);
  }


}
