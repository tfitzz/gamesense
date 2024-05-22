import coins from '../images/coins.png'
import saw from '../images/saw.png'
import uparrow from '../images/uparrow.png'

import Image from 'next/image'
export default function () {


  return (
    // overall container
    <div className="mx-auto flex flex-wrap w-auto">

      <div class="w-5/6 p-4 flex flex-col items-center mx-auto">

        <div class="flex flex-row items-center">
          <Image
            src={coins}
            height={40}
            width={40}
            class="mb-2"
          />
          <h4 class="text-center">Arbitrage</h4>
        </div>
        <p className="flex-1 border-t-2 text-center w-3/4 mx-auto my-4 py-10">
          At Gamesense, we facilitate arbitrage opportunities with ease. Our platform scans multiple bookmakers for variations in odds, enabling users to capitalize on price discrepancies and lock in guaranteed profits. With real-time updates and comprehensive market coverage, users can quickly identify arbitrage opportunities and execute profitable trades seamlessly. Gamesense empowers users to leverage arbitrage strategies effectively, maximizing their returns and optimizing their betting experience.
        </p>
      </div>

      <div class="w-5/6 p-4 flex flex-col items-center mx-auto">
        <div class="flex flex-row items-center">
          <Image
            src={saw}
            height={40}
            width={40}
            class="mb-2"
          />
          <h4 class="text-center">Find an Edge</h4>
        </div>

        
        <p class="border-t-2 text-center w-3/4 mx-auto my-4 py-10">
          At Gamesense, we streamline the process of finding value bets. Our platform aggregates odds from top bookmakers, offering users a comprehensive view of betting markets. Through intuitive tools and real-time data, users can quickly identify opportunities with positive expected value. We also track line movements and trends, ensuring users stay ahead of the market. With Gamesense, making informed betting decisions is easier than ever, maximizing profitability and enhancing the overall gaming experience.
        </p>
      </div>
    </div>
  )

}
