import {getGames} from "@/actions/getGames";
import Image from "next/image";
import Link from "next/link";
import {getFilterGames} from "@/actions/getFilterGames";
import {ListGames} from "@/components/ListGames";

type Params = {
    params: {
       slug: string
    }
}

export default async function ProviderAndCategory({params: {slug}}: Params) {

    const games = await getFilterGames(slug)
    return (
        <ListGames games={games}/>
    )
}

export async function generateStaticParams() {
    const res = await getGames()
    const newRes =  res.map((e) => ([`provider_${e.provider}`, ...e.categories.map((e:string) => `categories_${e}`)]))
   return  newRes.map(array => {
        return array.map(e => ({
            slug: e
        }))
    })
}

