using System;
using System.Collections.Generic;

namespace UsersCrud_Backend.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apelido { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime FechaNacimiento { get; set; }

    public double? Telefono { get; set; }

    public string IdPaisResidencia { get; set; } = null!;

    public byte RecibirInformacion { get; set; }

    public virtual ICollection<Actividade> Actividades { get; } = new List<Actividade>();
}
