import localFont from "next/font/local";

import { Noto_Sans_SC,Noto_Serif_SC } from 'next/font/google'




  export const notoSansSC = Noto_Sans_SC({
    subsets: ['latin'],
    display: 'swap',
    weight:["400","700"]
  })

  export const notoSerifSC = Noto_Serif_SC({
    subsets: ['latin'],
    display: 'swap',
    weight:["400","700"]
  })
