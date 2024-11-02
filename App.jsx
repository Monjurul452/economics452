import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs"><p>What has caused inflation in recent times</p>
        Md. Monjurul Haque
      </p>
      <p>The United States was experiencing a period of low inflation before 2020. Then, in early 2020, the coronavirus disease 2019 (COVID-19) created various market problems, causing prices for goods and services to rise. In “Understanding U.S. inflation during the COVID era” (National Bureau of Economic Research, Working Paper 30613, October 2022), Laurence M. Ball, Daniel Leigh, and Prachi Mishra conduct indepth research to address the questions, What has caused U.S. inflation to rise since 2020, and where is it headed?

To answer these questions, the authors break down the headline inflation number into two categories: core inflation and deviations from the core inflation number. Core inflation is the level of slack or tightness in the labor market. Deviations from the core inflation number are the large changes in the price of a good or service in a particular industry. These deviations can also be unexpected inflation shocks to the headline inflation figure. These shocks can then lead to a pass-through inflation increase to core inflation.

As the labor market tightened during 2021 and 2022, core inflation rose as the ratio of job vacancies to unemployment increased. This ratio is used to measure wage pressures that then pass through to the prices for goods and services. As workers bargain for better pay, firms begin to increase prices. So, from this research, the authors find that three main components explain the rise in inflation since 2020: volatility of energy prices, backlogs of work orders for goods and service caused by supply chain issues due to COVID-19, and price changes in the auto-related industries.

To answer the question of where inflation is headed, the authors point to two factors: the relationship between vacancies and unemployment and long-term inflation expectations, because the Federal Reserve tames inflation by increasing interest rates. The authors forecast the December 2024 inflation level to range from 2.3 to 4.8 percent.

Ball and colleagues conclude that the rise in the ratio of job vacancies to unemployment contributed almost a third of the rise in core inflation of 2.0 percentage points over a 12-month period. The 2.0-percentage-point increase in inflation explains about half the rise in core inflation, climbing from 2.3 to 6.9 percent (total increase of 4.6 percentage points). And finally, they found that the main contributors to the headline inflation shocks were energy prices (2.7 percentage points) and a backlog of work (1.7 percentage points).</p>
    </>
  )
}

export default App
