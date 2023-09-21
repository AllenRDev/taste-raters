export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col relative">
            <main className="flex-grow relative">
                <img
                    src='images/Guest.png'
                    alt="Guest Image"
                    className="w-full h-screen object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </main>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#341803]/10 bg-blend-overlay">
                <div className="border-t border-t-amber-950/40 border-l border-l-amber-950/40 border-b border-b-amber-800/40 border-r border-r-amber-800/40 border-amber-950 text-center p-4 md:p-6 rounded-lg bg-[#341803]/50 bg-blend-overlay">
                    {children}
                </div>
            </div>
        </div>
    );
}
