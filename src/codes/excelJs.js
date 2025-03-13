export const codeJs = `// Instalar módulo XlsxPopulate: npm install xlsx-populate
const XlsxPopulate = require('xlsx-populate');
const fs = require('fs');

// Configurar tamaño del archivo
const numRows = 10000;
const numCols = 50;

// Generar datos ficticios
function generateData(numRows, numCols) {
    const data = [];
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(Math.random());
        }
        data.push(row);
    }
    return data;
}

const data = generateData(numRows, numCols);
const columns = Array.from({ length: numCols }, (_, i) => 'Col_' + (i + 1));

// Medir el tiempo de generación
console.time('ExcelGeneration');

// Crear archivo Excel
XlsxPopulate.fromBlankAsync()
    .then(workbook => {
        const sheet = workbook.sheet(0);

        // Escribir encabezados
        columns.forEach((col, index) => {
            sheet.cell(1, index + 1).value(col);
        });

        // Escribir datos
        data.forEach((row, rowIndex) => {
            row.forEach((value, colIndex) => {
                sheet.cell(rowIndex + 2, colIndex + 1).value(value);
            });
        });

        // Guardar archivo
        return workbook.toFileAsync("./datos.xlsx");
    })
    .then(() => {
        console.timeEnd('ExcelGeneration'); // Terminar la medición de tiempo
        console.log("Archivo guardado con éxito.");
    })
    .catch(err => {
        console.error("Error al crear el archivo:", err);
    });
`;