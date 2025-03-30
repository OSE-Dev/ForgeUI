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
        /**
         * Necessary API's 
         * upsert card metadata
         * upsert card content - maybe have a card content mapping table?
         * publish content
         * auth crud
         * load gadgets
         * load published content
         */
        return await forgeApiService.GetTest();
    }    
}
