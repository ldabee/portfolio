import React, { FC, useState } from 'react'

export type ITerminalProps = {
  name: string;
  children: JSX.Element
}

const TAB: ITerminalProps[] = [
  {
    name: 'TERMINAL',
    children:
      <div className="ml-5 text-sm">
        <p><span className="text-blue-500 mr-2">wait</span> - compiling ...</p>
        <p><span className="text-indigo-500">event</span> - compiled successfully</p>
      </div>
  },
  {
    name: 'PROBLEMES',
    children: null
  },
  {
    name: 'SORTIE',
    children: null
  },
  {
    name: 'CONSOLE DE DEBOGAGE',
    children: null
  },

]

const Terminal: FC = () => {
  const [tabSelected, setTabSelected] = useState<ITerminalProps>(TAB[0]);
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="flex pt-5 pb-5 pl-2">
        {TAB.map((t, index) => (
          <div key={index}>
            <p
              className={tabSelected.name === t.name ? "ml-2 text-xs pb-2 border-b border-gray-300 cursor-pointer" : "ml-2 text-xs pb-2 cursor-pointer"}
              onClick={() => setTabSelected(t)}
            >
              {t.name}
            </p>

          </div>
        ))}
      </div>
      <div>
        {TAB.filter((t: ITerminalProps) => t.name === tabSelected.name).map((item, index: number) => (
          <div key={index}>{item.children}</div>

        ))}
      </div>
    </div>
  )
}

export default Terminal
