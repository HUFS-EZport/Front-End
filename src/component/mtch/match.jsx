import Image from "next/image";

export default function Match( { data } ) {

    
    let state;
    if(data.matchStatus===0) {
        state = "경기 종료"
    }else if(data.matchStatus===1) {
        state = "경기 중"
    }else {
        state = "경기 예정"
    }

    let content = (
        <>
            <div>
                <p>
                    {state}
                </p>
            </div>
            <div>
                <p>{data.homeTeamScore}</p>
                <p>vs</p>
                <p>{data.awayTeamScore}</p>
            </div>
        </>
    )
    
    return(
        <div>
            <div>{data.leagueName}</div>
            <div>{data.matchDate}</div>
            <div>
                <div>
                    <Image src={data.homeTeamLogoUrl} width={100} height={100}></Image>
                    <div>
                        {data.homeTeamName}
                    </div>
                </div>
                <div>
                    {content}
                </div>
                <div>
                    <div>
                        {data.awayTeamName}
                    </div>
                    <Image src={data.awayTeamLogoUrl} width={100} height={100}></Image>
                </div>
            </div>
            <div></div>
        </div>
    )

}