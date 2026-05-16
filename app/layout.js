export const metadata = {
  title: 'The Festuscrate Demonlist',
  description: 'Geometry Dash leaderboard website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

