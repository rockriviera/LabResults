using LabResults.Backend.Models;
using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;

namespace LabResults.Backend.Services;

public interface ILabRecordService
{
    IEnumerable<LabRecord> GetAllRecords();
}

public class LabRecordService : ILabRecordService
{
    private readonly List<LabRecord> _records = [];
    public LabRecordService(string filePath)
    {
        if (File.Exists(filePath))
        {
            var parserConfig = new CsvConfiguration(CultureInfo.InvariantCulture) { Delimiter = "|" };
            using var reader = new StreamReader(filePath);
            using var parser = new CsvReader(reader, parserConfig);
            _records = [.. parser.GetRecords<LabRecord>()];
        }
    }
    public IEnumerable<LabRecord> GetAllRecords() => _records;
}