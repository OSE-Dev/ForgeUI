using System.Net;
using System.Security.Claims;
using ForgeUI.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.FeatureManagement;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using SameSiteMode = Microsoft.AspNetCore.Http.SameSiteMode;

namespace ForgeUI.Startup;

public static class Startup
{
     public static void ConfigureBuilder(this WebApplicationBuilder builder)
    {
       
        builder.Services.AddCors();
        builder.Services.AddControllers();
        builder.Services.AddHttpsRedirection(options =>
        {
            options.RedirectStatusCode = (int)HttpStatusCode.PermanentRedirect;
        });
        builder.Services.AddHsts(options =>
        {
            options.Preload = true;
            options.IncludeSubDomains = true;
            options.MaxAge = TimeSpan.FromDays(60);
        });
        builder.Services.AddHttpContextAccessor();


        builder.Services.AddControllersWithViews();
        builder.Services.AddFeatureManagement();
        builder.Services.AddSingleton((IConfigurationRoot)builder.Configuration);
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(c =>
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "ForgeAPI",
                Description = "Backend for Forge",
                Version = "v1"
            }));

        builder.Services.AddHttpClient<ForgeApiService>()
            .ConfigurePrimaryHttpMessageHandler(options => new HttpClientHandler())
            .ConfigureHttpClient(options =>
            {
                var uriBuilder = new UriBuilder
                {
                    Host = "localhost",
                    Port = 7195,
                    Scheme = "https"
                };

                options.BaseAddress = uriBuilder.Uri ;
                options.DefaultRequestHeaders.Add(
                    HeaderNames.UserAgent, "ReqsUI");            
            });
        builder.Services.ConfigureMediatr();
        builder.Services.AddSpaStaticFiles(configuration =>
        {
            configuration.RootPath = "Client/dist";
        });
        builder.Services.AddHealthChecks();
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public static void ConfigureApp(this WebApplication app)
        {
            app.UseCors(options =>
            {
                options.AllowAnyOrigin();
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseHttpsRedirection();
            app.UseHsts();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCookiePolicy(new CookiePolicyOptions
            {
                Secure = CookieSecurePolicy.Always,
                HttpOnly = HttpOnlyPolicy.Always
            });

            app.MapHealthChecks("/health");
            app.MapControllers();
            app.UseEndpoints(builder => builder.MapDefaultControllerRoute());
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Client";
                if (app.Environment.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4000");
                }
            });
            
            app.WakeUp();
        }

        // Eager initialization for services with long initial load times
        private static void WakeUp(this WebApplication app)
        {
            app.Services.GetService<ForgeApiService>();
        }
    
}
