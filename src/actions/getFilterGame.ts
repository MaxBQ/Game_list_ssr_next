import {getGames} from "@/actions/getGames";

export const getFilterGame = async (params: string) => {
    const res = await getGames()
    return res.filter((e) => {

        return params === e.seo_title
    })
}
