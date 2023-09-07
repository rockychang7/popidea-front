import localFont from "next/font/local";

import { Noto_Sans_SC,Noto_Serif_SC } from 'next/font/google'


export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })

  export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
  })


  export const notoSansSC = Noto_Sans_SC({
    subsets: ['latin'],
    display: 'swap',
    weight:["400","700"]
  })

  export const Noto_Serif_SC = Noto_Serif_SC({
    subsets: ['latin'],
    display: 'swap',
  })
