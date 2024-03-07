import {getGames} from "@/actions/getGames";

export const getFilterGames = async (params: string) => {
    const res = await getGames()
    const param = params.split("_")
    return res.filter((e) => {
        if (param[0] === "categories") {
            return e.categories.includes(param[1].length ? param[1] : `_${param[2]}`)
        }
        return param[1] === e.provider
    })
}
