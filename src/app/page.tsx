export default function Home() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col">
    <div className="w-96 max-w-[370px] mx-auto flex gap-2 flex-col">
      <form className="bg-slate-800 py-10 px-5 rounded-2xl mt-32">
        <h1 className="text-white text-center text-2xl mb-6">Adicionando com JS</h1>  
    <div className="w-full">
      <input type="text" placeholder="Digite um item" className="w-full p-2 rounded bg-slate-600" />
    </div>
    <button className="mt-2 text-white w-full p-2 rounded bg-slate-600 hover:bg-green-700">Adicionar</button>
      
      </form>
      <ul className="overflow-hidden flex flex-col gap-2">
      <li className="p-3 bg-slate-800 text-white justify-between flex hover:bg-green-700 rounded-b-md">
        <span>item</span>
        <button className="text-red-700 delete hover:rotate-45 duration-300 cursor-pointer">x</button>
      </li>
      </ul>

      </div>
    </div>
  );
}
