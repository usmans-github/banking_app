import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: "Usman", lastName: " Ali", email:"usmanali730771@gmail.com" }

  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox
            type="greeting"
            title= "Welcome"
            user={loggedIn?.firstName || 'guest'}
            subtext= "Access and manage your account and transactions efficiently"
            />

            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}

            />
          </header>
          RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn} 
      transactions={[]}
      banks={[{ currentBalance: 1234.50}, {currentBalance: 456}]}
      />
    </section>
    
  )
}

export default Home
