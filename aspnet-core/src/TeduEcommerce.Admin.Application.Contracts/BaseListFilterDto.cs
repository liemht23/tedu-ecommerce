using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace TeduEcommerce.Admin
{
    [Serializable]
    public class BaseListFilterDto : PagedResultRequestDto
    {
        public string? KeyWord { get; set; }
    }
}
