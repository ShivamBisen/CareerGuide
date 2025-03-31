import * as XLSX from 'xlsx';
import { databases } from '../data/databases';

export interface UniversityData {
  name: string;
  email: string;
  program: string;
  country: string;
  institute?: string;
  research?: string[];
  requirements?: string;
  deadline?: string;
}

export const readUniversityData = async (): Promise<UniversityData[]> => {
  try {
    // Try to load the Excel file from the public directory
    const response = await fetch('/foreignuniversitydata.xlsx');
    console.log('Fetching Excel file...');
    
    if (!response.ok) {
      console.error('Failed to fetch Excel file:', response.status, response.statusText);
      throw new Error(`Failed to fetch Excel file: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    console.log('Excel file loaded, parsing data...');
    
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    console.log('Available sheets:', workbook.SheetNames);
    
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    console.log('Parsed data:', jsonData.length, 'rows found');

    // Map the Excel data to our UniversityData interface
    const universityData = jsonData.map((row: any) => {
      console.log('Processing row:', row);
      return {
        name: row['Name'] || row['Professor Name'] || row['Faculty Name'] || row['IIM Professor\'s Name'] || '',
        email: row['Email'] || row['Mail Address'] || row['Email Address'] || '',
        program: row['Domain'] || row['Program'] || row['Department'] || '',
        country: row['Country'] || row['Location'] || 'India', // Default to India for IIM professors
        institute: row['Institute'] || row['University'] || row['Institution'] || 'IIM',
        research: row['Research Areas'] ? row['Research Areas'].toString().split(',').map((area: string) => area.trim()) : undefined,
        requirements: row['Requirements'] || row['Eligibility'] || undefined,
        deadline: row['Deadline'] || row['Application Deadline'] || undefined
      };
    });

    console.log('Processed data:', universityData.length, 'entries');

    // Update the Foreign University Database
    const foreignUniDatabase = databases.find(db => db.title === "Foreign University Database");
    if (foreignUniDatabase) {
      foreignUniDatabase.data = universityData;
      foreignUniDatabase.entries = `${universityData.length} Universities`;
    }

    return universityData;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw error;
  }
}; 