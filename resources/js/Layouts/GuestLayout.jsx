
export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-200 to-orange-200">
        <div className="flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto sm:my-0 mt-40">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    {children}
                </div>
            </div>
        </div>
        
    </div>


    );

}
