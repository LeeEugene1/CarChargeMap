
import { PrismaClient } from "@prisma/client";
import * as data from "../src/data/data_seoul.json"

const prisma  = new PrismaClient()

async function seedData() {
    data?.["item"]?.map(async (store) =>{
        const storeData = {
            addr: store?.addr,
            chargeTp: store?.chargeTp,
            cpId: store?.cpId,
            cpNm: store?.cpNm,
            cpStat: store?.cpStat,
            cpTp: store?.cpTp,
            csId: store?.csId,
            csNm: store?.csNm,
            lat: store?.lat,
            longi: store?.longi,
            statUpdateDatetime: store?.statUpdateDatetime,
            kakaoAddress: JSON.stringify(store?.kakaoAddress)
        }
        const res = await prisma.store.create({
            data: storeData,
        })
        console.log(res)
    })
}  

async function main(){
    await seedData();
}

main()
.then(async () => {
    await prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(()=>{
    prisma.$disconnect()
  })

  //npx prisma db seed
  