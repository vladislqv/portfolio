import {IPortfolio} from "@/components/Portfolio.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Badge} from "@/components/ui/badge.tsx";


function PortfolioItem(item: IPortfolio) {

    const openInNewTab = (url: string | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };




    return (
        <div className="flex justify-between flex-col border-white border p-5 rounded-md gap-10">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center gap-3 basis-1/2">
                    <h1 className="font-bold text-lg text-[#ff5d73]">{item.title}</h1>
                    <h3 className="text-sm">{item.description}</h3>
                </div>
                <div className="flex flex-col justify-center gap-5 basis-1/4">
                    <Button onClick={() => openInNewTab(item.gitHubLink)}>
                        GitHub
                    </Button>
                    {item.liveUrl && (
                        <Button onClick={() => openInNewTab(item.liveUrl)}>LiveUrl</Button>
                    )}
                </div>
            </div>
            <div className="flex gap-3 justify-center">
                {item.languages.map((item: string, index: number) => (
                    <Badge className="font-normal" key={index}>{item}</Badge>

                ))}
            </div>
        </div>
    )
}

export default PortfolioItem