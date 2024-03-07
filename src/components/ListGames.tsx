import Image from "next/image";
import Link from "next/link";

type ListGamesProps = Games[]
export const ListGames = ({games}: {games: ListGamesProps }) => {
    return <div className="container mx-auto py-10">
            <ul className="grid gap-10">
                {games.map(game => (
                    <li className="border rounded-md p-3 border-gray-300 grid gap-2 content-center items-center justify-items-center" key={game.identifier}>
                        <Image src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} alt={game.identifier} width={54} height={75}/>
                        <Link className="transition duration-150 ease-in hover:text-indigo-500" href={`/games/detail/${game.seo_title}`}>Name: {game.title}</Link>
                        <Link className="transition duration-150 ease-in hover:text-indigo-500" href={`/games/provider_${game.provider}`}>Provider: {game.provider}</Link>
                        <section className="flex items-center justify-start gap-2">
                            Category: {game.categories.map((category,index) => (
                            <Link className="transition duration-150 ease-in hover:text-indigo-500" href={`/games/categories_${category}`} key={category}>{category}{game.categories.length !== ++index && ","}</Link>
                        ))}
                        </section>
                    </li>
                ))}

            </ul>
        </div>

}
