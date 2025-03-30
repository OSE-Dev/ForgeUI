using ForgeUI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ForgeUI.Controllers;

[Route("api/project/edit")]
[ApiController]
public class ProjectEditController(IWebHostEnvironment webHostEnvironment, ForgeApiService forgeApiService)
{
    [AllowAnonymous]
    [HttpGet("load")]
    public async Task<string> GetPage(int projectId, int page) // todo: project probably shouldnt be an int
    {
        return await forgeApiService.GetPage(projectId, page);
    }    
}
