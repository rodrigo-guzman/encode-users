using System;
using System.Collections.Generic;

namespace UsersCrud_Backend.Models;

public partial class Actividade
{
    public int IdActividad { get; set; }

    public DateTime CreateDate { get; set; }

    public int IdUsuario { get; set; }

    public string Actividad { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
