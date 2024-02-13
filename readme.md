# 모두의 전기차 충전소
전기차충전소를 검색하고 유저가 직접참여해서 디테일한 정보를 추가할수있다.

주차장까지는 검색해서갔지만 몇층에 어디에있는지는 주차요원에게 항상 물어봐야하는데 불편함을 느껴 제작.

공공API에서는 일반주소와 빌딩명등이 나오지않아 카카오 api도 함께 활용.

<img width="1440" alt="피카" src="https://github.com/LeeEugene1/CarChargeMap/assets/59987309/0e3be17d-03cb-4891-8721-701631b57dcd">

<img width="1440" alt="Screen Shot 2024-01-12 at 8 11 26 PM" src="https://github.com/LeeEugene1/CarChargeMap/assets/59987309/80c9bfe2-0b53-421d-91a4-94bfb546579a">

## Stack
- Front: Nextjs 14(App router SSR), Typescript, Tailwind CSS, React Query, Recoil
- Backend: Prisma(Nodejs ORM), Supabase
- Backend(legacy): Nodejs Proxy Server