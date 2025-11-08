import { Recipe } from "@/types/definitions"
import iconDetail from "@/public/images/light/IconParkOutlineDocDetail.svg"
import iconReverseDetail from "@/public/images/dark/IconParkOutlineDocDetail.svg"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import ButtonLink from "@/components/ui/buttonLink"
import iconBackHome from "@/public/images/light/MaterialSymbolsArrowBack.svg"
import iconReverseBackHome from "@/public/images/dark/MaterialSymbolsArrowBack.svg"
import { apiRequest } from "@/services/httpCall"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

type PageProps = {
  params: Promise<{ id: string }>;
}

const GetRecipe = async ({params}:PageProps) => {
    const {id } = await params
    let detailRecipe
    // Récupération des détails de la recette
    try {
        const response = await apiRequest(`/recipes/${id}`, {headers: {'Content-Type': 'application/json'}})
        if(response.ok){
            const data = await response.json()
            if(data.name == null){
                return <p className="flex justify-center mt-40 text-lg">La recette demandée n'existe pas</p>
            } else {
                detailRecipe = data as Recipe
            }
        }
    } catch (error){
        console.error(error)
    }
    let error = ""
    return (
        <>
         <Header icon={iconDetail} iconReverse={iconReverseDetail} iconDescription={"Logo détail du document"} title={`Recette ${detailRecipe?.name}`} />
         <main className="flex flex-col flex-1 p-10 items-center mb-20 overflow-auto">
            <Card>
                <CardTitle>
                    <ButtonLink source={"/"} name={"Retour à la page d'accueil"} action={"Retour"} icon={iconReverseBackHome} iconReverse={iconBackHome} iconDescription={"Retour à la page d'accueil"}></ButtonLink>
                </CardTitle>
                { detailRecipe && <CardContent>
                    {error && <p style={{color: "#830B0B"}}>{error}</p>}
                    <div className="space-y-2">
                        <Image src={detailRecipe.image.replace("10.0.2.2", "localhost")} alt={detailRecipe.name} width={200} height={200}/>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl">{detailRecipe.name}</h1>
                        <p>Durée : {detailRecipe.durationFormatted}</p>
                        <p>Pour {detailRecipe.portion} personne(s)</p>
                        <p>Créée par {detailRecipe.author} le {detailRecipe.createdDate}</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl">Ingrédients :</h2>
                        <ul>
                            {detailRecipe.recipients.map((recipient, index) => (
                                <li key={index}>{recipient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl">Instructions :</h2>
                        {detailRecipe.instructions.split("\n").map( (instruction, index) => (
                            <p key={index}>{instruction}</p>
                        ))}
                    </div>
                </CardContent>}
            </Card>
         </main>
         <Footer />
        </>
    )
}
export default GetRecipe