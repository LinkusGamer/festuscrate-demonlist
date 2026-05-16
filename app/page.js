'use client'

import { useState } from 'react'

export default function FestuscrateDemo() {
  const [page, setPage] = useState('home')
  const [currentUser, setCurrentUser] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [newLevel, setNewLevel] = useState('')
  const [editingPlayer, setEditingPlayer] = useState(0)
  const [playerName, setPlayerName] = useState('Wave')
  const [playerPoints, setPlayerPoints] = useState('1260')
  const [playerHardest, setPlayerHardest] = useState('Tidal Wave')
  const [playerMobile, setPlayerMobile] = useState(false)

  const players = [
    {
      rank: 1,
      username: 'Wave',
      points: 1260,
      hardest: 'Tidal Wave',
      mobile: false,
    },
    {
      rank: 2,
      username: 'Circles',
      points: 1140,
      hardest: 'Acheron',
      mobile: true,
    },
    {
      rank: 3,
      username: 'FestusGD',
      points: 980,
      hardest: 'Slaughterhouse',
      mobile: false,
    },
  ]

  const lists = [
    {
      name: 'Main Demon List',
      page: 'leaderboard'
    },
    {
      name: 'Nine Circles List',
      page: 'nc'
    },
    {
      name: 'Platformer List',
      page: 'platformer'
    },
    {
      name: 'Mobile List',
      page: 'mobile'
    },
    {
      name: 'Legacy List',
      page: 'legacy'
    },
  ]

  const mainLevels = [
    'The Golden',
    'XO',
    'Phobos',
    'Bloodbath',
    'Acu',
    '8o',
    'Magma Bound',
    'Phantom Manor',
    'Tower Descent',
    'White Women',
    'Nine Circles',
    'Sakupen Egg',
    'Skeletal Shenanigans',
    'B'
  ]

  const nineCirclesLevels = [
    'Trump Circles',
    'Infinite Circles',
    'Problematic'
  ]

  const mobileLevels = [
    'Phantom Manor',
    'Tower Descent',
    'White Women',
    'Sakupen Circles',
    'Skeletal Shenanigans',
    'B',
    'Clubstep',
    'Deadlocked',
    'Theory of Everything 2',
    'EyeSpyWithMyLittleEye'
  ]

  function savePlayerEdits() {
    alert('Admin updated player information successfully!')
  }

  function addLevel() {
    if (!isAdmin || !newLevel) return

    alert(`Admin added new level: ${newLevel}`)
    setNewLevel('')
  }

  function loginAsAdmin() {
    setCurrentUser('FestusOwner')
    setIsAdmin(true)
    setPage('home')
  }

  function Navbar() {
    return (
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setPage('home')}>
            <h1 className="text-2xl font-bold">
              The Festuscrate Demonlist
            </h1>
            <p className="text-sm text-gray-500">
              Community Geometry Dash Leaderboard
            </p>
          </button>

          <div className="flex gap-3 flex-wrap items-center">
            {currentUser && (
              <div className="text-sm border rounded-xl px-3 py-2">
                Logged in as <span className="font-bold">{currentUser}</span>
                {isAdmin && ' (Admin)'}
              </div>
            )}
            <button
              onClick={() => setPage('players')}
              className="border rounded-xl px-4 py-2 hover:bg-gray-100"
            >
              Players
            </button>

            <button
              onClick={() => setPage('submit')}
              className="border rounded-xl px-4 py-2 hover:bg-gray-100"
            >
              Submit
            </button>

            <button
              onClick={() => setPage('rules')}
              className="border rounded-xl px-4 py-2 hover:bg-gray-100"
            >
              Rules
            </button>

            <button
              onClick={() => setPage('login')}
              className="border rounded-xl px-4 py-2 hover:bg-gray-100"
            >
              Login
            </button>

            <button
              onClick={() => setPage('register')}
              className="bg-black text-white rounded-xl px-4 py-2 hover:opacity-90"
            >
              Register
            </button>
          </div>
        </div>
      </header>
    )
  }

  if (page === 'players') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold">Top Players</h1>

            <button
              onClick={() => setPage('home')}
              className="border rounded-xl px-4 py-2"
            >
              Back Home
            </button>
          </div>

          {isAdmin && (
            <div className="border rounded-3xl p-8 mb-10 bg-gray-50">
              <h2 className="text-3xl font-bold mb-6">
                Admin Player Controls
              </h2>

              <div className="space-y-4">
                <input
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full border rounded-2xl px-4 py-3"
                  placeholder="Player Name"
                />

                <input
                  value={playerPoints}
                  onChange={(e) => setPlayerPoints(e.target.value)}
                  className="w-full border rounded-2xl px-4 py-3"
                  placeholder="Player Points"
                />

                <input
                  value={playerHardest}
                  onChange={(e) => setPlayerHardest(e.target.value)}
                  className="w-full border rounded-2xl px-4 py-3"
                  placeholder="Hardest Completion"
                />

                <select
                  value={playerMobile ? 'mobile' : 'pc'}
                  onChange={(e) => setPlayerMobile(e.target.value === 'mobile')}
                  className="w-full border rounded-2xl px-4 py-3"
                >
                  <option value="pc">PC Player</option>
                  <option value="mobile">Mobile Player</option>
                </select>

                <button
                  onClick={savePlayerEdits}
                  className="bg-black text-white rounded-2xl px-6 py-3"
                >
                  Save Player Changes
                </button>
              </div>
            </div>
          )}

          <div className="space-y-5">
            {players.map((player) => (
              <div
                key={player.rank}
                className="border rounded-3xl p-6 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-3xl font-bold">
                    #{player.rank} {player.username}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    Hardest Completion: {player.hardest}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {player.mobile ? 'Mobile Player' : 'PC Player'}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-5xl font-bold">
                    {player.points}
                  </div>
                  <div className="text-gray-500">Points</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  if (page === 'leaderboard') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold">Leaderboard</h1>

            <button
              onClick={() => setPage('home')}
              className="border rounded-xl px-4 py-2"
            >
              Back Home
            </button>
          </div>

          <div className="border rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6">
              Main Demon List
            </h2>

            {isAdmin && (
              <div className="border rounded-2xl p-4 mb-6 bg-gray-50">
                <h3 className="font-bold text-xl mb-3">
                  Admin Level Controls
                </h3>

                <div className="flex gap-3 flex-wrap">
                  <input
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                    placeholder="Add new level"
                    className="border rounded-xl px-4 py-2 flex-1 min-w-[220px]"
                  />

                  <button
                    onClick={addLevel}
                    className="bg-black text-white rounded-xl px-4 py-2"
                  >
                    Add Level
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-3">
                  Only the admin account can edit the demon list.
                </p>
              </div>
            )}

            <div className="space-y-3">
              {mainLevels.map((level, index) => (
                <div
                  key={level}
                  className="flex justify-between border rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-lg">
                    #{index + 1} {level}
                  </div>

                  <div className="text-gray-500">
                    {150 - index * 8} pts
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-3xl p-8 mb-10">
            <h2 className="text-3xl font-bold mb-6">
              Nine Circles List
            </h2>

            <div className="space-y-3">
              {nineCirclesLevels.map((level, index) => (
                <div
                  key={level}
                  className="flex justify-between border rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-lg">
                    #{index + 1} {level}
                  </div>

                  <div className="text-gray-500">
                    {100 - index * 10} pts
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {players.map((player) => (
              <div
                key={player.rank}
                className="border rounded-3xl p-6 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-3xl font-bold">
                    #{player.rank} {player.username}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    Hardest Completion: {player.hardest}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {player.mobile ? 'Mobile Player' : 'PC Player'}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-5xl font-bold">
                    {player.points}
                  </div>
                  <div className="text-gray-500">Points</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }

  if (page === 'nc') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold">Nine Circles List</h1>

            <button
              onClick={() => setPage('home')}
              className="border rounded-xl px-4 py-2"
            >
              Back Home
            </button>
          </div>

          <div className="border rounded-3xl p-8 mb-10">
            <div className="space-y-3">
              {nineCirclesLevels.map((level, index) => (
                <div
                  key={level}
                  className="flex justify-between border rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-lg">
                    #{index + 1} {level}
                  </div>

                  <div className="text-gray-500">
                    {100 - index * 10} pts
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (page === 'platformer') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-8">Platformer List</h1>

          <div className="border rounded-3xl p-8 text-gray-600 text-xl">
            Platformer demons will appear here.
          </div>
        </main>
      </div>
    )
  }

  if (page === 'mobile') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-8">Mobile List</h1>

          <div className="border rounded-3xl p-8">
            <div className="space-y-3">
              {mobileLevels.map((level, index) => (
                <div
                  key={level}
                  className="flex justify-between border rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-lg">
                    #{index + 1} {level}
                  </div>

                  <div className="text-gray-500">
                    {90 - index * 6} pts
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (page === 'legacy') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-6xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-8">Legacy List</h1>

          <div className="border rounded-3xl p-8 text-gray-600 text-xl">
            Legacy demons will appear here.
          </div>
        </main>
      </div>
    )
  }

  if (page === 'submit') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-3xl mx-auto p-8">
          <div className="border rounded-3xl p-8">
            <h1 className="text-5xl font-bold mb-6">Submit Record</h1>

            <div className="space-y-4">
              <input
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="Level Name"
              />

              <input
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="Completion Percentage"
              />

              <input
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="YouTube Proof Link"
              />

              <select className="w-full border rounded-2xl px-4 py-3">
                <option>PC</option>
                <option>Mobile</option>
              </select>

              <button className="bg-black text-white rounded-2xl px-6 py-3 w-full">
                Submit Completion
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (page === 'rules') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="max-w-5xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-10">Rules</h1>

          <div className="space-y-10">
            <div className="border rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Completion Rules
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>No hacks, macros, or cheats.</li>
                <li>No secret ways allowed.</li>
                <li>Practice mode completions do not count.</li>
                <li>Runs must be completed legitimately.</li>
              </ul>
            </div>

            <div className="border rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Recording Rules
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Raw footage is required for top records.</li>
                <li>Completion screen must be shown.</li>
                <li>No cuts or edited footage.</li>
                <li>Clicks/taps should be visible when possible.</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (page === 'login' || page === 'register') {
    return (
      <div className="min-h-screen bg-white text-black">
        <Navbar />

        <main className="flex items-center justify-center p-8 mt-10">
          <div className="border rounded-3xl p-10 w-full max-w-md">
            <h1 className="text-5xl font-bold mb-8">
              {page === 'login' ? 'Login' : 'Create Account'}
            </h1>

            <div className="space-y-4">
              <input
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="Username"
              />

              <input
                type="password"
                className="w-full border rounded-2xl px-4 py-3"
                placeholder="Password"
              />

              {page === 'login' ? (
                <button
                  onClick={loginAsAdmin}
                  className="bg-black text-white rounded-2xl px-6 py-3 w-full"
                >
                  Login
                </button>
              ) : (
                <button className="bg-black text-white rounded-2xl px-6 py-3 w-full">
                  Create Account
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="mb-12">
          <div className="border rounded-3xl p-10">
            <h2 className="text-6xl font-bold mb-4">
              The Festuscrate Demonlist
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl">
              Track completions, submit records, compete for points, and climb
              the leaderboard with your hardest Geometry Dash achievements.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button
                onClick={() => setPage('leaderboard')}
                className="bg-black text-white px-6 py-3 rounded-2xl text-lg"
              >
                View Leaderboard
              </button>

              <button
                onClick={() => setPage('submit')}
                className="border px-6 py-3 rounded-2xl text-lg"
              >
                Submit Record
              </button>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h3 className="text-3xl font-bold mb-6">Lists</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lists.map((list) => (
              <div
                key={list.name}
                className="border rounded-3xl p-6 hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-bold mb-2">{list.name}</h4>

                <p className="text-gray-600 mb-4">
                  Track rankings and completions for this category.
                </p>

                <button
                  onClick={() => setPage(list.page)}
                  className="border rounded-xl px-4 py-2"
                >
                  Open List
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold">Top Players</h3>

            <button
              onClick={() => setPage('leaderboard')}
              className="border rounded-xl px-4 py-2"
            >
              Full Leaderboard
            </button>
          </div>

          <div className="space-y-5">
            {players.map((player) => (
              <div
                key={player.rank}
                className="border rounded-3xl p-6 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-1">
                    #{player.rank} {player.username}
                  </h4>

                  <p className="text-gray-600">
                    Hardest: {player.hardest}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {player.mobile ? 'Mobile Player' : 'PC Player'}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-bold">{player.points}</div>
                  <div className="text-gray-500">Points</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
