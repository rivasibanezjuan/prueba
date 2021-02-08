import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { EmpService } from "../emp.service";

@Component({
  selector: "app-grafico03",
  templateUrl: "./grafico03.component.html",
  styleUrls: ["./grafico03.component.css"]
})
export class Grafico03Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gasto mensual por departamento'
    },
    subtitle: {
        text: 'Fuente: Departamento de finanzas'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
xAxis: {
        title: {
            text: 'Departamentos'
        },
        categories: []
    },
    yAxis: {
        title: {
            text: 'Gasto (euros/mes)'
        }

    },
        plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
        legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [
      {
        name:"Gasto",
        type: "column",
        colorByPoint: true,
        data: []
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
        const dataCategorias = misDatos.map((x: any) => x.departamento);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("miGrafico03", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}