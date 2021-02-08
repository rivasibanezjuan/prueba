import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { EmpService } from "../emp.service";


@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column"
    },
    title: {
        text: 'Sueldos mensuales'
    },
    subtitle: {
        text: 'Fuente: Departamento de finanzas'
    },
    xAxis: {
      categories: []
    },

    series: [
      {
        name:"Sueldo mensual",
        type: "column",
        data: []
      }
    ],
     yAxis: {
        min: 0,
        title: {
            text: 'Sueldo(euros/mes)'
        }
    },
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
    this.getMisDatos()
  }

  getMisDatos() {
    this.empService.getEmpleadosApi().subscribe(
      result => {
        const misDatos: any = result;
        const dataSeries = misDatos.map((x: any) => x.sueldo);
        const dataCategorias = misDatos.map((x: any) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico01", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
