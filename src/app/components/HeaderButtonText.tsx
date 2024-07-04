function HeaderButtonText({children} : {children: React.ReactNode}) {
    return (
        <div className="
            bg-primary
            hover:bg-zinc-400
            hover:cursor-pointer
            transition-all
            duration-150
            px-5 
            py-1 
            mb-5 
            shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            border-t-2
            border-l-2
            border-b-2 border-b-zinc-600
            border-r-2 border-r-zinc-600
            ">
                <h1 className="text-sm md:text-md xl:text-lg font-medium">{children}</h1>
        </div>
    );
}

export default HeaderButtonText;