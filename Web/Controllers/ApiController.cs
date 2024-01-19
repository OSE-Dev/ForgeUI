using ForgeUI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ForgeUI.Controllers;

[Route("api")]
[ApiController]
public class ApiController(IWebHostEnvironment webHostEnvironment, ForgeApiService forgeApiService)
{
    private IWebHostEnvironment _webHostEnvironment = webHostEnvironment;
    private ForgeApiService _forgeApiService = forgeApiService;

    [AllowAnonymous]
    [HttpGet("test")]
    public async Task<string> GetTest()
    {
        return await forgeApiService.GetTest();
    }    
}
