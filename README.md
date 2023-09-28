# 'use client'

서버 컴포넌트에서는 useState와 같은 클라이언트 훅스를 사용할 수 없으니  
사용하고 싶을 때 'use client'를 작성한다.

# Prisma ORM

`$ npm install -D prisma` //프리즈마 설치  
`$ npx prisma init ` // 프리즈마 이니셜라이즈  
`$ npx prisma db push` // 데이터베이스와 싱크를 맞춰준다.

`https://authjs.dev/reference/adapter/prisma` //

# Next Auth

`$ npm install next-auth @prisma/client @next-auth/prisma-adapter`

# React-hook-form

`$ npm install react-hook-form`

# React icons

`$ npm i react-icons`

# Axios

`$ npm install axios`

# bcryptjs

`$ npm install bcryptjs`
`$ npm install --save-dev @types/bcryptjs`

# next-cloudinary 파일 업로드

`$ npm install next-cloudinary`

# react kakao maps sdk
`$ npm i react-kakao-maps-sdk`

# toastify
`$ npm i react-toastify`

# dayjs
`$ npm install dayjs`

# @lucasmogari/react-pagination
`$ npm install @lucasmogari/react-pagination`

# query-string
`$ npm install query-string`

# react loader spinner 
`$ npm install react-loader-spinner`

# SWR (stale-while-revalidate)
데이터를 가져오기 위한 React Hook 라이브러리   
SWR은 원겨 데이터를 가져올 때 캐싱된 데이터가 있으면 그 데이터를 먼저 반환(stale)한 다음 가져오기 요청(revalidate)을 보내고,   
마지막으로 최신 데이터와 함께 제공하는 라이브러리이다.   
`$ npm install swr`