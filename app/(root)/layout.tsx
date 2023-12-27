import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import TopBar from '@/components/shared/TopBar'
import LeftBar from '@/components/shared/LeftBar'
import RightBar from '@/components/shared/RightBar'
import BottomBar from '@/components/shared/BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:'Threads',
  description :'A Next.js 13 Meta Threads Application'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <TopBar />
          <main className='flex'>
            <LeftBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl '>
                {children}
              </div>
            </section>
            <RightBar />
          </main>

          <BottomBar />
        </body>

      </html>
    </ClerkProvider>
  )
}
