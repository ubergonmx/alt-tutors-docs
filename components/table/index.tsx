import styles from './style.module.css'

export function OptionTable({ options }: { options: [string, string, any] }) {
  return (
    <div className='nx--mx-6 nx-mb-4 nx-mt-6 nx-overflow-x-auto nx-overscroll-x-contain'>
      <table className="nx-w-full nx-border-collapse nx-text-sm">
        <thead>
          <tr className="nx-border-b nx-py-4 nx-text-left dark:nx-border-neutral-700">
            <th className="nx-py-2 nx-font-semibold">Option</th>
            <th className="nx-py-2 nx-pl-6 nx-font-semibold">Type</th>
            <th className="nx-px-6 nx-py-2 nx-font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="nx-align-baseline">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className={"nx-border-b nx-border-gray-100 dark:nx-border-neutral-700/50 " + styles.tr}
            >
              <td className={"nx-whitespace-pre nx-py-2 nx-font-mono nx-text-xs nx-font-semibold nx-leading-6 " + styles.tdViolet}>
                {option}
              </td>
              <td className={"nx-whitespace-pre nx-py-2 nx-pl-6 nx-font-mono nx-text-xs nx-font-semibold nx-leading-6 " + styles.tdSlate}>
                {type}
              </td>
              <td className={"nx-py-2 nx-pl-6 " }>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

