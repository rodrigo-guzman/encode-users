import { Component, OnInit } from '@angular/core';
import { actividad } from 'src/app/models/actividad';
import { actividadService } from 'src/app/services/actividad.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  actividad: actividad = new actividad();
  datatable: any = [];

  constructor(private actividadService: actividadService) { }

  ngOnInit(): void {
    this.onDataTable()
  }

  onDataTable() {
    this.actividadService.getActividades().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onSetData(select: any) {
    this.actividad.idActividad = select.idActividad;
    this.actividad.createDate = select.createDate;
    this.actividad.idUsuario = select.idUsuario;
    this.actividad.actividad = select.actividad;
  }
}
