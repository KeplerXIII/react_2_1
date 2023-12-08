import { projectList } from './db/portfolio'

export function Toolbar ({ filter }: { filter: string }) {

    let portfolio = projectList
    const ignoreFilters = ['All', '']
    if (!ignoreFilters.includes(filter)) {
        portfolio = projectList.filter(p => p.category === filter)
    }

    return (
        <div>{portfolio.map((obj, index) => <img key={index} src={obj.img} className='img' alt="какая то картинка" />)}</div>
    )
}
