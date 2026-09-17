const COLUMNS = [
  { key: 'patientId', label: 'Patient ID' },
  { key: 'clinicNo', label: 'Clinic No' },
  { key: 'barcode', label: 'Barcode' },
  { key: 'patientName', label: 'Patient Name' },
  { key: 'dateOfBirth', label: 'Date Of Birth' },
  { key: 'gender', label: 'Gender' },
  { key: 'collectionDate', label: 'Collection Date' },
  { key: 'collectionTime', label: 'Collection Time' },
  { key: 'testCode', label: 'Test Code' },
  { key: 'testName', label: 'Test Name' },
  { key: 'testResult', label: 'Result' },
  { key: 'unit', label: 'Unit' },
  { key: 'refRangeLow', label: 'Ref Low' },
  { key: 'refRangeHigh', label: 'Ref High' },
  { key: 'note', label: 'Note' },
  { key: 'nonSpecRefs', label: 'Non-Spec Refs' },
]




const SingleResult = ({ result }) => (
  <tr>
    {COLUMNS.map(col => (
      <td key={col.key}>{result[col.key] || '-'}</td>
    ))}
  </tr>
)
  const DisplayResults = ({ results }) => {
    const results_len=results.length;
    return (
      <>
      <table>
        <thead>
          <tr>
            {COLUMNS.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            results.map((res) => (
              <SingleResult
                key={res.barcode}
                result={res}
              />
            ))}
        </tbody>
      </table>
      <b>Antal: {results_len}</b>
      </>
  );
  };
export default DisplayResults;