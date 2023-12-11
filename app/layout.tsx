import "styles/tailwind.css"
import 'styles/global.css';
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-body">{children}</body>
      </html>
    </ClerkProvider>
  )
}
