"use client"
import IconList from "@/component/iconList/icon-list";
import SportCollapse from "@/component/sportCollapse/sport-collapse";
// TODO: 1. sports-icons.jsx같은 컴포넌트들을 /src/component/ 폴더로 정리하기
// 2. 스포츠 페이지의 종목을 컴포넌트화 하기
// 3. 끝난다음 PR 보내보기

/*"data": [{ 
    "id": Int,
    "name": String,
    "imageUrl": String
}]
*/

const sampleData = [
    {id: 1, name: "S1", imageUrl:"#"},
    {id: 2, name: "S2", imageUrl:"#"},
    {id: 3, name: "S3", imageUrl:"#"},
    {id: 4, name: "S4", imageUrl:"#"}
];

export async function getSports() {
    return sampleData;
}

export default async function SportPage() {
    const sports = await getSports();
    
    return (
        <main>
            <div>
                Sport Page
            </div>
            <SportCollapse sports={ sports }/>
        </main>
    );
}
