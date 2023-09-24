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
