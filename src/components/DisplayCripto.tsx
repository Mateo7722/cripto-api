import { Cripto } from "../types";

type CriptoComponentProps = {
    cripto : Cripto
}


export default function CriptoComponent({cripto} : CriptoComponentProps) {
    return (
        <div className="flex justify-between mb-5 bg-white rounded-md shadow-md p-5">
                <div className="flex justify-center items-center">
                    <img className="w-8 h-8 mr-4" src={`https://cryptocompare.com/${cripto.IMAGEURL}`} alt={cripto.Fullname} />
                    <div>
                        <p>{cripto.Fullname}</p>
                        <p className="text-sm text-gray-400">{cripto.LASTUPDATE}</p>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-">{cripto.PRICE}</p>
                    <p className={`text-sm text-right ${Number(cripto.CHANGEPCT24HOUR) >= 0 ? 'text-green-600' : 'text-red-600'}`}>{`${cripto.CHANGEPCT24HOUR}%`}</p>
                </div>
            </div>
    )
}
