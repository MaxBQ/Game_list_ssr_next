import {getGames} from "@/actions/getGames";
import Image from "next/image";
import Link from "next/link";
import {getFilterGame} from "@/actions/getFilterGame";
import {ListGames} from "@/components/ListGames";

type Params = {
    params: {
        gameId: string
    }
}

export default async function ProviderAndCategory({params: {gameId}}: Params) {

    const game = await getFilterGame(gameId)
    return (
        <ListGames games={game}/>
    )
}

export async function generateStaticParams() {
    const res = await getGames()
    return  res.map(e => ({
        slug: "detail",
        gameId: e.seo_title
    }))
}
