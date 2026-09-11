import { ChaiCard } from "./components/ChaiCard.tsx"
import { Counter } from "./components/Counter.tsx"
import type { Chai } from "./type.ts"
import { ChaiList } from "./components/ChaiList.tsx"

const menu: Chai[] = [
  {id: 1, name: 'masala', price: 30},
  {id: 2, name: 'Ginger', price: 50},
  {id: 3, name: 'garlic', price: 60},
  {id: 4, name: 'samosa', price: 70}
]

function App() {

  return (
    <>
      <div>
        <ChaiCard name="Coffee" price={20} />
        <ChaiCard name="iphoneDuo" price={3000} />
      </div>

      <div>
        <Counter/>
      </div>

      <div>
        <ChaiList items={menu}/>
      </div>

    </>
  )
}

export default App
