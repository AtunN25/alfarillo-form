
export default function Home() {
  return (

    <div className="py-6 w-full text- bg-lime-600 flex justify-center text-lime-900 font">

      <div className="bg-gray-100 p-4 rounded-md shadow-md w-2/5 ">
        <h1 className="text-4xl font-semibold mb-4 ">Reporte Diario </h1>

        <br ></br>
        <div className="space-y-3">
          <div>
            <label className="block text-sm  font-medium">Proyecto</label>

            <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Fecha</label>
            <input type="date" className="w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Supervisor</label>
            <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Correo del Supervisor</label>
            <input type="email" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>

        </div>

        <h1 className="text-2xl font-semibold mb-4">Charla de Seguridad</h1>
        <div className="space-y-3">
          <div>
            <label className="block text-sm  font-medium">Encargado</label>
            <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Duracion</label>
            <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Temas - puede ser mas que uno</label>
            <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-4">Actividades - resumen</h1>
        <div className="space-y-3">
          <div>
            <label className="block text-sm  font-medium">Trabajos realizados</label>
            <textarea className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" rows={3}></textarea>
          </div>
        </div>


        <h1 className="text-2xl font-semibold mb-4">
          Trabajos de Perforación
          (Por sondaje)
        </h1>
        <div className="space-y-3">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Pozo</label>
              <input
                type="text"
                className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Empresa</label>
              <input
                type="text"
                className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Fecha</label>
              <input
                type="date"
                className="w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Observaciones</label>
              <textarea
                className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>






        <div className="space-y-3">
          <h1 className="text-lg font-semibold mb-4">Recepción de muestras dia y noche</h1>
          <div>
            <label className="block text-sm font-medium">Desde</label>
            <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium">Hasta</label>
            <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
          </div>


          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">Avance diario</h1>
            <div>
              <label className="block text-sm font-medium">Foto</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>


          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">Regularizado</h1>

            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>


          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">RQD</h1>
            <div>
              <label className="block text-sm font-medium">Foto</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">Susceptibilidad</h1>
            <div>
              <label className="block text-sm font-medium">Foto</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">Número de Probetas</h1>
            <div>
              <label className="block text-sm font-medium">Foto</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>


          <div className="space-y-3">
            <h1 className="text-lg font-semibold mb-4">Metros</h1>
            <div>
              <label className="block text-sm font-medium">Foto</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Desde</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Hasta</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />


            </div>
          </div>



          <div className="space-y-3">
            <h1 className="text-2xl font-semibold mb-4">Activiadades</h1>
            <div>
              <label className="block text-sm font-medium">Actividad 1</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Actividad 2</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium">Actividad 3</label>
              <input type="number" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
          </div>


          <div className="space-y-3">
            <h1 className="text-2xl font-semibold mb-4">Metros de Sondaje Liberados por Geología (Por Sondaje)</h1>

            <div>
              <label className="block text-sm font-medium">Empresa</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Fecha</label>
              <input type="date" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Pozo</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Desde (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Hasta (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>


          </div>



          <div className="space-y-6">
            <h1 className="text-2xl font-semibold mb-6">Avances en Corte y Muestreo de Sondajes (Por Sondaje)</h1>

            {/* Empresa, Fecha y Pozo */}
            <div>
              <label className="block text-sm font-medium">Empresa</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Fecha</label>
              <input type="date" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Pozo</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            {/* Sección de Corte */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Corte</h2>
            <div>
              <label className="block text-sm font-medium">Desde (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Hasta (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Total (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Metros sin Cortar</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Observaciones </label>
              <textarea className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" rows={3}></textarea>
            </div>

            {/* Sección de Muestreo */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Muestreo</h2>
            <div>
              <label className="block text-sm font-medium">Empresa</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Fecha</label>
              <input type="date" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Pozo</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Desde (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Hasta (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

         

            <div>
              <label className="block text-sm font-medium">Metros sin Muestrear</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>





            <div>
            <h1 className="text-2xl font-semibold mb-6">Envio de muestras`</h1>
              <label className="block text-sm font-medium">Envío de Muestras</label>
              <select className="w-full bg-white text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400">
                <option value="">Seleccionar</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Laboratorio de Recepción</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            {/* Detalles de Envío de Muestras */}
            <h2 className="text-xl font-semibold mt-6 mb-4">Detalles de Envío (Solo si aplica)</h2>
            <div>
              <label className="block text-sm font-medium">Fecha</label>
              <input type="date" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Pozo</label>
              <input type="text" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Observaciones</label>
              <textarea className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" rows={3}></textarea>
            </div>

           

            <div>
              <label className="block text-sm font-medium">TRC</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Desde (TRC)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Hasta (TRC)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Total</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Desde (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Hasta (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="block text-sm font-medium">Total (m)</label>
              <input type="number" step="0.01" className="w-full bg-white placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
          </div>


        </div>

      </div>


    </div>

  );
}
