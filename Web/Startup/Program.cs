using ForgeUI.Startup;

var builder = WebApplication.CreateBuilder();
builder.ConfigureBuilder();
var app = builder.Build();
app.ConfigureApp();
app.Run();
