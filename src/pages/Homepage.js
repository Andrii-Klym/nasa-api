import { Link } from "react-router-dom"

export default function Homepage() {
    return (
        <>
            <section className="showcase">
            <div className="overlay">
                <article className="text-white">
                
                <Link to="/Search" className="text-white text-sm">
                <h1 className="heading font-bold border-b-2 border-white text-xl mb-5 pb-2 uppercase tracking-wider text-center capitalize">Search NASA Images</h1>
                </Link>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
                    <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                        About
                    </h2>
                    <ul className="text-sm opacity-75">
                        <li className="mb-1">NASA was founded by </li>
                        <li className="mb-1"> Dwight D. Eisenhower in the year</li>
                        <li className="mb-1">1958.</li>
                        <li className="mb-1">
                        It has 18,400 employess,
                        </li>
                    </ul>
                    </article>
                    <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                        Headquarters
                    </h2>
                    <ul className="text-sm opacity-75">
                        <li className="mb-1">Washington, D.C., United States</li>
                    </ul>
                    </article>
                    <article>
                    <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">
                        Useful Links
                    </h2>
                    <ul className="text-sm opacity-75">
                        <li className="mb-1">
                        <a href={"https://www.nasa.gov/"}>Website</a>
                        </li>
                        <li className="mb-1">
                        <a href={'https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Twitter</a>
                        </li>
                    </ul>
                    </article>
                </div>
                <p className="max-w-3xl mx-auto text-center mt-10">
                    The National Aeronautics and Space Administration is an independent agency of the US federal government responsible for the civil space program, aeronautics research, and space research.
                </p>
                </article>
            </div>
            </section>
        </>
    )
}
