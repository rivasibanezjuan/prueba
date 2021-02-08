import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { EmpService } from "../emp.service";

@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    xAxis: {
      categories: []
    },

    series: [
      {
        type: "line",
        data: [],
        name: "Sueldo"
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private empService: EmpService) {}

  ngOnInit() {
    this.getMisDatos();
  }

  getMisDatos() {
    this.empService.getEmpleadosApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.sueldo);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico02", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
