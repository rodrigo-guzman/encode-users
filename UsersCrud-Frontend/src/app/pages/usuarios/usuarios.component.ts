import { Component } from '@angular/core';
import { usuario } from '../../models/usuario';
import { usuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuario: usuario = new usuario();
  datatable: any = [];

  constructor(private usuarioService: usuarioService) {

  }

  ngOnInit(): void {
    this.onDataTable();
  }

  onDataTable() {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onAddUsuario(usuario: usuario): void {
    this.usuarioService.addUsuario(usuario).subscribe(res => {
      if (res) {
        alert(`El usuario ${usuario.nombre} se ha registrado con éxito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error. El usuario no se pudo Insertar.')
      }
    });
  }

  onUpdateUsuario(usuario: usuario): void {
    this.usuarioService.updateusuario(usuario.id, usuario).subscribe(res => {
      if (res) {
        alert(`La usuario número ${usuario.id} se ha modificado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error. El usuario no se pudo Actualizar.')
      }
    });
  }

  onDeleteUsuario(id: number): void {
    this.usuarioService.deleteusuario(id).subscribe(res => {
      if (res) {
        alert(`El usuario número ${id} se ha eliminado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error. El usuario no se pudo Eliminar.')
      }
    });
  }

  onSetData(select: any) {
    this.usuario.id = select.id;
    this.usuario.nombre = select.nombre;
    this.usuario.apelido = select.apelido;
    this.usuario.email = select.email;
    this.usuario.fechaNacimiento = select.fechaNacimiento;
    this.usuario.telefono = select.telefono;
    this.usuario.idPaisResidencia = select.idPaisResidencia;
    this.usuario.recibirInformacion = select.recibirInformacion;
  }

  clear() {
    this.usuario.id = 0;
    this.usuario.nombre = "";
    this.usuario.apelido = "";
    this.usuario.email = "";
    this.usuario.fechaNacimiento = "";
    this.usuario.telefono = 0;
    this.usuario.idPaisResidencia = "";
    this.usuario.recibirInformacion = 0;
  }
}
