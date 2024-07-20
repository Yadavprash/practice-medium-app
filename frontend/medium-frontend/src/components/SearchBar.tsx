export const SearchBar = () =>{
    return <div className="border rounded-3xl border-hidden bg-gray-100">
    <div className="relative flex items-center w-full h-8 rounded-lg  overflow-hidden">
        <div className="grid place-items-center pl-2 h-full w-8 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 px-2 bg-gray-100 rounded-3xl "
        type="text"
        id="search"
        placeholder="Search " /> 
    </div>
</div>
}