import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function MovieDetail({params}) {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}})

    const res = await data.json()
    return (
        <div>
            <h2 className="text-2xl">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2>Runtime: {res.runtime} minutes</h2>
            <h2 className=" bg-green-500 inline-block rounded-md text-sm py-2 my-2 px-2">{res.status}</h2>
            <Image className="my-12 w-full" src={imagePath + res.backdrop_path} width={1000} height={1000}/>
            <p className="text-lg">{res.overview}</p>
        </div>
    )
}