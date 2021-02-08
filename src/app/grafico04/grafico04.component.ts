import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { EmpService } from "../emp.service";

@Component({
  selector: "app-grafico04",
  templateUrl: "./grafico04.component.html",
  styleUrls: ["./grafico04.component.css"]
})
export class Grafico04Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
     chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Gráfica en desarrollo...'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [
      {
        name:"Gasto",
        type: "pie",
        colorByPoint: true,
        data: []
      }
    ],
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
        const dataCategorias = misDatos.map((x: any) => x.departamento);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico04", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}