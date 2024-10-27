const InfoMessage = () => {
  function reloadSite() {
    window.location.reload()
  }
  return (
    <span className="text-sm text-center col-span-3 max-w-[720px]">Recomendamos <button onClick={reloadSite} className='font-bold hover:underline'>actualizar la página</button> si no se han encontrado productos, el servidor presenta una latencia al estar usándose una capa gratuita para el hospedaje. Mil disculpas ❤</span>
  )
}

export default InfoMessage
