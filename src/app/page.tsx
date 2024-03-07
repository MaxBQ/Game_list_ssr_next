import Image from "next/image";
import {getGames} from "@/actions/getGames";
import Link from "next/link";
import {ListGames} from "@/components/ListGames";

export default async function Home() {
    const games = await getGames();
  return (
   <ListGames games={games}/>
  );
}
