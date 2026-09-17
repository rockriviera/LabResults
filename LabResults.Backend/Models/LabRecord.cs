using CsvHelper.Configuration.Attributes;
namespace LabResults.Backend.Models;

public class LabRecord
{
    [Name("CLINIC_NO")] public string ClinicNo { get; set; }
    [Name("BARCODE")] public string Barcode { get; set; }
    [Name("PATIENT_ID")] public string PatientId { get; set; }
    [Name("PATIENT_NAME")] public string PatientName { get; set; }
    [Name("DOB")] public string DateOfBirth { get; set; }
    [Name("GENDER")] public string Gender { get; set; }
    [Name("COLLECTIONDATE")] public string CollectionDate { get; set; }
    [Name("COLLECTIONTIME")] public string CollectionTime { get; set; }
    [Name("TESTCODE")] public string TestCode { get; set; }
    [Name("TESTNAME")] public string TestName { get; set; }
    [Name("RESULT")] public string TestResult { get; set; }
    [Name("UNIT")] public string Unit { get; set; }
    [Name("REFRANGELOW")] public string RefRangeLow { get; set; }
    [Name("REFRANGEHIGH")] public string RefRangeHigh { get; set; }
    [Name("NOTE")] public string Note { get; set; }
    [Name("NONSPECREFS")] public string NonSpecRefs { get; set; }
}