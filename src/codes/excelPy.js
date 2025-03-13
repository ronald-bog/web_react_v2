export const codePy = `import pandas as pd
import numpy as np
import os
import time

# Configurar tamaño del archivo
num_rows = 10000  # 100 mil filas
num_cols = 50     # 10 columnas

# Generar datos ficticios
data = np.random.rand(num_rows, num_cols)
columns = [f'Col_{i}' for i in range(1, num_cols + 1)]

# Crear DataFrame
df = pd.DataFrame(data, columns=columns)

# Asegurarse de que el directorio de destino exista
os.makedirs('./data', exist_ok=True)

# Medir el tiempo de creación del archivo Excel
start_time = time.time()

# Guardar DataFrame en un archivo Excel
file_path = './data/data.xlsx'
df.to_excel(file_path, index=False)

end_time = time.time()

# Calcular el tiempo transcurrido
elapsed_time = end_time - start_time

print(f"Archivo guardado en {file_path}")
print(f"Tiempo de creación del archivo: {elapsed_time:.2f} segundos")
`;