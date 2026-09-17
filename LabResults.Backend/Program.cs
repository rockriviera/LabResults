using LabResults.Backend.Services;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocal", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

string filePath = builder.Configuration["LabResultsFilePath"] ?? "Labresult.txt";
builder.Services.AddSingleton<ILabRecordService>(new LabRecordService(filePath));

var app = builder.Build();

app.UseCors("AllowLocal");

app.MapGet("/api/lab-results", (ILabRecordService service) =>
{
    var records = service.GetAllRecords();
    return Results.Ok(records);
});

app.Run();