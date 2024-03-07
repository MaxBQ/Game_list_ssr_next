export const getGames = (): Promise<Games[]> => fetch("https://nextjs-test-pi-hazel-56.vercel.app/data/games.json").then((res) => res.json())
